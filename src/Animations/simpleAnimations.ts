import {trigger, state, transition, style, animate} from '@angular/animations';


export const startAnimationTrigger = trigger('startAnimationTrigger', [
  state('hide', style({opacity: 0})),
  state('show', style({opacity: 1})),

  transition('void => hide', animate(1500)),
  transition('void => show', animate(1500)),
  transition('hide => show', animate(800)),
  transition('show => hide', animate(1500)),


]);


export const navbarAnimationtrigger = trigger('navAnimateTrigger', [
  state('fullSc', style({transform: 'translateX(0)'})),

  transition('void => fullSc', animate(400)),


]);


export const postInputBarHandler = trigger('inputHandlerAnimation', [
  state('opened', style({height: '50%'})),
  state('closed', style({height: '0'})),
  transition('void <=> opened', animate(400)),
  transition('closed <=> opened', animate(400)),

]);



export const showAnimation = trigger('showTrigger',[
  state('show', style({opacity: 1})),

  transition('void <=> show', animate(700)),
]);
