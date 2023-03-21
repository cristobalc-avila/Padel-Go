import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaAhoraComponent } from './reservas/reserva-ahora/reserva-ahora.component';
import { FormularioReservaComponent } from './reservas/formulario-reserva/formulario-reserva.component';
import { HabilitarCanchaComponent } from './habilitar-cancha/habilitar-cancha.component';
import { RegistroComponent } from './registro/registro.component';
import {CookieService} from 'ngx-cookie-service';
import { TokenInterceptorService } from './interceptor/token-interceptor.service';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InicioComponent } from './reportes/inicio/inicio/inicio.component';
import { ReporteCompletoComponent } from './reportes/completo/reporte-completo/reporte-completo.component';
import { ReporteGeneralComponent } from './reportes/general/reporte-general/reporte-general.component';
import { ReporteCanchaComponent } from './reportes/cancha/reporte-cancha/reporte-cancha.component';
import { PartidasComponent } from './partidas/partidas.component';
import { FormPartidaComponent } from './partidas/form-partida/form-partida.component';
import { ReservaPartidaComponent } from './partidas/reserva-partida/reserva-partida.component';
import { MisReservasComponent } from './reservas/mis-reservas/mis-reservas.component';
import { HeaderAdminComponent } from './header-admin/header-admin.component';
import { Error404Component } from './error404/error404.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ReservasComponent,
    ReservaAhoraComponent,
    FormularioReservaComponent,
    HabilitarCanchaComponent,
    RegistroComponent,
    HomeAdminComponent,
    PartidasComponent,
    FormPartidaComponent,
    ReservaPartidaComponent,
    MisReservasComponent,
    InicioComponent,
    ReporteCompletoComponent,
    ReporteGeneralComponent,
    ReporteCanchaComponent,
    PartidasComponent,
    HeaderAdminComponent,
    Error404Component

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService,{provide:HTTP_INTERCEPTORS,
                            useClass:TokenInterceptorService,
                            multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
