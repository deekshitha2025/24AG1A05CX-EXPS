# 🌤 Weather App Project

## 🎯 Aim
To develop a simple Weather Application that fetches real-time weather data using OpenWeather API and displays temperature, humidity, and weather details with graphical representation using Chart.js.

---

## 📁 Folder Structure
Weather_App/
├── index.html
├── script.js
├── style.css

---

## 🧾 Description

This project is a web-based Weather App that allows users to enter a city name and view real-time weather information.

It uses:
- 🌐 OpenWeather API (real-time weather data)
- 📊 Chart.js (data visualization)
- 🎨 Bootstrap (UI design)

---

## ⚙️ Features

- Search weather by city name
- Displays:
  - 🌡 Temperature
  - 🤒 Feels like temperature
  - 💧 Humidity
- Bar chart visualization of weather data
- Error handling for invalid cities
- Responsive UI design

---

## 🔑 API Used

OpenWeather API:
https://openweathermap.org/api

Example API format:
   https://api.openweathermap.org/data/2.5/weather?q=CityName&appid=YOUR_API_KEY&units=metric

---

## ▶ How to Run Project

### Step 1:
Open the project folder in VS Code

### Step 2:
Install Live Server extension (recommended)

### Step 3:
Open `index.html`

### Step 4:
Click:
- Right click → "Open with Live Server"
OR
- Open in Chrome directly

---

## 🔧 Requirements

- Web browser (Chrome recommended)
- Internet connection
- OpenWeather API key

---

## 📌 Output

When user enters a city:
- Weather details are displayed
- Chart shows temperature, feels-like, humidity
- If invalid city → error message displayed

---

## ⚠ Note

- Real API key is required for live data
- Without API key, app will not fetch weather data
- Chart updates dynamically for each search

---

## 👨‍💻 Conclusion

The Weather App successfully demonstrates API integration, real-time data fetching, and data visualization using modern web technologies.

---