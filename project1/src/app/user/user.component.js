"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserComponent = void 0;
const core_1 = require("@angular/core");
exports.UserComponent = (() => {
    let _classDecorators = [(0, core_1.Component)({
            selector: 'tr[app-user]',
            templateUrl: './user.component.html',
            styleUrls: ['./user.component.css']
        })];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _user_decorators;
    let _user_initializers = [];
    let _onCancellaUser_decorators;
    let _onCancellaUser_initializers = [];
    let _onModificaUser_decorators;
    let _onModificaUser_initializers = [];
    let _onAggiungiUser_decorators;
    let _onAggiungiUser_initializers = [];
    var UserComponent = _classThis = class {
        constructor(userService) {
            this.userService = (__runInitializers(this, _instanceExtraInitializers), userService);
            // dichiaro una variabile di tipo alias esterno (user) che sarà iniettata da un componente padre
            this.user = __runInitializers(this, _user_initializers, void 0);
            // dichiaro un evento di tipo alias esterno (onCancellaUser) che sarà iniettato da un componente padre
            this.onCancellaUser = __runInitializers(this, _onCancellaUser_initializers, new core_1.EventEmitter());
            this.onModificaUser = __runInitializers(this, _onModificaUser_initializers, new core_1.EventEmitter());
            this.onAggiungiUser = __runInitializers(this, _onAggiungiUser_initializers, new core_1.EventEmitter());
        }
        ngOnInit() {
        }
        cancellaUser() {
            this.onCancellaUser.emit(this.user);
        }
        modificaUser() {
            this.onModificaUser.emit(this.user);
        }
        aggiungiUser() {
            this.onAggiungiUser.emit(this.user);
        }
    };
    __setFunctionName(_classThis, "UserComponent");
    (() => {
        _user_decorators = [(0, core_1.Input)()];
        _onCancellaUser_decorators = [(0, core_1.Output)('onCancellaUser')];
        _onModificaUser_decorators = [(0, core_1.Output)('onModificaUser')];
        _onAggiungiUser_decorators = [(0, core_1.Output)('onAggiungiUser')];
        __esDecorate(null, null, _user_decorators, { kind: "field", name: "user", static: false, private: false, access: { has: obj => "user" in obj, get: obj => obj.user, set: (obj, value) => { obj.user = value; } } }, _user_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _onCancellaUser_decorators, { kind: "field", name: "onCancellaUser", static: false, private: false, access: { has: obj => "onCancellaUser" in obj, get: obj => obj.onCancellaUser, set: (obj, value) => { obj.onCancellaUser = value; } } }, _onCancellaUser_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _onModificaUser_decorators, { kind: "field", name: "onModificaUser", static: false, private: false, access: { has: obj => "onModificaUser" in obj, get: obj => obj.onModificaUser, set: (obj, value) => { obj.onModificaUser = value; } } }, _onModificaUser_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _onAggiungiUser_decorators, { kind: "field", name: "onAggiungiUser", static: false, private: false, access: { has: obj => "onAggiungiUser" in obj, get: obj => obj.onAggiungiUser, set: (obj, value) => { obj.onAggiungiUser = value; } } }, _onAggiungiUser_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        UserComponent = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return UserComponent = _classThis;
})();
