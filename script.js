let updateNextButtonURL = function() {
    let currencySelected = $(".selected.currency-selector").text();
    let connectedURL = $(".selected.project-selector").attr(currencySelected);
    $(".button-selector").attr({"my-url": connectedURL});
}

$(".project-selector").on("click", function(e){
    console.log("btn clicked");
    $(".project-selector").removeClass("selected");
    $(e.target).addClass("selected");
    updateNextButtonURL();
  });

$(".currency-selector").on("click", function(e){
    $(".currency-selector").removeClass("selected");
    $(e.target).addClass("selected");
    updateNextButtonURL();
  });

$(".button-selector").on("click", function(e){
    let url = $(e.target).attr("my-url");
    window.open(url, '_blank');
});

let preloadSelectors = function(e) {
    $(".project-selector:eq(0)", ".currency-selector:eq(0)").addClass("selected");
    updateNextButtonURL();
};

preloadSelectors();

console.log("testing loaded file")