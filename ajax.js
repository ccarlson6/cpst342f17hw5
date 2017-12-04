$(document).ready(function() {
    $(document).on("submit", "#generatestring", function(e){
        let site = "http://ellypost.com/courses/453/ajax-lab/actions.php";
        let request = $(this).serialize();
        e.preventDefault();
        $.post(site, request)
            .done(function(response){
                try {
                    let result = JSON.parse(response);
                    $("#result").html(result.value);
                } catch(e) {
                    console.error(e);
                }
            })
    });
});