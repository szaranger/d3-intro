var dataset = [ 5, 10, 15, 20, 25, 35, 45, 25, 30 ];
  var width = 400,
      height = 300;

  var svg = d3.select('#chartArea').append('svg')
    .attr('width', width)
    .attr('height', height);

  var yScale = d3.scale.linear()
    .domain([0, 50])
    .range([0, height]);

  var multiplier = 5;

  svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('class', 'bar')
    .attr('x', function (d, i) {
      return i * 22;
    })
    .attr('y', function (d) {
      return height - yScale(d);
    })
    .attr('width', 20)
    .attr('height', function (d) {
      return yScale(d);
    });
