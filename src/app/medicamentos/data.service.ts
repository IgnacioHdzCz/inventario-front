import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';
import { Observable } from "rxjs";
import { InventarioDrogueria } from "./inventario";

@Injectable()
export class InventarioService{

    private url : string ="http://localhost:51224/listar";
    constructor(private http:HttpClient){ };


    
    //Obtener medicamentos
    getInventarioAll():Observable<InventarioDrogueria[]>{
        return this.http.get<InventarioDrogueria[]>(this.url)
    }


   createMedicamento (inventario:InventarioDrogueria):Observable<InventarioDrogueria>{
    return this.http.post<InventarioDrogueria>(this.url,inventario);

   }


   get(nombre:string):Observable<InventarioDrogueria>{
    return this.http.get<InventarioDrogueria>(this.url+'/'+nombre)
}

//actualizar un estudiante
update(inventario:InventarioDrogueria):Observable<InventarioDrogueria>{
    return this.http.put<InventarioDrogueria>(this.url,inventario);
}

//eliminar


delete (nombre:string):Observable<InventarioDrogueria>{
    return this.http.delete<InventarioDrogueria>(this.url+'/'+nombre)
}




}