<template>
  <Pie :data="data" :options="options" />
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from '../assets/chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

//pie chart is created with vuejs and retries its data from chartconfig.js
export default {
  name: 'pieChart',
  components: {
    Pie
  },
  data() {
    return chartConfig
  }
}
</script>