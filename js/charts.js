'use strict';

var pieCtx = document.getElementById("pieChart");
var barCtx = document.getElementById("barChart");

pieCtx.width  = 250;
pieCtx.height = 250; 

barCtx.width  = 350;
barCtx.height = 250; 

var myPieChart = new Chart(pieCtx,{
    type: 'doughnut',
    data: {
        datasets: [{
            data: [79,21],
            boxWidth: 80,
            backgroundColor: ['#133671', '#B6CCED'],
            hoverBackgroundColor: [
                "#FF6384",
                "#B6CCED"
              ]
        }],
    },
    options: {
        tooltips : {
            enabled: false      
        },
        cutoutPercentage: 75,
        elements: {
            center: {
            text: 'ENGLISH Upper',
            color: '#36A2EB', //Default black
            fontStyle: 'Helvetica', //Default Arial
            sidePadding: 15 //Default 20 (as a percentage)
          }
        }
    }
});

var myBarChart = new Chart(barCtx,{
    type: 'horizontalBar',
    data: {
        labels: ["HTML5", "CSS3", "LESS", "SASS", "JavaScript"],
        datasets: [{
            label: '1',
            data: [80, 70, 60, 60, 65],
            backgroundColor: ['#F0B056', '#F0B056','#F0B056','#F0B056','#F0B056'],
            stack: 'Stack 0',
            hoverBackgroundColor: [
                "#F4CE95",
                "#F4CE95",
                "#F4CE95",
                "#F4CE95",
                "#F4CE95"
            ]
        }, {
            label: '2',
            backgroundColor: ['#FBF1E5','#FBF1E5','#FBF1E5','#FBF1E5','#FBF1E5'],
            stack: 'Stack 0',
            data: [20, 30, 40, 40, 35]
        }],
    },
    options: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
                title: function(tooltipItem, data) {
                  return data['labels'][tooltipItem[0]['index']];
                },
                label: function(tooltipItem, data) {
                  return '';
                },
                afterLabel: function(tooltipItem, data) {
                  var dataset = data['datasets'][0];
                  return data['datasets'][0]['data'][tooltipItem['index']];
                }
            }

        },
        scales: {
            xAxes: [{
                display: false,
                ticks: {
                    beginAtZero:true
                },
                gridLines: {
                    display:false
                },
                stacked: true
            }],
            yAxes: [{
                ticks: {
                  beginAtZero: true
                },
                gridLines: {
                    display:false
                },
                stacked: true
            }]
        }
    }
});

Chart.pluginService.register({
    beforeDraw: function (chart) {
      if (chart.config.options.elements.center) {
        //Get ctx from string
        var ctx = chart.chart.ctx;
  
        //Get options from the center object in options
        var centerConfig = chart.config.options.elements.center;
        var fontStyle = centerConfig.fontStyle || 'Arial';
        var txt = centerConfig.text;
        var color = centerConfig.color || '#000';
        var sidePadding = centerConfig.sidePadding || 20;
        var sidePaddingCalculated = (sidePadding/100) * (chart.innerRadius * 2)
        //Start with a base font of 30px
        ctx.font = "30px " + fontStyle;
  
        //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
        var stringWidth = ctx.measureText(txt).width;
        var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;
  
        // Find out how much the font can grow in width.
        var widthRatio = elementWidth / stringWidth;
        var newFontSize = Math.floor(30 * widthRatio);
        var elementHeight = (chart.innerRadius * 2);
  
        // Pick a new font size so it will not be larger than the height of label.
        var fontSizeToUse = Math.min(newFontSize, elementHeight);
  
        //Set font settings to draw it correctly.
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
        var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
        ctx.font = fontSizeToUse+"px " + fontStyle;
        ctx.fillStyle = color;
  
        //Draw text in center
        ctx.fillText(txt, centerX, centerY);
      }
    }
  });

 
