"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.ParameterListItemComponent = void 0;
var core_1 = require("@angular/core");
var ParameterListItemComponent = /** @class */ (function () {
    // datatypes: string[] = [
    //   "String", "Boolean",
    //   "Integer", "User",
    //   "Chat", "ChatPhoto",
    //   "ChatPermissions", "ChatLocation",
    //   "Animation", "Audio",
    //   "", "",
    //   "", "",
    //   "", "",
    // ]
    function ParameterListItemComponent(data) {
        this.data = data;
        this.type = [];
        this.optional = false;
        this.exlusive = false;
        this.display = true;
        this.field = new core_1.EventEmitter();
        this.del = new core_1.EventEmitter();
    }
    ParameterListItemComponent.prototype.add = function () {
        this.type.unshift(this.tempType);
        this.tempType = "";
    };
    ParameterListItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.getParameterTypes(function (data, status) {
            _this.parameterTypes = data;
            _this.finished = status;
        });
    };
    ParameterListItemComponent.prototype.deleteItem = function () {
        this.del.emit("");
    };
    ParameterListItemComponent.prototype.update = function () {
        this.current = {
            name: this.name,
            type: this.getType(),
            description: this.description,
            optional: this.optional == undefined ? undefined : this.optional,
            exclusive: this.exclusiveLabel == undefined ? undefined : this.exclusiveLabel
        };
        console.log(this.current);
        this.field.emit(this.current);
    };
    ParameterListItemComponent.prototype.getType = function () {
        if (this.type.length > 0 && this.tempType.length > 0)
            return __spreadArrays(this.type, [this.tempType]);
        else if (this.type.length > 0 && this.tempType.length == 0)
            return this.type;
        else
            return this.tempType;
    };
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "name");
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "type");
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "optional");
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "exclusiveLabel");
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "exlusive");
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "description");
    __decorate([
        core_1.Input()
    ], ParameterListItemComponent.prototype, "display");
    __decorate([
        core_1.Output()
    ], ParameterListItemComponent.prototype, "field");
    __decorate([
        core_1.Output()
    ], ParameterListItemComponent.prototype, "del");
    ParameterListItemComponent = __decorate([
        core_1.Component({
            selector: 'app-parameter-list-item',
            templateUrl: './parameter-list-item.component.html',
            styleUrls: ['./parameter-list-item.component.css']
        })
    ], ParameterListItemComponent);
    return ParameterListItemComponent;
}());
exports.ParameterListItemComponent = ParameterListItemComponent;
