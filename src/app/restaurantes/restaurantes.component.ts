import { Component, OnInit } from '@angular/core';
import {Oferta} from "../shared/oferta.model" //Modelo de objeto (interface)
import {OfertasServico} from "../ofertas.service" //O seriviço

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [OfertasServico]
})
export class RestaurantesComponent implements OnInit {
  public ofertas:Oferta[]

  constructor(private ofertaServico: OfertasServico) { }

  ngOnInit() {
    this.ofertaServico.getOfertaPorCategorias("restaurante")
    .then((ofertas:Oferta[])=>{
      this.ofertas = ofertas
    })
  }

}
