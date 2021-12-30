---
category: spas
short_name: papas_tabletops
title: Papa's Tabletops
pl:
    - type: Client-side
      name: JavaScript
image: https://lh3.googleusercontent.com/pw/ACtC-3cGNAAofXByKSEKKYLxfsy8dtrCvMo1P2LliV4k5YmoNvAnHzaxmu3yVok7LtwI5V_o8vmmUs_UTskWDIbb1Uzztx5zljr_Vth2Vs0nbGkOJ_VLZ3V_uQmzMym9awhM7x7VL0Oy7slruMSVoojqve3R=w1200-h630-no?authuser=0
alt: Logo of the Papa's Tabletops single-page app
thumbs:
    PNG: https://lh3.googleusercontent.com/pw/ACtC-3c1CmOMLxPYRt2f0MMhnCnfljsGlkgUPAc-ZBbsdVsYDg7oS0GvmGmYqGRgCOE68rdtYHo5GXR1C04CpHSa3JxAoC6jB3SLEtRDUeq8oWrZs8IRrYRPcRz_1On3nUZJg9eBGiRytApLhGaj2Osqk97c
    JPG: https://lh3.googleusercontent.com/pw/AM-JKLXNOEwXhasKPUK0FHhBgTOad5mXQpJCiyNc749jyG0Chid8a3X1s5nKhlZOOoNcNSn4D2NetAagTQCQC6_ETuq4SshVPSPiTi8aZ0Q61cVeH3-Pmma9twQiCiJt4zEChBnE5SDkLbbZgVdV3l27IaO1
js:
    - src: /assets/js/papaparse.min.js
    - src: https://www.gstatic.com/charts/loader.js
    - src: /assets/js/papasTabletops.js
credits:
    - type: Text
      textBefore: Charts Service
      name: Google Charts
      url: https://developers.google.com/chart
    - type: Text
      textBefore: CSV Parser
      name: Papa Parse
      url: https://www.papaparse.com/
    - type: Text
      textBefore: Spreadsheet Service
      name: Google Sheets
      url: https://developers.google.com/chart
---

Uses [Papa Parse <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://www.papaparse.com/) to take data from a [Google Sheet <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://www.google.com/sheets/about/) and display it on a [Google Chart <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://developers.google.com/chart/).  
Made for the **Week 4** assignment of the [JavaScript <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://onemonth.com/courses/javascript) online course offered by [One Month <img src="/assets/images/icons/external.svg" alt="External Link" class="external-icon">](https://onemonth.com/).

<h2 class="my-4">Papa's Tabletops</h2>

<div id="sub-content"></div>

<h2 class="my-4">JavaScript Code</h2>

    // Viewport width
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    // Define and set variables related to chart options and styling
    var chartHeight;
    var chartWidth;
    var chartTitleSize;
    var chartLegendSize;
    switch(true) {
        case vw>=1920:
            chartWidth = 1080;
            chartHeight = 355 * 2;
            chartTitleSize = 26;
            chartLegendSize = 20;
            break;
        case vw>=1024:
            chartWidth = 900;
            chartHeight = 284 * 2;
            chartTitleSize = 24;
            chartLegendSize = 18;
            break;
        case vw>=768:
            chartWidth = 660;
            chartHeight = 213 * 2;
            chartTitleSize = 22;
            chartLegendSize = 15;
            break;
        case vw>=600:
            chartWidth = 480;
            chartHeight = 180 * 2;
            chartTitleSize = 20;
            chartLegendSize = 12;
            break;
        case vw>=411:
            chartWidth = 352;
            chartHeight = 114 * 2;
            chartTitleSize = 14;
            chartLegendSize = 12;
            break;
        case vw>=360:
            chartWidth = 300;
            chartHeight = 130 * 2;
            chartTitleSize = 14;
            chartLegendSize = 7;
            break;
        default:
            chartWidth = 230;
            chartHeight = 80 * 2;
            chartTitleSize = 8;
            chartLegendSize = 6;
    }

    // Custom chart object
    var myChart = {};

    // Spreadsheet link
    myChart.spreadsheetURL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxQJ0AVA0EoKc-u9WosKKWqiCubuKkcD31bStFaqKuDzbeRrhIFbhFEscBww-jvwLZ1Amp9eF7kw25/pub?output=csv';

    // Custom chart options
    myChart.colors = ['#8DD7DF', '#64CDDA', '#33BFD2', '#1AB8CE', '#01B1C9', '#0C9EBB', '#168AAD', '#1A759F', '#1E6091', '#184E77'];
    myChart.width = chartWidth;
    myChart.height = chartHeight;
    myChart.titleSize = chartTitleSize;
    myChart.legendSize = chartLegendSize;

    // Load Google Chart's API
    myChart.load = function() {
        google.charts.load('current', {'packages':['corechart']});
        google.charts.setOnLoadCallback(myChart.init);
    }

    // Get data from spreadsheet
    myChart.init = function() {
        Papa.parse(myChart.spreadsheetURL, {
            download: true,
            header: true,
            complete: function(results) {
                var data = results.data;
                var mySheet = data.map(function(data){
                    var obj = {};
                    obj = [data.Name, Number(data.FiveStarRatings)];
                    return obj;
                })
                myChart.drawChart(mySheet);
            }
        })
    }

    // Draw chart with the spreadsheet's data
    myChart.drawChart = function(mySheet) {
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Name');
        data.addColumn('number', 'Five Star Ratings');
        data.addRows(mySheet);
        var options = {
            title: 'Best Selling Tabletop Games on Amazon by their Five Star ratings',
            width: myChart.width,
            height: myChart.height,
            is3D: true,
            colors: myChart.colors,
            backgroundColor: '#141019',
            legend: {textStyle: {color: '#F4F3F6', fontSize: myChart.legendSize}},
            titleTextStyle: {color: '#F4F3F6', fontSize: myChart.titleSize, bold: true}

        };
        var chart = new google.visualization.PieChart(document.getElementById('sub-content'));
        chart.draw(data, options);
    }

    // When the page's content loads
    window.addEventListener('DOMContentLoaded', () => {
        myChart.load();
    });
