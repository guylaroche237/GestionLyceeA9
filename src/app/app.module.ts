import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FileService } from './shared_services/file.service';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  
  providers: [AppService,FileService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
