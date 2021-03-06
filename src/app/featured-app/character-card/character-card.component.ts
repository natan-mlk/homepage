import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

interface CharacterData {
  name: string,
  money : number,
  history: {
    value: number,
    type: boolean, 
    note?: string
  }[]
}

interface FormValue {
  goldValue: number,
  note: string,
  pennyValue: number,
  silverValue: number
}

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  selectedCharacter: string;
  databaseAddr = 'https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/';
  // https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/featuredApp/characters/ermin/.json
  
  characterData: CharacterData;
  moneyAmount: number = 0;

  formGroup = new FormGroup({
    goldValue: new FormControl(),
    silverValue: new FormControl(), 
    pennyValue: new FormControl(),
    note: new FormControl(),
  })

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.selectedCharacter  = this.route.snapshot.params['name']
    // powinienem się subskrybować zamiast korzystać ze snapshota, bo mi się ten kompontnt nie przerenderowuje
    // o tak
    // this.paramsSubscription = this.route.params
    // .subscribe(
    //   (params: Params) => {
    //     this.user.id = params['id'];
    //     this.user.name = params['name'];
    //   }
    // );
    this.http.get('https://amilko-home-default-rtdb.europe-west1.firebasedatabase.app/featuredApp/characters/' 
    + this.selectedCharacter + '.json')
    .subscribe(
      (data: CharacterData | any) => {
        console.log('new data', data);
        this.characterData = data;
        // this.moneyAmount = data.money;
      }
    )
  }

  update(operationType: boolean){
    const formValue: FormValue = this.formGroup.value;
    const inputMoney = (formValue.goldValue * 20 * 12) + (formValue.silverValue * 12) + formValue.pennyValue;
    
    this.createMoneyHistory(formValue, inputMoney, operationType);
    let newMoneyAmount = 0;

    if (operationType){
    newMoneyAmount = this.characterData.money + inputMoney;
    } else {
      newMoneyAmount = this.characterData.money - inputMoney;
    }

    this.characterData.money = newMoneyAmount;
    this.sendToDataBase(newMoneyAmount);
  }

  private createMoneyHistory(formValue: FormValue, inputMoney: number, operationType: boolean){
    const characterHistoryObj = {
      'note': formValue.note, 
      'value': operationType ? inputMoney : inputMoney, 
      'type': operationType
    };
    console.log('characterHistoryObj money', characterHistoryObj.value)
    if(this.characterData.history.length < 10){
      this.characterData.history.unshift(characterHistoryObj)
    } else {
      this.characterData.history.pop();
      this.characterData.history.unshift(characterHistoryObj)
    }
  }

  private sendToDataBase(newMoneyAmount:number) {
    this.http.patch(
      this.databaseAddr + 'featuredApp/characters/' + this.selectedCharacter + '/.json', 
      {
        "money" : newMoneyAmount,
        "history": this.characterData.history
    }
    ).subscribe(
      res => {
        console.log('received ok response from patch request');
        this.formGroup.reset();
      }
    )
  }

}
