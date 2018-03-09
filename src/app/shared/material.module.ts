import {NgModule} from '@angular/core';
import {MatCardModule, MatExpansionModule, MatFormFieldModule, MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule
  ],
})
export class MaterialModule {
}
