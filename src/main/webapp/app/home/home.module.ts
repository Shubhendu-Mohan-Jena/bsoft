import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BsoftSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [BsoftSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent],
})
export class BsoftHomeModule {}
