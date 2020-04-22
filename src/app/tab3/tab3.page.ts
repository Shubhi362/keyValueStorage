import { Component } from '@angular/core';

 import { Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';

 const { Filesystem } = Plugins;
 import { File } from '@ionic-native/file/ngx';
 import { FileOpener } from '@ionic-native/file-opener/ngx';
//  import {FileTransfer} from '@ionic-native/file-transfer/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(
   private fileOpener: FileOpener,
   private file:File,
  //  private ft: FileTransfer,
  ) {}
Filebase64="JVBERi0xLjMNCiXi48/TDQoNCjEgMCBvYmoNCjw8DQovVHlwZSAvQ2F0YWxvZw0KL091dGxpbmVzIDIgMCBSDQovUGFnZXMgMyAwIFINCj4+DQplbmRvYmoNCg0KMiAwIG9iag0KPDwNCi9UeXBlIC9PdXRsaW5lcw0KL0NvdW50IDANCj4+DQplbmRvYmoNCg0KMyAwIG9iag0KPDwNCi9UeXBlIC9QYWdlcw0KL0NvdW50IDINCi9LaWRzIFsgNCAwIFIgNiAwIFIgXSANCj4+DQplbmRvYmoNCg0KNCAwIG9iag0KPDwNCi9UeXBlIC9QYWdlDQovUGFyZW50IDMgMCBSDQovUmVzb3VyY2VzIDw8DQovRm9udCA8PA0KL0YxIDkgMCBSIA0KPj4NCi9Qcm9jU2V0IDggMCBSDQo+Pg0KL01lZGlhQm94IFswIDAgNjEyLjAwMDAgNzkyLjAwMDBdDQovQ29udGVudHMgNSAwIFINCj4+DQplbmRvYmoNCg0KNSAwIG9iag0KPDwgL0xlbmd0aCAxMDc0ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBBIFNpbXBsZSBQREYgRmlsZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIFRoaXMgaXMgYSBzbWFsbCBkZW1vbnN0cmF0aW9uIC5wZGYgZmlsZSAtICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjY0LjcwNDAgVGQNCigganVzdCBmb3IgdXNlIGluIHRoZSBWaXJ0dWFsIE1lY2hhbmljcyB0dXRvcmlhbHMuIE1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NTIuNzUyMCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDYyOC44NDgwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjE2Ljg5NjAgVGQNCiggdGV4dC4gQW5kIG1vcmUgdGV4dC4gQm9yaW5nLCB6enp6ei4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNjA0Ljk0NDAgVGQNCiggbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDU5Mi45OTIwIFRkDQooIEFuZCBtb3JlIHRleHQuIEFuZCBtb3JlIHRleHQuICkgVGoNCkVUDQpCVA0KL0YxIDAwMTAgVGYNCjY5LjI1MDAgNTY5LjA4ODAgVGQNCiggQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA1NTcuMTM2MCBUZA0KKCB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBFdmVuIG1vcmUuIENvbnRpbnVlZCBvbiBwYWdlIDIgLi4uKSBUag0KRVQNCmVuZHN0cmVhbQ0KZW5kb2JqDQoNCjYgMCBvYmoNCjw8DQovVHlwZSAvUGFnZQ0KL1BhcmVudCAzIDAgUg0KL1Jlc291cmNlcyA8PA0KL0ZvbnQgPDwNCi9GMSA5IDAgUiANCj4+DQovUHJvY1NldCA4IDAgUg0KPj4NCi9NZWRpYUJveCBbMCAwIDYxMi4wMDAwIDc5Mi4wMDAwXQ0KL0NvbnRlbnRzIDcgMCBSDQo+Pg0KZW5kb2JqDQoNCjcgMCBvYmoNCjw8IC9MZW5ndGggNjc2ID4+DQpzdHJlYW0NCjIgSg0KQlQNCjAgMCAwIHJnDQovRjEgMDAyNyBUZg0KNTcuMzc1MCA3MjIuMjgwMCBUZA0KKCBTaW1wbGUgUERGIEZpbGUgMiApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY4OC42MDgwIFRkDQooIC4uLmNvbnRpbnVlZCBmcm9tIHBhZ2UgMS4gWWV0IG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NzYuNjU2MCBUZA0KKCBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSB0ZXh0LiBBbmQgbW9yZSApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY2NC43MDQwIFRkDQooIHRleHQuIE9oLCBob3cgYm9yaW5nIHR5cGluZyB0aGlzIHN0dWZmLiBCdXQgbm90IGFzIGJvcmluZyBhcyB3YXRjaGluZyApIFRqDQpFVA0KQlQNCi9GMSAwMDEwIFRmDQo2OS4yNTAwIDY1Mi43NTIwIFRkDQooIHBhaW50IGRyeS4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gQW5kIG1vcmUgdGV4dC4gKSBUag0KRVQNCkJUDQovRjEgMDAxMCBUZg0KNjkuMjUwMCA2NDAuODAwMCBUZA0KKCBCb3JpbmcuICBNb3JlLCBhIGxpdHRsZSBtb3JlIHRleHQuIFRoZSBlbmQsIGFuZCBqdXN0IGFzIHdlbGwuICkgVGoNCkVUDQplbmRzdHJlYW0NCmVuZG9iag0KDQo4IDAgb2JqDQpbL1BERiAvVGV4dF0NCmVuZG9iag0KDQo5IDAgb2JqDQo8PA0KL1R5cGUgL0ZvbnQNCi9TdWJ0eXBlIC9UeXBlMQ0KL05hbWUgL0YxDQovQmFzZUZvbnQgL0hlbHZldGljYQ0KL0VuY29kaW5nIC9XaW5BbnNpRW5jb2RpbmcNCj4+DQplbmRvYmoNCg0KMTAgMCBvYmoNCjw8DQovQ3JlYXRvciAoUmF2ZSBcKGh0dHA6Ly93d3cubmV2cm9uYS5jb20vcmF2ZVwpKQ0KL1Byb2R1Y2VyIChOZXZyb25hIERlc2lnbnMpDQovQ3JlYXRpb25EYXRlIChEOjIwMDYwMzAxMDcyODI2KQ0KPj4NCmVuZG9iag0KDQp4cmVmDQowIDExDQowMDAwMDAwMDAwIDY1NTM1IGYNCjAwMDAwMDAwMTkgMDAwMDAgbg0KMDAwMDAwMDA5MyAwMDAwMCBuDQowMDAwMDAwMTQ3IDAwMDAwIG4NCjAwMDAwMDAyMjIgMDAwMDAgbg0KMDAwMDAwMDM5MCAwMDAwMCBuDQowMDAwMDAxNTIyIDAwMDAwIG4NCjAwMDAwMDE2OTAgMDAwMDAgbg0KMDAwMDAwMjQyMyAwMDAwMCBuDQowMDAwMDAyNDU2IDAwMDAwIG4NCjAwMDAwMDI1NzQgMDAwMDAgbg0KDQp0cmFpbGVyDQo8PA0KL1NpemUgMTENCi9Sb290IDEgMCBSDQovSW5mbyAxMCAwIFINCj4+DQoNCnN0YXJ0eHJlZg0KMjcxNA0KJSVFT0YNCg=="
// file = new File();





//  savebase64AsFile(folderPath, fileName, base64, contentType){
//   var DataBlob = this.b64toBlob(base64,contentType,512);
//   window.resolveLocalFileSystemURL(folderPath, function(dir) {
//       dir.getFile(fileName, {create:true}, function(file) {
//           file.createWriter(function(fileWriter) {
//               fileWriter.write(DataBlob);
//               fileWriter.onwrite = function(){
//                   console.log('File written successfully.');
//               }
//           }, function(){
//               alert('Unable to save file in path '+ folderPath);
//           });
//       });
//   });
// }


async fileWrite() {
  debugger;
  try {
    const result = await Filesystem.writeFile({
      path: 'secrets/text.txt',
      data:this.Filebase64,
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    })
    console.log('Wrote file', result);
    this.fileRead();
    
  } catch(e) {
    console.error('Unable to write file', e);
  }
}

  async fileRead() {

    let contents = await Filesystem.readFile({
      path: 'secrets\text.txt',
      directory: FilesystemDirectory.Documents,
      encoding: FilesystemEncoding.UTF8
    });
    console.log(contents.data);
    this.b64toBlob(contents.data,'application/pdf',512);
  }

  b64toBlob(b64Data, contentType, sliceSize) {
    var contentType = contentType || '';
    var sliceSize = sliceSize || 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);
        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }
        var byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
    }
    var blob= new Blob(byteArrays, {type: contentType});
    var blobUrl=URL.createObjectURL(blob)
    window.open(blobUrl);
  }

//  readFile( pathToFile ){
// 	window.resolveLocalFileSystemURL( pathToFile , function (fileEntry) {
//     fileEntry.file(function (file) {
// 			var reader = new FileReader();
// 			reader.onloadend = function (event) {
// 				console.log(event)
// 			};
// 			reader.readAsDataURL(file);
// 		});
// 	});
// }

getFile(){
  
  let downloadPDF: any = this.Filebase64;
        fetch('data:application/pdf;base64,' + downloadPDF,
          {
            method: "GET"
          }).then(res => res.blob()).then(blob => {
            this.file.writeFile('./', 'statement.pdf', blob, { replace: true })
            .then(res => {
              debugger;
              this.fileOpener.open(
                res.toInternalURL(),
                'application/pdf'
              ).then((res) => {

              }).catch(err => {
                console.log("‘open error’");
                alert(err)
              });
            }).catch(err => {
                  console.log("‘save error’")   
                  alert(err)  
       });
          }).catch(err => {
                 console.log(err)
                 alert(err)
          });
        }
//  changeListener($event) : void {
//    debugger
//     this.file = $event.target.files[0];
//     // this.fileWrite(this.file);
   
//   }




  
  // async fileWrite(data) {
  //   debugger;
  //   try {
  //     const result = await Filesystem.writeFile({
  //       path: 'secrets/text.txt',
  //       data:data,
  //       directory: FilesystemDirectory.Documents,
  //       encoding: FilesystemEncoding.UTF8
  //     })
  //     console.log('Wrote file', result);
  //     this.fileRead();
  //   } catch(e) {
  //     console.error('Unable to write file', e);
  //   }
  // }
  
  // async fileRead() {
  //   let contents = await Filesystem.readFile({
  //     path: 'secrets/text.txt',
  //     directory: FilesystemDirectory.Documents,
  //     encoding: FilesystemEncoding.UTF8
  //   });
  //   console.log(contents);
  // }
  
  // async fileAppend() {
  //   await Filesystem.appendFile({
  //     path: 'secrets/text.txt',
  //     data: "MORE TESTS",
  //     directory: FilesystemDirectory.Documents,
  //     encoding: FilesystemEncoding.UTF8
  //   });
  // }
  
  // async fileDelete() {
  //   await Filesystem.deleteFile({
  //     path: 'secrets/text.txt',
  //     directory: FilesystemDirectory.Documents
  //   });
  // }
  
  // async mkdir() {
  //   try {
  //     let ret = await Filesystem.mkdir({
  //       path: 'secrets',
  //       directory: FilesystemDirectory.Documents,
  //       recursive: false // like mkdir -p
  //     });
  //   } catch(e) {
  //     console.error('Unable to make directory', e);
  //   }
  // }
  
  // async rmdir() {
  //   try {
  //     let ret = await Filesystem.rmdir({
  //       path: 'secrets',
  //       directory: FilesystemDirectory.Documents,
  //       recursive: false,
  //     });
  //   } catch(e) {
  //     console.error('Unable to remove directory', e);
  //   }
  // }
  
  // async readdir() {
  //   try {
  //     let ret = await Filesystem.readdir({
  //       path: 'secrets',
  //       directory: FilesystemDirectory.Documents
  //     });
  //   } catch(e) {
  //     console.error('Unable to read dir', e);
  //   }
  // }
  
  // async stat() {
  //   try {
  //     let ret = await Filesystem.stat({
  //       path: 'secrets/text.txt',
  //       directory: FilesystemDirectory.Documents
  //     });
  //   } catch(e) {
  //     console.error('Unable to stat file', e);
  //   }
  // }
  
  // async readFilePath() {
  //   // Here's an example of reading a file with a full file path. Use this to
  //   // read binary data (base64 encoded) from plugins that return File URIs, such as
  //   // the Camera.
  //   try {
  //     let data = await Filesystem.readFile({
  //       path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
  //     })
  //   }
  //   catch(e) {
  //     console.error('Unable to rename file', e);
  //   }
  // }
  
  // async rename() {
  //   try {
  //     // This example moves the file within the same 'directory'
  //     let ret = await Filesystem.rename({
  //       from: 'text.txt',
  //       to: 'text2.txt',
  //       directory: FilesystemDirectory.Documents
  //     });
  //   } catch(e) {
  //     console.error('Unable to rename file', e);
  //   }
  // }
  
  // async copy() {
  //   try {
  //     // This example copies a file within the documents directory
  //     let ret = await Filesystem.copy({
  //       from: 'text.txt',
  //       to: 'text2.txt',
  //       directory: FilesystemDirectory.Documents
  //     });
  //   } catch(e) {
  //     console.error('Unable to copy file', e);
  //   }
  // }



  // saveProfile_click() {
  //   debugger;
  //   console.log("saveProfile_click");
  //   const formData=new FormData();
  //   formData.append('samp.pdf',this.file);
  //   console.log(formData)
    // Add your code here
    // this.afAuth.authState.take(1).subscribe(auth => {
    //   this.afDatabase.object(`profile/${this.uid}`).set(this.profile)
    //     .then(() => {
    //       this.uploadProfileImage();
    //       this.navCtrl.pop();
    //     });
    // })
  // }

  // uploadProfileImage(){
  //   console.log("uploadProfileImage");
  //   let fileRef = firebase.storage().ref('profileImages/' + this.uid + ".jpg");
  //   fileRef.put(this.file).then(function(snapshot) {
  //     console.log('Uploaded a blob or file!');
  //   });
  // }

}
