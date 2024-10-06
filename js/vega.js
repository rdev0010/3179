var spec1 = "js/choropleth_map.vg.json";
  vegaEmbed('#choropleth_map', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);

  var spec2 = "js/trends.vg.json";
  vegaEmbed('#choropleth_map', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);
