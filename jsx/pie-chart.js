// A pie chart
import React from 'react';
import * as d3 from 'd3';
import _ from 'lodash';
import LabeledArc from './labeled-arc';

class PieChart extends React.Component {

  constructor() {
    super();
    this.pie = d3.pie().value((d) => d.value);
    this.colors = d3.scaleOrdinal(d3.schemeCategory10);
    this.arcGenerator = this.arcGenerator.bind(this);
  }

  arcGenerator(d, i) {
    return (
      <LabeledArc key={`arc-${i}`}
                  data={d}
                  innerRadius={this.props.innerRadius}
                  outerRadius={this.props.outerRadius}
                  color={this.colors(i)} />
    );
  }

  render() {
    let pie = this.pie(this.props.data);
    let translate = `translate(${this.props.x}, ${this.props.y})`;
    return (
      <g transform={translate}>
        {_.map(pie, (d, i) => {
          return this.arcGenerator(d, i);
        })}
      </g>
    );
  }
}

export default PieChart;
