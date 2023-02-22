import { FormsModule } from '@angular/forms';
import { IconsProviderModule } from './../../icons-provider.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgModule } from '@angular/core';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzImageModule } from 'ng-zorro-antd/experimental/image';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
  CommonModule,
  WelcomeRoutingModule,
  NzButtonModule,
  IconsProviderModule,
  NzInputModule,
  NzInputModule,
  NzGridModule,
  NzNotificationModule,
  NzModalModule,
  NzSelectModule,
  NzSpaceModule,
  NzDatePickerModule,
  NzImageModule,
  FormsModule,
],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
