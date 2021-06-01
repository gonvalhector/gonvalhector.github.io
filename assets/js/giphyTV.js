function callGiphy(count) {
    var url = "https://tv.giphy.com/v1/gifs/tv?api_key=CW27AW0nlp5u0&tag=giphytv";
    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open( 'GET', url );
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load',function(e){
        var data = e.target.response;
        pushToDOM(data, count);
    });
}

function pushToDOM(input, count) {
    count--;
    var container = document.querySelector("#sub-content");
    container.innerHTML = "";
    var response = JSON.parse(input);
    var image = response.data;
    console.log(image);
    var src = image.images.original.url;
    var title = image.title;
    var alt = "gif image of " + title;
    container.innerHTML = "<img src=\"" + src + "\" class=\"giphy-image\" title=\"" + title + "\" alt=\"" + alt + "\">";
    if (count > 0) {
        setTimeout(function(){ callGiphy(count); }, 10000);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    callGiphy(5);
})
