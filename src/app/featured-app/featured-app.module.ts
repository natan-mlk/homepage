import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedAppWorkspaceComponent } from './featured-app-workspace/featured-app-workspace.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { GoldenCrownsPipe, PennyPipe, SilverPipe } from './assets/pipes';
import { FeaturedAppRoutingModule } from './featured-app-routing.module';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ChooseCharacterComponent } from './choose-character/choose-character.component';


@NgModule({
  declarations: [
    FeaturedAppWorkspaceComponent,
    GoldenCrownsPipe,
    SilverPipe,
    PennyPipe,
    CharacterCardComponent,
    ChooseCharacterComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FeaturedAppRoutingModule, // here are my routes

  ]
})
export class FeaturedAppModule { }
