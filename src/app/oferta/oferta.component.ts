import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router"
import {OfertasServico} from "../ofertas.service"
import {Oferta} from "../shared/oferta.model"
import { interval } from 'rxjs';
import {ItemCarrinhoServico} from '../ordem.service'


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasServico]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public ofertas:Oferta

  constructor(
    private router: ActivatedRoute, 
    private ofertaServico:OfertasServico,
    private itemCarrinhoServico: ItemCarrinhoServico
  ) { }

  ngOnInit() {

    this.router.params.subscribe((parametro: Params)=>{

      this.ofertaServico.getOfertaPorId(parametro.id)
      .then((oferta)=>{
        this.ofertas = oferta
      })

    })

    this.itemCarrinhoServico.exibirItens()
  
    /*let tempo = interval(1500)
    tempo.subscribe(n=>console.log)*/

  }

  ngOnDestroy(){

  }

  public adicionarItemCarrinho(): void{
    this.itemCarrinhoServico.incluirItem(this.ofertas)
  }

}
