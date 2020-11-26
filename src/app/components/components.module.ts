import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { FormsModule } from '@angular/forms';
import { GrafdonaComponent } from './grafdona/grafdona.component';
import { ChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [IncrementadorComponent, GrafdonaComponent],
  exports: [IncrementadorComponent, GrafdonaComponent],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
