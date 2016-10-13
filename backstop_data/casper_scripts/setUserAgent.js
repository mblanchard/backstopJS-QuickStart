module.exports = function(casper, scenario, vp) {
  casper.echo("\n\nSetting UA...");
  casper.then(function(){
    if(vp.name == 'iphone_6' || vp.name == 'iphone_6_plus')
    {
      casper.echo("iphone 6")
      casper.userAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1');
    }
    else if(vp.name == 'ipad_3_v')
    {
      casper.echo("ipad 3")
      casper.userAgent("Mozilla/5.0 (iPad; CPU OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1");
    }
    else {
      casper.echo("desktop")
      casper.userAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36')
    }
  });
};
