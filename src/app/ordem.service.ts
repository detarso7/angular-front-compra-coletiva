import {ItemCarrinho} from "./shared/item-carrinho.model"
import { Oferta } from "./shared/oferta.model";

export class ItemCarrinhoServico{

    public itens: ItemCarrinho[] = []

    public exibirItens(): ItemCarrinho[]{
        return this.itens
    }

    public incluirItem(oferta: Oferta): void{
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricao_oferta,
            oferta.valor,
            1
        )

        let itemCarrinhoEcontrado = this.itens.find((item:ItemCarrinho) => item.id === itemCarrinho.id)

        if(itemCarrinhoEcontrado){
            itemCarrinhoEcontrado.quantidade += 1
        }else{
            this.itens.push(itemCarrinho)
        }
        
    }

    public totalCarrinhoCompra(){
        let total: number = 0

        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade)
        })
        return total
    }

    public adicionarQuantidade(itemCarrino: ItemCarrinho){

        let itemCarrinhoEcontrado = this.itens.find((item:ItemCarrinho) => item.id === itemCarrino.id)

        if(itemCarrinhoEcontrado){
            itemCarrinhoEcontrado.quantidade += 1
        }

    }

    public diminuirQuantidade(itemCarrino: ItemCarrinho){

        let itemCarrinhoEcontrado = this.itens.find((item:ItemCarrinho) => item.id === itemCarrino.id)

        if(itemCarrinhoEcontrado.quantidade){
            itemCarrinhoEcontrado.quantidade -= 1

            if(itemCarrinhoEcontrado.quantidade === 0){
                this.itens.splice(this.itens.indexOf(itemCarrinhoEcontrado),1)
            }
        }

    }

    public limparCarrinho(){
        this.itens = []
    }

}

