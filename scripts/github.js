jq142(document).ready(function() {
    jq142.ajax({
        type: "GET",
        url: "https://api.github.com/users/SPARC-Auburn/repos",
        dataType: "json",
        success: function(result) {
            for(i in result) {
                var checkUrl = "https://raw.githubusercontent.com/SPARC-Auburn/" + result[i].name + "/master/addrepositorytowebsite.txt"; 
                if (result[i].size > 0 && UrlExists(checkUrl)) {
                    var checkPic = "https://raw.githubusercontent.com/SPARC-Auburn/" + result[i].name + "/master/websitephoto.jpg"; 
                    if (UrlExists(checkPic)) {
                        jq142("#repo_list").append(
                            "<li class='box'><h3>" + result[i].name + "</h3><hr noshade/><img src='https://raw.githubusercontent.com/SPARC-Auburn/" + result[i].name + "/master/websitephoto.jpg' style='width:100%;' alt=''/>" +result[i].description + "<a href='" + result[i].html_url + "' target='_blank'><br/>View on Github</a></li>"
                        );
                    }
                    else {
                       jq142("#repo_list").append(
                            "<li class='box'><h3>" + result[i].name + "</h3><hr noshade/>" +result[i].description + "<a href='" + result[i].html_url + "' target='_blank'><br/>View on Github</a></li>"
                        ); 
                    }
                }
            }
            
        }
    });
});
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}
