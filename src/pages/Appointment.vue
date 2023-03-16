<template>
  <div class="container">
    <div class="form">
      <Datepicker />

    </div>
    <div class="dates">

    </div>
  </div>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
    
    export default {
        components: { Datepicker }
    }

</script>

<style scoped>

.container{
  
}
</style>