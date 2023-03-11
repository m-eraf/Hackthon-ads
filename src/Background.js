import React, { Component } from 'react';
import Star from './Star';

class Background extends Component {
  componentDidMount() {
    // Initialize stars
  }

  update() {
    // Update stars
  }

  draw() {
    // Draw stars on canvas
  }

  render() {
    return (
      <div>
        <canvas
          ref={(canvas) => {
            this.canvas = canvas;
          }}
          width={window.innerWidth}
          height={window.innerHeight}
          style={{ position: 'absolute', top: 0, left: 0 }}
        />
      </div>
    );
  }
}

export default Background;
