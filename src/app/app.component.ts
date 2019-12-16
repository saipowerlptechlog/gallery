import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Lightbox } from 'ngx-lightbox';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  albums: any = [];
  sai1: any;
  constructor(private http: HttpClient,private _lightbox: Lightbox) { 
    this.http.get('https://test.medeaz.com/api/speciality/').subscribe(res=>{
      this.sai1=res
   
   console.log('---',this.sai1[0].spec_image )
    for (let i = 1; i <= 27; i++) {
      const src = this.sai1[i].spec_image;
      const caption = 'Image ' + i + ' caption here';
      const thumb = this.sai1[i].spec_image;
      const album = {
         src: src,
         caption: caption,
         thumb: thumb
      };
      this.albums.push(album);
      // console.log('-=-=',album)
    }
    
  })  
  }
  ngOnInit() {
    
  }



open(index:number) {
  this._lightbox.open(this.albums, index);
}

close() {
  this._lightbox.close();
}
}