import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WordFrequencyCountComponent } from './word-frequency-count/word-frequency-count.component';

const routes: Routes = [
  {
    path: '',
    component: WordFrequencyCountComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
