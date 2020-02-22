const appLoad = () => {
  const appBody = document.querySelector(".app-body");
  appBody.innerHTML = `
<nav class="app-title">
<h2>Weatherify</h2>
</nav>
<main class="app-work">
<div class="current-location-wrapper">
  <h4 class="current-location no-location">
          Unable to identify your location
  </h4>
</div>

<section class="app-info">

  <div class="weather-img">
  <i class="wu wu-black wu-128 wu-chanceflurries"></i>
  </div>
  <div class="temperature">
    <span class="temp-num">__</span><span class="temp-degree"></span>
    <span class="temp-celsius"></span>          
  </div>

  <div>
    <h3 class="weather-description">_______</h3>
  </div>
  <div class="weather-location">
    <span><em class="city"></em>, </span
    ><span><em class="country"></em> </span>
    
  </div>
</section>
<section class="location">
  <form action="" class="get-location">
    <input
      type="text"
      placeholder="enter city name" id="get-location-id" onclick=reset();
    />
  </form>
</section>
</main>
`;
};

export default appLoad;
