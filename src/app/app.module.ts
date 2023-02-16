import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToolbarModule } from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import { AppComponent } from './app.component';
import { InventarioService } from './medicamentos/data.service';
import { MedicamentosComponent } from './medicamentos/medicamentos.component';

@NgModule({
  declarations: [
    AppComponent,
    MedicamentosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ToolbarModule,
    TableModule

  ],
  providers: [InventarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
