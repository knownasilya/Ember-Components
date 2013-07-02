window.BC = Ember.Namespace.create({
  VERSION: "0.0.1"
});

BC.RangeInputView = Ember.View.extend({
  tagName: "input",
  attributeBindings: ["type", "min", "max", "step", "value", "name"],
  type: "range",
  min: 0,
  max: 10,
  step: 1,
  value: 5,
  change: function (event) {
    this.set("value", event.target.value);
  },
  drag: function (event) {
    this.set("value", event.target.value);
  }
});