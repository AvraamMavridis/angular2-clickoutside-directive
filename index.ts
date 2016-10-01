import { Directive, ElementRef, Output, EventEmitter } from 'angular2/core';

const clickOutsideEvents = [ 'mousedown', 'touchstart' ];
const isDescendant = ( el, target ) => target !== null ? el === target || isDescendant( el, target.parentNode ) : false;

@Directive({ selector: '[clickOutside]' })
export class ClickOutsideDirective
{
    constructor( public el : ElementRef )
    {
       clickOutsideEvents.forEach( e => document.addEventListener( e, this.handleClickOutside.bind( this ) ) )
    }

    @Output() onClickOutside : EventEmitter<any> = new EventEmitter();

    handleClickOutside( event )
    {
      if ( document.documentElement.contains( event.target ) && !isDescendant( this.el.nativeElement, event.target ) )
      {
          this.onClickOutside.emit( event );
      }
    }
}

export default ClickOutsideDirective;
