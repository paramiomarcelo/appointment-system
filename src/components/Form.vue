<template>
  <form @submit.prevent="submit">
    <Datepicker v-model="date"/>
    <button type="submit">Send</button>
  </form>
</template>

<script>
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import appointmentApi from '@/api/appoitmentApi'
export default {
        components: { Datepicker },
        data(){
          return{
            date: null,
          }
        },
        methods:{
          async submit(){
            const dataToSave = {
              date: "01/01/2023",
              time: "10:30",
            }
            const id = localStorage.getItem('localId')
            await appointmentApi.post(`/usersDates/${id}.json`, dataToSave)
            console.log(this.date)
          }
        }
    }
    
</script>

<style>

</style>