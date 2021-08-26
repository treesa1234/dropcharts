import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';

@Component({
selector: 'app-radar-chart',
templateUrl: './radar-chart.component.html',
styleUrls: ['./radar-chart.component.css']
})
export class RadarChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('radarChart') as HTMLCanvasElement;
var radarChart = new Chart(ctx, {
type: 'radar',
data: {
labels: ['Red', 'Brown', 'Yellow', 'Green', 'Purple', 'Orange'],
datasets: [{
label: '# of Votes',
data: [12, 16, 3, 5, 2, 3],
backgroundColor: [
'cyan',
],
borderColor: [
'cyan',
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