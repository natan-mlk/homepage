import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterCardComponent } from './featured-app/character-card/character-card.component';
import { ChooseCharacterComponent } from './featured-app/choose-character/choose-character.component';
import { FeaturedAppWorkspaceComponent } from './featured-app/featured-app-workspace/featured-app-workspace.component';
import { GalleryWorkspaceComponent } from './gallery/gallery-workspace/gallery-workspace.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProfessionWorkspaceComponent } from './profession/profession-workspace/profession-workspace.component';

const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'gallery', component: GalleryWorkspaceComponent},
  {path: 'profession', component: ProfessionWorkspaceComponent},
  {path: 'featured', component: FeaturedAppWorkspaceComponent, 
  // children: [
  //   {path: ':character', component: CharacterCardComponent},
  //   {path: ':character', component: ChooseCharacterComponent},
  // ]
},
{path: 'character/:name', component: CharacterCardComponent},
{path: 'character/:name', component: CharacterCardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
