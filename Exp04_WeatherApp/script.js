let chart;

function getWeather() {

let cityName = document.getElementById("city").value.trim();

if (cityName === "") {
alert("Please enter a city name!");
return;
}

// 🌤 MOCK DATA (works for any city)
let temp = 30;
let feels = 32;
let humidity = 55;

// 📝 Show result
document.getElementById("result").innerHTML = `
<h3>${cityName}</h3>
<p>🌡 Temp: ${temp} °C</p>
<p>🤒 Feels Like: ${feels} °C</p>
<p>💧 Humidity: ${humidity}%</p>
`;

// 📊 Chart
let labels = ["Temperature", "Feels Like", "Humidity"];
let values = [temp, feels, humidity];

if (chart) chart.destroy();

let ctx = document.getElementById("weatherChart").getContext("2d");

chart = new Chart(ctx, {
type: "bar",
data: {
labels: labels,
datasets: [{
label: "Weather Data",
data: values
}]
},
options: {
responsive: true
}
});

}