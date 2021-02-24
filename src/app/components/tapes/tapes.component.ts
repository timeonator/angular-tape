import { Component, OnInit } from '@angular/core';
import { Tape } from '../../models/Tape';
import { TapeService } from '../../services/tape.service';

@Component({
  selector: 'app-tapes',
  templateUrl: './tapes.component.html',
  styleUrls: ['./tapes.component.scss']
})
export class TapesComponent implements OnInit {
    tapes:Tape[];

  constructor(private tapeService:TapeService) { }

  ngOnInit(): void {
      this.tapeService.getTapes().subscribe(tapes => {
          this.tapes = tapes;
      });
  }

}
