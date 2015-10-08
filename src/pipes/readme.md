## Angular2 Pipe list filter ( like filter in Angular 1)

Live search on any array.

Usage:

```bash

# create input element
<input type="text" [(ng-model)]="search" placeholder="Live search example...">

# pipe it to ng-for directive
<a class="item" *ng-for="#item of items | arrayFilter: search"> {{item}}</a>

```

Installation:
* Copy array.ts to your pipes folder
* Reference it in component
* Attach it @View with pipes: [ArrayFilterPipe]