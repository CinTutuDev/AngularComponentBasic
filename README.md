# AngularComponentBasic
🅰Creación de proyecto para tener listado: Componentes, módulos, One way data binding, Cli...

## 🚀Dos formas de crear proyecto
```
npm init @angular myApp
ng new my-app
```
## 🎱 URL Importantes
```
https://getbootstrap.com
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
```
```
https://angular.io/guide/interpolation

``` 
## 📌 Directivas incluídas
* Dentro del módulo “CommonModule” de @angular/common
 *ngIf: Remueve o crea una parte del DOM basado en la expresión “showSection”
  ```
  <section *ngIf="showSection">
  ```
*ngFor: Convierte el li en un template, y lo usa para duplicarlo basado en la cantidad de elementos dentro de la lista 
  ```
<li *ngFor="let item of list">
 ```

  
## 🏍Levantar en servidor
```
ng serve
ó
ng s -o
```
## 🤘Crear comandos en scripts en package.json
```
 "scripts": {
    "ng": "ng",
    "start": "ng serve -o",
  },
```
* Para ejercutar el comando (en este caso levantar en servidor)
```
npm start
```
## 🕹 Crear componentes desde línea de comandos:
```
ng g c heroes/list
```
