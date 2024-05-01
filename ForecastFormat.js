module.exports = {
    processWeatherData: (list) => {
        const results = {};
        let previousDay = null;
        let dayIndex = 1;

        list.forEach(entry => {
            try {
                const date = new Date(entry.dt * 1000);
                const currentDay = date.toISOString().split('T')[0];

                if (previousDay !== currentDay) {
                    if (previousDay !== null) {
                        dayIndex++;
                    }
                    previousDay = currentDay;
                    results[dayIndex] = {
                        summary: {
                            date: currentDay,
                            tempMin: Math.trunc(entry.main.temp_min - 273.15),
                            tempMax: Math.trunc(entry.main.temp_max - 273.15),
                            descriptions: new Set([entry.weather[0].description]),
                            icons: new Set([entry.weather[0].icon]),
                            ids: new Set([entry.weather[0].id]),
                            tempSum: entry.main.temp - 273.15,
                            count: 1
                        }
                    };
                } else {
                    const summary = results[dayIndex].summary;
                    summary.tempMin = Math.min(summary.tempMin, Math.trunc(entry.main.temp_min - 273.15));
                    summary.tempMax = Math.max(summary.tempMax, Math.trunc(entry.main.temp_max - 273.15));
                    summary.descriptions.add(entry.weather[0].description);
                    summary.icons.add(entry.weather[0].icon);
                    summary.ids.add(entry.weather[0].id);
                    summary.tempSum += Math.trunc(entry.main.temp - 273.15);
                    summary.count++;
                }
            } catch (error) {
                console.error("Error processing entry: ", error);
            }
        });

        Object.keys(results).forEach(index => {
            const summary = results[index].summary;
            summary.avgTemp = summary.tempSum / summary.count;
            summary.descriptions = Array.from(summary.descriptions);
            summary.icons = Array.from(summary.icons);
            summary.ids = Array.from(summary.ids);
            delete summary.tempSum;
            delete summary.count;
        });

        return results;
    }
}
