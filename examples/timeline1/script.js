google.charts.load('current', {'packages': ['timeline']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var container = document.getElementById('timeline');
    var chart = new google.visualization.Timeline(container);
    var dataTable = new google.visualization.DataTable();
    /**
     Date(Year, Month, Day, Hours, Minutes, Seconds, Milliseconds)
     **/
    dataTable.addColumn({type: 'string', id: 'President'});
    dataTable.addColumn({type: 'date', id: 'Start'});
    dataTable.addColumn({type: 'date', id: 'End'});

    // STARTING PART
    dataTable.addRows([
        ["20::Cuda1: FC FW", new Date(2020,02,14,11,11,48,732.645), new Date(2020,02,14,11,11,48,733.024)],
        ["20::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,644.266), new Date(2020,02,14,11,11,48,732.642)],
        ["20::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,644.184), new Date(2020,02,14,11,11,48,644.263)],
        ["20::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,635.585), new Date(2020,02,14,11,11,48,644.182)],
    ]);
    dataTable.addRows([
        ["19::Cuda1: FC FW", new Date(2020,02,14,11,11,48,635.12), new Date(2020,02,14,11,11,48,635.51)],
        ["19::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,546.672), new Date(2020,02,14,11,11,48,635.117)],
        ["19::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,546.586), new Date(2020,02,14,11,11,48,546.669)],
        ["19::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,537.986), new Date(2020,02,14,11,11,48,546.583)],
    ]);
    dataTable.addRows([
        ["18::Cuda1: FC FW", new Date(2020,02,14,11,11,48,537.539), new Date(2020,02,14,11,11,48,537.935)],
        ["18::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,450.985), new Date(2020,02,14,11,11,48,537.536)],
        ["18::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,450.899), new Date(2020,02,14,11,11,48,450.982)],
        ["18::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,442.291), new Date(2020,02,14,11,11,48,450.896)],
    ]);
    dataTable.addRows([
        ["17::Cuda1: FC FW", new Date(2020,02,14,11,11,48,441.889), new Date(2020,02,14,11,11,48,442.241)],
        ["17::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,355.482), new Date(2020,02,14,11,11,48,441.886)],
        ["17::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,355.386), new Date(2020,02,14,11,11,48,355.479)],
        ["17::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,346.717), new Date(2020,02,14,11,11,48,355.383)],
    ]);
    dataTable.addRows([
        ["16::Cuda1: FC FW", new Date(2020,02,14,11,11,48,346.294), new Date(2020,02,14,11,11,48,346.66)],
        ["16::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,258.247), new Date(2020,02,14,11,11,48,346.291)],
        ["16::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,258.167), new Date(2020,02,14,11,11,48,258.244)],
        ["16::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,249.568), new Date(2020,02,14,11,11,48,258.164)],
    ]);
    dataTable.addRows([
        ["15::Cuda1: FC FW", new Date(2020,02,14,11,11,48,249.142), new Date(2020,02,14,11,11,48,249.517)],
        ["15::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,159.754), new Date(2020,02,14,11,11,48,249.139)],
        ["15::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,159.663), new Date(2020,02,14,11,11,48,159.751)],
        ["15::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,151.084), new Date(2020,02,14,11,11,48,159.66)],
    ]);



    chart.draw(dataTable);
}