import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PushNotificationModule } from 'ng-push-notification';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { HomeComponent } from './home/home.component';
import { InsightsComponent } from './insights/insights.component';
import { IndustriesComponent } from './industries/industries.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesListComponent } from './services-list/services-list.component';

// lazy laoded Service module
import { ServicesModule } from './services/services.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

//Loading UnsavedChangesGuard
import { UnsavedChangesGuard } from './_guards/un-saved-changes-guard.service';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ListOfRegisteredUsersComponent } from './list-of-registered-users/list-of-registered-users.component';
import { UserDataDisplayComponent } from './user-data-display/user-data-display.component';
import { HighlightDirective } from './_directives/highlight.directive';
import { CustomLoopDirective } from './_directives/custom-loop.directive';
import { RotateAnimationDirective } from './_directives/rotate-animation.directive';

//loading Services
import { PostsService } from './_services/posts.service';
import { UsersService } from './_services/users.service';
import { RxjsOperatorsComponent } from './rxjs-operators/rxjs-operators.component';
import {SharedServiceService} from './_services/shared-service.service';
import { PiechartComponent } from './piechart/piechart.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HomeComponent,
    InsightsComponent,
    IndustriesComponent,
    CareersComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    ServicesListComponent,
    PageNotFoundComponent,
    LoginComponent,
    SignUpComponent,
    ListOfRegisteredUsersComponent,
    UserDataDisplayComponent,
    HighlightDirective,
    CustomLoopDirective,
    RotateAnimationDirective,
    RxjsOperatorsComponent,
    PiechartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PushNotificationModule.forRoot()
  ],
  providers: [
    UnsavedChangesGuard,
    PostsService,
    UsersService,
    SharedServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
