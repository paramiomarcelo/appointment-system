<template>
    <div id="container">
        <div class="form">
            <div class="signUpBox">
                <h1>Sign up</h1>
                <form action="" @submit.prevent="submit">
                  <label>E-mail</label>
                  <input type="email" name="" id="" v-model="userName" placeholder="Enter your email">
                  <label>Password</label>
                  <input type="password" name="" id="" v-model="password" placeholder="Enter your password">
                  <label>Confirm password</label>
                  <input type="password" name="" id="" v-model="confirmPassword" placeholder="Confirm your password">
                  <button class="button" type="submit">Sign up</button>
                  <router-link :to="{name: 'login'}" class="link">You have an account?</router-link>
                </form>
            </div>
        </div>
  </div>
</template>

<script>
import authApi from '../api/authApi'

export default {
    data(){
        return{
            userName: null,
            password: null,
            confirmPassword: null,
        }
    },

    methods:{
      /*register(){
        if(this.password && this.confirmPassword && this.password=== this.confirmPassword){     to do: validar la contraseña
            this.validation = true

        }*/
      async submit(){
        const dataToSave = {
          email: this.userName,
          password: this.password,
          returnSecureToken: true
        }
        try {
          await authApi.post(':signUp',dataToSave)
          this.$router.push({name: 'login'})
        } catch (error) {
          console.log(error.response)
        }
        
        //this.$router.push({name: 'app-page', params: {id: 'hola'}})
      }

    },
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

.signUpBox{
  padding: 35px;
  height: 100%;
  width: 75%;
  margin: 0 auto;
}

.signUpBox label{
  text-align: left;
  width: 100%;
  font-size: 17px;
}
.signUpBox input{
  background-color: #D9D9D9;
  border: none;
  height: 30px;
  border-radius: 20px;
  width: 100%;
  padding: 15px;
  margin-top: 15px;
  margin-bottom: 25px;
}
.signUpBox input:focus{
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

.signUpBox a:hover{
  text-decoration: underline;
}
.material-symbols-outlined{
  color: red;
}
</style>