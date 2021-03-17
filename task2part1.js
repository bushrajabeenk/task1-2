var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
var population;
request.onload = function() {
var data = JSON.parse(this.response);
    for(var i in data){
       
        console.log(data[i].population);
    }
    
            
    
        var request2 = new XMLHttpRequest();
        var url2 = "http://api.openweathermap.org/data/2.5/weather?q="+population+"&appid=bb29024b3306194e6f8cd4f9965abffe"
        request2.open('GET',url2,true);
        request2.send(population);
        request2.onload = function() {
        var data2 = JSON.parse(this.response);
        console.log(data2);    
    }
}
