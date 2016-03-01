var axisScale = d3.time.scale()
    .domain([
      new Date(Date.parse('2016-01-01')),
      new Date(Date.parse('2016-04-01'))
    ])
    .range([0, 300]);

axisScale(new Date(Date.parse('2016-02-01')));

var xAxis = d3.svg.axis()
  .scale(axisScale)
  .orient('below') // the ticks below the graph
  .ticks(4);       // the number of ticks

var svg = d3.select('body')
  .append('svg')        // create an <svg> element
    .attr('width', 500) // set its dimentions
    .attr('height', 150);

svg.append('g')            // create a <g> element
  .attr('class', 'x axis') // specify classes
  .call(xAxis);            // let the axis do its thing
