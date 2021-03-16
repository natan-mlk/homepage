import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-featured-app-workspace',
  templateUrl: './featured-app-workspace.component.html',
  styleUrls: ['./featured-app-workspace.component.scss']
})
export class FeaturedAppWorkspaceComponent implements OnInit {

  databaseAddr = 'https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/';
  // https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/featuredApp/characters/ermin/.json
  
  testFormGroup = new FormGroup({
    moneyValue: new FormControl(2) // nie chwyta mi wartości z formularza
  })
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }
 
  update(){
    console.log('form val',this.testFormGroup.value.moneyValue)
    if (!!this.testFormGroup.value.moneyValue){
      this.http.patch(
        this.databaseAddr + 'featuredApp/characters/ermin/.json', 
        {"money" : this.testFormGroup.value.moneyValue}
      ).subscribe(
        res => {
          console.log('received ok response from patch request');
        }
      )
    } else {
      console.error("!!!!!!!!!!");
    }
  }

}
