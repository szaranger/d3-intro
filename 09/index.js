var dataset = _.map(_.range(100), function (i) {
    return Math.random() * 500;
  });

var width = 400, height = 300;
var svg = d3.select('#chartArea').append('svg')
    .attr('width', width)
    .attr('height', height);

var xScale = d3.scale.ordinal()
    .domain(dataset)
    .rangeBands([0, width], 0.1, 0.3);
var yScale = d3.scale.linear()
    .domain([0, d3.max(dataset) * 1.1])
    .range([0, height]);
var colorScale = d3.scale.linear()
    .domain([0, dataset.length])
    .range(['yellow', '#00ACF5']);

svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) {
      return xScale(d);
    })
    .attr('y', function (d) {
      return height - yScale(d);
    })
    .attr('width', xScale.rangeBand())
    .attr('height', function (d) {
      return yScale(d);
    })
    .attr('fill', function (d, i) {
      return colorScale(i);
    });
