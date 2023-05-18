import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  //creamos una propiedad privada llamada apiURL
  private apiURL = '';
  // en nuestro constructor crearemos una propiedad llamada http y lo bamos a tipar con una
  // clase llamada HttpClient   ||importamos HttpClient
  constructor(private http: HttpClient) {}
  //AQUI INTENTAREMOS OPTENET DODOS NUESTROS PRODUCTOS DESDE NUESTR API
}

// 1ero

//antes de usar el modulo de http necesitamos aser una inportacion
//en nuestro modulo de inportciom en el app.module
// import { HttpClientModule } from '@angular/common/http';
// todo mosulo lo importamos en el aprtado de imports
// imports: [HttpClientModule];
