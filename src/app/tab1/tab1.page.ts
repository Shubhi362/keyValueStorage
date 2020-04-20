import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
data:string="";
newData:string="";
  constructor(public storage: Storage) {
    storage.ready().then(() => {
      this.storage.set('name', 'Mr. Ionitron');   
    });
  }


  getData(){
    this.storage.get('name').then((name) => {
      console.log('Me: Hey, ' + name + '! You have a very nice name.');
      console.log('You: Thanks! I got it for my birthday.');
      this.data=name;
      console.log(this.storage.driver)
      
    });
  }
remove(){
  this.storage.remove('name').then(() => { })
}

changeData(){
  debugger;
  this.storage.set('name',this.newData);

}
}
