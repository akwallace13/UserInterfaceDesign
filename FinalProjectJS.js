var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'FinalProjectJsonData');
ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status < 400) {
        var data = JSON.parse(ourRequest.responseText);
        createHTML(data);
    } else {
        console.log("We connected to the server, but it returned an error.");
    }
};

ourRequest.onerror = function() {
    console.log("Connection error");
};

ourRequest.send();

function createHTML(reading) {
    var rawTemplate = document.getElementById("reading").innerHTML;
    var compiledTemplate = Handlebars.compile(rawTemplate);
    var ourGeneratedHTML = compiledTemplate(reading);

    var petsContainer = document.getElementById("read-container");
    petsContainer.innerHTML = ourGeneratedHTML;
    }