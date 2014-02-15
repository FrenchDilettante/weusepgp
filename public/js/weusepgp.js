$(function() {

  var body = $("body");

  body.on("click", "#sidebar-link", function() {
    if (body.is(".sidebar-visible")) {
      body.removeClass("sidebar-visible");
    } else {
      body.addClass("sidebar-visible");
    }

    return false;
  });

  var updateHowTo = function() {
    var platform = $(".select-platform li.selected").attr("data-platform"),
        usage = $(".select-usage li.selected").attr("data-usage"),
        howto = $(".howtos [data-platforms*="+platform+"][data-usages*="+usage+"]"),
        notAvailable = $(".howtos .not-available");

    $(".howtos li").hide();

    if (howto.length > 0) {
      notAvailable.hide();
      howto.show();
    } else {
      notAvailable.show();
    }
  };

  $("#howto .select-usage").on("click", "li", function(evt) {
    $("#howto .select-usage li").removeClass("selected");
    $(evt.target).addClass("selected");

    updateHowTo();
  });

  $("#howto .select-platform").on("click", "li", function(evt) {
    $("#howto .select-platform li").removeClass("selected");
    $(evt.target).addClass("selected");

    updateHowTo();
  });

  updateHowTo();

});
