import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FileService } from './shared_services/file.service';
import { ClassesService } from './shared_services/classes.service';
import { ParametreService } from './shared_services/parametre.service';
import { MatiereService } from './shared_services/matiere.service';
import { ForumService } from './shared_services/forum.service';
import { AdminService } from './shared_services/admin.service';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppService } from './app.service';
import { from } from 'rxjs';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MatiereComponent } from './composant/matiere/matiere.component';
import { EnseignantComponent } from './composant/enseignant/enseignant.component';
import { CompteComponent } from './composant/compte/compte.component';
import { TchatComponent } from './composant/tchat/tchat.component';
import { PublicationComponent } from './composant/publication/publication.component';
import { AdminComponent } from './composant/admin/admin.component';
import { AdmatiereComponent } from './composant/admatiere/admatiere.component';
import { AdcompoComponent } from './composant/adcompo/adcompo.component';
import { AdensgComponent } from './composant/adensg/adensg.component';
import { ShareComponent } from './share/share.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    MatiereComponent,
    EnseignantComponent,
    CompteComponent,
    TchatComponent,
    PublicationComponent,
    AdminComponent,
    AdmatiereComponent,
    AdcompoComponent,
    AdensgComponent,
    ShareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
    
  ],
  
  providers: [AppService,FileService,ClassesService,ParametreService,MatiereService,ForumService,AdminService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
