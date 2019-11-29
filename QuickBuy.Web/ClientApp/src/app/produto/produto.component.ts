import { Component, OnInit } from "@angular/core"
import { ProdutoServico } from "../servicos/produto/produto.servico";
import { Produto } from "../models/produto";

@Component({
    selector: "app-produto",
    templateUrl: "./produto.component.html",
    styleUrls: ["./produto.component.css"]
})
export class ProdutoComponent implements OnInit {

    public produto: Produto;

    constructor(private produtoServico: ProdutoServico) {

    }

    ngOnInit(): void {
        this.produto = new Produto();
    }

    public cadastrar() {
        ////this.produto
        //this.produtoServico.cadastrar(this.produto)
        //    .subscribe(

        //        produtoJson => {
        //            console.log(produtoJson);
        //        },
        //        e => {
        //            console.log(e.error);
        //        }
        //    );
    }
}
