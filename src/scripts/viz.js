/**
 * Positions the x axis label and y axis label.
 *
 * @param {*} g The d3 Selection of the graph's g SVG element
 * @param {number} width The width of the graph
 * @param {number} height The height of the graph
 */
export function positionLabels (g, width, height) {
  // TODO : Position axis labels
  d3.select('.y.axis-text')
    .attr('y', height / 2)
    .attr('x', -50)

  d3.select('.x.axis-text')
    .attr('x', width / 2)
    .attr('y', height + 50)
}

/**
 * Draws the circles on the graph.
 *
 * @param {object} data The data to bind to
 */
export function drawCircles (data, xScale, yScale) {
  // TODO : Draw the bubble chart's circles
  // Each circle's size depends on its population
  // and each circle's color depends on its continent.
  // The fill opacity of each circle is 70%
  // The outline of the circles is white

  d3.select('#graph-g')
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', function (d) { return xScale(d.PerCapita) })
    .attr('cy', function (d) { return yScale(d.percentTotalEmissions) })
    .attr('fill', 'green')
    .attr('r', '10px')
    .attr('opacity', 0.7)
    .attr('stroke', 'white')
}

/**
 * Sets up the hover event handler. The tooltip should show on on hover.
 *
 * @param {*} tip The tooltip
 */
export function setCircleHoverHandler (tip) {
  // TODO : Set hover handler. The tooltip shows on
  // hover and the opacity goes up to 100% (from 70%)
  d3.selectAll('.dot')

    .on('mouseover', function (d) { // Lorsque l'élément est survolé, on change l'opacité et on affiche le tooltip
      tip.show(d, this)
      d3.select(this).attr('opacity', 1)
    })
    // .on('mouseover', tip.show)

    .on('mouseout', function (d) { // Lorsque l'élément n'est plus survolé, l'opacité revient à la normale et le tooltip disparait
      tip.hide(d, this)
      d3.select(this).attr('opacity', 0.7)
    })
}

/**
 * Updates the position of the circles based on their bound data. The position
 * transitions gradually.
 *
 * @param {*} xScale The x scale used to position the circles
 * @param {*} yScale The y scale used to position the circles
 * @param {number} transitionDuration The duration of the transition
 */
export function moveCircles (xScale, yScale, transitionDuration) {
  // TODO : Set up the transition and place the circle centers
  // in x and y according to their GDP and CO2 respectively
  d3.selectAll('.dot')
    .transition() // On réalise la transition pour tous les cercles de classe dot
    .duration(transitionDuration)
    .attr('cx', function (d) { return xScale(d.PerCapita) })
    .attr('cy', function (d) { return yScale(d.percentTotalEmissions) })
}

/**
 * Update the title of the graph.
 *
 * @param {number} year The currently displayed year
 */
export function setTitleText (year) {
  // TODO : Set the title
  d3.select('.title')
    .text('Data for year : ' + 2016)
}
