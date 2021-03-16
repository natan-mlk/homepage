import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeaturedAppWorkspaceComponent } from './featured-app-workspace/featured-app-workspace.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FeaturedAppWorkspaceComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class FeaturedAppModule { }
