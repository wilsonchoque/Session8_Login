import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  usuario = 'wilson'
  password = "123456"

  aceptado = false;
  rechazado = false;

  items = ['Inicio', 'Contacto']

  verificar(usuarioInput: String, passwordInput:String){

    if (usuarioInput == this.usuario && passwordInput == this.password) {
      (this.aceptado = true);
      this.rechazado=false;
    }else{
      (this.rechazado = true);
      this.aceptado=false;
    }

  }

}
