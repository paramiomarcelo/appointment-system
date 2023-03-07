<template>
    <div id="container">
        <div class="form">
            <div class="signUpBox">
                <h1>Sign up</h1>
                <form action="">
                <label>Username</label>
                <input type="email" name="" id="">
                <label>Password</label>
                <input type="password" name="" id="">
                <label>Confirm password</label>
                <input type="password" name="" id="">
                <button class="button">Sign up</button>
                </form>
                
            </div>
        </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            
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

h2{
  font-size: 16px;
}
.signUpBox a{
  text-decoration: none;
  color: #6100FF;
  font-size: 16px;
  padding-left: 5px;
}

.signUpBox a:hover{
  text-decoration: underline;
}

</style>