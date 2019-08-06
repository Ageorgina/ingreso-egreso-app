import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modulos
import { AppRoutingModule } from './app-routing.module';
// import { ReactiveFormsModule } from '@angular/forms'; --> ingreso-egreso.module
// import {FormsModule, ReactiveFormsModule} from '@angular/forms'; --> quitamos Forms module exportado en auth.module

// NGRX
import { StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

// Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { AngularFireAuthModule } from '@angular/fire/auth'; --> auth.module

// Modulos Personalizados
import { AuthModule } from './auth/auth.module';
// import { SharedModule } from './shared/shared.module'; --> ingreso-egreso.module
// import { IngresoEgresoModule } from './ingreso-egreso/ingreso-egreso.module';


// Gráficas
// import { ChartsModule } from 'ng2-charts';  --> ingreso-egreso.module

// Environment
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
// import { LoginComponent } from './auth/login/login.component'; --> auth.module
// import { RegisterComponent } from './auth/register/register.component'; --> auth.module
// import { DashboardComponent } from './dashboard/dashboard.component';  --> ingreso-egreso.module
// import { IngresoEgresoComponent } from './ingreso-egreso/ingreso-egreso.component'; --> ingreso-egreso.module
// import { EstadisticaComponent } from './ingreso-egreso/estadistica/estadistica.component'; --> ingreso-egreso.module
// import { DetalleComponent } from './ingreso-egreso/detalle/detalle.component'; --> ingreso-egreso.module
// import { FooterComponent } from './shared/footer/footer.component'; -->shared.module
// import { NavbarComponent } from './shared/navbar/navbar.component'; -->shared.module
// import { SidebarComponent } from './shared/sidebar/sidebar.component'; -->shared.module ingreso-egreso.module

@NgModule({
  declarations: [
    AppComponent
   // LoginComponent, --> auth.module
   // RegisterComponent, --> auth.module
   // DashboardComponent, --> ingreso-egreso.module
    // IngresoEgresoComponent, --> ingreso-egreso.module
    // EstadisticaComponent, --> ingreso-egreso.module
    // DetalleComponent,       --> ingreso-egreso.module
    // FooterComponent, -->shared.module
    // NavbarComponent, -->shared.module
    // SidebarComponent, -->shared.module
    // OrdenIngresoEgresoPipe   --> ingreso-egreso.module
  ],
  imports: [
    BrowserModule,
    AuthModule,
    // SharedModule,  -->ingreso-egreso.module 
    // IngresoEgresoModule,
    AppRoutingModule,
    // ReactiveFormsModule, -->ingreso-egreso.module
    // FormsModule, --> auth.module
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // AngularFireAuthModule, --> auth.module
    // ChartsModule, -->ingreso-egreso.module 
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
 ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
