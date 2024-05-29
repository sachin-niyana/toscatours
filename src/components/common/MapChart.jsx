"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const dates = [
  { x: new Date(2020, 1, 1).getTime(), y: 100 },
  { x: new Date(2020, 1, 2).getTime(), y: 200 },
  { x: new Date(2020, 1, 3).getTime(), y: 150 },
  // Add more data points as needed
];

export const MapChart = () => {
  useEffect(() => {
    var options = {
      series: [
        {
          name: "XYZ MOTORS",
          data: dates,
        },
      ],
      chart: {
        type: "area",
        stacked: false,
        height: 350,
        zoom: {
          type: "x",
          enabled: true,
          autoScaleYaxis: true,
        },
        toolbar: {
          autoSelected: "zoom",
        },
      },
      dataLabels: {
        enabled: false,
      },
      markers: {
        size: 0,
      },
      title: {
        text: "Stock Price Movement",
        align: "left",
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          inverseColors: false,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val + " CHF";
          },
        },
      },
      xaxis: {
        type: "datetime",
      },
      tooltip: {
        shared: false,
        y: {
          formatter: function (val) {
            return (val / 1000000).toFixed(0);
          },
        },
      },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Clean up the chart on component unmount
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart"></div>;
};

export default MapChart;
