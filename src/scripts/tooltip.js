/**
 * Defines the contents of the tooltip. See CSS for tooltip styling. The tooltip
 * features the country name, population, GDP, and CO2 emissions, preceded
 * by a label and followed by units where applicable.
 *
 * @param {object} d The data associated to the hovered element
 * @returns {string} The tooltip contents
 */
export function getContents (d, i) {
  // TODO : Generate tooltip contents
  console.log(d)
  // On définit un à un tous les éléments composant le tooltip
  var country = "<span style='font-weight:bold'> Country : </span> <span style='font-weight:normal'>" + d.Pays + '</span> <br>'
  var PerCapita = "<span style='font-weight:bold'> C02 Per Capita : </span> <span style='font-weight:normal'>" + Math.round(d.PerCapita * 100) / 100 + '  metric tonnes</span> <br>'
  var percentTotalEmissions = "<span style='font-weight:bold'> % of Total CO2 emissions : </span> <span style='font-weight:normal'>" + d.percentTotalEmissions + ' </span>'
  return country + PerCapita + percentTotalEmissions
}
