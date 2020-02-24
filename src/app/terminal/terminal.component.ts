import { Component, OnInit } from '@angular/core';
import { faTimes, faExpandAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.sass']
})
export class TerminalComponent implements OnInit {
  public faTimes = faTimes;
  public faExpandAlt = faExpandAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
