<template>
  <article v-if="timeSlotData" class="animate__animated animate__fadeIn">
    <h3>
        Best Time by online activity
    </h3>
    <div class="chart" full>
        <div
          v-for="time in timeSlotData"
          :key="time"
          class="bar"
          :count="Math.floor(time.timeSlotCount)"
        >
          <span class="rt" v-if="time.showName"> {{ time.timeSlotName.substring(0,5) }} </span>
        </div>
    </div>
  </article>
</template>

<script>
import axios from 'axios';
import store from '../store'
export default {
mounted(){
    this.loadTimeSlotBreakdown();

    //set the chart after delay
    setTimeout(() => {
      let allBars = document.querySelectorAll(".bar");
      allBars.forEach((bar) => {
        //get the prc lol quick maff
        let barHours = bar.getAttribute("count") * 10;
        let prc = Math.floor((barHours / this.totalValues) * 100);
        bar.style.height = prc + "%";
        //console.log(this.totalValues);
      });
    }, 1000);

},
data(){
    return{
        timeSlotData:null,
        totalValues:0,
    }
},
methods:{
    async loadTimeSlotBreakdown(){
        await axios.get(store.state.timeslots_report_endpoint_url).then(
            response => {
                //console.log(response.data);
                this.timeSlotData = response.data;

                //get the totals
                this.timeSlotData.forEach(time =>{
                    this.totalValues += time.timeSlotCount;
                })
            }
        )
    }
}
}
</script>

<style lang="scss">
.rt{
    transform: rotate(-45deg);
    font-size:0.6rem;
    height:15px;
    width:60px;
    display: flex;
    justify-content: flex-end;
}
</style>