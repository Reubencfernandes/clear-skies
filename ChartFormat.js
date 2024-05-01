module.exports = {
    processWeatherData: (data) => {
            const firstDayDate = data.list[0].dt_txt.split(' ')[0]; // Get the date of the first entry
            const firstDayData = data.list.filter(item => item.dt_txt.includes(firstDayDate));
        
            return firstDayData.map(entry => ({
                hour: entry.dt_txt.split(' ')[1].slice(0, 5), // Extract time as 'hh:mm', omitting seconds
                temperature: Math.trunc((entry.main.temp- 273.15)),
                pressure: entry.main.pressure,
                humidity: entry.main.humidity
            }));
        }
}
