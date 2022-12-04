import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {LogInComponent} from './views/sessions/log-in/log-in.component';
import {SignUpComponent} from './views/sessions/sign-up/sign-up.component';
import {ThankYouPageComponent} from './views/sessions/thank-you-page/thank-you-page.component';
import {ResetPasswordComponent} from './views/sessions/reset-password/reset-password.component';
import {RouterModule, Routes} from '@angular/router';
// import {CKEditorModule} from "ng2-ckeditor";
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {path: '', component: LogInComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'reset-password', component: ResetPasswordComponent},
  {path: 'thank-you-page', component: ThankYouPageComponent},
  {path: 'home', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    ThankYouPageComponent,
    ResetPasswordComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    CKEditorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
