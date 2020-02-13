google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    /**
     Date(Year, Month, Day, Hours, Minutes, Seconds, Milliseconds)
     **/
    dataTable.addColumn({ type: 'string', id: 'President' });
    dataTable.addColumn({ type: 'date', id: 'Start' });
    dataTable.addColumn({ type: 'date', id: 'End' });
    dataTable.addRows([
        [ 'Washington', new Date(1789, 3, 30, 0, 0, 0, 10), new Date(1789, 3, 30, 0, 0, 0, 20) ],
        [ 'Adams',      new Date(1789, 3, 30, 0, 0, 0, 1), new Date(1789, 3, 30, 0, 0, 0, 3) ],
        [ 'Jefferson',  new Date(1789, 3, 30, 0, 0, 0, 13),  new Date(1789, 3, 30, 0, 0, 0, 15) ],
        [ 'Jack',  new Date(1789, 3, 30, 0, 0, 0, 8),  new Date(1789, 3, 30, 0, 0, 0, 11) ]

    ]);

    chart.draw(dataTable);
}