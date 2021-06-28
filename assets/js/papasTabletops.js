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
