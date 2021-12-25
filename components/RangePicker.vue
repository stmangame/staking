<template>
  <section class="section">
    <div class="rangeContainer">
      <input id="priceRange" class="slider" type="range" min="0" max="4" value="0"
             aria-label="Check your loyalty discount">
      <span class="nub"></span>
      <div class="ticks">
        <span class="tick active" data-range="0">0%</span>
        <span class="tick" data-range="1">25%</span>
        <span class="tick" data-range="2">50%</span>
        <span class="tick" data-range="3">75%</span>
        <span class="tick" data-range="4">100%</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'RangePicker',
    mounted() {
      const slider = document.getElementById('priceRange'),
        tickMarkContainer = document.querySelector('.ticks'),
        tickMarks = Array.prototype.slice.call(document.querySelectorAll('.tick'));

      function setActive() {
        tickMarks.map(function (tick) {
          var tickIndex = parseInt(tick.getAttribute('data-range'));
          tick.classList.remove('active');
          tick.classList.remove('passed');
          if (tickIndex <= Math.floor(slider.value)) {
            tick.classList.add('passed');
            if (tickIndex === Math.round(slider.value)) {
              tick.classList.add('active');
            }
          }
        });
      }

      function updateSlider() {
        const threeMonthTick = document.querySelector('.tick:nth-child(4)'),
          tenMonthTick = document.querySelector('.tick:nth-child(10)'),
          min = this.getAttribute('min'),
          perc = (this.value - min) * 25,
          currentRange = Math.floor(this.value);
        console.log(perc);

        this.style.backgroundImage =
          '-webkit-gradient(linear, left top, right top, ' +
          'color-stop(' +
          perc +
          '%, #b8b8b8), ' +
          'color-stop(' +
          perc +
          '%, #3b3a3b' +
          ')';
        this.style.backgroundImage =
          'linear-gradient(to right, #b8b8b8 ' + perc + '%, #3b3a3b ' + perc + '%)';
        setActive();
      }

      slider.addEventListener('change', updateSlider);
    },
    methods: {},
  };
</script>

<style lang="css" scoped>
  .rangeContainer {
    position: relative;
    width: 100%;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    margin: 0;
    padding: 0;
    font-size: 12px;
    transition: 0.3s ease-out;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    height: 4px;
    background: linear-gradient(to right, rgb(184, 184, 184) 75%, rgb(59, 58, 59) 75%) rgb(59, 59, 59);
    border-radius: 100px;
  }

  .slider:focus {
    outline: none;
  }

  .ticks {
    position: absolute;
    display: flex;
    justify-content: space-between;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    margin: 0;
    padding: 0;
  }

  .ticks .tick {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 0;
    padding-top: 26px;
    height: 24px;
    color: #efefef;
    font-weight: bold;
    box-sizing: border-box;
    font-size: 12px;
    z-index: 2;
    transition: 0.4s ease-out;
    cursor: pointer;
    pointer-events: none;
    line-height: 1;
  }

  .tick:not(.passed)::before {
    content: "";
    position: absolute;
    width: 4px;
    height: 19px;
    top: -7px;
    background: #3B3B3B;
    border-radius: 4px;
  }

  .ticks .tick.active {
    color: #008631;
  }


  .ticks .tick.passed {
    color: #3b3a3b;
  }

  .ticks .tick.passed.active {
    color: #008631;
  }

  .slider::-webkit-slider-thumb {
    width: 24px;
    height: 24px;
    -webkit-appearance: none !important;
    border: 6px solid #0EAD32;
    background-color: #FFFFFF;
    border-radius: 50%;
  }

  .slider::-moz-range-thumb {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    width: 40px;
    height: 40px;
    background: #efefef;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 2px #008631;
    -webkit-box-shadow: inset 0 0 0 2px #008631;
  }

  .slider::-ms-thumb {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    border: none;
    width: 40px;
    height: 40px;
    background: #efefef;
    border-radius: 5px;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .slider::-ms-tooltip {
    display: none;
  }

  .slider::-ms-track {
    background: transparent;
    color: transparent;
    border: none;
  }

  .slider::-ms-fill-upper {
    background-color: transparent;
  }

  .slider::-ms-fill-lower {
    background-color: transparent;
  }

</style>
