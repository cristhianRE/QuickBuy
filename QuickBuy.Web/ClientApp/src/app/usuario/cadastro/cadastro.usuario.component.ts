import { Component, OnInit } from "@angular/core";
import { Usuario } from "../../models/usuario";
import { UsuarioServico } from "../../servicos/usuario/usuario.servico";

@Component({
    selector: "cadastro-usuario",
    templateUrl: "./cadastro.usuario.component.html",
    styleUrls: [ "./cadastro.usuario.component.css"]
})
export class CadastroUsuarioComponent implements OnInit {

    public usuario: Usuario;
    public ativarSpinner: boolean;
    public mensagem: string;
    public usuarioCadastrado: boolean;

    constructor(private usuarioServico: UsuarioServico) {

    }

    ngOnInit(): void {
        this.usuario = new Usuario();
    }

    public cadastrar(): void {
        this.ativarSpinner = true;
        this.usuarioServico.cadastrarUsuario(this.usuario)
            .subscribe(
                usuarioJson => {
                    this.usuarioCadastrado = true;
                    this.mensagem = "";
                    this.ativarSpinner = false;
                },
                e => {
                    this.ativarSpinner = false;
                    this.mensagem = e.error;
                }
            );
    }
}
