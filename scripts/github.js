jq142(document).ready(function() {
    jq142.ajax({
        type: "GET",
        url: "https://api.github.com/users/SPARC-Auburn/repos",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                jq142("#repo_list").append(
                    "<li><a href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a>: "+result[i].description + "</li>"
                );
            }
            
        }
    });
});
