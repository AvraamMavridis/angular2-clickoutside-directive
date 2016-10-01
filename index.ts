import { Directive, ElementRef, Output, EventEmitter, OnInit, OnDestroy } from 'angular2/core';

const clickOutsideEvents = [ 'mousedown', 'touchstart' ];
const isDescendant = ( el, target ) => target !== null ? el === target || isDescendant( el, target.parentNode ) : false;

@Directive({ selector: '[clickOutside]' })
export class ClickOutsideDirective implements OnInit, OnDestroy
{
    public onClickOutsideHandler : EventListener;

    constructor( public el : ElementRef ){
      this.onClickOutsideHandler = this.handleClickOutside.bind( this )
    }

    ngOnInit(){
      clickOutsideEvents.forEach( e => document.addEventListener( e, this.onClickOutsideHandler ) )
    }

    ngOnDestroy() {
      clickOutsideEvents.forEach( e => document.removeEventListener( e, this.onClickOutsideHandler ) );
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
