import { Component } from "@angular/core";
import { Usuario } from "../../models/usuario";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {
    public usuario;
    public usuarioAutenticado: boolean;

    constructor() {
        this.usuario = new Usuario();
    }   

    entrar(): void {
        if (this.usuario.email == "email@email.com" && this.usuario.senha == "senha") {
            this.usuarioAutenticado = true;
        }
    }
}


