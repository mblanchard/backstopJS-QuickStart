module.exports = function (casper, scenario, vp) {
  console.log('closeWaybackMenu.js has run for '+ vp.name + '.');
  casper.thenClick("a[href^='#close']",function() {
    console.log("Menu Closed")
  });
};
