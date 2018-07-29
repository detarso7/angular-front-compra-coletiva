import { Component, OnInit } from '@angular/core';
import {Oferta} from "../shared/oferta.model" //Modelo de objeto (interface)
import {OfertasServico} from "../ofertas.service" //O seriviço

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers:[OfertasServico]
})
export class DiversaoComponent implements OnInit {

  public ofertas:Oferta[]

  constructor(private ofertasServico:OfertasServico) { }

  ngOnInit() {
    this.ofertasServico.getOfertaPorCategorias("diversao")
    .then((ofertas:Oferta[])=>{
      this.ofertas = ofertas
    })
  }

}
