import React from "react";
import { Bar } from "react-chartjs-2";
//import axios from "axios";

const FullWidthBarGraph = (props) => {
  const barOptions = {
    maintainAspectRatio: true,
    responsive: true,
    legend: {
      display: true,
      labels: {
        boxWidth: 10,
      },
    },
  };

  return <Bar height={120} data={props.data} options={barOptions} />;
};

export default FullWidthBarGraph;
