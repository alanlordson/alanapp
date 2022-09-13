import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TestComponent } from './test/test.component';
import { ThreeComponent } from './three/three.component';
import { FourComponent } from './four/four.component';
import { FiveComponent } from './five/five.component';
import { SixComponent } from './six/six.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path:'one',   component:OneComponent},
  {path:'two',   component:TwoComponent},
  {path:'three', component:ThreeComponent},
  {path:'four',  component:FourComponent},
  {path:'five',  component:FiveComponent},
  {path:'six',   component:SixComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    TestComponent,
    ThreeComponent,
    FourComponent,
    FiveComponent,
    SixComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,MatCardModule,MatIconModule,MatSidenavModule,
    MatFormFieldModule,MatSelectModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
