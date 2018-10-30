import { Component, OnInit, Input } from "@angular/core";


import * as d3 from "d3-selection";
import * as d3Scale from "d3-scale";
import * as d3Shape from "d3-shape";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";
import { WeatherInterface } from "src/app/models/climate";


@Component({
  selector: "app-visualize-d3-weather",
  templateUrl: "./visualize-d3-weather.component.html",
  styleUrls: ["./visualize-d3-weather.component.css"]
})
export class VisualizeD3WeatherComponent implements OnInit {

  @Input()
  weatherData: WeatherInterface[];

  private margin = { top: 20, right: 20, bottom: 30, left: 50 };
  private width: number;
  private height: number;
  private x: any;
  private y: any;
  private svg: any;
  private line: d3Shape.Line<[number, number]>;

  constructor() {
    this.width = 220;
    this.height = 200 - this.margin.top - this.margin.bottom;
  }

  ngOnInit() {
    console.log(this.weatherData);
    this.initSvg();
    this.initAxis();
    this.drawAxis();
    this.drawLine();
  }


  private initSvg() {
    this.svg = d3.select("#line")
      .append("g")
      .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  private initAxis() {
    this.x = d3Scale.scaleLinear().range([0, this.width]);
    this.y = d3Scale.scaleLinear().range([this.height, 0]);
    this.x.domain(d3Array.extent(this.weatherData, (d) => d.time));
    this.y.domain(d3Array.extent(this.weatherData, (d) => d.value));
  }

  private drawAxis() {

    this.svg.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3Axis.axisBottom(this.x))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(0)")
      .attr("x", 180)
      .attr("y", 25)
      .attr("dx", "0.6em")
      .style("text-anchor", "start")
      .text("Passed Hours");

    this.svg.append("g")
      .attr("class", "axis axis--y")
      .call(d3Axis.axisLeft(this.y))
      .append("text")
      .attr("class", "axis-title")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".8em")
      .style("text-anchor", "end")
      .text("Celsius °");
  }

  private drawLine() {
    this.line = d3Shape.line()
      .x((d: any) => this.x(d.time))
      .y((d: any) => this.y(d.value));

    this.svg.append("path")
      .datum(this.weatherData)
      .attr("class", "line")
      .attr("d", this.line);
  }

}
