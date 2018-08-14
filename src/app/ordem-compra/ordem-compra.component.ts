import { Component, OnInit } from '@angular/core';
import { OrdemDeCompraService } from '../ordem-compra.service'
import { Pedido } from '../shared/pedido.model'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {ItemCarrinhoServico} from '../ordem.service'
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemDeCompraService]
})

export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra:number
  public itemCarrinho: ItemCarrinho[]

//Form
  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required])
  })
//and form

  constructor(
    private ordemCompraService: OrdemDeCompraService,
    private itemCarrinhoServico: ItemCarrinhoServico
  ) { }

  ngOnInit() {

    this.itemCarrinho = this.itemCarrinhoServico.exibirItens()
    console.log(this.itemCarrinho)
    
  }

public confirmarCompra():void{

  if(this.formulario.status === "INVALID"){
    this.formulario.get('endereco').markAsTouched()
    this.formulario.get('numero').markAsTouched()
    this.formulario.get('complemento').markAsTouched()
    this.formulario.get('formaPagamento').markAsTouched()
  }else{

    if(this.itemCarrinhoServico.exibirItens().length === 0){
      alert("Vc ainda não adicionou nenhum item no carrinho!")
    }else{

      let pedido:Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.itemCarrinhoServico.exibirItens()
      )
      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: any) => {
        this.idPedidoCompra = idPedido
      this.itemCarrinhoServico.limparCarrinho()
      })
      
    }
  }

}

public adicionar(item: ItemCarrinho){
  this.itemCarrinhoServico.adicionarQuantidade(item)
}

public diminuir(item: ItemCarrinho){
  this.itemCarrinhoServico.diminuirQuantidade(item)
}

}//class
