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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignComponent } from './faux/sign.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { SuperComponent } from './super/super.component';
import { SuploginComponent } from './suplogin/suplogin.component';
import { PrincipaleComponent } from './config/principale/principale.component';
import { MatierecompoComponent } from './config/matierecompo/matierecompo.component';
import { ListbulletinComponent } from './config/listbulletin/listbulletin.component';
import { CarnetComponent } from './config/carnet/carnet.component';
import { MycarnetComponent } from './config/mycarnet/mycarnet.component';
import { VoirbullComponent } from './config/voirbull/voirbull.component';
import { SalleComponent } from './config/salle/salle.component';
import { AdpubComponent } from './composant/adpub/adpub.component';




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
    ShareComponent,
    SignComponent,
    BulletinComponent,
    SuperComponent,
    SuploginComponent,
    PrincipaleComponent,
    MatierecompoComponent,
    ListbulletinComponent,
    CarnetComponent,
    MycarnetComponent,
    VoirbullComponent,
    SalleComponent,
    AdpubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
    
  ],
  
  providers: [AppService,FileService,ClassesService,ParametreService,MatiereService,ForumService,AdminService],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
