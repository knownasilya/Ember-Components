Ember.js-Range-Input
====================

Simple HTML5 Range input Ember view.

Usage
=====

The most basic, whic is initialized with default values:
* min: 0
* max: 10
* step: 1

```
{{view BC.RangeInput valueBinding="controller.transparency"}}
```

You can also do the following
```
{{view BC.RangeInput min="0" max="1" step="0.01" valueBinding="controller.transparency"}}
```

This will return html along the lines of

```html
<input id="ember455" class="ember-view" type="range" min="0" max="1" step="0.01" value="1">
```
