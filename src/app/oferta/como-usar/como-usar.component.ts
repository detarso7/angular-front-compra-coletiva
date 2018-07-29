import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
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

    this.ofertaServico.getComoUsarOfertaPorId(this.route.parent.snapshot.params["id"])
    .then((oferta)=>{
      this.comoUsar = oferta
    })

  }

}
