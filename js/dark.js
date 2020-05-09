function darktoggle() {
        if ($("body").hasClass("dark")) {
            $("body").removeClass("dark");
            $("h1").removeClass("dark");
            $("p").removeClass("dark");
            $("button").removeClass("dark");
        }
        else {
            $("body").addClass("dark");
            $("h1").addClass("dark");
            $("p").addClass("dark");
            $("button").addClass("dark");
        }
    };
