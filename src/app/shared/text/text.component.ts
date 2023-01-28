import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input()
  public id: any;

  @Input()
  public label: string = '';

  @Input()
  public disabled:boolean = false;

  public valor: string = '';

  @Output()
  public handleInput: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public input():void{
    
    this.handleInput.emit(this.valor)
  }

}
