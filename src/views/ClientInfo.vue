<template>
    <section>
        <GChart
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
        />
    </section>
</template>

<script>
    import { GChart } from "vue-google-charts"
    export default {
        name: "ClientInfo",
        data() {
          return {
            chartOptions: {
              // legend: { position: "none" },
              axes: {
                0: { side: 'top', label: 'White to move'}
              },
              chart: {
                title: "Company Performance",
                subtitle: "Sales, Expenses, and Profit: 2014-2017"
              },
              colors: ['#00ff0c', '#ff0008']
            }
          }
        },
        components: {
            GChart
        },
        computed: {
            chartData () {
                let c_client = this.$store.state.assistant.current_client.username
                let c_messages = this.$store.state.conversations.conversations[c_client]
                let c_moods = c_messages.filter(mes => mes.author === c_client)
                let modd_list = c_moods.map(mes => mes.mood)
                let char_data = [["message", "positive", "negative"]]
                let i = 0
                modd_list.forEach(function (modd) {
                  if (modd < 0) {
                      char_data.push([(i+1).toString(), 0, modd])
                  } else {
                      char_data.push([(i+1).toString(), modd, 0])
                  }
                  i = i + 1
                })
                return char_data
            }
        }
    }
</script>

<style scoped>

</style>
