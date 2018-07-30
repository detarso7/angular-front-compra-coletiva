import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router"
import {OfertasServico} from "../ofertas.service"
import {Oferta} from "../shared/oferta.model"
import { interval } from 'rxjs';


@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers:[OfertasServico]
})
export class OfertaComponent implements OnInit, OnDestroy {

  public ofertas:Oferta

  constructor(private router: ActivatedRoute, private ofertaServico:OfertasServico) { }

  ngOnInit() {

    this.router.params.subscribe((parametro: Params)=>{

      this.ofertaServico.getOfertaPorId(parametro.id)
      .then((oferta)=>{
        this.ofertas = oferta
      })

    })


  
    /*let tempo = interval(1500)
    tempo.subscribe(n=>console.log)*/

  }
  ngOnDestroy(){

  }

}
