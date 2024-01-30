const SGClockData =[];
const SGYStrom1 =[];
const SGYStrom2 =[];
const SGYStrom3 =[];
const SGYStrom4 =[];
let SGdate;

const THClockData =[];
const THYStrom1 =[];
const THYStrom2 =[];
const THYStrom3 =[];
const THYStrom4 =[];
let THdate;

const WEClockData =[];
const WEYStrom1 =[];
const WEYStrom2 =[];
const WEYStrom3 =[];
const WEYStrom4 =[];
let WEdate;

SG();
async function SG() {                                                  // Organize the Data from "getData()"
  const data = await SGgetDataStrom();                                        // Get resulting data from the getData() function.
  const ctx = document.getElementById('SGChart').getContext('2d');
  const SgChart = new Chart(ctx, {
      type: 'line',                                                         // Set Graph to a line 
      data: {
          labels: SGClockData,
                                                                           // Customize the label sources
          datasets: [{
              label: 'Strom1',                                              //Name
              data: SGYStrom1,                                                // Customize Data source for the Y-axis
              fill: false,                                                  // Fill/noFill the line
              backgroundColor: 'rgba(255, 99, 132, 0.2)',                   // Color red
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
                      },
          {
            label: 'Strom2',                                               // Name
              data: SGYStrom2,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(176, 196, 222, 0.2)',                 // Color blue
              borderColor: 'rgba(0, 0, 255, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom3',                                               // Name
              data: SGYStrom3,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(143, 188, 143, 0.2)',                 // Color green
              borderColor: 'rgba(0, 128, 0, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom4',                                               // Name
              data: SGYStrom4,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(255, 203, 164, 0.2)',                 // Color yellow
              borderColor: 'rgba(255, 165, 0, 1)',
              borderWidth: 1
          }
            ]
      },
      options: {
      }
});
}
async function SGgetDataStrom() {
const SGresponse = await fetch('StromGesamt.csv');
const SGdata = await SGresponse.text();
const SGtable = SGdata.split('\n').slice(0);
      SGtable.forEach(row => {
const SGcolumns = row.split(';');  

                                                                            //Time
const SGClockData1 = SGcolumns[0];
SGdate = new Date(SGClockData1*1).toTimeString().slice(0,5);
    SGClockData.push(SGdate);
        //console.log(SGdate);
                                                                            // Strom1
const SGDataStrom1 = SGcolumns[1];
    SGYStrom1.push(SGDataStrom1);
        //console.log(DataStrom1)
                                                                            // Strom2
const SGDataStrom2 = SGcolumns[2];
    SGYStrom2.push(SGDataStrom2);
        //console.log(DataStrom2)
                                                                            // Strom3
const SGDataStrom3 = SGcolumns[3];
    SGYStrom3.push(SGDataStrom3);
        //console.log(DataStrom3)

const SGDataStrom4 = SGcolumns[4];
        SGYStrom4.push(SGDataStrom4);
        //console.log(DataStrom4)
})
return { SGClockData, SGYStrom1, SGYStrom2, SGYStrom3, SGYStrom4 }
}
TH();
async function TH() {                                                  // Organize the Data from "getData()"
  const data = await THgetDataStrom();                                        // Get resulting data from the getData() function.
  const ctx = document.getElementById('THChart').getContext('2d');
  const THChart = new Chart(ctx, {
      type: 'line',                                                         // Set Graph to a line 
      data: {
          labels: THClockData,
                                                                           // Customize the label sources
          datasets: [{
              label: 'Strom1',                                              //Name
              data: THYStrom1,                                                // Customize Data source for the Y-axis
              fill: false,                                                  // Fill/noFill the line
              backgroundColor: 'rgba(255, 99, 132, 0.2)',                   // Color red
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom2',                                               // Name
              data: THYStrom2,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(176, 196, 222, 0.2)',                 // Color blue
              borderColor: 'rgba(0, 0, 255, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom3',                                               // Name
              data: THYStrom3,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(143, 188, 143, 0.2)',                 // Color green
              borderColor: 'rgba(0, 128, 0, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom4',                                               // Name
              data: THYStrom4,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(255, 203, 164, 0.2)',                 // Color yellow
              borderColor: 'rgba(255, 165, 0, 1)',
              borderWidth: 1
          }
            ]
      },
      options: {
        pointStyle: false
      }
});
}
async function THgetDataStrom() {
const THresponse = await fetch('StromTheorie.csv');
const THdata = await THresponse.text();
const THtable = THdata.split('\n').slice(0);
      THtable.forEach(row => {
const THcolumns = row.split(';');  

                                                                            //Time
const THClockData1 = THcolumns[0];
THdate = new Date(THClockData1*1).toTimeString().slice(0,5);
    THClockData.push(THdate);
        //console.log(THdate);
                                                                            // Strom1
const THDataStrom1 = THcolumns[1];
    THYStrom1.push(THDataStrom1);
        //console.log(DataStrom1)
                                                                            // Strom2
const THDataStrom2 = THcolumns[2];
    THYStrom2.push(THDataStrom2);
        //console.log(DataStrom2)
                                                                            // Strom3
const THDataStrom3 = THcolumns[3];
    THYStrom3.push(THDataStrom3);
        //console.log(DataStrom3)

const THDataStrom4 = THcolumns[4];
        THYStrom4.push(THDataStrom4);
        //console.log(DataStrom4)
})
return { THClockData, THYStrom1, THYStrom2, THYStrom3, THYStrom4 }
}
WE();
async function WE() {                                                  // Organize the Data from "getData()"
  const data = await WEgetDataStrom();                                        // Get resulting data from the getData() function.
  const ctx = document.getElementById('WEChart').getContext('2d');
  const WEChart = new Chart(ctx, {
      type: 'line',                                                         // Set Graph to a line 
      data: {
          labels: WEClockData,
                                                                           // Customize the label sources
          datasets: [{
              label: 'Strom1',                                              //Name
              data: WEYStrom1,                                                // Customize Data source for the Y-axis
              fill: false,                                                  // Fill/noFill the line
              backgroundColor: 'rgba(255, 99, 132, 0.2)',                   // Color red
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom2',                                               // Name
              data: WEYStrom2,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(176, 196, 222, 0.2)',                 // Color blue
              borderColor: 'rgba(0, 0, 255, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom3',                                               // Name
              data: WEYStrom3,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(143, 188, 143, 0.2)',                 // Color green
              borderColor: 'rgba(0, 128, 0, 1)',
              borderWidth: 1
          },
          {
            label: 'Strom4',                                               // Name
              data: WEYStrom4,                                               // Customize Data source for the Y-axis
              fill: false,                                                 // Fill/noFill the line
              backgroundColor: 'rgba(255, 203, 164, 0.2)',                 // Color yellow
              borderColor: 'rgba(255, 165, 0, 1)',
              borderWidth: 1
          }
            ]
      },
      options: {
        pointStyle: false
      }
});
}
async function WEgetDataStrom() {
const WEresponse = await fetch('StromWerkstatt.csv');
const WEdata = await WEresponse.text();
const WEtable = WEdata.split('\n').slice(0);
      WEtable.forEach(row => {
const WEcolumns = row.split(';');  

                                                                            //Time
const WEClockData1 = WEcolumns[0];
WEdate = new Date(WEClockData1*1).toTimeString().slice(0,5);
    WEClockData.push(WEdate);
        //console.log(WEdate);
                                                                            // Strom1
const WEDataStrom1 = WEcolumns[1];
    WEYStrom1.push(WEDataStrom1);
        //console.log(DataStrom1)
                                                                            // Strom2
const WEDataStrom2 = WEcolumns[2];
    WEYStrom2.push(WEDataStrom2);
        //console.log(DataStrom2)
                                                                            // Strom3
const WEDataStrom3 = WEcolumns[3];
    WEYStrom3.push(WEDataStrom3);
        //console.log(DataStrom3)

const WEDataStrom4 = WEcolumns[4];
        WEYStrom4.push(WEDataStrom4);
        //console.log(DataStrom4)
})
return { WEClockData, WEYStrom1, WEYStrom2, WEYStrom3, WEYStrom4 }
}