import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operaciones',
  templateUrl: './operaciones.page.html',
  styleUrls: ['./operaciones.page.scss'],
})
export class OperacionesPage implements OnInit {
  numero1=null
  numero2=null
  operacion=null
  resultado=null
  constructor() { }

  ngOnInit() {
  }
  operar(){
    this.numero1=parseInt(this.numero1)
    this.numero2=parseInt(this.numero2)

    operacion:this.operacion
    
    switch (this.operacion){
      case "+":
        this.resultado=this.numero1+this.numero2
        console.log("opercion suma"+this.resultado)
        break;
        case "-":
        this.resultado=this.numero1-this.numero2
        console.log("opercion resta"+this.resultado)
        break;
        case "*":
        this.resultado=this.numero1*this.numero2
        console.log("opercion multiplicacion"+this.resultado)
        break;
        case "/":
        this.resultado=this.numero1/this.numero2
        console.log("opercion divicion"+this.resultado)
        break;
      
    }
  }
  
}
