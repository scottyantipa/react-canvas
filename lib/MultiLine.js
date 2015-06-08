'use strict';

var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var MultiLine = createComponent('MultiLine', LayerMixin, {

  applyMultiLineProps: function (prevProps, props) {
    var style = (props && props.style) ? props.style : {};
    var layer = this.node;

    layer.type   = 'multi_line';
    layer.frame  = props.frame;
    layer.style  = style;
    layer.points = props.points;
  },

  mountComponent: function (rootID, transaction, context) {
    var props = this._currentElement.props;
    var layer = this.node;
    this.applyLayerProps({}, props);
    this.applyMultiLineProps({}, props);
    return layer;
  },

  receiveComponent: function (nextComponent, transaction, context) {
    var props = nextComponent.props;
    var prevProps = this._currentElement.props;
    this.applyLayerProps(prevProps, props);
    this.applyMultiLineProps(prevProps, props);
    this._currentElement = nextComponent;
    this.node.invalidateLayout();
  }

});

module.exports = MultiLine;