import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardComponent } from './character-card/character-card.component';
import { ChooseCharacterComponent } from './choose-character/choose-character.component';
// import { FeaturedAppWorkspaceComponent } from './featured-app/featured-app-workspace/featured-app-workspace.component';
// import { GalleryWorkspaceComponent } from './gallery/gallery-workspace/gallery-workspace.component';
// import { MainContentComponent } from './main-content/main-content.component';
// import { ProfessionWorkspaceComponent } from './profession/profession-workspace/profession-workspace.component';

const routes: Routes = [
  // jakby dać tu komponent pośredniczący, który wyświetli mi linki?
  {path: 'choose-character', component: ChooseCharacterComponent}, // cos sie zjebało
  {path: 'ermin', component: CharacterCardComponent},
  {path: 'lokkri', component: CharacterCardComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturedAppRoutingModule { }
