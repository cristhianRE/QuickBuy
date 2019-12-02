import { Component, OnInit } from "@angular/core";
import { ProdutoServico } from "../../servicos/produto/produto.servico";
import { Produto } from "../../models/produto";
import { Router } from "@angular/router";
import { LojaCarrinhoCompras } from "../carrinho-compras/loja.carrinho.compras";

@Component({
    selector: "loja-app-produto",
    templateUrl: "./loja.produto.component.html",
    styleUrls: ["./loja.produto.component.css"]
})
export class LojaProdutoComponent implements OnInit {

    public produto: Produto;
    public lojaCarrinhoCompras: LojaCarrinhoCompras;

    constructor(private produtoService: ProdutoServico, private router: Router) {

    }

    ngOnInit(): void {
        this.lojaCarrinhoCompras = new LojaCarrinhoCompras();
        var produtoDetalhe = sessionStorage.getItem('produtoDetalhe');
        if (produtoDetalhe) {
            this.produto = JSON.parse(produtoDetalhe);
        }
    }

    public comprar() {
        this.lojaCarrinhoCompras.adicionar(this.produto);
        this.router.navigate(['loja-efetivar']);
    }
}
