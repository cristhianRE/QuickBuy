import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../models/produto";
import { Router } from "@angular/router";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {

    public produto: Produto;
    public arquivoSelecionado: File;
    public ativarSpinner: boolean;
    public mensagem: string;

    constructor(private produtoServico: ProdutoServico, private router: Router) {

    }

    ngOnInit(): void {
        var produtoSession = sessionStorage.getItem('produtoSession')
        if (produtoSession) {
            this.produto = JSON.parse(produtoSession);
        }
        else {
            this.produto = new Produto();
        }
    }

    public inputChange(files: FileList) {
        this.arquivoSelecionado = files.item(0);
        this.ativarSpinner = true;
        this.produtoServico.enviarArquivo(this.arquivoSelecionado)
            .subscribe(
                nomeArquivo => {
                    this.produto.nomeArquivo = nomeArquivo;
                    alert(this.produto.nomeArquivo);
                    console.log(nomeArquivo);
                    this.ativarSpinner = false;
                },
                e => {
                    console.log(e.error);
                    this.ativarSpinner = false;
                }
            );
    }

    public cadastrar() {
        this.ativarEspera();
        this.produtoServico.cadastrar(this.produto)
            .subscribe(
                produtoJson => {
                    this.desativarEspera();
                    this.router.navigate(['/pesquisar-produto'])
                },
                e => {
                    console.log(e.error);
                    this.mensagem = e.error;
                    this.ativarEspera();
                }
            );
    }

    public ativarEspera() {
        this.ativarSpinner = true;
    }

    public desativarEspera() {
        this.ativarSpinner = false;
    }
}
