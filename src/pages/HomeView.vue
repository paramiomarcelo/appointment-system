<template>
  <div id="container">
    <div class="form">
      <div class="loginBox">
        <h1>Log in</h1>
        <form action="" @submit.prevent="submit">
          <label>E-mail</label>
          <input type="email" placeholder="Enter your email" v-model="userEmail">
          <label>Password</label>
          <input type="password" name="" id="" placeholder="Enter your password" v-model="userPw">
          <button class="button" type="submit">Log in</button>
        </form>
        <router-link :to="{name: 'register'}" class="link">You don't have an account?</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import authApi from '../api/authApi'


export default {
  data(){
    return {
      userEmail: '2@g.com',
      userPw:'123456789'
    }
  },
  methods:{
    async submit(){
        const dataToSave = {
          email: this.userEmail,
          password: this.userPw,
          returnSecureToken: true
        }
        try {
          const {data} = await authApi.post(':signInWithPassword',dataToSave)
          const { idToken, refreshToken, localId } = data
          localStorage.setItem( 'idToken', idToken )
          localStorage.setItem( 'refreshToken', refreshToken )
          localStorage.setItem( 'localId', localId )
          this.$router.push({name: 'app-page'})
        } catch (error) {
          console.log(error.response)
        }
    }
  }
  
}
</script>


<style scoped>

#container{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.form{
  font-family: 'Inter', sans-serif;
  background-color: #FEFEFE;
  height: 515px;
  width: 480px;
  box-shadow: 8px 4px 4px rgba(0, 0, 0, 0.25) ;
  border-bottom-right-radius: 20px;
}

.form h1{
  text-align: center;
  margin-bottom: 60px;
}

.loginBox{
  padding: 35px;
  height: 100%;
  width: 75%;
  margin: 0 auto;
}

.loginBox label{
  text-align: left;
  width: 100%;
  font-size: 17px;
}
.loginBox input{
  background-color: #D9D9D9;
  border: none;
  height: 30px;
  border-radius: 20px;
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 25px;
}
.loginBox input:focus{
  outline-color: #6100FF;
}
.button{
  width: 100%;
  height: 52px;
  background-color: #6100FF;
  color: white;
  font-size: 21px;
  font-weight: 700;
  border: none;
  margin-bottom: 20px;
}

.button:hover{
  color: #6100FF;
  background-color: #FFFFFF;
  border: 2px solid #6100FF;
  cursor: pointer;
}

.link{
  text-decoration: none;
  color: #6100FF;
  font-size: 16px;
  display:block;
  text-align: center;
}

.loginBox a:hover{
  text-decoration: underline;
}


</style>
