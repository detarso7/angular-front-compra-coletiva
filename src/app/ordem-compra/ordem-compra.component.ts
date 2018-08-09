import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

public endereco:string = ""
public numero:string = ""
public complemento:string = ""
public formaPagamento:string = ""
public formEstado:String = "disabled"

public enderecoValido:boolean
public numeroValido:boolean
public complementoValido:boolean
public selectedValido:boolean

public enderecoPrimitivo:boolean = true
public numeroPrimitivo:boolean = true
public complementoPrimitivo:boolean = true
public selectPrimitivo:boolean = true

  constructor() { }

  ngOnInit() {
  }

  public atualizarEndereco(endereco:string):void{
    this.endereco = endereco
   // console.log(endereco)

this.enderecoPrimitivo = false

   if(endereco.length > 3 || undefined){
     this.enderecoValido = true
   }else{
     this.enderecoValido = false
   }
   this.habilitaForm()
  }


  public atualizarNumero(numero:string):void{
    this.numero = numero
    //console.log(numero)
    this.numeroPrimitivo = false

    if (numero.length > 0){
      this.numeroValido = true
    }else{
      this.numeroValido = false
    }
    this.habilitaForm()
  }

  public atualizarComplemento(complemento:string):void{
    this.complemento = complemento
    //console.log(complemento)

this.complementoPrimitivo = false

    if(complemento.length > 0){
      this.complementoValido = true
    }
    this.habilitaForm()
  }

  public atualizarSelected(selected:string):void{
    this.formaPagamento = selected
    //console.log(selected)

  this.selectPrimitivo = false

      if(this.formaPagamento == ""){
        this.selectedValido = false
      }else{
        this.selectedValido = true
      }
      this.habilitaForm()
    }

    public habilitaForm(): void{
      if( this.endereco && this.numero && this.formaPagamento){
        this.formEstado = ""
      }else{
        this.formEstado = "disabled"
      }
    }

}
