import { NgModule } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import {RouterModule} from '@angular/router';
import { CommonModule } from '@angular/common';

const MODULES = [RouterModule, CommonModule];
const COMPONENTS = [NavComponent, FooterComponent];
const DIRECTIVES = [];
const FUNCTIONSERVICES = [];
const PIPES = [];
@NgModule({
  declarations: [...COMPONENTS, ...DIRECTIVES, ...PIPES],
  imports: [...MODULES],
  exports: [...MODULES, ...COMPONENTS, ...PIPES],
  providers: [...FUNCTIONSERVICES],
})
export class CoreModule {}
