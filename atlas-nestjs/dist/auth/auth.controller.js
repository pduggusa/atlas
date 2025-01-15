"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const register_dto_1 = require("./dto/register.dto");
const reset_password_dto_1 = require("./dto/reset-password.dto");
const local_auth_guard_1 = require("./guards/local-auth.guard");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        try {
            const response = await this.authService.register(registerDto);
            return {
                message: 'User registered successfully',
            };
        }
        catch (error) {
            if (error.name === 'ConflictException') {
                throw new common_1.BadRequestException(error.message);
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred while registering the user');
        }
    }
    async login(req) {
        try {
            const response = await this.authService.login(req.user);
            return {
                message: 'Login successful',
                user: response.user,
                access_token: response.access_token,
            };
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Login failed. Please check your credentials and try again.');
        }
    }
    async resetPassword(resetPasswordDto) {
        try {
            const response = await this.authService.resetPassword(resetPasswordDto);
            return {
                message: 'Password reset successfully',
                access_token: response.access_token,
            };
        }
        catch (error) {
            if (error.name === 'ConflictException') {
                throw new common_1.BadRequestException(error.message);
            }
            throw new common_1.InternalServerErrorException('An unexpected error occurred while resetting the password');
        }
    }
    async logout(req) {
        try {
            await this.authService.logout(req.user);
            return {
                message: 'Logout successful',
            };
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('An unexpected error occurred while logging out');
        }
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UseGuards)(local_auth_guard_1.LocalAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [reset_password_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map