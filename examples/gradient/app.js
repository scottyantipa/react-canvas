'use strict';

var React = require('react');
var ReactDOM = require('react-dom');
var ReactCanvas = require('react-canvas');
var createReactClass = require('create-react-class');

var Gradient = ReactCanvas.Gradient;
var Surface = ReactCanvas.Surface;

var App = createReactClass({

  render: function () {
    var size = this.getSize();
    return (
      <Surface top={0} left={0} width={size.width} height={size.height}>
        <Gradient style={this.getGradientStyle()}
                  colorStops={this.getGradientColors()} />
      </Surface>
    );
  },

  getGradientStyle: function(){
    var size = this.getSize();
    return {
      top: 0,
      left: 0,
      width: size.width,
      height: size.height
    };
  },

  getGradientColors: function(){
    return [
      { color: "transparent", position: 0 },
      { color: "#000", position: 1 }
    ];
  },

  getSize: function () {
    return document.getElementById('main').getBoundingClientRect();
  }

});

ReactDOM.render(<App />, document.getElementById('main'));
