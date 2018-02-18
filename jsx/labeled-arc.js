import React from 'react';
import Arc from './arc';

class LabeledArc extends Arc {
  render() {
    let [labelX, labelY] = this.arc.centroid(this.props.data),
        labelTranslate = `translate(${labelX}, ${labelY})`;

    return (
      <g>
        {super.render()}
        <text transform={`${labelTranslate} rotate(10)`}
              textAnchor="middle">
          {this.props.data.data.label}
        </text>
      </g>
    );
  }
}

export default LabeledArc;
