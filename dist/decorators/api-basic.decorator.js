"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiBasicAuth = void 0;
const api_security_decorator_1 = require("./api-security.decorator");
function ApiBasicAuth(name = 'basic') {
    return (0, api_security_decorator_1.ApiSecurity)(name);
}
exports.ApiBasicAuth = ApiBasicAuth;
