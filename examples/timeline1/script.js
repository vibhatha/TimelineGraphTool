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

    // dataTable.addRows([
    //     ["0::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,47,500055), new Date(2020,02,14,11,11,47,507967)],
    //     ["0::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,47,507970), new Date(2020,02,14,11,11,47,508064)],
    //     ["0::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,47,508067), new Date(2020,02,14,11,11,47,517693)],
    //     ["0::Cuda1: FC FW", new Date(2020,02,14,11,11,47,517695), new Date(2020,02,14,11,11,47,517839)],
    //
    //
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["1::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,47,517896), new Date(2020,02,14,11,11,47,526561)],
    //     ["1::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,47,526564), new Date(2020,02,14,11,11,47,526640)],
    //     ["1::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,47,526642), new Date(2020,02,14,11,11,47,536246)],
    //     ["1::Cuda1: FC FW", new Date(2020,02,14,11,11,47,536248), new Date(2020,02,14,11,11,47,536379)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["4::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,47,573374), new Date(2020,02,14,11,11,47,582029)],
    //     ["4::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,47,582032), new Date(2020,02,14,11,11,47,582106)],
    //     ["4::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,47,582109), new Date(2020,02,14,11,11,47,591776)],
    //     ["4::Cuda1: FC FW", new Date(2020,02,14,11,11,47,591779), new Date(2020,02,14,11,11,47,591913)],
    //
    //
    // ]);

    // dataTable.addRows([
    //     ["14::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,151084), new Date(2020,02,14,11,11,48,159660)],
    //     ["14::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,159663), new Date(2020,02,14,11,11,48,159751)],
    //     ["14::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,159754), new Date(2020,02,14,11,11,48,249139)],
    //     ["14::Cuda1: FC FW", new Date(2020,02,14,11,11,48,249142), new Date(2020,02,14,11,11,48,249517)],
    //
    // ]);
    //
    // dataTable.addRows([
    //     ["15::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,249568), new Date(2020,02,14,11,11,48,258164)],
    //     ["15::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,258167), new Date(2020,02,14,11,11,48,258244)],
    //     ["15::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,258247), new Date(2020,02,14,11,11,48,346291)],
    //     ["15::Cuda1: FC FW", new Date(2020,02,14,11,11,48,346294), new Date(2020,02,14,11,11,48,346660)],
    //
    // ]);
    //
    //   dataTable.addRows([
    //       ["16::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,48,346717), new Date(2020,02,14,11,11,48,355383)],
    //       ["16::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,48,355386), new Date(2020,02,14,11,11,48,355479)],
    //       ["16::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,48,355482), new Date(2020,02,14,11,11,48,441886)],
    //       ["16::Cuda1: FC FW", new Date(2020,02,14,11,11,48,441889), new Date(2020,02,14,11,11,48,442241)],
    //   ]);
    //

    // MIDDLE PART

//     dataTable.addRows([
//         ["54::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,032063), new Date(2020,02,14,11,11,52,040826)],
//     ["54::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,040829), new Date(2020,02,14,11,11,52,040920)],
//     ["54::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,040923), new Date(2020,02,14,11,11,52,129182)],
//     ["54::Cuda1: FC FW", new Date(2020,02,14,11,11,52,129184), new Date(2020,02,14,11,11,52,129561)],
//
// ]);
//
//     dataTable.addRows([
//         ["55::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,129612), new Date(2020,02,14,11,11,52,138293)],
//         ["55::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,138295), new Date(2020,02,14,11,11,52,138386)],
//         ["55::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,138388), new Date(2020,02,14,11,11,52,225979)],
//         ["55::Cuda1: FC FW", new Date(2020,02,14,11,11,52,225982), new Date(2020,02,14,11,11,52,226346)],
//
//     ]);
//
//     dataTable.addRows([
//         ["56::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,226397), new Date(2020,02,14,11,11,52,234942)],
//         ["56::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,234945), new Date(2020,02,14,11,11,52,235023)],
//         ["56::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,235026), new Date(2020,02,14,11,11,52,321534)],
//         ["56::Cuda1: FC FW", new Date(2020,02,14,11,11,52,321537), new Date(2020,02,14,11,11,52,321899)],
//
//     ]);
//
//     dataTable.addRows([
//         ["57::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,321950), new Date(2020,02,14,11,11,52,330469)],
//         ["57::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,330472), new Date(2020,02,14,11,11,52,330564)],
//         ["57::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,330566), new Date(2020,02,14,11,11,52,416893)],
//         ["57::Cuda1: FC FW", new Date(2020,02,14,11,11,52,416896), new Date(2020,02,14,11,11,52,417253)],
//
//     ]);

    // dataTable.addRows([
    //     ["59::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,417303), new Date(2020,02,14,11,11,52,425921)],
    //     ["59::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,425924), new Date(2020,02,14,11,11,52,426003)],
    //     ["59::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,512261), new Date(2020,02,14,11,11,52,512265)],
    //     ["59::Cuda1: FC FW", new Date(2020,02,14,11,11,52,512266), new Date(2020,02,14,11,11,52,512633)],
    //
    // ]);

    // END PART

    dataTable.addRows([
        ["54::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,032063), new Date(2020,02,14,11,11,52,040826)],
    ["54::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,040829), new Date(2020,02,14,11,11,52,040920)],
    ["54::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,040923), new Date(2020,02,14,11,11,52,129182)],
    ["54::Cuda1: FC FW", new Date(2020,02,14,11,11,52,129184), new Date(2020,02,14,11,11,52,129561)],

    ]);


    dataTable.addRows([
        ["55::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,129612), new Date(2020,02,14,11,11,52,138293)],
        ["55::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,138295), new Date(2020,02,14,11,11,52,138386)],
        ["55::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,138388), new Date(2020,02,14,11,11,52,225979)],
        ["55::Cuda1: FC FW", new Date(2020,02,14,11,11,52,225982), new Date(2020,02,14,11,11,52,226346)],

    ]);


    dataTable.addRows([
        ["56::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,226397), new Date(2020,02,14,11,11,52,234942)],
        ["56::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,234945), new Date(2020,02,14,11,11,52,235023)],
        ["56::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,235026), new Date(2020,02,14,11,11,52,321534)],
        ["56::Cuda1: FC FW", new Date(2020,02,14,11,11,52,321537), new Date(2020,02,14,11,11,52,321899)],

    ]);


    dataTable.addRows([
        ["57::Cuda:0 Seq1 FW", new Date(2020,02,14,11,11,52,321950), new Date(2020,02,14,11,11,52,330469)],
        ["57::Cuda0:Cuda1 Copy", new Date(2020,02,14,11,11,52,330472), new Date(2020,02,14,11,11,52,330564)],
        ["57::Cuda:1 Seq2 FW", new Date(2020,02,14,11,11,52,330566), new Date(2020,02,14,11,11,52,416893)],
        ["57::Cuda1: FC FW", new Date(2020,02,14,11,11,52,416896), new Date(2020,02,14,11,11,52,417253)],

    ]);


    dataTable.addRows([

    ]);





    chart.draw(dataTable);
}