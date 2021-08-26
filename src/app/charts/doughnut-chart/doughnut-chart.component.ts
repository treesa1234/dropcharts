import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-doughnut-chart',
templateUrl: './doughnut-chart.component.html',
styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('doughnutChart') as HTMLCanvasElement;
var doughnutChart = new Chart(ctx, {
type: 'doughnut',
data: {
labels: ['Red', 'Brown', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 16, 3, 5, 2, 3],
backgroundColor: [
'red',
'brown',
'yellow',
'green',
'purple',
'orange'
],
borderColor: [
'red',
'brown',
'yellow',
'green',
'purple',
'orange'
],
borderWidth: 1
}]
},
options: {
animation: {
duration: 4000,
easing: 'easeInCubic',
},
scales: {
yAxes: [{
ticks: {
beginAtZero: true
}
}]
}
}
});
}

}
