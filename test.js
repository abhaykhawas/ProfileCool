fetch('https://api.open-meteo.com/v1/forecast?latitude=13.067870&longitude=77.497911&current=rain,temperature_2m')
    .then((result) => {return result.json()})
    .then((res) => console.log(res))