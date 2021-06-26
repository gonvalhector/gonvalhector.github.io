var public_spreadsheet_url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRxQJ0AVA0EoKc-u9WosKKWqiCubuKkcD31bStFaqKuDzbeRrhIFbhFEscBww-jvwLZ1Amp9eF7kw25/pub?output=csv';

function init() {
    Papa.parse(public_spreadsheet_url, {
        download: true,
        header: true,
        complete: function(results) {
            var data = results.data;
            var mySheet = data.map(function(data){
                var obj = {};
                obj = [data.Name, Number(data.FiveStarRatings)];
                return obj;
            })
            drawChart(mySheet);
        }
    })
}

function drawChart(mySheet) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Five Star Ratings');
    data.addRows(mySheet);
    var options = {
        title: 'Best Selling Tabletop Games on Amazon by their Five Star ratings',
        height: 500
    };
    var chart = new google.visualization.PieChart(document.getElementById('sub-content'));
    chart.draw(data, options);
}

window.addEventListener('DOMContentLoaded', () => {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(init);
});
