import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  import { IonicStorageModule } from '@ionic/storage';

  import {FileOpener} from '@ionic-native/file-opener/ngx';
  import {FileTransfer} from '@ionic-native/file-transfer/ngx';
  import {File} from '@ionic-native/file/ngx';
  // import {DocumentViewer} from '@ionic-native/document-viewer/ngx';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),HttpClientModule,
   IonicStorageModule.forRoot({
    name: '__mydb',
    driverOrder: [ 'sqlite','indexeddb', 'websql']
   }
   ),
   
     AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    FileOpener,
    FileTransfer,
    File,
   // DocumentViewer,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
