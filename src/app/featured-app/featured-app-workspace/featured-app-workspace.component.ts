import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface CharacterData {
  name: string,
  money : number,
  history: {value: number, note?: string}[]
}

interface FormValue {
  goldValue: number,
  note: string,
  pennyValue: number,
  silverValue: number
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
    goldValue: new FormControl(),
    silverValue: new FormControl(), 
    pennyValue: new FormControl(),
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
      }
    )
  }
 
  update(){
    const formValue: FormValue = this.testFormGroup.value;
    const inputMoney = (formValue.goldValue * 20 * 12) + (formValue.silverValue * 12) + formValue.pennyValue;
    
    this.createMoneyHistory(formValue, inputMoney);

    this.characterData.money = inputMoney;
    console.log('form val', formValue)
    // console.log('form val', formValue.moneyValue)
    // console.log('newHistory',this.characterData.history)

      this.http.patch(
        this.databaseAddr + 'featuredApp/characters/ermin/.json', 
        {
          "money" : inputMoney,
          "history": this.characterData.history
      }
      ).subscribe(
        res => {
          console.log('received ok response from patch request');
        }
      )
  }

  private createMoneyHistory(formValue: FormValue, inputMoney: number){
    if(this.characterData.history.length < 10){
      this.characterData.history.unshift({'note': formValue.note, 'value': inputMoney})
    } else {
      this.characterData.history.pop();
      this.characterData.history.unshift({'note': formValue.note, 'value': inputMoney})
    }
  }

}
