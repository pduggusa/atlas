"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const serve_static_1 = require("@nestjs/serve-static");
const path_1 = require("path");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const backup_module_1 = require("./backup/backup.module");
const element_module_1 = require("./element/element.module");
const file_upload_module_1 = require("./file-upload/file-upload.module");
const plans_module_1 = require("./plans/plans.module");
const prisma_module_1 = require("./prisma/prisma.module");
const record_module_1 = require("./record/record.module");
const restore_backup_module_1 = require("./restore-backup/restore-backup.module");
const role_module_1 = require("./role/role.module");
const structure_module_1 = require("./structure/structure.module");
const user_module_1 = require("./user/user.module");
const subscriptions_module_1 = require("./subscriptions/subscriptions.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            auth_module_1.AuthModule,
            prisma_module_1.PrismaModule,
            role_module_1.RoleModule,
            plans_module_1.PlansModule,
            file_upload_module_1.FileUploadModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: (0, path_1.join)(__dirname, '..', 'public'),
                serveRoot: '/public',
            }),
            structure_module_1.StructureModule,
            element_module_1.ElementModule,
            record_module_1.RecordModule,
            backup_module_1.BackupModule,
            restore_backup_module_1.RestoreBackupModule,
            subscriptions_module_1.SubscriptionsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map