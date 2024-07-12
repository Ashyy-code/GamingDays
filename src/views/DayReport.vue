<template>
  <article v-if="!dayReportData">Loading..</article>

  <article
    v-if="dayReportData"
    class="overflow-auto animate__animated animate__fadeIn"
  >
    <h3>Day Total Hours Breakdown</h3>
    <table class="striped">
      <thead>
        <tr>
          <th v-for="day in dayReportData" :key="day">
            {{ day.day }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td v-for="day in dayReportData" :key="day">
            {{ Math.floor(day.totalMins / 60) }}
          </td>
        </tr>
      </tbody>
    </table>
    <footer>
      Total Hours recorded: <b>{{ totalHours }}</b>
    </footer>
  </article>

  <article class="animate__animated animate__fadeIn">
    <h3>Chart</h3>
    <div class="group">
      <div class="chart">
        <div
          v-for="day in dayReportData"
          :key="day"
          class="bar"
          :hours="Math.floor(day.totalMins / 60)"
        >
          <span> {{ day.day.substring(0, 1) }} </span>
        </div>
      </div>
      <table>
        <thead>
            <tr>
                <th>
                   Day
                </th>
                <th>
                    Gamer Count
                </th>
                <th>
                    Biggest Dick Gamer
                </th>
                <th>
                    Total Hours
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="day in dayReportData" :key="day">
                <td>{{ day.day }}</td>
                <td>{{ day.uniqueGamers.length }}</td>
                <td>{{ day.uniqueGamers.sort((a,b) => b.totalMins - a.totalMins)[0].gamerName }} ({{ Math.floor(day.uniqueGamers.sort((a,b) => b.totalMins - a.totalMins)[0].totalMins /60) + ' hours' }})</td>
                <td>{{ Math.ceil(day.totalMins/60) }}</td>
            </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  mounted() {
    this.loadDayReport();
    setTimeout(() => {
      let allBars = document.querySelectorAll(".bar");
      allBars.forEach((bar) => {
        //get the prc lol quick maff
        let barHours = bar.getAttribute("hours");
        let prc = Math.floor((barHours / this.totalHours) * 100);
        bar.style.height = prc + "%";
      });
    }, 1000);
  },
  data() {
    return {
      dayReportData: null,
      dayReportLoaded: false,
      totalHours: 0,
    };
  },
  methods: {
    //load the nav
    async loadDayReport() {
      await axios.get(store.state.day_report_endpoint_url).then((response) => {
        this.dayReportData = response.data;
        this.dayReportLoaded = true;
        this.dayReportData.forEach((day) => {
          let th = Math.floor(day.totalMins / 60);
          this.totalHours += th;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
td,
th {
  text-align: center;
}

.group{
    display: flex;
    gap:2rem;
}
footer{
    text-align: right;
}
</style>