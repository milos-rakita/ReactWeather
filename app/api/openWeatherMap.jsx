var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=436b5008dc2fd8b911e31544472b87cf&units=imperial';

module.exports= {
    getTemp: function(location){
        var encoderLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encoderLocation}`;

        return axios.get(requestUrl).then(function(res){
            if (res.data.cod && res.data.message) {
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        },function(res){
            throw new Error(res.data.message);
        });
    }
} 