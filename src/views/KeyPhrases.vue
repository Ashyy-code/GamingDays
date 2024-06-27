<template>
  <article v-if="!keyphrasesLoaded || !keyphraseBreakdownLoaded">
    Loading..
  </article>

  <article v-if="keyphrasesLoaded" class="animate__animated animate__fadeIn">
    <h3>Mentioned Keyphrase Catches</h3>
    <table class="striped">
      <thead>
        <tr>
          <th>Keyphrase</th>
          <th>Mentioned Count</th>
          <th>Commonly on</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="phrase in keyphraseData" :key="phrase">
          <td>{{ phrase.keyPhrase }}</td>
          <td>{{ phrase.phraseCount }}</td>
          <td>{{ phrase.commonDay }}</td>
        </tr>
      </tbody>
    </table>
  </article>

  <article
    v-if="keyphraseBreakdownLoaded"
    class="animate__animated animate__fadeIn"
  >
    <div class="group">
      <section>
        <h3>All Keyphrases</h3>
        <table>
          <thead>
            <tr>
              <th>Phrase</th>
              <th>Mentioned:</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="phrase in keyphraseBreakdownData" :key="phrase">
              <td>{{ phrase.keyphrase }}</td>
              <td>{{ phrase.cnt }} times so far</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section>
        <h3>Add new Keyphrase</h3>
        <form @submit.prevent>
  <fieldset>
    <label>
      Keyphrase
      <input
        name="keyphrase"
        placeholder="new keyphrase.."
        autocomplete="off"
        v-model="newPhrase"
      />
    </label>
    <label>
      Admin PWD
      <input
        type="password"
        name="password"
        placeholder="admin pwd"
        autocomplete="password"
        v-model="adminPWD"
      />
    </label>
  </fieldset>

  <input
    type="submit"
    value="Add phrase"
    @click="insertKeyphrase()"
  />
</form>
      </section>
    </div>
  </article>
</template>

<script>
import store from "../store";
import axios from "axios";

export default {
  mounted() {
    this.loadKeyphraseData();
    this.loadKeyphraseBreakdownData();
  },
  data() {
    return {
      keyphraseData: null,
      keyphrasesLoaded: false,
      keyphraseBreakdownData: null,
      keyphraseBreakdownLoaded: false,

      //form
      newPhrase:null,
      adminPWD:null
    };
  },
  methods: {
    async loadKeyphraseData() {
      await axios
        .get(store.state.keyphrase_report_endpoint_url)
        .then((response) => {
          this.keyphraseData = response.data;
          this.keyphrasesLoaded = true;
        });
    },
    async loadKeyphraseBreakdownData() {
      await axios
        .get(store.state.keyphrase_report_breakdown_endpoint_url)
        .then((response) => {
          this.keyphraseBreakdownData = response.data;
          this.keyphraseBreakdownLoaded = true;
        });
    },
    async insertKeyphrase(){
        await axios.post(store.state.keyphrase_insert_url,{
            contentType:'application/json',
            keyphrase:this.newPhrase,
            adminPWD:this.adminPWD
        }).then(
            response => {
                let res = response.data.d;
                if(res == "Nope"){
                    alert('Wrong admin password');
                } else{
                    this.loadKeyphraseBreakdownData();
                }
            }
        )
    }
  },
};
</script>

<style lang="scss" scoped>
.group {
  display: flex;
  gap:2rem;
  justify-content: space-between;
  padding:1rem;

  section:first-child{
    flex-grow:1;
  }
}
</style>