import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface CharacterData {
  name: string,
  money : number,
  history: {value: number, note?: string}[]
}

@Component({
  selector: 'app-featured-app-workspace',
  templateUrl: './featured-app-workspace.component.html',
  styleUrls: ['./featured-app-workspace.component.scss']
})
export class FeaturedAppWorkspaceComponent implements OnInit {

  databaseAddr = 'https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/';
  // https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/featuredApp/characters/ermin/.json
  
  characterData: CharacterData;
  moneyAmount: number = 0;

  testFormGroup = new FormGroup({
    moneyValue: new FormControl(), // nie chwyta mi wartości z formularza
    note: new FormControl(),
  })
  
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/featuredApp/characters/ermin.json').subscribe(
      (data: CharacterData | any) => {
        console.log('new data', data);
        this.characterData = data;
        this.moneyAmount = data.money;
        // var zk = Math.floor((newAmount / 12) / 20),
        // sz = Math.floor((newAmount / 12) - (zk * 20)),
        // pens = newAmount - ((Math.floor((newAmount / 12))) * 12);
      }
    )
  }
 
  update(){
    this.characterData.history.push({'note': this.testFormGroup.value.note, 'value': this.testFormGroup.value.moneyValue})
    console.log('form val',this.testFormGroup.value.moneyValue)
    console.log('newHistory',this.characterData.history)
    if (!!this.testFormGroup.value.moneyValue){
      this.http.patch(
        this.databaseAddr + 'featuredApp/characters/ermin/.json', 
        {
          "money" : this.testFormGroup.value.moneyValue,
          "history": this.characterData.history
      }
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
