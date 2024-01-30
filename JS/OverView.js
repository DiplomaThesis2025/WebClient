const OVClockData =[];
const OVYStrom1 =[];
const OVYStrom2 =[];
const OVYStrom3 =[];
const OVYStrom4 =[];

let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let sum4 = 0;

//Start
OV();
async function OV() {                                                         // Organize the Data from "getData()"
  const data = await OVgetDataStrom();                                        // Get resulting data from the getData() function.
  const ctx = document.getElementById('OVChart').getContext('2d');
  const OVChart = new Chart(ctx, {
      type: 'doughnut',                                                       // Set Graph to a polarArea / doughnut
      data: {
          labels: [
            'Strom1',
            'Strom2',
            'Strom3',
            'Strom4'
          ],
        datasets: [{
            label: 'Stromverbrauch',
            data: [OVYStrom1, OVYStrom2, OVYStrom3, OVYStrom4],
            backgroundColor:[
              'rgba(255, 99, 132, 1)',
              'rgba(0, 0, 255, 1)',
              'rgba(0, 128, 0, 1)',
              'rgba(255, 165, 0, 1)'
                            ]
                  }]
            },
        options: {},
});
}
async function OVgetDataStrom() {
  const OVresponse = await fetch('StromGesamt.csv');
  const OVdata = await OVresponse.text();
  const OVtable = OVdata.split('\n').slice(0);
    OVtable.forEach(row => {
      var OVcolumns = row.split(';');



      var OVDataStrom1 = OVcolumns[1];
        if (OVDataStrom1 != undefined)
          {
            sum1 += Number(OVDataStrom1 - 10000);
          }
                                                                             // Strom2
      var OVDataStrom2 = OVcolumns[2];
        if (OVDataStrom2 != undefined)
          {
            sum2 += Number(OVDataStrom2 - 10000);
          }
                                                                            // Strom3
      var OVDataStrom3 = OVcolumns[3];
        if (OVDataStrom3 != undefined)
          {
            sum3 += Number(OVDataStrom3 - 10000);
          }

      var OVDataStrom4 = OVcolumns[4];
        if (OVDataStrom4 != undefined)
          {
            sum4 += Number(OVDataStrom4 - 10000);
          }
})

//Push
OVYStrom1.push(sum1);
OVYStrom2.push(sum2);
OVYStrom3.push(sum3);
OVYStrom4.push(sum4);

return { OVYStrom1, OVYStrom2, OVYStrom3, OVYStrom4 }
}