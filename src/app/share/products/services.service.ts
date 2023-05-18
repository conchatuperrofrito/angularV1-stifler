import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  //creamos una propiedad privada llamada apiURL
  //aqui estara nuestro servidor url y el puerto a quien queremos atacar
  private apiURL = 'http://localhost:3000/products';
  // en nuestro constructor crearemos una propiedad llamada http y lo bamos a tipar con una
  // clase llamada HttpClient   ||importamos HttpClient
  constructor(private http: HttpClient) {}
  //AQUI INTENTAREMOS OPTENET DODOS NUESTROS PRODUCTOS DESDE NUESTR API
  // y devolvera por defecto un obserbable  <>any //tipamos
  getProducts(): Observable<Product[]> {
    //este obserbable viene de rjx
    //.get nos proveee angular
    return this.http.get<Product[]>(this.apiURL); //tenemos que tipar emos <Product[]> creado una interface y para esto son interface le decimos que esto nos devolvera un arry de productos .Tenemos que hacer la inpotacion de nuestra interface
  }
}

// 1ero
// ....
//antes de usar el modulo de http necesitamos aser una inportacion
//en nuestro modulo de inportciom en el app.module
// import { HttpClientModule } from '@angular/common/http';
// todo mosulo lo importamos en el aprtado de imports
// imports: [HttpClientModule];
////////////////un obcerbable es gracia a rjx no es mas que un flujo de datos en el tiempo. cuando esta api responda en el tiempo que jestione el backend de esta peticion ba devolver un flujo de datos en este caso seran productos y nosotros lo bamos a resivir
