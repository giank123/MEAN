# AngularCrudFirebase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.4.

 Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Pasos a Seguir

### crear proyecto

``` 
ng new angular-crud-firebase
```

### Agregar bootstrap

``` 
npm install bootstrap
```

en angular.json reemplazar por: 

``` 
"styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],

``` 

### crear componente Tarjeta
``` 
ng g c components/crear-producto
ng g c components/listar-producto

```
### crear Servicio Producto
Utilizamos para peticiones al service y pasar datos
``` 
ng g s services/producto

```

### crear Clase Producto
``` 
ng g cl models/Producto 

```
Escribir en la clase Producto:

``` 
export class Producto {
    _id?: number;
    nombre: string;
    categoria: string;
    ubicacion: string;
    precio: number;

    constructor(nombre: string, categoria: string, ubicacion: string, precio: number){
        this.nombre = nombre;
        this.categoria = categoria;
        this.ubicacion = ubicacion;
        this.precio = precio;

    }

}
``` 

### insertar gradientes 

- insertar gradientes a la vista con : [Gradientes](https://uigradients.com/#TheStrain)

- Copiar en script y pegarlo en el Styles.css  ... Ejemplo: 
``` 
body{
    background: #870000;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #190A05, #870000);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #190A05, #870000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
``` 
### Elegir la fuente de letra de titulo

. Potta One    [LinkFuente](https://fonts.google.com/specimen/Potta+One?query=potta+one)
. Pegar en index html
``` 
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet">
``` 
. Pegar en styles.css
``` 
.titulo{
    text-align: center;
    font-family: 'Potta One', cursive;
}
``` 
### Agregar FontAwesome 

. Link de pagina del cdn de  Fontawesome   [CDN-FontAwesome](https://cdnjs.com/libraries/font-awesome)

. En index.html pegarlo debajo de los link-

``` 
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
 ``` 

 . Para utilizar los iconos de Fotawesome [FontAwesome](https://fontawesome.com/)


### Bootstrap 

. Link de pagina de Bootstrap   [Bootstrap](https://getbootstrap.com/docs/5.1/forms/input-group/)
. Pegar en el componente a usar


### Instalar toastr para exito o error
1. Pagina de Toastr[toastr](https://www.npmjs.com/package/ngx-toastr)

``` 
npm install ngx-toastr --save
``` 

2. Agregar a : angular.json
``` 
"styles": [
  "styles.scss",
  "node_modules/ngx-toastr/toastr.css" // try adding '../' if you're using angular cli before 6
]
``` 

3. agragr a:  app.module.ts
``` 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
.
.
.

  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
  ]

``` 


