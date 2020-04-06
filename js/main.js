(function ($) {

    $(".copy-text .checkbox-default").change(function() {

        $(this).parents(".copy-text").find(".item-text").removeClass("text-checked");

        if (this.checked) {
            $(this).parents(".copy-text").find(".item-text").addClass("text-checked");
        }
    });

})(jQuery);
