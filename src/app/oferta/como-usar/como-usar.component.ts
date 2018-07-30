import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {OfertasServico} from '../../ofertas.service';
import {Oferta} from "../../shared/oferta.model"

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers:[OfertasServico]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar:Oferta

  constructor(private route:ActivatedRoute, private ofertaServico:OfertasServico) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros:Params)=>{

      this.ofertaServico.getComoUsarOfertaPorId(parametros.id)
      .then((oferta)=>{
        this.comoUsar = oferta
      })

    })

  }

}
