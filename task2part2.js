var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
var lat; var long; var cityname;
request.onload = function() {
    var data = JSON.parse(this.response);
    lat = data[1].latlng[0];
    long = data[1].latlng[1];
    cityname = data[1].name;
    console.log(lat,long,cityname);

    var request2 = new XMLHttpRequest();
    var url = "https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+long+"&appid=bb29024b3306194e6f8cd4f9965abffe"
    request2.open('GET',url,true);
    request2.send(lat,long);
    request2.onload = function() {
        var data2 = JSON.parse(this.response);
        console.log(data2);
    }
    var request3 = new XMLHttpRequest();
    var url2 = "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=bb29024b3306194e6f8cd4f9965abffe"
    request3.open('GET',url2,true);
    request3.send(cityname);
    request3.onload = function() {
        var data3 = JSON.parse(this.response);
        console.log(data3);
    }

}