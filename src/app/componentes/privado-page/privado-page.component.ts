import { Component, OnInit } from '@angular/core';

//database
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/';
@Component({
  selector: 'app-privado-page',
  templateUrl: './privado-page.component.html',
  styleUrls: ['./privado-page.component.scss']
})
export class PrivadoPageComponent implements OnInit {
  items: Observable<any[]>;

  constructor(afDB: AngularFireDatabase) {
    this.items = afDB.list('packets').valueChanges();
  }

  ngOnInit(){
      console.log(this.items);
  }
}
