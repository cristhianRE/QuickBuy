import { Component } from "@angular/core";
import { Produto } from "../../models/produto";

@Component({
    selector: "",
    templateUrl: "./loja.carrinho.compras.html",
    styleUrls: ["./loja.carrinho.compras.css"]
})
export class LojaCarrinhoCompras {

    public produtos: Produto[] = [];

    public adicionar(produto: Produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (!produtoLocalStorage) {
            //se nao existira nada no local storage
            this.produtos.push(produto);
        } else {
            // se já existir itens na sessão
            this.produtos = JSON.parse(produtoLocalStorage);
            this.produtos.push(produto);
        }
        localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
    }

    public obterProdutos(): Produto[] {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            return JSON.parse(produtoLocalStorage);
        }
    }

    public removerProduto(produto: Produto) {
        var produtoLocalStorage = localStorage.getItem("produtoLocalStorage");
        if (produtoLocalStorage) {
            this.produtos = JSON.parse(localStorage.getItem("produtoLocalStorage"));
            this.produtos = this.produtos.filter(p => p.id != produto.id);
            localStorage.setItem("produtoLocalStorage", JSON.stringify(this.produtos));
        }
    }

    public atualizar(produtos: Produto[]) {
        localStorage.setItem("produtoLocalStorage", JSON.stringify(produtos))
    }
}
