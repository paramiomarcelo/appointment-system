<template>
  <div class="container">
    <div class="form">
      <Form />
    </div>
    <div class="dates">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
//import appointmentApi from '@/api/appoitmentApi'
export default {
  components: { 
    Form:  defineAsyncComponent(() => import('../components/Form.vue'))
  },
  data(){
    return{
      dates: []
    }
  },
  async mounted(){
    //const id = localStorage.getItem('localId')
    //const {data} = await appointmentApi.get(`/usersDates.json/${id}`)
    
    /*if(entr){
        this.$router.push({name: 'no-entry'})
        return
      }*/
      this.$router.push({name: 'entry'})
      
    
  }
}

</script>

<style scoped>

.container{
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 25% 75%;
  padding: 50px;
  overflow-x: hidden;
}

.form{
  font-family: 'Inter', sans-serif;
  background-color: #FEFEFE;
  height: 515px;
  width: 100%;
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25) ;
  border-bottom-right-radius: 20px;
}

.dates{
  display: flex;
    padding: 40px;
    /* justify-content: space-around; */
    /* align-items: center; */
    flex-wrap: wrap;
}
</style>