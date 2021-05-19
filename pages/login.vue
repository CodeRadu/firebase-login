<template>
  <div class="login">
    <h3>Login</h3>
    <form @submit.prevent="pressed">
      <div class="login">
        <input type="text" placeholder="Email" v-model="email">
      </div>
      <div class="password">
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <button>Login</button>
    </form>
    <div class="message" v-if="message">{{message.message}}</div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  data(){
    return {
      email: '',
      password: '',
      message: ''
    }
  },
  methods: {
    pressed(){
      this.message={message: 'Please wait'}
      firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(data=>{
        this.$router.push('/loggedin')
      }).catch(error=>this.message=error)
    }
  }
}
</script>

<style scoped>
.login {
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

input {
  width: 350px;
  padding: 30px;
  margin: 20px;
  font-size: 21px;
  border-radius: 100px;
  transition: 500ms;
  outline: none;
  border: 2px solid;
}
input:focus {
  width: 400px;
  border-color: #00DD00;
}
input:hover {
  border-color: #008800;
}

button {
  width: 350px;
  height: 75px;
  font-size: 100%;
  border: 2px solid;
  border-radius: 100px;
}
button:hover {
  background-color: #DDDDDD;
  cursor: pointer;
}

</style>