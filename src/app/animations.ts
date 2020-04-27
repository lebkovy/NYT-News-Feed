import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';

export let slideInLeft = trigger('slideInLeft', [
  transition(':enter', [
    animate('.6s cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
      style({
        offset:     0,
        transform:  'translate3d(-50%, 0, 0)',
        visibility: 'visible'
      }),
      style({
        offset:    1,
        transform: 'translate3d(0, 0, 0)'
      })
    ]))
  ])
]);

export let likeAction = trigger('likeAction', [
  state('initial', style({})),
  state('final', style({})),
  transition('initial=>final', animate('500ms cubic-bezier(0.215, 0.61, 0.355, 1)', keyframes([
    style({
      offset: 0,
      transform: 'scale3d(1, 1, 1)'
    }),
    style({
      offset: .1,
      transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg)'
    }),
    style({
      offset: .2,
      transform: 'scale3d(.9, .9, .9) rotate3d(0, 0, 1, -6deg)'
    }),
    style({
      offset: .3,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, 3deg)'
    }),
    style({
      offset: .4,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, -16deg)'
    }),
    style({
      offset: .5,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, 3deg)'
    }),
    style({
      offset: .6,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, -16deg)'
    }),
    style({
      offset: .7,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, 3deg)'
    }),
    style({
      offset: .8,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, -3deg)'
    }),
    style({
      offset: .9,
      transform: 'scale3d(2.2, 2.2, 2.2) rotate3d(0, 0, 1, 16deg)'
    }),
    style({offset: 1, transform: 'scale3d(1, 1, 1)'}),
  ]))),
  transition('final=>initial', animate('100ms'))
]);
