import { Component, OnInit } from '@angular/core';
import { LocalidadesService } from 'src/app/service/localidades.service';
import { SelectOpcao } from 'src/app/shared/model/select-opcao';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public opcEstados:Array<SelectOpcao> = [];
  public opcMunicipios: Array<SelectOpcao> = [];

  public estado: string= '';
  public municipio: string = '';
  public logradouro:string = '';

  public ceps: Array<any> = [];

  constructor(
    private localidadeService: LocalidadesService
  ) { }

  ngOnInit(): void {

    this.localidadeService.getEstados().subscribe({
      next:(estados:Array<any>)=>{
        this.opcEstados = estados.map((estado):SelectOpcao=>{
          return {title:estado.nome,value:estado.id,data:{sigla:estado.sigla,id:estado.id}}
        })
        
      }
    })

  }

  public selectEstado(opcao:SelectOpcao):void{

    this.estado = opcao.data.sigla;

    this.localidadeService.getMunicipios(opcao.data?.id).subscribe({
      next:(value:Array<any>): Array<SelectOpcao>=>{

        this.opcMunicipios = value.map((municipio)=>{
          
          return {title:municipio.nome,value:municipio.id};
        
        })
        
        return this.opcMunicipios;
      }
    })
  }

  public selectMunicio(opcao:SelectOpcao):void{

    this.municipio = opcao.title;  
  }

  public inputLogradouro(value:string):void{

    this.logradouro = value;

  }

  public search():void{

    if(this.logradouro.length >= 3){

      this.localidadeService.getCEP(this.estado,this.municipio,this.logradouro).subscribe({
        next:(ceps:Array<any>)=>{
         
          this.ceps = ceps;
          
        }
      })
    }
  }

}
