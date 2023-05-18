import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StiflerComp1Component } from './share/conponent/stifler-comp1/stifler-comp1.component';
import { FormsModule } from '@angular/forms';
import { MaterialModuleSTIFLER } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StiflerComp2Component } from './share/conponent/stiflercomp2/stiflercomp2.component';
import { NewComponentComponent } from './new-component/new-component.component';
@NgModule({
  declarations: [AppComponent, StiflerComp1Component, StiflerComp2Component, NewComponentComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModuleSTIFLER,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
