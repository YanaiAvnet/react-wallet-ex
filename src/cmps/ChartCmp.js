import React from 'react'
import { Sparklines, SparklinesLine, SparklinesBars } from 'react-sparklines';


export default ({chart}) => {
    const values = chart.values.map(value => value.y)
    return chart ? (
        <Sparklines data={values} limit={200} >
        <SparklinesLine color={getRandomColor()} />
        </Sparklines>
    ) : null
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }