
# Clear Skies v1.0

[Clear Skies](https://clear-skies-production.up.railway.app/) provides real-time weather information, air quality indices, and forecasts. The website is developed using the MERN stack, integrating the OpenWeather API and MongoDB for robust data management and retrieval.

## Features
- **Real-time Weather Data**: Provides up-to-date weather information for any location.
- **Air Quality Index**: Displays air quality indices to help users stay informed about environmental conditions.
- **Forecasting**: Offers weather forecasts to help users plan their activities.
- **MERN Stack**: Built with MongoDB, Express.js, React, and Node.js for a seamless development experience.
- **OpenWeather API**: Leveraging the power of OpenWeather API for accurate and reliable weather data.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Reubencfernandes/clear-skies.git
    cd clear-skies
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add your OpenWeather API key and MongoDB connection string:
    ```plaintext
    REACT_APP_WEATHER_API_KEY=your_openweather_api_key
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

## Usage

Visit `http://localhost:3000` in your browser to view the application in development mode. The app will provide real-time weather updates and forecasts for the specified location.

## Contributing

Contributions are welcome! Please follow these steps to contribute:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---
