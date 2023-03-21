import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ReservaAhoraComponent } from './reservas/reserva-ahora/reserva-ahora.component';
import { FormularioReservaComponent } from './reservas/formulario-reserva/formulario-reserva.component';
import { HabilitarCanchaComponent } from './habilitar-cancha/habilitar-cancha.component';
import { LoguinGuardGuard } from './guard/loguin-guard.guard';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { InicioComponent } from './reportes/inicio/inicio/inicio.component';
import { ReporteCanchaComponent } from './reportes/cancha/reporte-cancha/reporte-cancha.component';
import { ReporteGeneralComponent } from './reportes/general/reporte-general/reporte-general.component';
import { ReporteCompletoComponent } from './reportes/completo/reporte-completo/reporte-completo.component';
import { PartidasComponent } from './partidas/partidas.component';
import { FormPartidaComponent } from './partidas/form-partida/form-partida.component';
import { ReservaPartidaComponent } from './partidas/reserva-partida/reserva-partida.component';
import { MisReservasComponent } from './reservas/mis-reservas/mis-reservas.component';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [

  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'home-admin',component:HomeAdminComponent},
  { path: 'login', component: LoginComponent },
  { path: 'reservas', component: ReservasComponent },
  { path: 'reserva-ahora', component: ReservaAhoraComponent,canActivate:[LoguinGuardGuard]},
  { path: 'reservas/mis-reservas', component: MisReservasComponent,canActivate:[LoguinGuardGuard]},
  { path: 'formulario-reserva', component: FormularioReservaComponent },
  { path: 'registro', component: RegistroComponent},
  { path: 'HabilitarCancha', component: HabilitarCanchaComponent },
  { path: 'partida',component:PartidasComponent,canActivate:[LoguinGuardGuard]},
  { path: 'formulario-partida',component:FormPartidaComponent,canActivate:[LoguinGuardGuard]},
  { path: 'reserva-partida',component:ReservaPartidaComponent,canActivate:[LoguinGuardGuard]},
  { path: 'inicio',component: InicioComponent},
  { path: 'reporteporcanchas',component: ReporteCanchaComponent},
  { path: 'general',component: ReporteGeneralComponent},
  { path: 'reportecompleto',component: ReporteCompletoComponent},
  { path:  'partida',component:PartidasComponent,canActivate:[LoguinGuardGuard]},
  { path: '**', component: Error404Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
