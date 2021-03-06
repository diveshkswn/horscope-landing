// Set 'URL' to your API Gateway endpoint
URL = 'https://3yli329yn5.execute-api.us-east-1.amazonaws.com/first';

$(document).ready(function () {

    $("#mainForm").submit(function (e) {
        //at this line loading animation css will be set to visible so that is should be visible on front end.
        $("#loading-id").css('visibility', 'visible');
        e.preventDefault();
        
        var name = $("#Name").val(),
            City = $("#City").val(),
            DOB = $("#DOB").val(),
            TOB = $("#TOB").val();

        $.ajax({
            type: "POST",
            url: URL,
            contentType: 'application/json',
           // crossDomain: true, // remove in production environments
            dataType: 'json',
           // dataType: 'jsonp', // use JSONP for done() callback to work locally
            data: JSON.stringify({
                name: name,
                City: City,
                DOB: DOB,
                TOB: TOB

            })
        }).done(function (result) {
            console.log(result);
        }).fail(function (jqXHR, textStatus, error) {
            console.log("Post error: " + error);
            if (error != '') $('#form-response').text('Error: ' + error);
        }).always(function(data) {
            console.log(JSON.stringify(data));
            //At this line loading animation will hide again.
            $("#loading-id").css('visibility', 'hidden');
            $('#form-response').text('Your Details have been submitted. Thank You!');
        });

    });
});