var googletag = googletag || {};

googletag.cmd = googletag.cmd || [];

(function () {
  var gads = document.createElement("script");

  gads.async = true;

  gads.type = "text/javascript";

  var useSSL = "https:" == document.location.protocol;

  gads.src =
    (useSSL ? "https:" : "http:") + "//www.googletagservices.com/tag/js/gpt.js";

  var node = document.getElementsByTagName("script")[0];

  node.parentNode.insertBefore(gads, node);
})();

var enterprise = "dss",
  environment = "";

window.googletag = window.googletag || { cmd: [] };

if (window.location.hostname.indexOf("transunion") !== -1) {
  environment = "prod";

  googletag.cmd.push(function () {
    googletag
      .defineSlot(
        "/3448204/DSS_creditfreeze_" + environment,
        "fluid",
        "freezeTrueIdDatapass",
      )
      .addService(googletag.pubads());

    googletag.pubads().enableSingleRequest();

    googletag.pubads().setTargeting("enterprise", enterprise);

    googletag.enableServices();
  });
} else {
  environment = "stage";

  googletag.cmd.push(function () {
    googletag
      .defineSlot(
        "/3448204/DSS_creditfreeze_" + environment,
        "fluid",
        "freezeTrueIdDatapass",
      )
      .addService(googletag.pubads());

    googletag.pubads().enableSingleRequest();

    googletag.pubads().setTargeting("enterprise", enterprise);

    googletag.enableServices();
  });
}

function showAds() {
  window.googletag.cmd.push(
    (function () {
      googletag.display("freezeTrueIdDatapass");
    })(),
  );
}
