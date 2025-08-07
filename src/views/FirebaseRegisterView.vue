<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
import { ref } from 'vue'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const router = useRouter()
const auth = getAuth()

const register = () => {
    console.log('[DEBUG] Register button clicked')
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log('[DEBUG] Firebase Register Successful!')
            console.log(data)
            router.push('/FireLogin')
        })
        .catch((error) => {
            console.log('[DEBUG] Error during registration:')
            console.log(error.code, error.message)
        })
}
</script>