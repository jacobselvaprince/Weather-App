$(document).ready(function () {
    $("#searchBtn").click(function () {
        var name = $("#city").val();
        if (name == "") {
            alert("enter the city name");
            return;
        }
        alert("Enter Successfully");
    })
})