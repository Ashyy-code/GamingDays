<template>
    <article class="animate__animated animate__fadeIn" v-if="!peepeeReportData">
        Loading..
    </article>

  <article v-if="peepeeReportData" class="animate__animated animate__fadeIn">
    <h3>Biggest PeePee Gamers</h3>
    <table class="striped">
        <thead>
            <tr>
                <th>
                    Rank
                </th>
                <th>
                    Gamer
                </th>
                <th>
                    Total Sessions
                </th>
                <th>
                    Total Hours
                </th>
                <th>
                    Favorite Channel
                </th>
                <th>
                    Favorite Day
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(gamer,index) in peepeeReportData" :key="gamer" class="player" @click="selectedGamer = null; selectedGamer = gamer" :selected="selectedGamer == gamer" >
               <td>
                    {{ index +1 }}
               </td>
                <td>
                    {{ gamer.gamerName }}
                </td>
                <td>
                    {{ gamer.totalSessions }}
                </td>
                <td>
                    {{ Math.floor(gamer.totalMins / 60)  }}
                </td>
                <td>
                    {{ gamer.bestChannel }}
                </td>
                <td>
                    {{ gamer.bestDay }}
                </td>
            </tr>
        </tbody>
    </table>
    
  </article>
  <article v-if="selectedGamer" class="animate__animated animate__fadeIn gmr">
    <div>
        <h2>{{ selectedGamer.gamerName }}</h2>
        <hr>
        <h4>Gaming Days</h4>
        <table>
            <thead>
                <tr>
                    <th>
                        Day
                    </th>
                    <th>
                        Total Hours
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="day in selectedGamer.gamingDays" :key="day">
                    <td>
                        {{ day.dayName }}
                    </td>
                    <td>
                        {{ Math.floor(day.minsSpent / 60) }}
                    </td>
                </tr>
            </tbody>
        </table>
        <h4>Common Channels</h4>
        <table>
            <thead>
                <tr>
                    <th>
                        Channel
                    </th>
                    <th>
                        Total Hours
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="day in selectedGamer.gamingChannels" :key="day">
                    <td>
                        {{ day.channelName }}
                    </td>
                    <td>
                        {{ Math.ceil(day.minsSpent / 60) }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  </article>
</template>

<script>
import store from '../store'
import axios from 'axios'

export default {
mounted(){
    this.loadPeePeeReport();
},
data(){
    return{
        peepeeReportData:null,
        peepeeDataLoaded:false,
        selectedGamer:null,
    }
},
methods:{
    async loadPeePeeReport(){
        await axios.get(store.state.peepee_report_endpoint_url).then(
            response => {
                this.peepeeReportData = response.data;
                this.peepeeDataLoaded = true;
            }
        )
    }
}
}
</script>

<style lang="scss" scoped>
.player{
    cursor: pointer;
    &:hover{
        outline:solid 3px #3578db;
    }
}
tr[selected="true"]{
    outline:solid 3px #3578db;
}
.gmr{
    outline:solid 3px #3578db;
}
</style>