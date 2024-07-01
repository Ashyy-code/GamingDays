<template>
  <article>
    <h2>Hi there</h2>
    <p>This data is still young. I mean really young, like if this data was a girl, R-Kelly would be tryna pee on it.</p>
    <p>The report data will become more useful as the months go by, it continuously builds each day as people join VC and leave.</p>
    <h2>What is captured/stored?</h2>
    <p>Nothing I couldn't gather myself with a pen and paper and some free time. Its all public info you can see just by being in the server. </p>
    <p>If you wanted to, you could keep track of when people join a voice channel and write it down, then write it down when they leave. This would help you build a profile of the most popular days people are on over time. You could then use this info to help decide raid days/events. Well thats pretty much what this bot does but without the pen and paper. </p>
    <p>In terms of what the data looks like, it looks like this: Ashy#4319 : monday: 8:00am enter [Channel] : 8:00pm leave channel : 12 hours duration. (Like I said, info anyone in the server could just record themselves manually if they wanted to)</p>
    <p>Also only in servers where the GamingDays bot is.</p>
    <h2>Keyphrases..</h2>
    <p>When you say something that has a specific keyphrase in it, a counter against that keyphrase is incremented. The message isnt stored, the person who said it isnt stored. It just goes "oh i know that word.. bop!" and incerements the number of times that phrase was said.</p>
    <p>This data will eventually be paired with the Best Day data, to help realise which days people are more likely to ASK for VC as well as join it.</p>
    <h2>No thanks</h2>
    <p>Worry not, I am currently implementing an opt out and purge protocol for sensitive andy's. Soon you will be able to request to have your data purged by a simple whisper command to the bot, as well as opt out of being tracked. (Sorry but in order to know to ignore you actions, I will still kinda have to store your Discord Username so it knows to ignore you otherwise like.. how is it gonna know :shrug:)</p>
  </article>
</template>

<script>
export default {

}
</script>

<style>

</style>