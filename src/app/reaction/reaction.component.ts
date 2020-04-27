import {Component, EventEmitter, Input, Output} from '@angular/core';
import {likeAction} from '../animations';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
  animations: [likeAction]
})
export class ReactionComponent {

  @Input('value') value: boolean;
  @Input('icon') icon: string;
  @Input('color') color: string;
  @Input('textInitial') textInitial: string;
  @Input('textFinal') textFinal: string;
  @Output() reaction = new EventEmitter<boolean>();

  animationState = 'initial';

  constructor() {
  }

  changeState() {
    this.value = !this.value;
    this.reaction.emit(this.value);
    this.animationState = this.animationState === 'initial' ? 'final' : 'initial';
  }

}
