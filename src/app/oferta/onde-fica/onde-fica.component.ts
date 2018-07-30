import {Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router"
import { OfertasServico } from '../../ofertas.service';

import {Oferta} from "../../shared/oferta.model"

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers:[OfertasServico]
})
export class OndeFicaComponent implements OnInit {

  public ondeFica:Oferta

  constructor(private route:ActivatedRoute, private ofertaServico:OfertasServico) { }

  ngOnInit() {

    this.route.parent.params.subscribe((parametros:Params)=>{

      this.ofertaServico.getOndeFicaOfertaPorId(parametros.id)
      .then((oferta)=>{
        this.ondeFica = oferta
      })

    })
  }
}
