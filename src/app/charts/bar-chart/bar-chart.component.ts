import { Component, OnInit } from '@angular/core';
import * as Chart from 'chart.js';
import { Router } from '@angular/router';

@Component({
selector: 'app-bar-chart',
templateUrl: './bar-chart.component.html',
styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

constructor() { }

ngOnInit() {
var ctx = document.getElementById('barChart') as HTMLCanvasElement;
var barChart = new Chart(ctx, {
type: 'bar',
data: {
labels: ['Red', 'brown', 'Yellow', 'Green', 'Purple', 'Orange'],
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