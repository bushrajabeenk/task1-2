var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
request.onload = function() {
    var data = JSON.parse(this.response);
    console.log(data); 
var rqst = new XMLHttpRequest();
var cityname;
rqst.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=bb29024b3306194e6f8cd4f9965abffe`, true);
rqst.send(cityname);
rqst.onload = function() {
            var i; 
                for(i=0;i<data.length;i++) {
                    cityname = data[i].name;
                    console.log(cityname);
                   }
    }
}