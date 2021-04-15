'use strict'

import * as helper from './scripts/helper.js'
import * as scales from './scripts/scales.js'
import * as viz from './scripts/viz.js'
import * as tooltip from './scripts/tooltip.js'

import d3Tip from 'd3-tip'

(function (d3) {
  const margin = {
    top: 75,
    right: 200,
    bottom: 100,
    left: 80
  }

  let svgSize, graphSize

  setSizing()

  const g = helper.generateG(margin)

  const tip = d3Tip().attr('class', 'd3-tip').html(function (d, i) { return tooltip.getContents(d, i) })
  g.call(tip)

  helper.appendAxes(g)
  helper.appendGraphLabels(g)
  helper.placeTitle(g, graphSize.width)

  viz.positionLabels(g, graphSize.width, graphSize.height)

  d3.csv('./A2016.csv').then((data) => {
    console.log(data)

    data.forEach(function (d) {
      const xScale = scales.setXScale(graphSize.width, data)
      const yScale = scales.setYScale(graphSize.height, data)

      helper.drawXAxis(xScale, graphSize.height)
      helper.drawYAxis(yScale)

      build(data, 0, xScale, yScale)

      viz.setCircleHoverHandler(tip)
    })
  })

  /**
   *   This function handles the graph's sizing.
   */
  function setSizing () {
    svgSize = {
      width: 1000,
      height: 600
    }

    graphSize = {
      width: svgSize.width - margin.right - margin.left,
      height: svgSize.height - margin.bottom - margin.top
    }

    helper.setCanvasSize(svgSize.width, svgSize.height)
  }

  /**
   * This function builds the graph.
   *
   * @param {object} data The data to be used
   * @param {number} transitionDuration The duration of the transition while placing the circles
   * @param {number} year The year to be displayed
   * @param {*} xScale The x scale for the graph
   * @param {*} yScale The y scale for the graph
   */
  function build (data, transitionDuration, xScale, yScale) {
    viz.drawCircles(data, xScale, yScale, tip)
    viz.moveCircles(xScale, yScale, transitionDuration)
    viz.setTitleText(2016)
  }
})(d3)
