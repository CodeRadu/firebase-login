<template>
  <div>
    <h1>Logged In</h1>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  beforeCreate(){
    let user=firebase.auth().currentUser
    if(!user){
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>