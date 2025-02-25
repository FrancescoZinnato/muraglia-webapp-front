import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { AntipastiComponent } from './components/parti-menu/antipasti/antipasti.component';
import { PaniniComponent } from './components/parti-menu/panini/panini.component';
import { SecondiComponent } from './components/parti-menu/secondi/secondi.component';
import { BevandeComponent } from './components/parti-menu/bevande/bevande.component';
import { BirreComponent } from './components/parti-menu/birre/birre.component';
import { DolciComponent } from './components/parti-menu/dolci/dolci.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { GestioneComponent } from './components/gestione/gestione.component';
import { FormAggiungiComponent } from './components/form-aggiungi/form-aggiungi.component';
import { AdminantipastiComponent } from './components/admin/adminantipasti/adminantipasti.component';
import { AdminpaniniComponent } from './components/admin/adminpanini/adminpanini.component';
import { AdminsecondiComponent } from './components/admin/adminsecondi/adminsecondi.component';
import { AdmindolciComponent } from './components/admin/admindolci/admindolci.component';
import { AdminbevandeComponent } from './components/admin/adminbevande/adminbevande.component';
import { AdminbirreComponent } from './components/admin/adminbirre/adminbirre.component';
import { FormModificaComponent } from './components/form-modifica/form-modifica.component';
import { CarrelloComponent } from './components/carrello/carrello.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminordiniComponent } from './components/admin/adminordini/adminordini.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfiloComponent } from './components/profilo/profilo.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MenuComponent,
    AntipastiComponent,
    PaniniComponent,
    SecondiComponent,
    BevandeComponent,
    BirreComponent,
    DolciComponent,
    NotfoundComponent,
    GestioneComponent,
    FormAggiungiComponent,
    AdminantipastiComponent,
    AdminpaniniComponent,
    AdminsecondiComponent,
    AdmindolciComponent,
    AdminbevandeComponent,
    AdminbirreComponent,
    FormModificaComponent,
    CarrelloComponent,
    AdminordiniComponent,
    LogoutComponent,
    ProfiloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
