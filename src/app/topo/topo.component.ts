import { Component, OnInit } from '@angular/core';
import {OfertasServico} from "../ofertas.service"
import { Observable, Subject, of } from 'rxjs';
import {Oferta} from "../shared/oferta.model"
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers:[OfertasServico]
})
export class TopoComponent implements OnInit {

  public oferta:Observable<Oferta[]>
  private subjectPesquisa: Subject<string> = new Subject<string>() //Cria um novo observable

  constructor(private ofertaServico:OfertasServico) { }


  ngOnInit() {

    //this.oferta vai retornar um Oferta[]
    this.oferta = this.subjectPesquisa  
    .pipe(
      debounceTime(1000), //executa a ação do switchMap após 1s
      distinctUntilChanged(), //Para não fazer uma nova requisiçao com uma palavra ja pesquisada
      switchMap((termo: string) => {

        if(termo.trim() === ""){
          //Retorna um array vazio
          return of<Oferta[]>([])
        }

        return this.ofertaServico.pesquisaOferta(termo) // envia os dados para o service fazer a requizição ao server e retorna um Oferta[]
    }),
      catchError((err: any)=>{
        return of<Oferta[]>([])
      })
  )

  }

  public pesquisa(termoDaBusca:string):void{

    this.subjectPesquisa.next(termoDaBusca) //O método .next irá jogar o termo da pesquisa no stream do Observable (Subject)
    
  }

  limparPesquisa(): void{
    this.subjectPesquisa.next("")
    
  }

}

    /*Trabalhando o retorno da requisição a API
    this.oferta.subscribe((ofertas: Oferta[])=> {
      console.log(ofertas)
      this.oferta2 = ofertas
     
     })*/

/*
    this.oferta = this.ofertaServico.pesquisaOferta(termoDaBusca)

    this.oferta.subscribe(
      (ofertas:Oferta[])=>console.log(ofertas),
      (erro:any)=>console.log("Aconteceu algum erro" + erro.status),
      ()=>console.log("Fluxo ocorrido com sucesso!")
    )
*/