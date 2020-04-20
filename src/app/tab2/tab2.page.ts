import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  sampJson;
  constructor( private http: HttpClient,public storage: Storage) {
    this.saveToStorage();
  }

  saveToStorage(){
    this.http.get('../../assets/json.json').subscribe(data=>{
      this.storage.set('jsonData',data);
     },
  error=>{
    alert(error.message)
  });
  }


  clearJson(){
    this.sampJson="No data to display"
  }
getJson(){
  this.storage.get('jsonData').then((jsonData) => {
    // console.log('Me: Hey, ' + jsonData + '! You have a very nice jsonData.');
    console.log('You: Thanks! I got it for my birthday.');
    this.sampJson=jsonData;
    console.log(this.storage.driver)
   
  });
}
}
