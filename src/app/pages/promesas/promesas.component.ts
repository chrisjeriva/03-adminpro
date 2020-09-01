import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getUsuarios().then(usuarios => {
      console.log(usuarios);
    });
    // const promesa = new Promise((resolve, reject) => {
    //   if  (false) {
    //     resolve('2');
    //   } else {
    //     reject('perdon, falle');
    //   }
    // });

    // promesa.then((result) => {
    //   console.log(result);
    // }).catch(error => {
    //   console.log('Error en el promise: ' + error);
    // });
    // console.log('1');
  }

  getUsuarios() {
    return new Promise(resolve => {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(body => resolve(body.data));
    });
  }
}
