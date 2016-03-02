var dataset = _.map(_.range(25), function (i) {
        return {
            x: Math.round(Math.random() * 100),
            y: Math.round(Math.random() * 100),
            r: Math.round(5 + Math.random() * 10)
        };
    });

var margin = {top: 20, right: 20, bottom: 60, left: 60};
var width = 500 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

var svg = d3.select('#chartArea').append('svg')
.attr('width', width + margin.left + margin.right)
.attr('height', height + margin.top + margin.bottom)
.append('g')
.attr('transform', 'translate(' + margin.left + ', ' + margin.top + ')');

var xScale = d3.scale.linear()
.domain([0, 100])
.range([0, width]);

var xAxis = d3.svg.axis()
.scale(xScale)
.orient('bottom')
.ticks(5)
.innerTickSize(6)
.outerTickSize(12)
.tickPadding(12);

svg.append('g')
  .attr('class', 'x axis')
  .attr('transform', 'translate(0, '+ (height + 0) + ')')
  .call(xAxis);

var yScale = d3.scale.linear()
.domain([0, 100])
.range([height, 0]);

var yAxis = d3.svg.axis()
.scale(yScale)
.orient('left');

svg.append('g')
  .attr('class', 'y axis')
  .attr('transform', 'translate(0, 0)')
  .call(yAxis);

svg.selectAll('circle')
  .data(dataset)
  .enter()
  .append('circle')
  .attr('class', 'dot')
  .attr('cx', function (d) {
  return xScale(d.x);
})
  .attr('cy', function (d) {
  return yScale(d.y);
})
  .attr('r', function (d) {
  return d.r;
});
