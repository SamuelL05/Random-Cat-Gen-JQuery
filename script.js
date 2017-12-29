window.onload = function() {

    var image = document.querySelector("#meowPic")

    $("#getMeow").click(function() {
        $.getJSON("https://random.cat/meow")
        .done(function(data) {
            $("#meowPic").attr("src", data.file);
        })
        .fail(function() {
            console.log("ERROR");
        })
    });  

}