"use client";
import React, { useEffect } from "react";
import ApexCharts from "apexcharts";

const dates = [
  { x: new Date(2020, 1, 0).getTime(), y: 500 },
  { x: new Date(2020, 1, 1).getTime(), y: 500 },
  { x: new Date(2020, 1, 2).getTime(), y: 650 },
  { x: new Date(2020, 1, 3).getTime(), y: 500 },
  { x: new Date(2020, 1, 4).getTime(), y: 950 },
  { x: new Date(2020, 1, 5).getTime(), y: 800 },
  { x: new Date(2020, 1, 6).getTime(), y: 2300 },
  { x: new Date(2020, 1, 7).getTime(), y: 600 },
  { x: new Date(2020, 1, 8).getTime(), y: 550 },
  { x: new Date(2020, 1, 9).getTime(), y: 250 },
  { x: new Date(2020, 1, 10).getTime(), y: 850 },
  { x: new Date(2020, 1, 11).getTime(), y: 1020 },
  { x: new Date(2020, 1, 12).getTime(), y: 2300 },
  // Add more data points as needed
];
const dates2 = [
  { x: new Date(2020, 1, 0).getTime(), y: 300 },
  { x: new Date(2020, 1, 1).getTime(), y: 300 },
  { x: new Date(2020, 1, 2).getTime(), y: 900 },
  { x: new Date(2020, 1, 3).getTime(), y: 300 },
  { x: new Date(2020, 1, 4).getTime(), y: 500 },
  { x: new Date(2020, 1, 5).getTime(), y: 400 },
  { x: new Date(2020, 1, 6).getTime(), y: 1200 },
  { x: new Date(2020, 1, 7).getTime(), y: 500 },
  { x: new Date(2020, 1, 8).getTime(), y: 350 },
  { x: new Date(2020, 1, 9).getTime(), y: 100 },
  { x: new Date(2020, 1, 10).getTime(), y: 300 },
  { x: new Date(2020, 1, 11).getTime(), y: 900 },
  { x: new Date(2020, 1, 12).getTime(), y: 800 },
  { x: new Date(2020, 1, 13).getTime(), y: 300 },
  // Add more data points as needed
];

export const MapChart = () => {
  useEffect(() => {
    var options = {
      series: [
        {
          name: "Diesen Monat",
          type: "line",
          data: dates,
        },
        {
          name: "Vorheriger Monat",
          type: "line",
          data: dates2,
        },
      ],
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        curve: "straight",
        width: [3, 1],
      },
      fill: {
        type: "solid",
        opacity: [0.6, 1],
      },
      labels: [
        "Dec 01",
        "Dec 02",
        "Dec 03",
        "Dec 04",
        "Dec 05",
        "Dec 06",
        "Dec 07",
        "Dec 08",
        "Dec 09 ",
        "Dec 10",
        "Dec 11",
      ],
      markers: {
        size: 0,
      },
      yaxis: [
        {
          max: 2500,
          min: 0,
        },
      ],
      xaxis: {
        type: "datetime",
        categories: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
      tooltip: {
        shared: true,
        intersect: false,
        y: {
          formatter: function (y) {
            if (typeof y !== "undefined") {
              return y.toFixed(0) + " points";
            }
            return y;
          },
        },
      },
      colors: ["#EC6707", "#C6C6C6"], // Colors of the lines
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return <div id="chart" className="max-w-[406px] mx-auto"></div>;
};

export default MapChart;
