 // Parse the JSON data (replace this with your actual JSON data)
 const weatherData = {
    "queryCost": 1,
    "latitude": 41.2731,
    "longitude": -8.08058,
    "resolvedAddress": "Amarante, Portugal",
    "address": "Amarante",
    "timezone": "Europe/Lisbon",
    "tzoffset": 1,
    "description": "Similar temperatures continuing with a chance of rain tomorrow.",
    "days": [
        {
            "datetime": "2024-04-19",
            "datetimeEpoch": 1713481200,
            "tempmax": 22.5,
            "tempmin": 14.4,
            "temp": 18.9,
            "feelslikemax": 22.5,
            "feelslikemin": 14.4,
            "feelslike": 18.9,
            "dew": 6.1,
            "humidity": 44,
            "precip": 0,
            "precipprob": 45.2,
            "precipcover": 0,
            "preciptype": [
                "rain"
            ],
            "snow": 0,
            "snowdepth": 0,
            "windgust": 60.1,
            "windspeed": 27.7,
            "winddir": 104.5,
            "pressure": 1015.8,
            "cloudcover": 59.4,
            "visibility": 16.9,
            "solarradiation": 234.1,
            "solarenergy": 20.3,
            "uvindex": 9,
            "severerisk": 10,
            "sunrise": "06:46:10",
            "sunriseEpoch": 1713505570,
            "sunset": "20:17:19",
            "sunsetEpoch": 1713554239,
            "moonphase": 0.35,
            "conditions": "Rain, Partially cloudy",
            "description": "Partly cloudy throughout the day with a chance of rain.",
            "icon": "rain",
            "stations": [
                "LPPR",
                "LPOV"
            ],
            "source": "comb",
            "hours": [
                {
                    "datetime": "12:00:00",
                    "datetimeEpoch": 1713524400,
                    "temp": 18.9,
                    "feelslike": 18.9,
                    "humidity": 40.54,
                    "dew": 5.2,
                    "precip": 0,
                    "precipprob": 0,
                    "snow": 0,
                    "snowdepth": 0,
                    "preciptype": null,
                    "windgust": 33.1,
                    "windspeed": 13.3,
                    "winddir": 122.7,
                    "pressure": 1018,
                    "visibility": 24.1,
                    "cloudcover": 88.1,
                    "solarradiation": 781,
                    "solarenergy": 2.8,
                    "uvindex": 8,
                    "severerisk": 10,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day",
                    "stations": null,
                    "source": "fcst"
                },
                {
                    "datetime": "13:00:00",
                    "datetimeEpoch": 1713528000,
                    "temp": 19.7,
                    "feelslike": 19.7,
                    "humidity": 40.21,
                    "dew": 5.8,
                    "precip": 0,
                    "precipprob": 0,
                    "snow": 0,
                    "snowdepth": 0,
                    "preciptype": null,
                    "windgust": 29.9,
                    "windspeed": 12.2,
                    "winddir": 123.9,
                    "pressure": 1017,
                    "visibility": 24.1,
                    "cloudcover": 89.6,
                    "solarradiation": 859,
                    "solarenergy": 3.1,
                    "uvindex": 9,
                    "severerisk": 10,
                    "conditions": "Partially cloudy",
                    "icon": "partly-cloudy-day",
                    "stations": null,
                    "source": "fcst"
                }
            ]
        }
    ],
    "alerts": [],
    "stations": {
        "LPOV": {
            "distance": 62049,
            "latitude": 40.9,
            "longitude": -8.63,
            "useCount": 0,
            "id": "LPOV",
            "name": "LPOV",
            "quality": 28,
            "contribution": 0
        },
        "AT147": {
            "distance": 25052,
            "latitude": 41.452,
            "longitude": -8.263,
            "useCount": 0,
            "id": "AT147",
            "name": "CT1ETE Guimaraes PT",
            "quality": 0,
            "contribution": 0
        },
        "LPPR": {
            "distance": 50396,
            "latitude": 41.23,
            "longitude": -8.68,
            "useCount": 0,
            "id": "LPPR",
            "name": "LPPR",
            "quality": 50,
            "contribution": 0
        },
        "E9831": {
            "distance": 41224,
            "latitude": 41.183,
            "longitude": -8.558,
            "useCount": 0,
            "id": "E9831",
            "name": "EW9831 Rio Tinto PT",
            "quality": 0,
            "contribution": 0
        }
    },
    "currentConditions": {
        "datetime": "11:05:00",
        "datetimeEpoch": 1713521100,
        "temp": 19.7,
        "feelslike": 19.7,
        "humidity": 40.5,
        "dew": 5.9,
        "precip": 0,
        "precipprob": 0,
        "snow": 0,
        "snowdepth": 0,
        "preciptype": null,
        "windgust": 29.3,
        "windspeed": 19.4,
        "winddir": 72,
        "pressure": 1016,
        "visibility": 10,
        "cloudcover": 49.7,
        "solarradiation": 644,
        "solarenergy": 2.3,
        "uvindex": 6,
        "conditions": "Partially cloudy",
        "icon": "partly-cloudy-day",
        "stations": [
            "E9831",
            "LPPR",
            "AT147"
        ],
        "source": "obs",
        "sunrise": "06:46:10",
        "sunriseEpoch": 1713505570,
        "sunset": "20:17:19",
        "sunsetEpoch": 1713554239,
        "moonphase": 0.35
    }
};


document.getElementById('cidade').textContent = weatherData.resolvedAddress;
document.getElementById('data').textContent = weatherData.days[0].datetime;
document.getElementById('temp').textContent = `${weatherData.days[0].temp}°C`;
document.getElementById('ceu').textContent = weatherData.days[0].conditions;
    
// // Convert sunrise and sunset time from epoch to readable format
// const sunriseTime = new Date(weatherData.days[0].sunriseEpoch * 1000).toLocaleTimeString();
// const sunsetTime = new Date(weatherData.days[0].sunsetEpoch * 1000).toLocaleTimeString();


const horaAtual = new Date().getHours();
const saudacao = horaAtual < 12 ? 'Good Morning' : (horaAtual < 18 ? 'Good Afternoon' : 'Good Evening');
document.getElementById('dia').textContent = saudacao;
if(horaAtual<12){
    document.getElementById('hora').textContent = horaAtual + " am";
}else{
    document.getElementById('hora').textContent = horaAtual + " pm";
}


// Display alerts if any
const alertsList = document.getElementById('alertsList');
if (weatherData.alerts.length > 0) {
    document.getElementById('AlertsTitle').textContent = 'Alerts:';
    weatherData.alerts.forEach(alert => {
        const alertItem = document.createElement('li');
        alertItem.textContent = alert.description;
        alertsList.appendChild(alertItem);
    });
} else {
    document.getElementById('AlertsTitle').textContent = 'No Alerts';
}