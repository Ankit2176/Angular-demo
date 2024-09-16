import { EventEmitter, NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyRouteComponent } from './my-route/my-route.component';
import { MyCollegeComponent } from './my-college/my-college.component';
import { TemplateFormComponent } from './Form/template-form/template-form.component';
import { ReactiveFormComponent } from './Form/reactive-form/reactive-form.component';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetApiComponent } from './apiIntegration/get-api/get-api.component';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { PostApiComponent } from './apiIntegration/post-api/post-api.component';
import { ForAlertComponent } from './apiIntegration/for-alert/for-alert.component';
import { MyButtonComponent } from './apiIntegration/my-button/my-button.component';
import { LifecyleEventComponent } from './lifecyle-event/lifecyle-event.component';


@NgModule({
  declarations: [
    AppComponent,
    MyRouteComponent,
    MyCollegeComponent,
    TemplateFormComponent,
    ReactiveFormComponent,
    GetApiComponent,
    PostApiComponent,
    ForAlertComponent,
    MyButtonComponent,
    LifecyleEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    
  
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient()


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
