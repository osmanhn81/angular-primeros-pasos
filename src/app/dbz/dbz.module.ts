import { NgModule, Component } from '@angular/core';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
      MainPageComponent,
      ListComponent,
      AddCharacterComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
      CommonModule,
      FormsModule
  ]
})
export class DbzModule { }
