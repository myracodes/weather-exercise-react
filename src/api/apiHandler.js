import axios from 'axios';

function errorHandler(error) {
    if (error.response.data) {
      console.log(error.response && error.response.data);
      throw error;
    }
    throw error;
  }
  
  const apiHandler = {
    service,
  
    citiesWeather() {
      return service
        .get(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIkey}`)
        .then((res) => res.data)
        .catch(errorHandler);
    },
}

export default apiHandler;