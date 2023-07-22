import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomLabelDirective } from './directives/custom-label/custom-label.directive';

@NgModule({
  declarations: [CustomLabelDirective],
  imports: [CommonModule],
  exports: [CustomLabelDirective],
})
export class SharedModule {}
