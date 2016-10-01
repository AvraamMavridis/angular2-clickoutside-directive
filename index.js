"use strict";
var core_1 = require('angular2/core');
var clickOutsideEvents = ['mousedown', 'touchstart'];
var isDescendant = function (el, target) { return target !== null ? el === target || isDescendant(el, target.parentNode) : false; };
var ClickOutsideDirective = (function () {
    function ClickOutsideDirective(el) {
        var _this = this;
        this.el = el;
        this.onClickOutside = new core_1.EventEmitter();
        clickOutsideEvents.forEach(function (e) { return document.addEventListener(e, _this.handleClickOutside.bind(_this)); });
    }
    ClickOutsideDirective.prototype.handleClickOutside = function (event) {
        if (document.documentElement.contains(event.target) && !isDescendant(this.el.nativeElement, event.target)) {
            this.onClickOutside.emit(event);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], ClickOutsideDirective.prototype, "onClickOutside", void 0);
    ClickOutsideDirective = __decorate([
        core_1.Directive({ selector: '[clickOutside]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ClickOutsideDirective);
    return ClickOutsideDirective;
}());
exports.ClickOutsideDirective = ClickOutsideDirective;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ClickOutsideDirective;
//# sourceMappingURL=index.js.map