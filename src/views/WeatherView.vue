<template>
    <div class="container">
        <div class="header">
            <h1>WEATHER APP</h1>
            <div class="search-bar">
                <input 
                    type="text" 
                    v-model="city"
                    placeholder="Enter city name"
                    class="search-input"
                />
                <button @click="searchByCity" class="search-button">
                    Search
                </button>
                <br>
                <br>
                <p>Please implement "Search Weather by City".</p>
            </div>
        </div>
        <main>
            <div v-if="weatherData">
                <h2>
                    {{ weatherData.name }}, {{ weatherData.sys.country }}
                </h2>
                <div>
                    <img :src="iconUrl" alt="Weather Icon" />
                    <p>{{ temperature }} °C</p>
                </div>
                <span>{{ weatherData.weather[0].description }}</span>
            </div>
        </main>
    </div>
</template>

<script>
import axios from "axios";

// Replace with your actual API key
const apikey = "442c18714c94b9ec069fd3afdf449b37";

export default {
    name: "App",
    data() {
        return {
            city: "",
            weatherData: null,
            hourlyForecast: [],
            dailyForecast: [],
        };
    },
    computed: {
        temperature() {
            return this.weatherData
                ? Math.floor(this.weatherData.main.temp - 273)
                : null;
        },
        iconUrl() {
            return this.weatherData
                ? `https://openweathermap.org/img/w/${this.weatherData.weather[0].icon}.png`
                : null;
        },
    },
    mounted() {
        this.fetchCurrentLocationWeather();
    },
    methods: {
        async fetchCurrentLocationWeather() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;
                    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}`;
                    await this.fetchWeatherData(url);
                });
            }
        },
        async fetchWeatherData(url) {
            try {
                const response = await axios.get(url);
                this.weatherData = response.data;
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        },
        // This is the new method for the search button
        async searchByCity() {
            if (this.city) {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apikey}`;
                await this.fetchWeatherData(url);
            }
        }
    }
}
</script>

<style scoped>
/* Your existing CSS styles */
.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
    text-align: center;
}

.header {
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.search-bar {
    margin-top: 20px;
}

.search-input {
    width: 60%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
}

.search-button {
    padding: 10px 20px;
    margin-left: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.search-button:hover {
    background-color: #0056b3;
}
</style>