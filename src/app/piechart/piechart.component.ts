import { AfterViewInit,OnInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;


@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.css']
})
export class PiechartComponent implements OnInit {
  @ViewChild('pieChart',{static:false}) pieChart: ElementRef

  constructor() { }

  ngOnInit() {
  }

  drawChart = () => {

    const data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work', 11],
      ['Eat', 2],
      ['Commute', 2],
      ['Watch TV', 2],
      ['Sleep', 7]
    ]);

    const options = {
      title: 'My Daily Activities',
      legend: {position: 'top'}
    };

    const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

    chart.draw(data, options);
  }

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
