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
];

export const MapChart = () => {
  useEffect(() => {
    const weekNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    const options = {
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
        height: 202, // Set the chart height to 202px
        type: "line",
        toolbar: {
          show: false, // Disable the toolbar
        },
      },
      stroke: {
        curve: "straight",
        width: [3, 1],
      },
      fill: {
        type: "solid",
        opacity: [0.6, 1],
      },
      markers: {
        size: 0,
      },
      yaxis: [
        {
          max: 2500,
          min: 0,
          labels: {
            formatter: function (val) {
              return val + " CHF";
            },
          },
        },
      ],
      xaxis: {
        type: "datetime",
        labels: {
          formatter: function (val) {
            const date = new Date(val);
            return weekNames[date.getDay()];
          },
        },
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

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div
      id="chart"
      // style={{ height: "202px", width: "482px" }} // Set the height to 202px
      className="max-w-[482px] w-full h-[202px] mx-auto"
    ></div>
  );
};

export default MapChart;
