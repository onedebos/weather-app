const appLoad = () => {
  const appBody = document.querySelector(".app-body");
  appBody.innerHTML = `
<nav class="app-title">
<h2>Weatherify</h2>
<p class="hero-p">get live weather information from cities around the world </p>

</nav>
<main class="app-work">

<div class="weather-details-div temperature">
<div class="box">
<p class="city-name"></p>
<p class="country"></p>

<p class="city-temp-hold"> 
<span class="city-temp"></span>
<span class="temp-degree"></span><span class="temp-celsius"></span>
</p>
<p class="feels"></p>
<p class="city-weather"></p>
</div>
<svg class="spinner hide" viewBox="0 0 50 50">
  <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
</svg>
<p class="current-location hide"> </p>


</div>
<div class="icon-box hide"><span class="wind"> &nbsp;</span><span class="humidity"></span><span class="precipitation"></span></div>

<form action="" class="get-location">

<input
  type="text"
  placeholder="enter city name and hit enter.." id="get-location-id" 
></input>

<button class="temp-btn" type="button">To fahrenheit</button>
</form>

<svg class="bottom-bg" width="1436" height="398" viewBox="0 0 1436 398" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M853.281 0L474.469 408H1251.13L853.281 0Z" fill="#CC0000"/>
<path d="M825.167 0L757 408H1181L825.167 0Z" fill="#AA0000"/>
<path d="M0 408L371.733 192L711 408H0Z" fill="#D6002B"/>
<path d="M323 408L372.411 192L711 408H323Z" fill="#B10022"/>
<path d="M1024.08 87L1307 408H759L1024.08 87Z" fill="#D9004B"/>
<path d="M1024.22 87L1307 408H991L1024.22 87Z" fill="#B2003D"/>
<path d="M569.262 222L768 408H347L569.262 222Z" fill="#D3006C"/>
<path d="M524 408L568.067 222L768 408H524Z" fill="#AC0057"/>
<path d="M1436 408L1185.38 165L938 408H1436Z" fill="#C4008C"/>
<path d="M1436 408L1185.22 165L1156 408H1436Z" fill="#9E0071"/>
<path d="M1030 408L836.336 215L637 408H1030Z" fill="#AA00AA"/>
<path d="M813 408H1030L835.757 215L813 408Z" fill="#880088"/>
</svg>



</main>
`;
};

export default appLoad;
