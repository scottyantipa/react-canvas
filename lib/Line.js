'use strict';

var createComponent = require('./createComponent');
var LayerMixin = require('./LayerMixin');

var Line = createComponent('Line', LayerMixin, {

  applyLineProps: function (prevProps, props) {
    var style = (props && props.style) ? props.style : {};
    var layer = this.node;

    layer.type = 'line';
    layer.frame = props.frame;
    layer.style = style;
  },

  mountComponent: function (rootID, transaction, context) {
    var props = this._currentElement.props;
    var layer = this.node;
    this.applyLayerProps({}, props);
    this.applyLineProps({}, props);
    return layer;
  },

  receiveComponent: function (nextComponent, transaction, context) {
    var props = nextComponent.props;
    var prevProps = this._currentElement.props;
    this.applyLayerProps(prevProps, props);
    this.applyLineProps(prevProps, props);
    this._currentElement = nextComponent;
    this.node.invalidateLayout();
  }

});

module.exports = Line;