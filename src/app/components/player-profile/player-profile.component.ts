import {Component, Input, OnInit} from '@angular/core';
import {Player} from "../../../models/player";
import {trigger, state, style, animate, transition} from "@angular/animations";

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.scss'],
  animations: [
    trigger(
        'enterAnimation', [
          transition(':enter', [
            style({transform: 'translateX(100%)', opacity: 0}),
            animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
          ]),
          transition(':leave', [
            style({transform: 'translateX(0)', opacity: 1}),
            animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
          ])
        ]
    )
  ]
})
export class PlayerProfileComponent implements OnInit {
  @Input() player: Player;

  isExpanded: boolean = false;

  expand(): boolean {
    if(this.isExpanded) {
      this.isExpanded = !this.isExpanded;
      return !this.isExpanded;
    } else if(!this.isExpanded) {
      this.isExpanded = !this.isExpanded;
      return this.isExpanded;
    }
  }
  constructor() { }

  toggleInfiniteScroll() {

  }

  ngOnInit() {

  }

}
