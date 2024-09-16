import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyRouteComponent } from './my-route/my-route.component';
import { MyCollegeComponent } from './my-college/my-college.component';
import { TemplateFormComponent } from './Form/template-form/template-form.component';
import { ReactiveFormComponent } from './Form/reactive-form/reactive-form.component';
import { GetApiComponent } from './apiIntegration/get-api/get-api.component';
import { PostApiComponent } from './apiIntegration/post-api/post-api.component';
import { LifecyleEventComponent } from './lifecyle-event/lifecyle-event.component';


const routes: Routes = [{
  path:'myR',
component : MyRouteComponent                                         
},
{
  path:'myclg',
  component:MyCollegeComponent
},
{
  path:'myTemp',
  component:TemplateFormComponent
},
{
  path:'myReact',
  component:ReactiveFormComponent
},

{
  path:'myGetApi',
  component:GetApiComponent
},
{
  path:'myPostApi',
  component:PostApiComponent
},
{
  path:'myLife',
  component:LifecyleEventComponent
}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
