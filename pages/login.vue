<script setup lang="ts">
const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

async function signInWithPassword() {
  await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
}
</script>

<template>
  <div>
    <button @click="signInWithPassword">
      Sign In with E-Mail
    </button>
    <input
      v-model="email"
      type="email"
    >
    <input
      v-model="password"
      type="password"
    >
  </div>
</template>
