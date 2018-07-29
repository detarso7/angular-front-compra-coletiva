import {Http, Response} from "@angular/http"
import {Injectable} from "@angular/core"
import { Oferta } from "./shared/oferta.model";
import {URL_API, URL_API_USAR, URL_API_ONDE} from "./app.api"

import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { retry } from 'rxjs/operators';


@Injectable()
export class OfertasServico{


constructor(private http: Http){}

    

        public getOfertas(): Promise<Oferta[]>{
            return this.http.get(`${URL_API}?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
            
        }

        public getOfertaPorCategorias(categorias:string): Promise<Oferta[]>{
            return this.http.get(`${URL_API}?categoria=${categorias}`)
            .toPromise()
            .then((resposta: Response)=>resposta.json())
        }

        public getOfertaPorId(id:number):Promise<Oferta>{
            return this.http.get(`${URL_API}?id=${id}`)
            .toPromise()
            .then((resposta:Response)=>resposta.json()[0])
        }

        public getComoUsarOfertaPorId(id:number):Promise<Oferta>{
            return this.http.get(`${URL_API_USAR}?id=${id}`)
            .toPromise()
            .then((resposta:Response)=>resposta.json()[0])
        }

        public getOndeFicaOfertaPorId(id:number):Promise<Oferta>{
            return this.http.get(`${URL_API_ONDE}?id=${id}`)
            .toPromise()
            .then((resposta:Response)=>resposta.json()[0])
        }        

        public pesquisaOferta(termo:string): Observable<Oferta[]>{
            return this.http.get(`${URL_API}?descricao_oferta_like=${termo}`)
            .pipe(map((resposta: Response)=> resposta.json()), retry(10))
           
        }

}