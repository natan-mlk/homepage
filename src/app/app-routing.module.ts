import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryWorkspaceComponent } from './gallery/gallery-workspace/gallery-workspace.component';
import { MainContentComponent } from './main-content/main-content.component';
import { ProfessionWorkspaceComponent } from './profession/profession-workspace/profession-workspace.component';

const routes: Routes = [
  {path: '', component: MainContentComponent},
  {path: 'gallery', component: GalleryWorkspaceComponent},
  {path: 'profession', component: ProfessionWorkspaceComponent},
  // {path: 'featured', component: .....},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
