'use strict';

// Index for the browserify process to create a dist
// It attaches ReactCanvas and React to window for use by other libs

var ReactCanvas = {
  Surface: require('../lib/Surface'),

  Layer: require('../lib/Layer'),
  Group: require('../lib/Group'),
  Image: require('../lib/Image'),
  Text: require('../lib/Text'),
  Point: require('../lib/Point'),
  Line: require('../lib/Line'),
  ListView: require('../lib/ListView'),

  FontFace: require('../lib/FontFace'),
  measureText: require('../lib/measureText'),

  React: require('react/dist/react-with-addons')
};

window.ReactCanvas = ReactCanvas
window.React = React