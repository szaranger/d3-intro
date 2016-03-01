var dataset = [ 1, 2, 3, 4, 5, 8 ];

d3.select('body').selectAll('div')
    .data(dataset)
    .enter()
    .append('div')
    .attr('class', 'bar')
    .style('height', function (d) {
      return d * 20 + 'px';
    });
