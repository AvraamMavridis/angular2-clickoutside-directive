# angular2-clickoutside-directive
Angular 2 directive that provides Click Outside Functionality

[![npm version](https://badge.fury.io/js/angular2-clickoutside-directive.svg)](https://badge.fury.io/js/angular2-clickoutside-directive)

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)

## Install

`npm i angular2-clickoutside-directive --save`

### Import the directive to your project and use it in your Component defining an event handler

```typescript
import { ClickOutsideDirective } from 'angular2-clickoutside-directive';

@Component({
  selector: 'my-app',
  template : `
  <button clickOutside (onClickOutside)="onClickOutside($event)">
    A button
  </button>`,
  directives : [  ClickOutsideDirective ]
} )
class MyFirstComponent implements OnInit {
  constructor(){}

  onClickOutside($event)
  {
    console.log('Clicked outside')
  }

  ngOnInit(){}
}
```
### Contribute

Any pull-request is more than welcome :boom: :smile:

This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/). By participating, you are expected to uphold this code.

### License

MIT
