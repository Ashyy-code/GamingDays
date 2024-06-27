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
            <tr v-for="gamer in peepeeReportData" :key="gamer">
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

<style>

</style>