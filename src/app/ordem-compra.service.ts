import { Injectable } from "@angular/core";
import {Http, RequestOptions, Headers, Response} from "@angular/http";
import { Observable } from "rxjs";
import {URL_API_RAIZ} from "../app/app.api";
import { Pedido } from "./shared/pedido";
import { map } from "rxjs/operators";

@Injectable()
export class OrdemDeCompraService{

    constructor(private http: Http){}
    
    public efetivarCompra(pedido: Pedido): Observable<number>{

            let headers: Headers = new Headers()
            headers.append('Content-type', 'application-json')

        return this.http.post(
            `${URL_API_RAIZ}/pedido`,
            JSON.stringify(pedido),
            new RequestOptions({headers: headers})
        )
        .pipe(map((resposta: Response)=> resposta.json().id))

    }
}