Ember.js Components
====================
## Popover
### Usage
Basic example of how this component can be used.

```handlebars
{{#pop-over title='My Popover' isVisible=controller.isMyPopoverVisible}}
  <h3>My Content Here</h3>
  <p>Small description of something..</p>
{{/pop-over}}
```


## RangeInput
Simple HTML5 Range input Ember view.

### Usage
The most basic, which is initialized with these default values:
* min: 0
* max: 10
* step: 1
* value: 5

```hbs
{{view BC.RangeInput valueBinding="controller.transparency"}}
```

You can also do the following
```hbs
{{view BC.RangeInput min="0" max="1" step="0.01" valueBinding="controller.transparency"}}
```

This will return html along the lines of

```html
<input id="ember455" class="ember-view" type="range" min="0" max="1" step="0.01" value="1">
```

### Using with jQuery Tools RangInput
See [jQuery Tools Range Input](http://jquerytools.org/documentation/rangeinput/) for more info on implementation.

The control creates it's own HTML, so you would have to implement `change` and `drag` on a parent view, 
since `RangeInput` will not register events since it's value is not really being changed.

### Valid Options

* min
* max
* type
* name
* step
* value
