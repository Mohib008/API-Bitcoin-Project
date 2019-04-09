/*var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

// listen for Clicks.
btn.addEventListener("click", function() {
 // make the request.
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = function(){
    if(XHR.readyState == 4 && XHR.status == 200) {
      var url = JSON.parse(XHR.responseText).message;
      img.src = url;
    }
  }
  
  XHR.open("Get", "https://dog.ceo/api/breeds/image/random");
  XHR.send();
})

var bit = document.querySelector("#bit");
var priceDisp = document.querySelector("#price");
var currency = "USD";

bit.addEventListener("click", function(){

    var XHR = new XMLHttpRequest();
    XHR.onreadystatechange = function(){
        if(XHR.readyState == 4 && XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            var price = data.bpi[currency].rate;
            priceDisp.innerText = price  +  "  "  +  currency;
        }
    }

  var url = "https://api.coindesk.com/v1/bpi/currentprice.json";
  //var url = "https://api.coindesk.com/v1/bpi/currentprice/<CODE>.json";

  XHR.open("Get", url);
  XHR.send();
})*/


var url = "https://api.coindesk.com/v1/bpi/currentprice.json";

fetch(url)
.then(function(response){
    console.log(response);
    return response.json()
    })
    .then(function(data){
        console.log(data.bpi.USD.rate);
})