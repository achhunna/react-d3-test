import React from 'react';
import ReactDOM from 'react-dom';
import PieChart from './pie-chart';

const WIDTH = window.innerWidth - 20;
const HEIGHT = window.innerHeight - 70;

class D3Test extends React.Component {
  render() {
    return(
      <div>
        <div className="header">
          <h1>D3 React</h1>
        </div>
        <div className="chart-container">
          <svg width={WIDTH} height={HEIGHT}>
            <PieChart x={WIDTH / 2} y={HEIGHT / 2} outerRadius={WIDTH / 3} innerRadius={0}
                      data={[
                        {value: 50, label: 'One'},
                        {value: 50, label: 'Two'},
                        {value: 50, label: 'Three'},
                        {value: 50, label: 'Four'},
                        {value: 10, label: 'Five'}
                      ]} />
          </svg>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<D3Test />, document.getElementById('container'));
