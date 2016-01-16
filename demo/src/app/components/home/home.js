var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("angular2/core");
var semantic_1 = require("../../directives/semantic/semantic");
var message_1 = require("../../services/message");
var HomeComponent = (function () {
    function HomeComponent(ms) {
        this.ms = ms;
    }
    HomeComponent.prototype.submitMessage = function () {
        this.ms.emitMessage(new Date().toISOString());
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "home"
        }),
        core_1.View({
            directives: [semantic_1.SEMANTIC_COMPONENTS, semantic_1.SEMANTIC_DIRECTIVES],
            templateUrl: "./app/components/home/home.html"
        }), 
        __metadata('design:paramtypes', [message_1.MessageService])
    ], HomeComponent);
    return HomeComponent;
})();
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUudHMiXSwibmFtZXMiOlsiSG9tZUNvbXBvbmVudCIsIkhvbWVDb21wb25lbnQuY29uc3RydWN0b3IiLCJIb21lQ29tcG9uZW50LnN1Ym1pdE1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHFCQUFnQyxlQUFlLENBQUMsQ0FBQTtBQUNoRCx5QkFBeUQsb0NBQW9DLENBQUMsQ0FBQTtBQUM5Rix3QkFBK0Isd0JBQXdCLENBQUMsQ0FBQTtBQUV4RDtJQVVDQSx1QkFBbUJBLEVBQWtCQTtRQUFsQkMsT0FBRUEsR0FBRkEsRUFBRUEsQ0FBZ0JBO0lBQUlBLENBQUNBO0lBRTFDRCxxQ0FBYUEsR0FBYkE7UUFDQ0UsSUFBSUEsQ0FBQ0EsRUFBRUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsSUFBSUEsSUFBSUEsRUFBRUEsQ0FBQ0EsV0FBV0EsRUFBRUEsQ0FBQ0EsQ0FBQ0E7SUFDL0NBLENBQUNBO0lBZEZGO1FBQUNBLGdCQUFTQSxDQUFDQTtZQUNWQSxRQUFRQSxFQUFFQSxNQUFNQTtTQUNoQkEsQ0FBQ0E7UUFDREEsV0FBSUEsQ0FBQ0E7WUFDTEEsVUFBVUEsRUFBRUEsQ0FBQ0EsOEJBQW1CQSxFQUFFQSw4QkFBbUJBLENBQUNBO1lBQ3REQSxXQUFXQSxFQUFFQSxpQ0FBaUNBO1NBQzlDQSxDQUFDQTs7c0JBU0RBO0lBQURBLG9CQUFDQTtBQUFEQSxDQUFDQSxBQWZELElBZUM7QUFQWSxxQkFBYSxnQkFPekIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgVmlldyB9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XG5pbXBvcnQgeyBTRU1BTlRJQ19DT01QT05FTlRTLCBTRU1BTlRJQ19ESVJFQ1RJVkVTIH0gZnJvbSBcIi4uLy4uL2RpcmVjdGl2ZXMvc2VtYW50aWMvc2VtYW50aWNcIjtcbmltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL21lc3NhZ2VcIjtcblxuQENvbXBvbmVudCh7XG5cdHNlbGVjdG9yOiBcImhvbWVcIlxufSlcbkBWaWV3KHtcblx0ZGlyZWN0aXZlczogW1NFTUFOVElDX0NPTVBPTkVOVFMsIFNFTUFOVElDX0RJUkVDVElWRVNdLFxuXHR0ZW1wbGF0ZVVybDogXCIuL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5odG1sXCJcbn0pXG5cbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcblxuXHRjb25zdHJ1Y3RvcihwdWJsaWMgbXM6IE1lc3NhZ2VTZXJ2aWNlKSB7IH1cblxuXHRzdWJtaXRNZXNzYWdlKCkge1xuXHRcdHRoaXMubXMuZW1pdE1lc3NhZ2UobmV3IERhdGUoKS50b0lTT1N0cmluZygpKTtcblx0fVxufVxuIl19