var request = new XMLHttpRequest();
request.open('GET', 'https://restcountries.eu/rest/v2/all', true);
request.send();
var population;
request.onload = function() {
var data = JSON.parse(this.response);
    var totalpopulation = 0;
    for(var i=0;i<data.length;i++){
        totalpopulation = totalpopulation + data[i].population;
    }
    console.log(totalpopulation);
     
    
    
    
            
           var request2 = new XMLHttpRequest();
            
            request2.open('GET',"http://api.openweathermap.org/data/2.5/weather?q="+population+"&appid=bb29024b3306194e6f8cd4f9965abffe",true);
            request2.send(population);
            request2.onload = function() {
            var data2 = JSON.parse(this.response);
            console.log(data2);    
        }
    }
