import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  getItems(){
    var items = []

    for(var i=1; i < 1000; i++){
      items.push(i)
    }​

    return items
  }

}
