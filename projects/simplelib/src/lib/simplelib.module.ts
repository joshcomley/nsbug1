import { NgModule } from '@angular/core';
import { Label1Component } from './label1/label1.component';
import { Label2Module } from './label2/label2.module';
import { SimplelibComponent } from './simplelib.component';

@NgModule({
  declarations: [SimplelibComponent, Label1Component],
  imports: [
    Label2Module
  ],
  exports: [SimplelibComponent, Label1Component]
})
export class SimplelibModule { }
