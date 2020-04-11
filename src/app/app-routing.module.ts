import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { HomeComponent } from './home/home.component';
import { from } from 'rxjs';
import { MatiereComponent } from './composant/matiere/matiere.component';
import { EnseignantComponent } from './composant/enseignant/enseignant.component';
import { CompteComponent } from './composant/compte/compte.component';
import { TchatComponent } from './composant/tchat/tchat.component';
import { PublicationComponent } from './composant/publication/publication.component';
import { AdminComponent } from './composant/admin/admin.component';
import { AdensgComponent } from './composant/adensg/adensg.component';
import { AdcompoComponent } from './composant/adcompo/adcompo.component';
import { AdmatiereComponent } from './composant/admatiere/admatiere.component';
import { BulletinComponent } from './bulletin/bulletin.component';
import { SuperComponent } from './super/super.component';
import { SuploginComponent } from './suplogin/suplogin.component';
import { PrincipaleComponent } from './config/principale/principale.component';
import { MatierecompoComponent } from './config/matierecompo/matierecompo.component';
import { ListbulletinComponent } from './config/listbulletin/listbulletin.component';
import { CarnetComponent } from './config/carnet/carnet.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
 // {path: 'super', component: SuperComponent, children:[ {path:'principale',component:PrincipaleComponent,outlet:'superOutlet'}]},
 // {path: 'auth', component: SuploginComponent},
  {path: 'home', component: HomeComponent,
   children: [
     {path:'matiere',component:MatiereComponent,outlet:'contentOutlet'},
     {path: 'enseignant',component:EnseignantComponent,outlet:'contentOutlet'},
     {path: 'compte',component:CompteComponent,outlet:'contentOutlet'},
     {path: 'tchat',component:TchatComponent,outlet:'contentOutlet'},
     {path: 'publication',component:PublicationComponent,outlet:'contentOutlet'}
   ]
},
 // {path: 'home/matiere', component: MatiereComponent},
  {path: '', redirectTo: '/login',pathMatch: 'full'},
  {path:'admin',component: AdminComponent,
   children: [
    {path:'adens', component: AdensgComponent,outlet:'adminOutlet'},
    {path:'admatiere', component: AdmatiereComponent,outlet:'adminOutlet'},
    {path:'adcompo', component: AdcompoComponent,outlet:'adminOutlet'},
    {path:'bulletin',component:BulletinComponent,outlet:'adminOutlet'},
    {path:'auth',component:SuploginComponent,outlet:'adminOutlet'},
    {path:'principale',component:PrincipaleComponent,outlet:'adminOutlet'},
    {path: 'matcp',component: MatierecompoComponent,outlet:'adminOutlet'},
    {path: 'listbulletin',component:ListbulletinComponent,outlet:'adminOutlet'},
    {path: 'carnet', component:CarnetComponent,outlet:'adminOutlet'}

   ]
}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  id:string;
 }
