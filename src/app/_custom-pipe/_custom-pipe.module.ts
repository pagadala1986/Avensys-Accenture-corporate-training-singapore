import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomPipeRoutingModule } from './_custom-pipe-routing.module';
import { CompanyOnePipe } from './companyone.pipe';
import { CompanyTwoPipe } from './companytwo.pipe';
import { CustomPipeComponent } from './custompipe.component';
import { DivisionPipe } from './division.pipe';
import { MyJSONPipe } from './myjson.pipe';
import { MyUppercaseOnePipe } from './myuppercaseone.pipe';
import { MyUppercaseTwoPipe } from './myuppercasetwo.pipe';
import { RepeatPipe } from './repeat.pipe';
import { StrFormatPipe } from './strformat.pipe';
import { WelcomePipe } from './welcome.pipe';
import { DisplayCustomPipesComponent } from './display-custom-pipes/display-custom-pipes.component';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { CustomDateComponent } from './custom-date/custom-date.component';
import { CustomDatePipe } from './custom-date.pipe';


@NgModule({
  declarations: [
    StrFormatPipe,
    MyUppercaseOnePipe,
    MyUppercaseTwoPipe,
    DivisionPipe,
    RepeatPipe,
    MyJSONPipe,
    CompanyOnePipe,
    CompanyTwoPipe,
    CustomPipeComponent,
    WelcomePipe,
    DisplayCustomPipesComponent,
    CustomDateComponent,
    CustomDatePipe,
    AsyncPipeComponent
  ],
  imports: [
    CommonModule,
    CustomPipeRoutingModule,

  ]
})
export class CustomPipeModule { }
