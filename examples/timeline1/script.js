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
    dataTable.addRows([
        ["0::Cuda:0 Seq1 FW", new Date(2020,02,13,13,14,50,377945), new Date(2020,02,13,13,14,50,396647)],
        ["0::Cuda0:Cuda1 Copy", new Date(2020,02,13,13,14,50,396651), new Date(2020,02,13,13,14,50,400896)],
        ["0::Cuda:1 Seq2 FW", new Date(2020,02,13,13,14,50,377691), new Date(2020,02,13,13,14,50,377692)],
        ["0::Cuda1: FC FW", new Date(2020,02,13,13,14,50,377692), new Date(2020,02,13,13,14,50,377693)],
    ]);
    dataTable.addRows([
        ["1::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 50, 421879), new Date(2020, 02, 13, 13, 14, 50, 434400)],
        ["1::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 50, 434403), new Date(2020, 02, 13, 13, 14, 50, 434476)],
        ["1::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 50, 400973), new Date(2020, 02, 13, 13, 14, 50, 417246)],
        ["1::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 50, 417249), new Date(2020, 02, 13, 13, 14, 50, 421876)],
    ]);
    dataTable.addRows([
        ["2::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 50, 446952), new Date(2020, 02, 13, 13, 14, 50, 459465)],
        ["2::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 50, 459468), new Date(2020, 02, 13, 13, 14, 50, 459538)],
        ["2::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 50, 434533), new Date(2020, 02, 13, 13, 14, 50, 446839)],
        ["2::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 50, 446842), new Date(2020, 02, 13, 13, 14, 50, 446950)],

    ]);

    // dataTable.addRows([
    //     ["5::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 50, 523274), new Date(2020, 02, 13, 13, 14, 50, 536131)],
    //     ["5::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 50, 536134), new Date(2020, 02, 13, 13, 14, 50, 536203)],
    //     ["5::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 50, 510461), new Date(2020, 02, 13, 13, 14, 50, 523161)],
    //     ["5::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 50, 523164), new Date(2020, 02, 13, 13, 14, 50, 523272)],
    // ]);
    //
    // dataTable.addRows([
    //     ["30::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 51, 152229), new Date(2020, 02, 13, 13, 14, 51, 165051)],
    //     ["30::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 51, 165055), new Date(2020, 02, 13, 13, 14, 51, 165123)],
    //     ["30::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 51, 139401), new Date(2020, 02, 13, 13, 14, 51, 152110)],
    //     ["30::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 51, 152113), new Date(2020, 02, 13, 13, 14, 51, 152227)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["31::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 51, 177927), new Date(2020, 02, 13, 13, 14, 51, 190757)],
    //     ["31::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 51, 190760), new Date(2020, 02, 13, 13, 14, 51, 190830)],
    //     ["31::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 51, 165175), new Date(2020, 02, 13, 13, 14, 51, 177815)],
    //     ["31::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 51, 177818), new Date(2020, 02, 13, 13, 14, 51, 177925)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["32::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 51, 202831), new Date(2020, 02, 13, 13, 14, 51, 215605)],
    //     ["32::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 51, 215608), new Date(2020, 02, 13, 13, 14, 51, 215677)],
    //     ["32::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 51, 190883), new Date(2020, 02, 13, 13, 14, 51, 202703)],
    //     ["32::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 51, 202706), new Date(2020, 02, 13, 13, 14, 51, 202829)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["33::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 51, 228494), new Date(2020, 02, 13, 13, 14, 51, 241280)],
    //     ["33::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 51, 241283), new Date(2020, 02, 13, 13, 14, 51, 241352)],
    //     ["33::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 51, 215737), new Date(2020, 02, 13, 13, 14, 51, 228378)],
    //     ["33::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 51, 228381), new Date(2020, 02, 13, 13, 14, 51, 228492)],
    //
    //
    // ]);
    //
    // dataTable.addRows([
    //
    //     ["34::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 51, 253765), new Date(2020, 02, 13, 13, 14, 51, 266551)],
    //     ["34::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 51, 266554), new Date(2020, 02, 13, 13, 14, 51, 267373)],
    //     ["34::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 51, 241404), new Date(2020, 02, 13, 13, 14, 51, 253639)],
    //     ["34::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 51, 253642), new Date(2020, 02, 13, 13, 14, 51, 253763)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["35::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 51, 279440), new Date(2020, 02, 13, 13, 14, 51, 292267)],
    //     ["35::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 51, 292270), new Date(2020, 02, 13, 13, 14, 51, 292338)],
    //     ["35::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 51, 267424), new Date(2020, 02, 13, 13, 14, 51, 279323)],
    //     ["35::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 51, 279326), new Date(2020, 02, 13, 13, 14, 51, 279438)],
    //
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["88::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 52, 643243), new Date(2020, 02, 13, 13, 14, 52, 656223)],
    //     ["88::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 52, 656226), new Date(2020, 02, 13, 13, 14, 52, 656295)],
    //     ["88::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 52, 631233), new Date(2020, 02, 13, 13, 14, 52, 643126)],
    //     ["88::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 52, 643129), new Date(2020, 02, 13, 13, 14, 52, 643240)],
    //
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["89::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 52, 669153), new Date(2020, 02, 13, 13, 14, 52, 682128)],
    //     ["89::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 52, 682131), new Date(2020, 02, 13, 13, 14, 52, 682200)],
    //     ["89::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 52, 656345), new Date(2020, 02, 13, 13, 14, 52, 669030)],
    //     ["89::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 52, 669033), new Date(2020, 02, 13, 13, 14, 52, 669150)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["90::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 52, 694274), new Date(2020, 02, 13, 13, 14, 52, 707248)],
    //     ["90::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 52, 707251), new Date(2020, 02, 13, 13, 14, 52, 707324)],
    //     ["90::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 52, 682259), new Date(2020, 02, 13, 13, 14, 52, 694158)],
    //     ["90::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 52, 694160), new Date(2020, 02, 13, 13, 14, 52, 694272)],
    // ]);
    //
    // dataTable.addRows([
    //     ["116::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 53, 368149), new Date(2020, 02, 13, 13, 14, 53, 381161)],
    //     ["116::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 53, 381164), new Date(2020, 02, 13, 13, 14, 53, 381238)],
    //     ["116::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 53, 356004), new Date(2020, 02, 13, 13, 14, 53, 368037)],
    //     ["116::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 53, 368040), new Date(2020, 02, 13, 13, 14, 53, 368147)],
    // ]);
    //
    // dataTable.addRows([
    //     ["119::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 53, 445247), new Date(2020, 02, 13, 13, 14, 53, 458295)],
    //     ["119::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 53, 458298), new Date(2020, 02, 13, 13, 14, 53, 458367)],
    //     ["119::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 53, 433170), new Date(2020, 02, 13, 13, 14, 53, 445130)],
    //     ["119::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 53, 445133), new Date(2020, 02, 13, 13, 14, 53, 445244)],
    // ]);
    //
    // dataTable.addRows([
    //     ["120::Cuda:0 Seq1 FW", new Date(2020, 02, 13, 13, 14, 53, 445247), new Date(2020, 02, 13, 13, 14, 53, 458295)],
    //     ["120::Cuda0:Cuda1 Copy", new Date(2020, 02, 13, 13, 14, 53, 458298), new Date(2020, 02, 13, 13, 14, 53, 458367)],
    //     ["120::Cuda:1 Seq2 FW", new Date(2020, 02, 13, 13, 14, 53, 471102), new Date(2020, 02, 13, 13, 14, 53, 471105)],
    //     ["120::Cuda1: FC FW", new Date(2020, 02, 13, 13, 14, 53, 471107), new Date(2020, 02, 13, 13, 14, 53, 471227)],
    //
    // ]);

    chart.draw(dataTable);
}