import { IconsProviderModule } from './../../icons-provider.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgModule } from '@angular/core';
import { NzSpaceModule } from 'ng-zorro-antd/space';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';


@NgModule({
  imports: [WelcomeRoutingModule,
  NzButtonModule,
  IconsProviderModule,
  NzInputModule,
  NzInputModule,
  NzGridModule,
  NzNotificationModule,
  NzModalModule,
  NzSelectModule,
  NzSpaceModule
],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
