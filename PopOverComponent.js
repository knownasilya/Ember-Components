App.PopOverComponent = Ember.Component.extend({  
  title: 'Title',
  position: 'bottom',
  isVisible: false,
  classNames: ['popover'],
  classNameBindings: ['position', 'isVisible:in', 'isVisible:fade'],
  actions: {
    close: function () {
      this.set('isVisible', false);
    }
  },
  didInsertElement: function () {
    var boundTo = this.get('boundTo'),
        $this = this.$(),
        $boundTo, 
        position,
        height,
        halfWidth;
    
    if (boundTo) {
      $boundTo = Ember.$(this.get('boundTo')),
      position = $boundTo.position(),
      height = parseInt($boundTo.height(), 10),
      halfWidth = parseInt($boundTo.width()/2, 10);
    
      $this.css({
        top: position.top + height,
        left: position.left + halfWidth - ($this.width()/2),
        right: 'auto'
      });
    }
  }
});
