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


const routes: Routes = [
  {path: 'login', component: LoginComponent},
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
  {path: '', redirectTo: '/login',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  id:string;
 }
