import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalComponent } from './terminal/terminal.component';


const routes: Routes = [
  {
    path: 'terminal',
    component: TerminalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
