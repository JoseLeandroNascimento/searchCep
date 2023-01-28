import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SelectOpcao } from '../model/select-opcao';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input()
  public label:string = "Label";

  @Input()
  public id:string = "id";

  @Input()
  public opcoes: Array<SelectOpcao> = [];

  public opcaoSelected:SelectOpcao = <SelectOpcao>{};

  @Output() 
  public handleSelect: EventEmitter<SelectOpcao> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public selected():void{
  
    this.handleSelect.emit(this.opcaoSelected);
  }

}
