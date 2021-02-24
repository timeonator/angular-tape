import { Component, OnInit, Input } from '@angular/core';
import { Tape } from '../../models/Tape';

@Component({
  selector: 'app-tape-item',
  templateUrl: './tape-item.component.html',
  styleUrls: ['./tape-item.component.scss']
})

export class TapeItemComponent implements OnInit {
  @Input() tape: Tape;
  bn:string = "press to stop";

  constructor() { }

  ngOnInit(): void {
  }
  clickEvent() {
      this.bn = "presss to go";
  }

}
