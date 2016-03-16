jq142(document).ready(function() {
    jq142.ajax({
        type: "GET",
        url: "https://api.github.com/users/SPARC-Auburn/repos",
        dataType: "json",
        success: function(result) {
            for( i in result ) {
                if (result[i].size > 0) {
                    jq142("#repo_list").append(
                        //"<li class="box"><h3>" + result[i].name + "</h3><hr noshade/>" +result[i].description + "<a href='" + result[i].html_url + "' target='_blank'>Visit Github</a></li>"
                       "<li class='box'><a href='" + result[i].html_url + "' target='_blank'>" +
                    result[i].name + "</a>: "+result[i].description + "</li>"

                    );
                }
            }
            
        }
    });
});
