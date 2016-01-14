System.register(["angular2/core", "semantic/modal.min", "semantic/dimmer.min"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var SMModalDirective, SemanticModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            SMModalDirective = (function () {
                function SMModalDirective() {
                }
                SMModalDirective.prototype.onClick = function () {
                    if (!this.data.hasOwnProperty("selector")) {
                        console.log("target selector missing for modal");
                        return;
                    }
                    jQuery(".ui.modal." + this.data.selector).modal("show");
                };
                SMModalDirective = __decorate([
                    core_1.Directive({
                        host: {
                            "(click)": "onClick()"
                        },
                        inputs: [
                            "data: sm-dir-modal"
                        ],
                        selector: "[sm-dir-modal]"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SMModalDirective);
                return SMModalDirective;
            })();
            exports_1("SMModalDirective", SMModalDirective);
            SemanticModal = (function () {
                function SemanticModal() {
                }
                SemanticModal = __decorate([
                    core_1.Component({
                        properties: ["selector", "title", "class"],
                        selector: "sm-modal"
                    }),
                    core_1.View({
                        template: "<div class=\"ui modal {{selector}} {{class}}\">\n    <i class=\"close icon\"></i>\n    <div class=\"ui icon header\">\n      {{title}}\n    </div>\n    <div class=\"content\">\n        <ng-content></ng-content>\n    </div>\n</div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], SemanticModal);
                return SemanticModal;
            })();
            exports_1("SemanticModal", SemanticModal);
        }
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2RpcmVjdGl2ZXMvc2VtYW50aWMvbW9kYWwvbW9kYWwudHMiXSwibmFtZXMiOlsiU01Nb2RhbERpcmVjdGl2ZSIsIlNNTW9kYWxEaXJlY3RpdmUuY29uc3RydWN0b3IiLCJTTU1vZGFsRGlyZWN0aXZlLm9uQ2xpY2siLCJTZW1hbnRpY01vZGFsIiwiU2VtYW50aWNNb2RhbC5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQUE7Z0JBdUJBQyxDQUFDQTtnQkFYR0Qsa0NBQU9BLEdBQVBBO29CQUVJRSxFQUFFQSxDQUFDQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxJQUFJQSxDQUFDQSxjQUFjQSxDQUFDQSxVQUFVQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTt3QkFDeENBLE9BQU9BLENBQUNBLEdBQUdBLENBQUNBLG1DQUFtQ0EsQ0FBQ0EsQ0FBQ0E7d0JBQ2pEQSxNQUFNQSxDQUFDQTtvQkFDWEEsQ0FBQ0E7b0JBRURBLE1BQU1BLENBQUNBLFlBQVlBLEdBQUdBLElBQUlBLENBQUNBLElBQUlBLENBQUNBLFFBQVFBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLENBQUNBO2dCQUU1REEsQ0FBQ0E7Z0JBckJMRjtvQkFBQ0EsZ0JBQVNBLENBQUNBO3dCQUNQQSxJQUFJQSxFQUFFQTs0QkFDRkEsU0FBU0EsRUFBRUEsV0FBV0E7eUJBQ3pCQTt3QkFDREEsTUFBTUEsRUFBRUE7NEJBQ0pBLG9CQUFvQkE7eUJBQ3ZCQTt3QkFDREEsUUFBUUEsRUFBRUEsZ0JBQWdCQTtxQkFDN0JBLENBQUNBOztxQ0FlREE7Z0JBQURBLHVCQUFDQTtZQUFEQSxDQUFDQSxBQXZCRCxJQXVCQztZQXZCRCwrQ0F1QkMsQ0FBQTtZQU9EO2dCQUFBRztnQkFlNEJDLENBQUNBO2dCQWY3QkQ7b0JBQUNBLGdCQUFTQSxDQUFDQTt3QkFDUEEsVUFBVUEsRUFBRUEsQ0FBQ0EsVUFBVUEsRUFBRUEsT0FBT0EsRUFBRUEsT0FBT0EsQ0FBQ0E7d0JBQzFDQSxRQUFRQSxFQUFFQSxVQUFVQTtxQkFDdkJBLENBQUNBO29CQUNEQSxXQUFJQSxDQUFDQTt3QkFDRkEsUUFBUUEsRUFBRUEsd09BUVBBO3FCQUNOQSxDQUFDQTs7a0NBQzJCQTtnQkFBREEsb0JBQUNBO1lBQURBLENBQUNBLEFBZjdCLElBZTZCO1lBZjdCLHlDQWU2QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy4uLy4uLy4uL3R5cGluZ3MvdHNkLmQudHNcIiAvPlxuaW1wb3J0IHsgRGlyZWN0aXZlLCBDb21wb25lbnQsIFZpZXcgfSBmcm9tIFwiYW5ndWxhcjIvY29yZVwiO1xuaW1wb3J0IFwic2VtYW50aWMvbW9kYWwubWluXCI7XG5pbXBvcnQgXCJzZW1hbnRpYy9kaW1tZXIubWluXCI7XG5cbi8qKlxuICogRGlyZWN0aXZlLCBpbXBsZW1lbnRhdGlvbiBvZiBTZW1hbnRpYyBVSSBtb2RhbCBjb21wb25lbnRzLlxuICpcbiAqIE9iamVjdCB0aGF0IG5lZWQgdG8gYmUgcGFzc2VkIHRvIHRoaXMgY29tcG9uZW50cyBpczpcbiAqIHtcbiAqICAgICAgc2VsZWN0b3I6IHN0cmluZ1xuICogfVxuICpcbiAqIEBsaW5rIGh0dHA6Ly9zZW1hbnRpYy11aS5jb20vbW9kdWxlcy9tb2RhbC5odG1sXG4gKi9cbkBEaXJlY3RpdmUoe1xuICAgIGhvc3Q6IHtcbiAgICAgICAgXCIoY2xpY2spXCI6IFwib25DbGljaygpXCJcbiAgICB9LFxuICAgIGlucHV0czogW1xuICAgICAgICBcImRhdGE6IHNtLWRpci1tb2RhbFwiXG4gICAgXSxcbiAgICBzZWxlY3RvcjogXCJbc20tZGlyLW1vZGFsXVwiXG59KVxuZXhwb3J0IGNsYXNzIFNNTW9kYWxEaXJlY3RpdmUge1xuICAgIHB1YmxpYyBkYXRhOiBhbnk7XG5cbiAgICBvbkNsaWNrKCkge1xuXG4gICAgICAgIGlmICghdGhpcy5kYXRhLmhhc093blByb3BlcnR5KFwic2VsZWN0b3JcIikpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGFyZ2V0IHNlbGVjdG9yIG1pc3NpbmcgZm9yIG1vZGFsXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgalF1ZXJ5KFwiLnVpLm1vZGFsLlwiICsgdGhpcy5kYXRhLnNlbGVjdG9yKS5tb2RhbChcInNob3dcIik7XG5cbiAgICB9XG5cbn1cblxuLyoqXG4gKiBDb21wb25lbnQsIGltcGxlbWVudGF0aW9uIG9mIFNlbWFudGljIFVJIG1vZGFsIGNvbXBvbmVudHMuXG4gKlxuICogVGhpcyBjb21wb25lbnQgaXMgdHJpZ2dlcmVkIGJ5IFNNTW9kYWxEaXJlY3RpdmUuXG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHByb3BlcnRpZXM6IFtcInNlbGVjdG9yXCIsIFwidGl0bGVcIiwgXCJjbGFzc1wiXSxcbiAgICBzZWxlY3RvcjogXCJzbS1tb2RhbFwiXG59KVxuQFZpZXcoe1xuICAgIHRlbXBsYXRlOiBgPGRpdiBjbGFzcz1cInVpIG1vZGFsIHt7c2VsZWN0b3J9fSB7e2NsYXNzfX1cIj5cbiAgICA8aSBjbGFzcz1cImNsb3NlIGljb25cIj48L2k+XG4gICAgPGRpdiBjbGFzcz1cInVpIGljb24gaGVhZGVyXCI+XG4gICAgICB7e3RpdGxlfX1cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG59KVxuZXhwb3J0IGNsYXNzIFNlbWFudGljTW9kYWwge31cbiJdfQ==