var barCtx = document.getElementById("barChart");
var myBarChart = new Chart(barCtx,{
    type: 'horizontalBar',
    data: {
        labels: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"],
        datasets: [{
            data: [5427, 5243, 5514, 3933, 1326, 687, 1271, 1638],
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
        }
    }
});