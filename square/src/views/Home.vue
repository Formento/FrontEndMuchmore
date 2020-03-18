<template>
  <div class="custom-background">
    <Navbar />  
    <section class="home">
      <div class="home-text">
        <p>
          WE ARE <strong>SQUARE</strong> <br />
          AND WE ARE <strong>COMING SOON</strong>
        </p>
      </div>
      <div class="home-watermark-square"></div>
      <div class="home-countdown">
        <div class="home-countdown-day">
          <strong>{{ countdown.days }}</strong>
          <br />days
        </div>
        <div class="home-countdown-hours">
          <strong>{{ countdown.hours }}</strong>
          <br />hours
        </div>
        <div class="home-countdown-minutes">
          <strong>{{ countdown.minutes }}</strong>
          <br>minutes
        </div>
        <div class="home-countdown-seconds">
          <strong>{{ countdown.seconds }}</strong>
          <br>seconds
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import moment from 'moment';
import Navbar from '@/components/Navbar.vue';

export default {
  name: 'Home',
  components: {
    Navbar,
  },
  data () {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
    };
  },
  mounted(){
    this.loadtime();
    setInterval(this.loadtime, 1000);
  },
  methods: {
    loadtime() {
      let deadline = moment('2020-06-06 00:00:00');
      let today = moment();
      let duration = moment.duration(deadline.diff(today));
      this.countdown.days = deadline.diff(today, 'days');
      this.countdown.hours = duration.get('hours');
      this.countdown.minutes = duration.get('minutes');
      this.countdown.seconds = duration.get('seconds');
    }
  }
}
</script>

<style scoped>
  .custom-background {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #ea3d3d;
  }
	.home {
    height: 100%;
    padding: 0px 11.22% 8%;
    display: grid;
		grid-template-columns: repeat(15, 1fr);
		text-transform: uppercase;
		text-align: center;
    align-items: stretch;
	}
	.home-text {
    margin: auto auto;
    grid-column: 4 / 13;
    grid-row: 1 / 2;
    font-size: 3em;
    z-index: 1;
  }
	.home-text strong { font-weight: 700; }
  .home-watermark-square {
    margin: 4rem 0px;
    grid-column: 10 / 13;
    grid-row: 1 / 2;
    border: 5px solid rgb(255, 255, 255, 0.4);
    z-index: 0;
  }
	.home-countdown {
    margin: auto 0;
    grid-column: 5 / 12;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    justify-items: center;
    font-size: 0.7em;
    text-align: center;
	}
  .home-countdown strong { font-size: 3.5em; font-weight: lighter; }
  .home-countdown-days { grid-column: 1 / 2; }
  .home-countdown-hours { grid-column: 3 / 4; }
  .home-countdown-minutes { grid-column: 5 / 6; }
  .home-countdown-seconds { grid-column: 7 / 8; }
  @media (max-width: 812px) {
    .home-text {
      grid-column: 1 / 16;
    }
    .home-countdown {
      grid-column: 1 / 16;
    }
  }
  @media (max-width: 812px) and (orientation: landscape) {
    .home {
      padding: 0px 08% 0px;
    }
  }
</style>
