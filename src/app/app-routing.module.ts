import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { AntipastiComponent } from './components/parti-menu/antipasti/antipasti.component';
import { PaniniComponent } from './components/parti-menu/panini/panini.component';
import { SecondiComponent } from './components/parti-menu/secondi/secondi.component';
import { BevandeComponent } from './components/parti-menu/bevande/bevande.component';
import { BirreComponent } from './components/parti-menu/birre/birre.component';
import { DolciComponent } from './components/parti-menu/dolci/dolci.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GestioneComponent } from './components/gestione/gestione.component';
import { AuthGuard } from './guards/auth.guard';
import { AdminGuard } from './guards/admin.guard';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfiloComponent } from './components/profilo/profilo.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'menu', component: MenuComponent, children: [
      { path: 'antipasti', component: AntipastiComponent},
      { path: 'panini', component: PaniniComponent},
      { path: 'secondi', component: SecondiComponent},
      { path: 'bevande', component: BevandeComponent},
      { path: 'birre', component: BirreComponent},
      { path: 'dolci', component: DolciComponent},
      { path: 'carrello', component: CarrelloComponent, canActivate: [AuthGuard]},
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'adminlogin', component: LoginComponent },
  { path: 'profilo', component: ProfiloComponent },
  { path: 'gestione', component: GestioneComponent, canActivate: [AdminGuard]},
  { path: 'logout', component: LogoutComponent },
  { path: '404', component: NotfoundComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })], //forzo il reload del componente nell'outlet se navigo verso lui stesso - runGuardsAndResolvers: 'always'
  exports: [RouterModule]
})
export class AppRoutingModule { }
