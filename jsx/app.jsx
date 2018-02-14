import React from 'react';
import ReactDOM from 'react-dom';
import PieChart from './pie-chart';

class D3Test extends React.Component {
  render() {
    return(
      <div>
        <h3>D3 Test</h3>
        <svg width="200" height="200">
          <PieChart x={100} y={100} outerRadius={100} innerRadius={0}
                    data={[{value: 92-34, label: 'One'},
                          {value: 34, label: 'Two'}]} />
        </svg>
      </div>
    );
  }
}

ReactDOM.render(<D3Test />, document.getElementById('container'));
