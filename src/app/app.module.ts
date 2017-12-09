import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { appRoutes } from './app.routes';
import { CaliberModule } from './Caliber/caliber.module';
import { Routes } from '@angular/router/src/config';
import { BamModule } from './Bam/bam.module';


// loading routes from child modules this way will lazy load them
const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Caliber', loadChildren: './Caliber/caliber.module#CaliberModule'},
  {path: 'Bam', loadChildren: './Bam/bam.module#BamModule'},
  {path: '**', pathMatch: 'full', redirectTo: 'login'}
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
