
function buildBar() {
    d3.json("/categories").then(cataData => {
        
        var trace1 = {
            x: cataData.category,
            y: cataData.monthly_earnings,
            name: 'Earnings',
            type: 'bar'
          };
          
          var trace2 = {
            x: cataData.category,
            y: cataData.views,
            name: 'Views',
            yaxis: 'y2',
            type: 'scatter'
          };
          
          var data = [trace1, trace2];
          
          var layout = {
            title: 'More Views = More $$$',
            yaxis: {title: 'Earnings'},
            yaxis2: {
              title: 'Views',
              titlefont: {color: 'rgb(148, 103, 189)'},
              tickfont: {color: 'rgb(148, 103, 189)'},
              overlaying: 'y',
              side: 'right'
            }
          };
          
          Plotly.newPlot('bar', data, layout);
    })
}

function updatePlotly(newdata) {
  var LINE = document.getElementById("bar");
  Plotly.restyle(LINE, "", [newdata]);
}

function getData(dataset) {
  var data = [];
  switch (dataset) {
  case "dataset1":
    data = cataData.views;
    break;
  case "dataset2":
    data = cataData.subscribers;
    break;
  case "dataset3":
    data = cataData.uploads;
    break;
  default:
    data = cataData.views;
  }
  updatePlotly(data);
}

buildBar();

  
function buildBubble() {
  d3.json("/categories").then(cataData => {
        
  var trace1 = {
      x: cataData.category,
      y: cataData.subscribers,
      mode: 'markers',
      marker: {
        size: cataData.views2,
        color: ['rgb(245, 183, 177)', 'rgb(162, 217, 206)', 'rgb(248, 196, 113)', 'rgb(115, 198, 182)',
                'rgb(210, 180, 222)', 'rgb(93, 173, 226)', 'rgb(230, 126, 34)', 'rgb(212, 239, 223)',
                'rgb(41, 128, 185)', 'rgb(250, 229, 211)', 'rgb(35, 155, 86)', 'rgb(245, 203, 167)',
                'rgb(208, 211, 212)', 'rgb(40, 116, 166)', 'rgb(230, 176, 170)']
      }
    };
    
    var data = [trace1];
    
    var layout = {
      title: 'More Subscribers = More Views',
      showlegend: false,
    };
    
    Plotly.newPlot('bubble', data, layout);
})
}
buildBubble();

function buildBar2() {
  d3.json("/categories").then(cataData => {
      
      var trace1 = {
          x: cataData.category,
          y: cataData.monthly_earnings,
          name: 'Earnings',
          type: 'bar'
        };
        
        var trace2 = {
          x: cataData.category,
          y: cataData.subscribers,
          name: 'Subscribers',
          yaxis: 'y2',
          type: 'scatter'
        };
        
        var data = [trace1, trace2];
        
        var layout = {
          title: '# Subscribers Indirectly Correlates with More Earnings',
          yaxis: {title: 'Earnings'},
          yaxis2: {
            title: 'Subscribers',
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: 'right'
          }
        };
        
        Plotly.newPlot('bar2', data, layout);
  })
}

buildBar2();

function buildBar3() {
  d3.json("/categories").then(cataData => {
      
      var trace1 = {
          x: cataData.category,
          y: cataData.monthly_earnings,
          name: 'Earnings',
          type: 'bar'
        };
        
        var trace2 = {
          x: cataData.category,
          y: cataData.uploads,
          name: 'Uploads',
          yaxis: 'y2',
          type: 'scatter'
        };
        
        var data = [trace1, trace2];
        
        var layout = {
          title: '# Uploads Least Correlates with Views',
          yaxis: {title: 'Earnings'},
          yaxis2: {
            title: 'Uploads',
            titlefont: {color: 'rgb(148, 103, 189)'},
            tickfont: {color: 'rgb(148, 103, 189)'},
            overlaying: 'y',
            side: 'right'
          }
        };
        
        Plotly.newPlot('bar3', data, layout);
  })
}

buildBar3();

