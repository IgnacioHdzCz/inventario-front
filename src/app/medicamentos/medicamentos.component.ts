import { Component, OnInit } from '@angular/core';
import { InventarioDrogueria } from './inventario';
import { InventarioService } from './data.service';


@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.component.html',
  styleUrls: ['./medicamentos.component.css']
})
export class MedicamentosComponent implements OnInit {
  
  titulo:  string = "Lista de Medicamentos";
  prueba:string ="Test!!!";
  medicamentos:InventarioDrogueria[]=[];
  
  ngOnInit(): void {

    this.medicamentoService.getInventarioAll().subscribe(
      m => this.medicamentos = m
    );
  }

  constructor (private medicamentoService: InventarioService){
    
  }




}
