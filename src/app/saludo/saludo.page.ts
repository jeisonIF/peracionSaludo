import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.page.html',
  styleUrls: ['./saludo.page.scss'],
})
export class SaludoPage implements OnInit {
  nombre=null

  constructor() { }

  ngOnInit() {
  }
  saludo(){
    if(this.nombre==null){
      alert("Ingresa tu nombre porfavor")
    }else{
      alert("Buenos dias\n"+this.nombre)
    }
     }
}
