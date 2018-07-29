import { Component, OnInit } from '@angular/core';
import {OfertasServico} from "../ofertas.service"
import { Oferta } from "../shared/oferta.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[OfertasServico]
})
export class HomeComponent implements OnInit {

  public ofertas:Oferta[]

  constructor(public ofertasService: OfertasServico) { }

  ngOnInit() {
    //this.ofertas = this.ofertasServicos.getOfertas()
    this.ofertasService.getOfertas()
    
    .then((ofertas:Oferta[])=>{
      this.ofertas = ofertas
    })
    .catch((param)=> {
    })

  }

}
