$(document).ready(function () {
    var steps = $("fieldset").length;

    function setProgressBar(currentStep) {
        var percent = parseFloat(100 / steps) * currentStep;
        percent = percent.toFixed();
        $(".progress-bar").css("width", percent + "%");
    }

    function changeStep(stepNumber) {
        $("li").removeClass("active");
        $("#progressbar li:nth-child(" + stepNumber + ")").addClass("active");
        setProgressBar(stepNumber);
    }

    // Change the step automatically
    var givenStep = 2; // databaseden gelicek
    changeStep(givenStep);
});
