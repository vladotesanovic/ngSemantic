System.registerDynamic("node_modules/prismjs/prism", [], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var _self = (typeof window !== 'undefined') ? window : ((typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) ? self : {});
  var Prism = (function() {
    var lang = /\blang(?:uage)?-(\w+)\b/i;
    var uniqueId = 0;
    var _ = _self.Prism = {
      util: {
        encode: function(tokens) {
          if (tokens instanceof Token) {
            return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
          } else if (_.util.type(tokens) === 'Array') {
            return tokens.map(_.util.encode);
          } else {
            return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
          }
        },
        type: function(o) {
          return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
        },
        objId: function(obj) {
          if (!obj['__id']) {
            Object.defineProperty(obj, '__id', {value: ++uniqueId});
          }
          return obj['__id'];
        },
        clone: function(o) {
          var type = _.util.type(o);
          switch (type) {
            case 'Object':
              var clone = {};
              for (var key in o) {
                if (o.hasOwnProperty(key)) {
                  clone[key] = _.util.clone(o[key]);
                }
              }
              return clone;
            case 'Array':
              return o.map && o.map(function(v) {
                return _.util.clone(v);
              });
          }
          return o;
        }
      },
      languages: {
        extend: function(id, redef) {
          var lang = _.util.clone(_.languages[id]);
          for (var key in redef) {
            lang[key] = redef[key];
          }
          return lang;
        },
        insertBefore: function(inside, before, insert, root) {
          root = root || _.languages;
          var grammar = root[inside];
          if (arguments.length == 2) {
            insert = arguments[1];
            for (var newToken in insert) {
              if (insert.hasOwnProperty(newToken)) {
                grammar[newToken] = insert[newToken];
              }
            }
            return grammar;
          }
          var ret = {};
          for (var token in grammar) {
            if (grammar.hasOwnProperty(token)) {
              if (token == before) {
                for (var newToken in insert) {
                  if (insert.hasOwnProperty(newToken)) {
                    ret[newToken] = insert[newToken];
                  }
                }
              }
              ret[token] = grammar[token];
            }
          }
          _.languages.DFS(_.languages, function(key, value) {
            if (value === root[inside] && key != inside) {
              this[key] = ret;
            }
          });
          return root[inside] = ret;
        },
        DFS: function(o, callback, type, visited) {
          visited = visited || {};
          for (var i in o) {
            if (o.hasOwnProperty(i)) {
              callback.call(o, i, o[i], type || i);
              if (_.util.type(o[i]) === 'Object' && !visited[_.util.objId(o[i])]) {
                visited[_.util.objId(o[i])] = true;
                _.languages.DFS(o[i], callback, null, visited);
              } else if (_.util.type(o[i]) === 'Array' && !visited[_.util.objId(o[i])]) {
                visited[_.util.objId(o[i])] = true;
                _.languages.DFS(o[i], callback, i, visited);
              }
            }
          }
        }
      },
      plugins: {},
      highlightAll: function(async, callback) {
        var env = {
          callback: callback,
          selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
        };
        _.hooks.run("before-highlightall", env);
        var elements = env.elements || document.querySelectorAll(env.selector);
        for (var i = 0,
            element; element = elements[i++]; ) {
          _.highlightElement(element, async === true, env.callback);
        }
      },
      highlightElement: function(element, async, callback) {
        var language,
            grammar,
            parent = element;
        while (parent && !lang.test(parent.className)) {
          parent = parent.parentNode;
        }
        if (parent) {
          language = (parent.className.match(lang) || [, ''])[1];
          grammar = _.languages[language];
        }
        element.className = element.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
        parent = element.parentNode;
        if (/pre/i.test(parent.nodeName)) {
          parent.className = parent.className.replace(lang, '').replace(/\s+/g, ' ') + ' language-' + language;
        }
        var code = element.textContent;
        var env = {
          element: element,
          language: language,
          grammar: grammar,
          code: code
        };
        if (!code || !grammar) {
          _.hooks.run('complete', env);
          return;
        }
        _.hooks.run('before-highlight', env);
        if (async && _self.Worker) {
          var worker = new Worker(_.filename);
          worker.onmessage = function(evt) {
            env.highlightedCode = evt.data;
            _.hooks.run('before-insert', env);
            env.element.innerHTML = env.highlightedCode;
            callback && callback.call(env.element);
            _.hooks.run('after-highlight', env);
            _.hooks.run('complete', env);
          };
          worker.postMessage(JSON.stringify({
            language: env.language,
            code: env.code,
            immediateClose: true
          }));
        } else {
          env.highlightedCode = _.highlight(env.code, env.grammar, env.language);
          _.hooks.run('before-insert', env);
          env.element.innerHTML = env.highlightedCode;
          callback && callback.call(element);
          _.hooks.run('after-highlight', env);
          _.hooks.run('complete', env);
        }
      },
      highlight: function(text, grammar, language) {
        var tokens = _.tokenize(text, grammar);
        return Token.stringify(_.util.encode(tokens), language);
      },
      tokenize: function(text, grammar, language) {
        var Token = _.Token;
        var strarr = [text];
        var rest = grammar.rest;
        if (rest) {
          for (var token in rest) {
            grammar[token] = rest[token];
          }
          delete grammar.rest;
        }
        tokenloop: for (var token in grammar) {
          if (!grammar.hasOwnProperty(token) || !grammar[token]) {
            continue;
          }
          var patterns = grammar[token];
          patterns = (_.util.type(patterns) === "Array") ? patterns : [patterns];
          for (var j = 0; j < patterns.length; ++j) {
            var pattern = patterns[j],
                inside = pattern.inside,
                lookbehind = !!pattern.lookbehind,
                lookbehindLength = 0,
                alias = pattern.alias;
            pattern = pattern.pattern || pattern;
            for (var i = 0; i < strarr.length; i++) {
              var str = strarr[i];
              if (strarr.length > text.length) {
                break tokenloop;
              }
              if (str instanceof Token) {
                continue;
              }
              pattern.lastIndex = 0;
              var match = pattern.exec(str);
              if (match) {
                if (lookbehind) {
                  lookbehindLength = match[1].length;
                }
                var from = match.index - 1 + lookbehindLength,
                    match = match[0].slice(lookbehindLength),
                    len = match.length,
                    to = from + len,
                    before = str.slice(0, from + 1),
                    after = str.slice(to + 1);
                var args = [i, 1];
                if (before) {
                  args.push(before);
                }
                var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias);
                args.push(wrapped);
                if (after) {
                  args.push(after);
                }
                Array.prototype.splice.apply(strarr, args);
              }
            }
          }
        }
        return strarr;
      },
      hooks: {
        all: {},
        add: function(name, callback) {
          var hooks = _.hooks.all;
          hooks[name] = hooks[name] || [];
          hooks[name].push(callback);
        },
        run: function(name, env) {
          var callbacks = _.hooks.all[name];
          if (!callbacks || !callbacks.length) {
            return;
          }
          for (var i = 0,
              callback; callback = callbacks[i++]; ) {
            callback(env);
          }
        }
      }
    };
    var Token = _.Token = function(type, content, alias) {
      this.type = type;
      this.content = content;
      this.alias = alias;
    };
    Token.stringify = function(o, language, parent) {
      if (typeof o == 'string') {
        return o;
      }
      if (_.util.type(o) === 'Array') {
        return o.map(function(element) {
          return Token.stringify(element, language, o);
        }).join('');
      }
      var env = {
        type: o.type,
        content: Token.stringify(o.content, language, parent),
        tag: 'span',
        classes: ['token', o.type],
        attributes: {},
        language: language,
        parent: parent
      };
      if (env.type == 'comment') {
        env.attributes['spellcheck'] = 'true';
      }
      if (o.alias) {
        var aliases = _.util.type(o.alias) === 'Array' ? o.alias : [o.alias];
        Array.prototype.push.apply(env.classes, aliases);
      }
      _.hooks.run('wrap', env);
      var attributes = '';
      for (var name in env.attributes) {
        attributes += (attributes ? ' ' : '') + name + '="' + (env.attributes[name] || '') + '"';
      }
      return '<' + env.tag + ' class="' + env.classes.join(' ') + '" ' + attributes + '>' + env.content + '</' + env.tag + '>';
    };
    if (!_self.document) {
      if (!_self.addEventListener) {
        return _self.Prism;
      }
      _self.addEventListener('message', function(evt) {
        var message = JSON.parse(evt.data),
            lang = message.language,
            code = message.code,
            immediateClose = message.immediateClose;
        _self.postMessage(_.highlight(code, _.languages[lang], lang));
        if (immediateClose) {
          _self.close();
        }
      }, false);
      return _self.Prism;
    }
    var script = document.currentScript || [].slice.call(document.getElementsByTagName("script")).pop();
    if (script) {
      _.filename = script.src;
      if (document.addEventListener && !script.hasAttribute('data-manual')) {
        document.addEventListener('DOMContentLoaded', _.highlightAll);
      }
    }
    return _self.Prism;
  })();
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Prism;
  }
  if (typeof global !== 'undefined') {
    global.Prism = Prism;
  }
  Prism.languages.markup = {
    'comment': /<!--[\w\W]*?-->/,
    'prolog': /<\?[\w\W]+?\?>/,
    'doctype': /<!DOCTYPE[\w\W]+?>/,
    'cdata': /<!\[CDATA\[[\w\W]*?]]>/i,
    'tag': {
      pattern: /<\/?(?!\d)[^\s>\/=.$<]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,
      inside: {
        'tag': {
          pattern: /^<\/?[^\s>\/]+/i,
          inside: {
            'punctuation': /^<\/?/,
            'namespace': /^[^\s>\/:]+:/
          }
        },
        'attr-value': {
          pattern: /=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,
          inside: {'punctuation': /[=>"']/}
        },
        'punctuation': /\/?>/,
        'attr-name': {
          pattern: /[^\s>\/]+/,
          inside: {'namespace': /^[^\s>\/:]+:/}
        }
      }
    },
    'entity': /&#?[\da-z]{1,8};/i
  };
  Prism.hooks.add('wrap', function(env) {
    if (env.type === 'entity') {
      env.attributes['title'] = env.content.replace(/&amp;/, '&');
    }
  });
  Prism.languages.xml = Prism.languages.markup;
  Prism.languages.html = Prism.languages.markup;
  Prism.languages.mathml = Prism.languages.markup;
  Prism.languages.svg = Prism.languages.markup;
  Prism.languages.css = {
    'comment': /\/\*[\w\W]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+?.*?(;|(?=\s*\{))/i,
      inside: {'rule': /@[\w-]+/}
    },
    'url': /url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,
    'selector': /[^\{\}\s][^\{\};]*?(?=\s*\{)/,
    'string': /("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,
    'property': /(\b|\B)[\w-]+(?=\s*:)/i,
    'important': /\B!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.util.clone(Prism.languages.css);
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {'style': {
        pattern: /(<style[\w\W]*?>)[\w\W]*?(?=<\/style>)/i,
        lookbehind: true,
        inside: Prism.languages.css,
        alias: 'language-css'
      }});
    Prism.languages.insertBefore('inside', 'attr-value', {'style-attr': {
        pattern: /\s*style=("|').*?\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: Prism.languages.markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }}, Prism.languages.markup.tag);
  }
  Prism.languages.clike = {
    'comment': [{
      pattern: /(^|[^\\])\/\*[\w\W]*?\*\//,
      lookbehind: true
    }, {
      pattern: /(^|[^\\:])\/\/.*/,
      lookbehind: true
    }],
    'string': /(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    'class-name': {
      pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,
      lookbehind: true,
      inside: {punctuation: /(\.|\\)/}
    },
    'keyword': /\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    'boolean': /\b(true|false)\b/,
    'function': /[a-z0-9_]+(?=\()/i,
    'number': /\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,
    'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
    'punctuation': /[{}[\];(),.:]/
  };
  Prism.languages.javascript = Prism.languages.extend('clike', {
    'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
    'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
    'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
  });
  Prism.languages.insertBefore('javascript', 'keyword', {'regex': {
      pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
      lookbehind: true
    }});
  Prism.languages.insertBefore('javascript', 'class-name', {'template-string': {
      pattern: /`(?:\\\\|\\?[^\\])*?`/,
      inside: {
        'interpolation': {
          pattern: /\$\{[^}]+\}/,
          inside: {
            'interpolation-punctuation': {
              pattern: /^\$\{|\}$/,
              alias: 'punctuation'
            },
            rest: Prism.languages.javascript
          }
        },
        'string': /[\s\S]+/
      }
    }});
  if (Prism.languages.markup) {
    Prism.languages.insertBefore('markup', 'tag', {'script': {
        pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
        lookbehind: true,
        inside: Prism.languages.javascript,
        alias: 'language-javascript'
      }});
  }
  Prism.languages.js = Prism.languages.javascript;
  (function() {
    if (typeof self === 'undefined' || !self.Prism || !self.document || !document.querySelector) {
      return;
    }
    self.Prism.fileHighlight = function() {
      var Extensions = {
        'js': 'javascript',
        'py': 'python',
        'rb': 'ruby',
        'ps1': 'powershell',
        'psm1': 'powershell',
        'sh': 'bash',
        'bat': 'batch',
        'h': 'c',
        'tex': 'latex'
      };
      if (Array.prototype.forEach) {
        Array.prototype.slice.call(document.querySelectorAll('pre[data-src]')).forEach(function(pre) {
          var src = pre.getAttribute('data-src');
          var language,
              parent = pre;
          var lang = /\blang(?:uage)?-(?!\*)(\w+)\b/i;
          while (parent && !lang.test(parent.className)) {
            parent = parent.parentNode;
          }
          if (parent) {
            language = (pre.className.match(lang) || [, ''])[1];
          }
          if (!language) {
            var extension = (src.match(/\.(\w+)$/) || [, ''])[1];
            language = Extensions[extension] || extension;
          }
          var code = document.createElement('code');
          code.className = 'language-' + language;
          pre.textContent = '';
          code.textContent = 'Loading…';
          pre.appendChild(code);
          var xhr = new XMLHttpRequest();
          xhr.open('GET', src, true);
          xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
              if (xhr.status < 400 && xhr.responseText) {
                code.textContent = xhr.responseText;
                Prism.highlightElement(code);
              } else if (xhr.status >= 400) {
                code.textContent = '✖ Error ' + xhr.status + ' while fetching file: ' + xhr.statusText;
              } else {
                code.textContent = '✖ Error: File does not exist or is empty';
              }
            }
          };
          xhr.send(null);
        });
      }
    };
    document.addEventListener('DOMContentLoaded', self.Prism.fileHighlight);
  })();
  global.define = __define;
  return module.exports;
});

System.registerDynamic("node_modules/prismjs/components/prism-bash", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    (function(Prism) {
      var insideString = {variable: [{
          pattern: /\$?\(\([\w\W]+?\)\)/,
          inside: {
            variable: [{
              pattern: /(^\$\(\([\w\W]+)\)\)/,
              lookbehind: true
            }, /^\$\(\(/],
            number: /\b-?(?:0x[\dA-Fa-f]+|\d*\.?\d+(?:[Ee]-?\d+)?)\b/,
            operator: /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
            punctuation: /\(\(?|\)\)?|,|;/
          }
        }, {
          pattern: /\$\([^)]+\)|`[^`]+`/,
          inside: {variable: /^\$\(|^`|\)$|`$/}
        }, /\$(?:[a-z0-9_#\?\*!@]+|\{[^}]+\})/i]};
      Prism.languages.bash = {
        'shebang': {
          pattern: /^#!\s*\/bin\/bash|^#!\s*\/bin\/sh/,
          alias: 'important'
        },
        'comment': {
          pattern: /(^|[^"{\\])#.*/,
          lookbehind: true
        },
        'string': [{
          pattern: /((?:^|[^<])<<\s*)(?:"|')?(\w+?)(?:"|')?\s*\r?\n(?:[\s\S])*?\r?\n\2/g,
          lookbehind: true,
          inside: insideString
        }, {
          pattern: /(["'])(?:\\\\|\\?[^\\])*?\1/g,
          inside: insideString
        }],
        'variable': insideString.variable,
        'function': {
          pattern: /(^|\s|;|\||&)(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|enable|env|ethtool|eval|exec|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)(?=$|\s|;|\||&)/,
          lookbehind: true
        },
        'keyword': {
          pattern: /(^|\s|;|\||&)(?:let|:|\.|if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)(?=$|\s|;|\||&)/,
          lookbehind: true
        },
        'boolean': {
          pattern: /(^|\s|;|\||&)(?:true|false)(?=$|\s|;|\||&)/,
          lookbehind: true
        },
        'operator': /&&?|\|\|?|==?|!=?|<<<?|>>|<=?|>=?|=~/,
        'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];]/
      };
      var inside = insideString.variable[1].inside;
      inside['function'] = Prism.languages.bash['function'];
      inside.keyword = Prism.languages.bash.keyword;
      inside.boolean = Prism.languages.bash.boolean;
      inside.operator = Prism.languages.bash.operator;
      inside.punctuation = Prism.languages.bash.punctuation;
    })(Prism);
  })();
  return _retrieveGlobal();
});

System.registerDynamic("node_modules/prismjs/components/prism-powershell", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    Prism.languages.powershell = {
      'comment': [{
        pattern: /(^|[^`])<#[\w\W]*?#>/,
        lookbehind: true
      }, {
        pattern: /(^|[^`])#.+/,
        lookbehind: true
      }],
      'string': [{
        pattern: /"(`?[\w\W])*?"/,
        inside: {'function': {
            pattern: /[^`]\$\(.*?\)/,
            inside: {}
          }}
      }, /'([^']|'')*'/],
      'namespace': /\[[a-z][\w\W]*?\]/i,
      'boolean': /\$(true|false)\b/i,
      'variable': /\$\w+\b/i,
      'function': [/\b(Add-(Computer|Content|History|Member|PSSnapin|Type)|Checkpoint-Computer|Clear-(Content|EventLog|History|Item|ItemProperty|Variable)|Compare-Object|Complete-Transaction|Connect-PSSession|ConvertFrom-(Csv|Json|StringData)|Convert-Path|ConvertTo-(Csv|Html|Json|Xml)|Copy-(Item|ItemProperty)|Debug-Process|Disable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Disconnect-PSSession|Enable-(ComputerRestore|PSBreakpoint|PSRemoting|PSSessionConfiguration)|Enter-PSSession|Exit-PSSession|Export-(Alias|Clixml|Console|Csv|FormatData|ModuleMember|PSSession)|ForEach-Object|Format-(Custom|List|Table|Wide)|Get-(Alias|ChildItem|Command|ComputerRestorePoint|Content|ControlPanelItem|Culture|Date|Event|EventLog|EventSubscriber|FormatData|Help|History|Host|HotFix|Item|ItemProperty|Job|Location|Member|Module|Process|PSBreakpoint|PSCallStack|PSDrive|PSProvider|PSSession|PSSessionConfiguration|PSSnapin|Random|Service|TraceSource|Transaction|TypeData|UICulture|Unique|Variable|WmiObject)|Group-Object|Import-(Alias|Clixml|Csv|LocalizedData|Module|PSSession)|Invoke-(Command|Expression|History|Item|RestMethod|WebRequest|WmiMethod)|Join-Path|Limit-EventLog|Measure-(Command|Object)|Move-(Item|ItemProperty)|New-(Alias|Event|EventLog|Item|ItemProperty|Module|ModuleManifest|Object|PSDrive|PSSession|PSSessionConfigurationFile|PSSessionOption|PSTransportOption|Service|TimeSpan|Variable|WebServiceProxy)|Out-(Default|File|GridView|Host|Null|Printer|String)|Pop-Location|Push-Location|Read-Host|Receive-(Job|PSSession)|Register-(EngineEvent|ObjectEvent|PSSessionConfiguration|WmiEvent)|Remove-(Computer|Event|EventLog|Item|ItemProperty|Job|Module|PSBreakpoint|PSDrive|PSSession|PSSnapin|TypeData|Variable|WmiObject)|Rename-(Computer|Item|ItemProperty)|Reset-ComputerMachinePassword|Resolve-Path|Restart-(Computer|Service)|Restore-Computer|Resume-(Job|Service)|Save-Help|Select-(Object|String|Xml)|Send-MailMessage|Set-(Alias|Content|Date|Item|ItemProperty|Location|PSBreakpoint|PSDebug|PSSessionConfiguration|Service|StrictMode|TraceSource|Variable|WmiInstance)|Show-(Command|ControlPanelItem|EventLog)|Sort-Object|Split-Path|Start-(Job|Process|Service|Sleep|Transaction)|Stop-(Computer|Job|Process|Service)|Suspend-(Job|Service)|Tee-Object|Test-(ComputerSecureChannel|Connection|ModuleManifest|Path|PSSessionConfigurationFile)|Trace-Command|Unblock-File|Undo-Transaction|Unregister-(Event|PSSessionConfiguration)|Update-(FormatData|Help|List|TypeData)|Use-Transaction|Wait-(Event|Job|Process)|Where-Object|Write-(Debug|Error|EventLog|Host|Output|Progress|Verbose|Warning))\b/i, /\b(ac|cat|chdir|clc|cli|clp|clv|compare|copy|cp|cpi|cpp|cvpa|dbp|del|diff|dir|ebp|echo|epal|epcsv|epsn|erase|fc|fl|ft|fw|gal|gbp|gc|gci|gcs|gdr|gi|gl|gm|gp|gps|group|gsv|gu|gv|gwmi|iex|ii|ipal|ipcsv|ipsn|irm|iwmi|iwr|kill|lp|ls|measure|mi|mount|move|mp|mv|nal|ndr|ni|nv|ogv|popd|ps|pushd|pwd|rbp|rd|rdr|ren|ri|rm|rmdir|rni|rnp|rp|rv|rvpa|rwmi|sal|saps|sasv|sbp|sc|select|set|shcm|si|sl|sleep|sls|sort|sp|spps|spsv|start|sv|swmi|tee|trcm|type|write)\b/i],
      'keyword': /\b(Begin|Break|Catch|Class|Continue|Data|Define|Do|DynamicParam|Else|ElseIf|End|Exit|Filter|Finally|For|ForEach|From|Function|If|InlineScript|Parallel|Param|Process|Return|Sequence|Switch|Throw|Trap|Try|Until|Using|Var|While|Workflow)\b/i,
      'operator': {
        pattern: /(\W?)(!|-(eq|ne|gt|ge|lt|le|sh[lr]|not|b?(and|x?or)|(Not)?(Like|Match|Contains|In)|Replace|Join|is(Not)?|as)\b|-[-=]?|\+[+=]?|[*\/%]=?)/i,
        lookbehind: true
      },
      'punctuation': /[|{}[\];(),.]/
    };
    Prism.languages.powershell.string[0].inside.boolean = Prism.languages.powershell.boolean;
    Prism.languages.powershell.string[0].inside.variable = Prism.languages.powershell.variable;
    Prism.languages.powershell.string[0].inside.function.inside = Prism.util.clone(Prism.languages.powershell);
  })();
  return _retrieveGlobal();
});

System.registerDynamic("node_modules/prismjs/components/prism-javascript", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    Prism.languages.javascript = Prism.languages.extend('clike', {
      'keyword': /\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|var|void|while|with|yield)\b/,
      'number': /\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,
      'function': /[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i
    });
    Prism.languages.insertBefore('javascript', 'keyword', {'regex': {
        pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,
        lookbehind: true
      }});
    Prism.languages.insertBefore('javascript', 'class-name', {'template-string': {
        pattern: /`(?:\\\\|\\?[^\\])*?`/,
        inside: {
          'interpolation': {
            pattern: /\$\{[^}]+\}/,
            inside: {
              'interpolation-punctuation': {
                pattern: /^\$\{|\}$/,
                alias: 'punctuation'
              },
              rest: Prism.languages.javascript
            }
          },
          'string': /[\s\S]+/
        }
      }});
    if (Prism.languages.markup) {
      Prism.languages.insertBefore('markup', 'tag', {'script': {
          pattern: /(<script[\w\W]*?>)[\w\W]*?(?=<\/script>)/i,
          lookbehind: true,
          inside: Prism.languages.javascript,
          alias: 'language-javascript'
        }});
    }
    Prism.languages.js = Prism.languages.javascript;
  })();
  return _retrieveGlobal();
});

System.registerDynamic("node_modules/prismjs/plugins/line-numbers/prism-line-numbers", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    (function() {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }
      Prism.hooks.add('complete', function(env) {
        if (!env.code) {
          return;
        }
        var pre = env.element.parentNode;
        var clsReg = /\s*\bline-numbers\b\s*/;
        if (!pre || !/pre/i.test(pre.nodeName) || (!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
          return;
        }
        if (env.element.querySelector(".line-numbers-rows")) {
          return;
        }
        if (clsReg.test(env.element.className)) {
          env.element.className = env.element.className.replace(clsReg, '');
        }
        if (!clsReg.test(pre.className)) {
          pre.className += ' line-numbers';
        }
        var match = env.code.match(/\n(?!$)/g);
        var linesNum = match ? match.length + 1 : 1;
        var lineNumbersWrapper;
        var lines = new Array(linesNum + 1);
        lines = lines.join('<span></span>');
        lineNumbersWrapper = document.createElement('span');
        lineNumbersWrapper.className = 'line-numbers-rows';
        lineNumbersWrapper.innerHTML = lines;
        if (pre.hasAttribute('data-start')) {
          pre.style.counterReset = 'linenumber ' + (parseInt(pre.getAttribute('data-start'), 10) - 1);
        }
        env.element.appendChild(lineNumbersWrapper);
      });
    }());
  })();
  return _retrieveGlobal();
});

System.registerDynamic("node_modules/prismjs/plugins/command-line/prism-command-line", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    (function() {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }
      Prism.hooks.add('complete', function(env) {
        if (!env.code) {
          return;
        }
        var pre = env.element.parentNode;
        var clsReg = /\s*\bcommand-line\b\s*/;
        if (!pre || !/pre/i.test(pre.nodeName) || (!clsReg.test(pre.className) && !clsReg.test(env.element.className))) {
          return;
        }
        if (env.element.querySelector('.command-line-prompt')) {
          return;
        }
        if (clsReg.test(env.element.className)) {
          env.element.className = env.element.className.replace(clsReg, '');
        }
        if (!clsReg.test(pre.className)) {
          pre.className += ' command-line';
        }
        var lines = new Array(1 + env.code.split('\n').length);
        var promptText = pre.getAttribute('data-prompt') || '';
        if (promptText !== '') {
          lines = lines.join('<span data-prompt="' + promptText + '"></span>');
        } else {
          var user = pre.getAttribute('data-user') || 'user';
          var host = pre.getAttribute('data-host') || 'localhost';
          lines = lines.join('<span data-user="' + user + '" data-host="' + host + '"></span>');
        }
        var prompt = document.createElement('span');
        prompt.className = 'command-line-prompt';
        prompt.innerHTML = lines;
        var outputSections = pre.getAttribute('data-output') || '';
        outputSections = outputSections.split(',');
        for (var i = 0; i < outputSections.length; i++) {
          var outputRange = outputSections[i].split('-');
          var outputStart = parseInt(outputRange[0]);
          var outputEnd = outputStart;
          if (outputRange.length === 2) {
            outputEnd = parseInt(outputRange[1]);
          }
          if (!isNaN(outputStart) && !isNaN(outputEnd)) {
            for (var j = outputStart; j <= outputEnd && j <= prompt.children.length; j++) {
              var node = prompt.children[j - 1];
              node.removeAttribute('data-user');
              node.removeAttribute('data-host');
              node.removeAttribute('data-prompt');
            }
          }
        }
        env.element.innerHTML = prompt.outerHTML + env.element.innerHTML;
      });
    }());
  })();
  return _retrieveGlobal();
});

System.registerDynamic("node_modules/prismjs/plugins/normalize-whitespace/prism-normalize-whitespace", [], false, function(__require, __exports, __module) {
  var _retrieveGlobal = System.get("@@global-helpers").prepareGlobal(__module.id, null, null);
  (function() {
    (function() {
      if (typeof self === 'undefined' || !self.Prism || !self.document) {
        return;
      }
      var assign = Object.assign || function(obj1, obj2) {
        for (var name in obj2) {
          if (obj2.hasOwnProperty(name))
            obj1[name] = obj2[name];
        }
        return obj1;
      };
      function NormalizeWhitespace(defaults) {
        this.defaults = assign({}, defaults);
      }
      function toCamelCase(value) {
        return value.replace(/-(\w)/g, function(match, firstChar) {
          return firstChar.toUpperCase();
        });
      }
      function tabLen(str) {
        var res = 0;
        for (var i = 0; i < str.length; ++i) {
          if (str.charCodeAt(i) == '\t'.charCodeAt(0))
            res += 3;
        }
        return str.length + res;
      }
      NormalizeWhitespace.prototype = {
        setDefaults: function(defaults) {
          this.defaults = assign(this.defaults, defaults);
        },
        normalize: function(input, settings) {
          settings = assign(this.defaults, settings);
          for (var name in settings) {
            var methodName = toCamelCase(name);
            if (name !== "normalize" && methodName !== 'setDefaults' && settings[name] && this[methodName]) {
              input = this[methodName].call(this, input, settings[name]);
            }
          }
          return input;
        },
        leftTrim: function(input) {
          return input.replace(/^\s+/, '');
        },
        rightTrim: function(input) {
          return input.replace(/\s+$/, '');
        },
        tabsToSpaces: function(input, spaces) {
          spaces = spaces | 0 || 4;
          return input.replace(/\t/g, new Array(++spaces).join(' '));
        },
        spacesToTabs: function(input, spaces) {
          spaces = spaces | 0 || 4;
          return input.replace(new RegExp(' {' + spaces + '}', 'g'), '\t');
        },
        removeTrailing: function(input) {
          return input.replace(/\s*?$/gm, '');
        },
        removeInitialLineFeed: function(input) {
          return input.replace(/^(?:\r?\n|\r)/, '');
        },
        removeIndent: function(input) {
          var indents = input.match(/^[^\S\n\r]*(?=\S)/gm);
          if (!indents || !indents[0].length)
            return input;
          indents.sort(function(a, b) {
            return a.length - b.length;
          });
          if (!indents[0].length)
            return input;
          return input.replace(new RegExp('^' + indents[0], 'gm'), '');
        },
        indent: function(input, tabs) {
          return input.replace(/^[^\S\n\r]*(?=\S)/gm, new Array(++tabs).join('\t') + '$&');
        },
        breakLines: function(input, characters) {
          characters = (characters === true) ? 80 : characters | 0 || 80;
          var lines = input.split('\n');
          for (var i = 0; i < lines.length; ++i) {
            if (tabLen(lines[i]) <= characters)
              continue;
            var line = lines[i].split(/(\s+)/g),
                len = 0;
            for (var j = 0; j < line.length; ++j) {
              var tl = tabLen(line[j]);
              len += tl;
              if (len > characters) {
                line[j] = '\n' + line[j];
                len = tl;
              }
            }
            lines[i] = line.join('');
          }
          return lines.join('\n');
        }
      };
      Prism.plugins.NormalizeWhitespace = new NormalizeWhitespace({
        'remove-trailing': true,
        'remove-indent': true,
        'left-trim': true,
        'right-trim': true
      });
      Prism.hooks.add('before-highlight', function(env) {
        var pre = env.element.parentNode;
        if (!env.code || !pre || pre.nodeName.toLowerCase() !== 'pre' || (env.settings && env.settings['whitespace-normalization'] === false))
          return;
        var children = pre.childNodes,
            before = '',
            after = '',
            codeFound = false,
            Normalizer = Prism.plugins.NormalizeWhitespace;
        for (var i = 0; i < children.length; ++i) {
          var node = children[i];
          if (node == env.element) {
            codeFound = true;
          } else if (node.nodeName === "#text") {
            if (codeFound) {
              after += node.nodeValue;
            } else {
              before += node.nodeValue;
            }
            pre.removeChild(node);
            --i;
          }
        }
        if (!env.element.children.length || !Prism.plugins.KeepMarkup) {
          env.code = before + env.code + after;
          env.code = Normalizer.normalize(env.code, env.settings);
        } else {
          var html = before + env.element.innerHTML + after;
          env.element.innerHTML = Normalizer.normalize(html, env.settings);
          env.code = env.element.textContent;
        }
      });
      var hooks = Prism.hooks.all['before-highlight'];
      hooks.unshift(hooks.pop());
    }());
  })();
  return _retrieveGlobal();
});

System.registerDynamic("src/code-renderer.component", ["angular2/core", "prismjs/components/prism-bash", "prismjs/components/prism-powershell", "prismjs/components/prism-javascript", "prismjs/plugins/line-numbers/prism-line-numbers", "prismjs/plugins/command-line/prism-command-line", "prismjs/plugins/normalize-whitespace/prism-normalize-whitespace"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  $__require('prismjs/components/prism-bash');
  $__require('prismjs/components/prism-powershell');
  $__require('prismjs/components/prism-javascript');
  Prism.languages.undefined = {};
  $__require('prismjs/plugins/line-numbers/prism-line-numbers');
  $__require('prismjs/plugins/command-line/prism-command-line');
  $__require('prismjs/plugins/normalize-whitespace/prism-normalize-whitespace');
  var TEMPLATE_REGEX = /<!--template\sbindings={[^\}]*}-->/g;
  var CodeRenderer = (function() {
    function CodeRenderer(_renderer) {
      this._renderer = _renderer;
    }
    CodeRenderer.prototype.render = function() {
      this._replaceCode();
      this._highlight();
    };
    CodeRenderer.prototype.empty = function() {
      if (this._pre) {
        this._pre.innerHTML = "";
      }
    };
    CodeRenderer.prototype._replaceCode = function() {
      this._renderer.setElementProperty(this._pre.nativeElement, 'innerHTML', this._buildCodeElement());
    };
    CodeRenderer.prototype._highlight = function() {
      Prism.highlightElement(this._pre.nativeElement.querySelector('code'), false, null);
      if (this.shell && this.outputLines) {
        this._fixPromptOutputPadding();
      }
    };
    Object.defineProperty(CodeRenderer.prototype, "_processedCode", {
      get: function() {
        return this._isMarkup(this.language) ? this._processMarkup(this.code) : this.code;
      },
      enumerable: true,
      configurable: true
    });
    CodeRenderer.prototype._processMarkup = function(text) {
      return this._replaceTags(this._removeAngularMarkup(text));
    };
    CodeRenderer.prototype._replaceTags = function(text) {
      return text.replace(/(<)([!\/A-Za-z].*?>)/g, '&lt;$2');
    };
    CodeRenderer.prototype._removeAngularMarkup = function(html) {
      html = html.replace(/\s_ng[^-]+-[^-]+-[^=]+="[^"]*"/g, '');
      var lines = this._fixIndentation(html);
      lines = lines.filter(function(line) {
        if (line.trim() === '') {
          return true;
        }
        var replaced = line.replace(TEMPLATE_REGEX, '').trim();
        return replaced !== '';
      });
      html = lines.join("\n");
      return html.replace(TEMPLATE_REGEX, '');
    };
    CodeRenderer.prototype._isMarkup = function(language) {
      return language === 'markup' || language === 'markdown';
    };
    CodeRenderer.prototype._buildCodeElement = function() {
      return "<code class=\"" + this.codeClasses + "\">" + this._processedCode + "</code>";
    };
    Object.defineProperty(CodeRenderer.prototype, "languageClass", {
      get: function() {
        return 'language-' + this.language;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeRenderer.prototype, "lineNumbersClass", {
      get: function() {
        return this.lineNumbers ? "line-numbers " : "";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeRenderer.prototype, "shellClass", {
      get: function() {
        return this.shell ? "command-line" : "";
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeRenderer.prototype, "codeClasses", {
      get: function() {
        return this.languageClass + " " + this.language;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeRenderer.prototype, "preClasses", {
      get: function() {
        return this.lineNumbersClass + ' ' + this.languageClass + ' ' + this.shellClass;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeRenderer.prototype, "_codeEl", {
      get: function() {
        return this._pre.nativeElement.querySelector('code');
      },
      enumerable: true,
      configurable: true
    });
    CodeRenderer.prototype._fixPromptOutputPadding = function() {
      if (this._codeEl) {
        var clp = this._codeEl.querySelector('.command-line-prompt');
        if (clp) {
          var promptWidth = this._codeEl.querySelector('.command-line-prompt').clientWidth;
          var prePadding = parseInt(this._getStyle(this._pre.nativeElement, 'padding-left').replace('px', ''), 10);
          this._pre.nativeElement.style.paddingRight = (2 * prePadding + promptWidth / 2) + 'px';
        }
      }
    };
    CodeRenderer.prototype._getStyle = function(oElm, strCssRule) {
      var strValue = "";
      if (document.defaultView && document.defaultView.getComputedStyle) {
        strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
      } else if (oElm.currentStyle) {
        strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
          return p1.toUpperCase();
        });
        strValue = oElm.currentStyle[strCssRule];
      }
      return strValue;
    };
    CodeRenderer.prototype._fixIndentation = function(html) {
      var indent = 0;
      var diff = 0;
      var removeLines = [];
      var lines = html.split("\n").map(function(line, index) {
        if (line.trim() === '') {
          if (indent > 0) {
            removeLines.push(index);
          }
          indent = 0;
          return '';
        }
        var a = line.replace(TEMPLATE_REGEX, '').trim();
        if (a === '') {
          indent = line.match(/^\s*/)[0].length;
          return line;
        } else if (indent > 0) {
          length = line.match(/^\s*/)[0].length;
          if (diff === 0) {
            diff = length - indent;
          }
          if (length >= indent) {
            return line.slice(diff);
          } else {
            indent = 0;
          }
        }
        return line;
      });
      removeLines.forEach(function(removalIndex) {
        lines.splice(removalIndex, 1);
      });
      return lines;
    };
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeRenderer.prototype, "code", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeRenderer.prototype, "language", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean)], CodeRenderer.prototype, "lineNumbers", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeRenderer.prototype, "shell", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeRenderer.prototype, "prompt", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeRenderer.prototype, "outputLines", void 0);
    __decorate([core_1.ViewChild('preEl'), __metadata('design:type', Object)], CodeRenderer.prototype, "_pre", void 0);
    CodeRenderer = __decorate([core_1.Component({
      selector: 'code-renderer',
      template: "\n    <pre #preEl [class]=\"preClasses\"\n      [attr.data-prompt]=\"prompt\"\n      [attr.data-output]=\"outputLines\"\n    ></pre>\n  "
    }), __metadata('design:paramtypes', [core_1.Renderer])], CodeRenderer);
    return CodeRenderer;
  })();
  exports.CodeRenderer = CodeRenderer;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("src/src.service", ["angular2/core", "angular2/http", "rxjs/Observable", "rxjs/add/observable/empty", "rxjs/add/operator/map", "rxjs/add/operator/filter", "rxjs/add/operator/distinctUntilChanged", "rxjs/add/operator/debounceTime", "rxjs/add/operator/do", "rxjs/add/operator/retry", "rxjs/add/operator/catch", "rxjs/add/operator/switchMap"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var http_1 = $__require('angular2/http');
  var Observable_1 = $__require('rxjs/Observable');
  $__require('rxjs/add/observable/empty');
  $__require('rxjs/add/operator/map');
  $__require('rxjs/add/operator/filter');
  $__require('rxjs/add/operator/distinctUntilChanged');
  $__require('rxjs/add/operator/debounceTime');
  $__require('rxjs/add/operator/do');
  $__require('rxjs/add/operator/retry');
  $__require('rxjs/add/operator/catch');
  $__require('rxjs/add/operator/switchMap');
  var SrcService = (function() {
    function SrcService(_http) {
      this._http = _http;
      this.debounceTime = 300;
    }
    Object.defineProperty(SrcService.prototype, "host", {
      get: function() {
        return this._host;
      },
      set: function(host) {
        this._host = host;
        this._handleSrcChanges();
      },
      enumerable: true,
      configurable: true
    });
    SrcService.prototype._handleSrcChanges = function() {
      var _this = this;
      this._srcChangedSubscription = this.host.srcChanged.filter(function(source) {
        return _this._emptySources(source);
      }).map(function(source) {
        return _this._addExtensionMatches(source);
      }).filter(function(req) {
        return _this._nonFiles(req);
      }).distinctUntilChanged().do(function() {
        _this.host.showLoading();
      }).debounceTime(this.debounceTime).do(function(req) {
        _this.host.validatedSource(req.source);
      }).switchMap(function(req) {
        return _this._fetchSrc(req);
      }).catch(function(error) {
        _this.host.message("Error: Could not download file.");
        console.error(error);
        return Observable_1.Observable.empty();
      }).subscribe(function(res) {
        _this.host.handleSourceChange(res);
      }, function(error) {
        _this._handleResponseError(error);
      });
    };
    SrcService.prototype.ngOnDestroy = function() {
      this._srcChangedSubscription.dispose();
    };
    SrcService.prototype._emptySources = function(source) {
      return !(source === undefined || source == null);
    };
    SrcService.prototype._addExtensionMatches = function(source) {
      return {
        source: source,
        extMatches: source.match(/\.(\w+)$/)
      };
    };
    SrcService.prototype._nonFiles = function(req) {
      if (!req.extMatches) {
        if (req.source && req.source.length > 0) {
          this.host.message(req.source + " is not a file.");
        } else {
          this.host.message("No source file given.");
        }
        return false;
      }
      return true;
    };
    SrcService.prototype._fetchSrc = function(req) {
      var _this = this;
      return this._http.get(req.source).catch(function(error) {
        _this.host.message(req.source + " not found.");
        return Observable_1.Observable.empty();
      }).map(function(res) {
        return {
          src: req.source,
          ext: req.extMatches[1],
          text: res.text()
        };
      });
    };
    SrcService.prototype._handleResponseError = function(error) {
      console.error("SrcService Error");
      console.error(error);
    };
    SrcService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [http_1.Http])], SrcService);
    return SrcService;
  })();
  exports.SrcService = SrcService;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("src/codeblock.component", ["angular2/core", "prismjs/prism", "./code-renderer.component", "./src.service"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  $__require('prismjs/prism');
  var code_renderer_component_1 = $__require('./code-renderer.component');
  var src_service_1 = $__require('./src.service');
  var CodeblockComponent = (function() {
    function CodeblockComponent(_elementRef, _srcService) {
      this._elementRef = _elementRef;
      this._srcService = _srcService;
      this.DEFAULT_THEME = "standard";
      this.DEFAULT_SHELL_THEME = "okaidia";
      this.prompt = '$';
      this.srcChanged = new core_1.EventEmitter();
      this._code = '';
      this._showingMessage = false;
      this._languageSet = false;
      this._lineNumbers = true;
      this._changed = false;
      this._shellType = null;
      _srcService.host = this;
    }
    CodeblockComponent.prototype.ngAfterContentChecked = function() {
      if (!this.src) {
        this.code = this.content;
      }
    };
    CodeblockComponent.prototype.ngAfterViewChecked = function() {
      if (this._changed) {
        this._changed = false;
        this.codeRenderer.render();
      }
    };
    Object.defineProperty(CodeblockComponent.prototype, "content", {
      get: function() {
        return this.contentEl ? this.contentEl.nativeElement.innerHTML : '';
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeblockComponent.prototype, "code", {
      get: function() {
        return this._code;
      },
      set: function(code) {
        if (this._code !== code) {
          this._changed = true;
          this._showingMessage = false;
          this._code = code;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeblockComponent.prototype, "lineNumbers", {
      get: function() {
        return this._lineNumbers;
      },
      set: function(value) {
        if (this._lineNumbers !== value) {
          this._changed = true;
          this._lineNumbers = value;
        }
      },
      enumerable: true,
      configurable: true
    });
    CodeblockComponent.prototype.shouldDisplayLineNumbers = function() {
      return this.lineNumbers && !this._showingMessage;
    };
    Object.defineProperty(CodeblockComponent.prototype, "language", {
      get: function() {
        return this._showingMessage ? undefined : this._language;
      },
      set: function(lang) {
        if (this.isShell()) {
          return;
        }
        this._languageSet = lang && lang.length > 0 ? true : false;
        this._language = Prism.languages[lang] ? lang : undefined;
        this._changed = true;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeblockComponent.prototype, "theme", {
      get: function() {
        if (this._theme) {
          return this._theme;
        }
        return this.isShell() ? this.DEFAULT_SHELL_THEME : this.DEFAULT_THEME;
      },
      set: function(theme) {
        this._theme = theme;
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeblockComponent.prototype, "src", {
      get: function() {
        return this._src;
      },
      set: function(source) {
        this.srcChanged.next(source);
      },
      enumerable: true,
      configurable: true
    });
    CodeblockComponent.prototype.validatedSource = function(source) {
      this._src = source;
    };
    CodeblockComponent.prototype.handleSourceChange = function(source) {
      var fileLang = CodeblockComponent.EXTENSION_MAP[source.ext] || source.ext;
      if (!this._languageSet) {
        this._language = fileLang;
        if (fileLang === 'typescript') {
          source.text = this._replaceTagsInMultiline(source.text);
        }
      }
      this.code = source.text;
    };
    Object.defineProperty(CodeblockComponent.prototype, "debounceTime", {
      set: function(time) {
        var parsed = parseInt(time, 10);
        if (!isNaN(parsed) && parsed >= 0) {
          this._srcService.debounceTime = parsed;
        }
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(CodeblockComponent.prototype, "shell", {
      get: function() {
        return this._shellType;
      },
      set: function(shellType) {
        if (shellType && CodeblockComponent.SHELL_TYPES.indexOf(shellType) !== -1) {
          this._language = shellType;
          this._languageSet = true;
          this._shellType = shellType;
          this.lineNumbers = false;
          this._changed = true;
        } else {
          this._shellType = null;
        }
      },
      enumerable: true,
      configurable: true
    });
    CodeblockComponent.prototype.isShell = function() {
      return this._shellType !== null;
    };
    Object.defineProperty(CodeblockComponent.prototype, "output", {
      set: function(lines) {
        console.warn("DEPRECATION WARNING: The CodeblockComponent Input property 'output'" + " is no longer supported and will be removed in a future release. Use 'outputLines'");
        this.outputLines = lines;
      },
      enumerable: true,
      configurable: true
    });
    CodeblockComponent.prototype.message = function(text) {
      this._showingMessage = true;
      this.code = text;
    };
    CodeblockComponent.prototype.showLoading = function() {
      this.message("Loading...");
    };
    CodeblockComponent.prototype.bind = function(text) {
      return "{{" + text + "}}";
    };
    CodeblockComponent.prototype._replaceTagsInMultiline = function(text) {
      return text.replace(/`((.|[\r\n])*?)`/g, function(match) {
        return match.replace(/(<)([!\/A-Za-z].*?>)/g, '&lt;$2');
      });
    };
    CodeblockComponent.THEMES = ["standard", "coy", "dark", "funky", "okaidia", "solarizedlight", "tomorrow", "twilight"];
    CodeblockComponent.EXTENSION_MAP = {
      'js': 'javascript',
      'ts': 'typescript',
      'html': 'markup',
      'svg': 'markup',
      'xml': 'markup',
      'md': 'markdown',
      'py': 'python',
      'rb': 'ruby',
      'ps1': 'powershell',
      'psm1': 'powershell'
    };
    CodeblockComponent.SHELL_TYPES = ['bash', 'powershell'];
    __decorate([core_1.ViewChild('contentEl'), __metadata('design:type', Object)], CodeblockComponent.prototype, "contentEl", void 0);
    __decorate([core_1.ViewChild(code_renderer_component_1.CodeRenderer), __metadata('design:type', Object)], CodeblockComponent.prototype, "codeRenderer", void 0);
    __decorate([core_1.Input(), __metadata('design:type', Boolean), __metadata('design:paramtypes', [Boolean])], CodeblockComponent.prototype, "lineNumbers", null);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], CodeblockComponent.prototype, "language", null);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], CodeblockComponent.prototype, "theme", null);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], CodeblockComponent.prototype, "src", null);
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], CodeblockComponent.prototype, "debounceTime", null);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], CodeblockComponent.prototype, "shell", null);
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeblockComponent.prototype, "prompt", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String)], CodeblockComponent.prototype, "outputLines", void 0);
    __decorate([core_1.Input(), __metadata('design:type', String), __metadata('design:paramtypes', [String])], CodeblockComponent.prototype, "output", null);
    __decorate([core_1.Output(), __metadata('design:type', core_1.EventEmitter)], CodeblockComponent.prototype, "srcChanged", void 0);
    CodeblockComponent = __decorate([core_1.Component({
      selector: 'codeblock',
      template: "\n    <div #contentEl class=\"codeblock-content\"><ng-content></ng-content></div>\n    <div class=\"codeblock {{theme}}\">\n      <code-renderer\n        [code]=\"code\"\n        [language]=\"language\"\n        [lineNumbers]=\"shouldDisplayLineNumbers()\"\n        [shell]=\"shell\"\n        [prompt]=\"prompt\"\n        [outputLines]=\"outputLines\">\n      </code-renderer>\n    </div>\n  ",
      styles: ["code[class*=\"language-\"],pre[class*=\"language-\"]{color:black;background:none;text-shadow:0 1px white;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}pre[class*=\"language-\"]::-moz-selection,pre[class*=\"language-\"] ::-moz-selection,code[class*=\"language-\"]::-moz-selection,code[class*=\"language-\"] ::-moz-selection{text-shadow:none;background:#b3d4fc}pre[class*=\"language-\"]::selection,pre[class*=\"language-\"] ::selection,code[class*=\"language-\"]::selection,code[class*=\"language-\"] ::selection{text-shadow:none;background:#b3d4fc}@media print{code[class*=\"language-\"],pre[class*=\"language-\"]{text-shadow:none}}pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto}:not(pre)>code[class*=\"language-\"],pre[class*=\"language-\"]{background:#f5f2f0}:not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal}.token.comment,.token.prolog,.token.doctype,.token.cdata{color:slategray}.token.punctuation{color:#999}.namespace{opacity:.7}.token.property,.token.tag,.token.boolean,.token.number,.token.constant,.token.symbol,.token.deleted{color:#905}.token.selector,.token.attr-name,.token.string,.token.char,.token.builtin,.token.inserted{color:#690}.token.operator,.token.entity,.token.url,.language-css .token.string,.style .token.string{color:#a67f59;background:rgba(255,255,255,0.5)}.token.atrule,.token.attr-value,.token.keyword{color:#07a}.token.function{color:#DD4A68}.token.regex,.token.important,.token.variable{color:#e90}.token.important,.token.bold{font-weight:bold}.token.italic{font-style:italic}.token.entity{cursor:help}.coy code[class*=\"language-\"],.coy pre[class*=\"language-\"]{color:black;background:none;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.coy pre[class*=\"language-\"]{position:relative;margin:.5em 0;-webkit-box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;-moz-box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;box-shadow:-1px 0px 0px 0px #358ccb, 0px 0px 0px 1px #dfdfdf;border-left:10px solid #358ccb;background-color:#fdfdfd;background-image:-webkit-linear-gradient(transparent 50%, rgba(69,142,209,0.04) 50%);background-image:-moz-linear-gradient(transparent 50%, rgba(69,142,209,0.04) 50%);background-image:-ms-linear-gradient(transparent 50%, rgba(69,142,209,0.04) 50%);background-image:-o-linear-gradient(transparent 50%, rgba(69,142,209,0.04) 50%);background-image:linear-gradient(transparent 50%, rgba(69,142,209,0.04) 50%);background-size:3em 3em;background-origin:content-box;overflow:visible;padding:0}.coy code[class*=\"language\"]{max-height:inherit;height:100%;padding:0 1em;display:block;overflow:auto}.coy :not(pre)>code[class*=\"language-\"],.coy pre[class*=\"language-\"]{background-color:#fdfdfd;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;margin-bottom:1em}.coy :not(pre)>code[class*=\"language-\"]{position:relative;padding:.2em;-webkit-border-radius:0.3em;-moz-border-radius:0.3em;-ms-border-radius:0.3em;-o-border-radius:0.3em;border-radius:0.3em;color:#c92c2c;border:1px solid rgba(0,0,0,0.1);display:inline;white-space:normal}.coy pre[class*=\"language-\"]:before,.coy pre[class*=\"language-\"]:after{content:'';z-index:-2;display:block;position:absolute;bottom:0.75em;left:0.18em;width:40%;height:20%;max-height:13em;-webkit-box-shadow:0px 13px 8px #979797;-moz-box-shadow:0px 13px 8px #979797;box-shadow:0px 13px 8px #979797;-webkit-transform:rotate(-2deg);-moz-transform:rotate(-2deg);-ms-transform:rotate(-2deg);-o-transform:rotate(-2deg);transform:rotate(-2deg)}.coy :not(pre)>code[class*=\"language-\"]:after,.coy pre[class*=\"language-\"]:after{right:0.75em;left:auto;-webkit-transform:rotate(2deg);-moz-transform:rotate(2deg);-ms-transform:rotate(2deg);-o-transform:rotate(2deg);transform:rotate(2deg)}.coy .token.comment,.coy .token.block-comment,.coy .token.prolog,.coy .token.doctype,.coy .token.cdata{color:#7D8B99}.coy .token.punctuation{color:#5F6364}.coy .token.property,.coy .token.tag,.coy .token.boolean,.coy .token.number,.coy .token.function-name,.coy .token.constant,.coy .token.symbol,.coy .token.deleted{color:#c92c2c}.coy .token.selector,.coy .token.attr-name,.coy .token.string,.coy .token.char,.coy .token.function,.coy .token.builtin,.coy .token.inserted{color:#2f9c0a}.coy .token.operator,.coy .token.entity,.coy .token.url,.coy .token.variable{color:#a67f59;background:rgba(255,255,255,0.5)}.coy .token.atrule,.coy .token.attr-value,.coy .token.keyword,.coy .token.class-name{color:#1990b8}.coy .token.regex,.coy .token.important{color:#e90}.coy .language-css .token.string,.coy .style .token.string{color:#a67f59;background:rgba(255,255,255,0.5)}.coy .token.important{font-weight:normal}.coy .token.bold{font-weight:bold}.coy .token.italic{font-style:italic}.coy .token.entity{cursor:help}.coy .namespace{opacity:.7}@media screen and (max-width: 767px){.coy pre[class*=\"language-\"]:before,.coy pre[class*=\"language-\"]:after{bottom:14px;-webkit-box-shadow:none;-moz-box-shadow:none;box-shadow:none}}.coy .token.tab:not(:empty):before,.coy .token.cr:before,.coy .token.lf:before{color:#e0d7d1}.coy pre[class*=\"language-\"].line-numbers{padding-left:0}.coy pre[class*=\"language-\"].line-numbers code{padding-left:3.8em}.coy pre[class*=\"language-\"].line-numbers .line-numbers-rows{left:0}.coy pre[class*=\"language-\"][data-line]{padding-top:0;padding-bottom:0;padding-left:0}.coy pre[data-line] code{position:relative;padding-left:4em}.coy pre .line-highlight{margin-top:0}.dark code[class*=\"language-\"],.dark pre[class*=\"language-\"]{color:white;background:none;text-shadow:0 -.1em .2em black;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}@media print{.dark code[class*=\"language-\"],.dark pre[class*=\"language-\"]{text-shadow:none}}.dark pre[class*=\"language-\"],.dark :not(pre)>code[class*=\"language-\"]{background:#4d4033}.dark pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto;border:0.3em solid #7a6652;border-radius:.5em;box-shadow:1px 1px .5em black inset}.dark :not(pre)>code[class*=\"language-\"]{padding:.15em .2em .05em;border-radius:.3em;border:0.13em solid #7a6652;box-shadow:1px 1px .3em -.1em black inset;white-space:normal}.dark .token.comment,.dark .token.prolog,.dark .token.doctype,.dark .token.cdata{color:#998066}.dark .token.punctuation{opacity:.7}.dark .namespace{opacity:.7}.dark .token.property,.dark .token.tag,.dark .token.boolean,.dark .token.number,.dark .token.constant,.dark .token.symbol{color:#d1949e}.dark .token.selector,.dark .token.attr-name,.dark .token.string,.dark .token.char,.dark .token.builtin,.dark .token.inserted{color:#bde052}.dark .token.operator,.dark .token.entity,.dark .token.url,.dark .language-css .token.string,.dark .style .token.string,.dark .token.variable{color:#f5b83d}.dark .token.atrule,.dark .token.attr-value,.dark .token.keyword{color:#d1949e}.dark .token.regex,.dark .token.important{color:#e90}.dark .token.important,.dark .token.bold{font-weight:bold}.dark .token.italic{font-style:italic}.dark .token.entity{cursor:help}.dark .token.deleted{color:red}.funky code[class*=\"language-\"],.funky pre[class*=\"language-\"]{font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.funky pre[class*=\"language-\"]{padding:.4em .8em;margin:.5em 0;overflow:auto;background:url('data:image/svg+xml;charset=utf-8,<svg%20version%3D\"1.1\"%20xmlns%3D\"http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg\"%20width%3D\"100\"%20height%3D\"100\"%20fill%3D\"rgba(0%2C0%2C0%2C.2)\">%0D%0A<polygon%20points%3D\"0%2C50%2050%2C0%200%2C0\"%20%2F>%0D%0A<polygon%20points%3D\"0%2C100%2050%2C100%20100%2C50%20100%2C0\"%20%2F>%0D%0A<%2Fsvg>');background-size:1em 1em}.funky code[class*=\"language-\"]{background:black;color:white;box-shadow:-.3em 0 0 .3em black, .3em 0 0 .3em black}.funky :not(pre)>code[class*=\"language-\"]{padding:.2em;border-radius:.3em;box-shadow:none;white-space:normal}.funky .token.comment,.funky .token.prolog,.funky .token.doctype,.funky .token.cdata{color:#aaa}.funky .token.punctuation{color:#999}.funky .namespace{opacity:.7}.funky .token.property,.funky .token.tag,.funky .token.boolean,.funky .token.number,.funky .token.constant,.funky .token.symbol{color:#0cf}.funky .token.selector,.funky .token.attr-name,.funky .token.string,.funky .token.char,.funky .token.builtin{color:yellow}.funky .token.operator,.funky .token.entity,.funky .token.url,.funky .language-css .token.string,.funky .toke.variable,.funky .token.inserted{color:yellowgreen}.funky .token.atrule,.funky .token.attr-value,.funky .token.keyword{color:deeppink}.funky .token.regex,.funky .token.important{color:orange}.funky .token.important,.funky .token.bold{font-weight:bold}.funky .token.italic{font-style:italic}.funky .token.entity{cursor:help}.funky .token.deleted{color:red}.okaidia code[class*=\"language-\"],.okaidia pre[class*=\"language-\"]{color:#f8f8f2;background:none;text-shadow:0 1px rgba(0,0,0,0.3);font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.okaidia pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto;border-radius:0.3em}.okaidia :not(pre)>code[class*=\"language-\"],.okaidia pre[class*=\"language-\"]{background:#272822}.okaidia :not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal}.okaidia .token.comment,.okaidia .token.prolog,.okaidia .token.doctype,.okaidia .token.cdata{color:slategray}.okaidia .token.punctuation{color:#f8f8f2}.okaidia .namespace{opacity:.7}.okaidia .token.property,.okaidia .token.tag,.okaidia .token.constant,.okaidia .token.symbol,.okaidia .token.deleted{color:#f92672}.okaidia .token.boolean,.okaidia .token.number{color:#ae81ff}.okaidia .token.selector,.okaidia .token.attr-name,.okaidia .token.string,.okaidia .token.char,.okaidia .token.builtin,.okaidia .token.inserted{color:#a6e22e}.okaidia .token.operator,.okaidia .token.entity,.okaidia .token.url,.okaidia .language-css .token.string,.okaidia .style .token.string,.okaidia .token.variable{color:#f8f8f2}.okaidia .token.atrule,.okaidia .token.attr-value,.okaidia .token.function{color:#e6db74}.okaidia .token.keyword{color:#66d9ef}.okaidia .token.regex,.okaidia .token.important{color:#fd971f}.okaidia .token.important,.okaidia .token.bold{font-weight:bold}.okaidia .token.italic{font-style:italic}.okaidia .token.entity{cursor:help}.solarizedlight code[class*=\"language-\"],.solarizedlight pre[class*=\"language-\"]{color:#657b83;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.solarizedlight pre[class*=\"language-\"]::-moz-selection,.solarizedlight pre[class*=\"language-\"] ::-moz-selection,.solarizedlight code[class*=\"language-\"]::-moz-selection,.solarizedlight code[class*=\"language-\"] ::-moz-selection{background:#073642}.solarizedlight pre[class*=\"language-\"]::selection,.solarizedlight pre[class*=\"language-\"] ::selection,.solarizedlight code[class*=\"language-\"]::selection,.solarizedlight code[class*=\"language-\"] ::selection{background:#073642}.solarizedlight pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto;border-radius:0.3em}.solarizedlight :not(pre)>code[class*=\"language-\"],.solarizedlight pre[class*=\"language-\"]{background-color:#fdf6e3}.solarizedlight :not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em}.solarizedlight .token.comment,.solarizedlight .token.prolog,.solarizedlight .token.doctype,.solarizedlight .token.cdata{color:#93a1a1}.solarizedlight .token.punctuation{color:#586e75}.solarizedlight .namespace{opacity:.7}.solarizedlight .token.property,.solarizedlight .token.tag,.solarizedlight .token.boolean,.solarizedlight .token.number,.solarizedlight .token.constant,.solarizedlight .token.symbol,.solarizedlight .token.deleted{color:#268bd2}.solarizedlight .token.selector,.solarizedlight .token.attr-name,.solarizedlight .token.string,.solarizedlight .token.char,.solarizedlight .token.builtin,.solarizedlight .token.url,.solarizedlight .token.inserted{color:#2aa198}.solarizedlight .token.entity{color:#657b83;background:#eee8d5}.solarizedlight .token.atrule,.solarizedlight .token.attr-value,.solarizedlight .token.keyword{color:#859900}.solarizedlight .token.function{color:#b58900}.solarizedlight .token.regex,.solarizedlight .token.important,.solarizedlight .token.variable{color:#cb4b16}.solarizedlight .token.important,.solarizedlight .token.bold{font-weight:bold}.solarizedlight .token.italic{font-style:italic}.solarizedlight .token.entity{cursor:help}.tomorrow code[class*=\"language-\"],.tomorrow pre[class*=\"language-\"]{color:#ccc;background:none;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;direction:ltr;text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.tomorrow pre[class*=\"language-\"]{padding:1em;margin:.5em 0;overflow:auto}.tomorrow :not(pre)>code[class*=\"language-\"],.tomorrow pre[class*=\"language-\"]{background:#2d2d2d}.tomorrow :not(pre)>code[class*=\"language-\"]{padding:.1em;border-radius:.3em;white-space:normal}.tomorrow .token.comment,.tomorrow .token.block-comment,.tomorrow .token.prolog,.tomorrow .token.doctype,.tomorrow .token.cdata{color:#999}.tomorrow .token.punctuation{color:#ccc}.tomorrow .token.tag,.tomorrow .token.attr-name,.tomorrow .token.namespace,.tomorrow .token.deleted{color:#e2777a}.tomorrow .token.function-name{color:#6196cc}.tomorrow .token.boolean,.tomorrow .token.number,.tomorrow .token.function{color:#f08d49}.tomorrow .token.property,.tomorrow .token.class-name,.tomorrow .token.constant,.tomorrow .token.symbol{color:#f8c555}.tomorrow .token.selector,.tomorrow .token.important,.tomorrow .token.atrule,.tomorrow .token.keyword,.tomorrow .token.builtin{color:#cc99cd}.tomorrow .token.string,.tomorrow .token.char,.tomorrow .token.attr-value,.tomorrow .token.regex,.tomorrow .token.variable{color:#7ec699}.tomorrow .token.operator,.tomorrow .token.entity,.tomorrow .token.url{color:#67cdcc}.tomorrow .token.important,.tomorrow .token.bold{font-weight:bold}.tomorrow .token.italic{font-style:italic}.tomorrow .token.entity{cursor:help}.tomorrow .token.inserted{color:green}.twilight code[class*=\"language-\"],.twilight pre[class*=\"language-\"]{color:white;background:none;direction:ltr;font-family:Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;text-align:left;text-shadow:0 -.1em .2em black;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-hyphens:none;-moz-hyphens:none;-ms-hyphens:none;hyphens:none}.twilight pre[class*=\"language-\"],.twilight :not(pre)>code[class*=\"language-\"]{background:#141414}.twilight pre[class*=\"language-\"]{border-radius:.5em;border:0.3em solid #545454;box-shadow:1px 1px .5em black inset;margin:.5em 0;overflow:auto;padding:1em}.twilight pre[class*=\"language-\"]::-moz-selection{background:#27292a}.twilight pre[class*=\"language-\"]::selection{background:#27292a}.twilight pre[class*=\"language-\"]::-moz-selection,.twilight pre[class*=\"language-\"] ::-moz-selection,.twilight code[class*=\"language-\"]::-moz-selection,.twilight code[class*=\"language-\"] ::-moz-selection{text-shadow:none;background:rgba(237,237,237,0.15)}.twilight pre[class*=\"language-\"]::selection,.twilight pre[class*=\"language-\"] ::selection,.twilight code[class*=\"language-\"]::selection,.twilight code[class*=\"language-\"] ::selection{text-shadow:none;background:rgba(237,237,237,0.15)}.twilight :not(pre)>code[class*=\"language-\"]{border-radius:.3em;border:0.13em solid #545454;box-shadow:1px 1px .3em -.1em black inset;padding:.15em .2em .05em;white-space:normal}.twilight .token.comment,.twilight .token.prolog,.twilight .token.doctype,.twilight .token.cdata{color:#787878}.twilight .token.punctuation{opacity:.7}.twilight .namespace{opacity:.7}.twilight .token.tag,.twilight .token.boolean,.twilight .token.number,.twilight .token.deleted{color:#cf694a}.twilight .token.keyword,.twilight .token.property,.twilight .token.selector,.twilight .token.constant,.twilight .token.symbol,.twilight .token.builtin{color:#f9ee9a}.twilight .token.attr-name,.twilight .token.attr-value,.twilight .token.string,.twilight .token.char,.twilight .token.operator,.twilight .token.entity,.twilight .token.url,.twilight .language-css .token.string,.twilight .style .token.string,.twilight .token.variable,.twilight .token.inserted{color:#919e6b}.twilight .token.atrule{color:#7386a5}.twilight .token.regex,.twilight .token.important{color:#e9c163}.twilight .token.important,.twilight .token.bold{font-weight:bold}.twilight .token.italic{font-style:italic}.twilight .token.entity{cursor:help}.twilight pre[data-line]{padding:1em 0 1em 3em;position:relative}.twilight .language-markup .token.tag,.twilight .language-markup .token.attr-name,.twilight .language-markup .token.punctuation{color:#ad895c}.twilight .token{position:relative;z-index:1}.twilight .line-highlight{background:-moz-linear-gradient(left, rgba(84,84,84,0.1) 70%, rgba(84,84,84,0));background:-o-linear-gradient(left, rgba(84,84,84,0.1) 70%, rgba(84,84,84,0));background:-webkit-linear-gradient(left, rgba(84,84,84,0.1) 70%, rgba(84,84,84,0));background:rgba(84,84,84,0.25);background:linear-gradient(left, rgba(84,84,84,0.1) 70%, rgba(84,84,84,0));border-bottom:1px dashed #545454;border-top:1px dashed #545454;left:0;line-height:inherit;margin-top:0.75em;padding:inherit 0;pointer-events:none;position:absolute;right:0;white-space:pre;z-index:0}.twilight .line-highlight:before,.twilight .line-highlight[data-end]:after{background-color:#8794a6;border-radius:999px;box-shadow:0 1px white;color:#f5f2f0;content:attr(data-start);font:bold 65%/1.5 sans-serif;left:.6em;min-width:1em;padding:0 .5em;position:absolute;text-align:center;text-shadow:none;top:.4em;vertical-align:.3em}.twilight .line-highlight[data-end]:after{bottom:.4em;content:attr(data-end);top:auto}pre.line-numbers{position:relative;padding-left:3.8em;counter-reset:linenumber}pre.line-numbers>code{position:relative}.line-numbers .line-numbers-rows{position:absolute;pointer-events:none;top:0;font-size:100%;left:-3.8em;width:3em;letter-spacing:-1px;border-right:1px solid #999;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.line-numbers-rows>span{pointer-events:none;display:block;counter-increment:linenumber}.line-numbers-rows>span:before{content:counter(linenumber);color:#999;display:block;padding-right:0.8em;text-align:right}.codeblock pre.line-numbers{padding-left:3.4em}.codeblock pre.line-numbers .line-numbers-rows{border:0;left:-3.4em}.command-line-prompt{border-right:1px solid #999;display:block;float:left;font-size:100%;letter-spacing:-1px;margin-right:1em;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.command-line-prompt>span:before{color:#999;content:' ';display:block;padding-right:0.8em}.command-line-prompt>span[data-user]:before{content:\"[\" attr(data-user) \"@\" attr(data-host) \"] $\"}.command-line-prompt>span[data-user=\"root\"]:before{content:\"[\" attr(data-user) \"@\" attr(data-host) \"] #\"}.command-line-prompt>span[data-prompt]:before{content:attr(data-prompt)}.codeblock pre.command-line .command-line-prompt{border-right:0;margin-right:0}.codeblock-content{display:none}"],
      encapsulation: core_1.ViewEncapsulation.None,
      directives: [code_renderer_component_1.CodeRenderer],
      providers: [src_service_1.SrcService]
    }), __metadata('design:paramtypes', [core_1.ElementRef, src_service_1.SrcService])], CodeblockComponent);
    return CodeblockComponent;
  })();
  exports.CodeblockComponent = CodeblockComponent;
  global.define = __define;
  return module.exports;
});

System.registerDynamic("codeblock", ["./src/codeblock.component"], true, function($__require, exports, module) {
  ;
  var global = this,
      __define = global.define;
  global.define = undefined;
  var codeblock_component_1 = $__require('./src/codeblock.component');
  exports.Codeblock = codeblock_component_1.CodeblockComponent;
  global.define = __define;
  return module.exports;
});
