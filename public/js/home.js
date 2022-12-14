$(document).ready(function () {
    $("#searchBtn").click(function () {
        var name = $("#city").val();
        if (name == "") {
            alert("enter the city name");
            return;
        }

        $.ajax({
            url: `/api/weather?city=${name}`,
            type: "GET",
            success: function(result){
                console.log(result);
            },
            error: function(e){
                alert(e);
            }
        })
    })
})