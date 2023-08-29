(function ($) {
  let section = $("section.faq");
  let sectionForm = $("div.form-holder");
  if (section.length) {
    $(".qa-item").click(function (e) {
      e.preventDefault();
      if ($(this).hasClass("opened")) {
        $(this).removeClass("opened");
        $(this).find(".answer").slideUp(150);
      } else {
        $(".qa-item").removeClass("opened");
        $(".qa-item .answer").slideUp(150);
        $(this).addClass("opened");
        $(this).find(".answer").slideDown(150);
      }
    });
  }
  if (sectionForm.length) {
    $(".form-dropdown-label").click(function (e) {
      e.preventDefault();
      if ($(this).parent().hasClass("quote-form-active")) {
        $(this).parent().removeClass("quote-form-active");
      } else {
        $(this).parent().addClass("quote-form-active");
      }
    });
    $(
      ".form-dropdown-container .dropdown-list-custom .dropdown-list-item"
    ).click(function (e) {
      e.preventDefault();
      var val = $(this).find("p").text();
      $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .find(".option-text")
        .text(val);
      $(this)
        .parent()
        .parent()
        .find(".dropdown-list-item--active")
        .removeClass("dropdown-list-item--active");
      $(this).addClass("dropdown-list-item--active");
      $(".quote-form-active").removeClass("quote-form-active");
    });
    $(document).click(function (event) {
      if (!$(event.target).closest(".form-dropdown-container").length) {
        $(".quote-form-active").removeClass("quote-form-active");
      }
    });
  }
})(jQuery);
