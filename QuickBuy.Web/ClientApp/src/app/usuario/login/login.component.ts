import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../models/usuario";
import { Router, ActivatedRoute } from "@angular/router";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";
import { error } from "protractor";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

    public usuario;
    public returnUrl: string;
    public mensagem: string;
    public ativarSpinner: boolean;

    constructor(private router: Router, private activatedRouter: ActivatedRoute,
                private usuarioServico: UsuarioServico) {
    }   

    entrar(): void {
        this.ativarSpinner = true;
        this.usuarioServico.verificarUsuario(this.usuario)
            .subscribe(
                usuario_json => {

                    this.usuarioServico.usuario = usuario_json;

                    if (!this.returnUrl) {
                        this.router.navigate(['/']);
                    } else {
                        this.router.navigate([this.returnUrl]);
                    }
                },
                err => {
                    console.log(err.error)
                    this.mensagem = err.error;
                    this.ativarSpinner = false;
                }
            );
    }

    ngOnInit(): void {
        this.returnUrl = this.activatedRouter.snapshot.queryParams['returnUrl'];
        this.usuario = new Usuario();
    }
}


