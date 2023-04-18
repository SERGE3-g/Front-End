"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const user_service_1 = require("./user.service");
describe('UserService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(user_service_1.UserService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
