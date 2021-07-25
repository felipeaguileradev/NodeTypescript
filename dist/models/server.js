"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const usuario_1 = __importDefault(require("../routes/usuario"));
class Server {
    constructor() {
        this.apiPaths = {
            usuarios: "/api/usuarios",
        };
        this.app = express_1.default();
        this.port = process.env.PORT || "8000";
        // métodos iniciales
        this.middlewares();
        this.routes();
    }
    middlewares() {
        //   CORS
        this.app.use(cors_1.default());
        // Lectura del body
        this.app.use(express_1.default.json());
        // Carpeta pública
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.apiPaths.usuarios, usuario_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log("Servidor corriendo en puerto:" + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map