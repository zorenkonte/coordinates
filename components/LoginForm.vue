<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Loader2 } from 'lucide-vue-next'

const supabase = useSupabaseClient()
const email = ref('')
const password = ref('')

const { status, execute } = useAsyncData('login', async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  })
  if (!error) {
    // Redirect to root page after successful login
    window.location.href = '/'
  }
}, {
  immediate: false,
})

const isPending = computed(() => status.value === 'pending')
</script>

<template>
  <div class="flex flex-col gap-6">
    <Card class="overflow-hidden">
      <CardContent class="grid p-0 md:grid-cols-2">
        <form class="p-6 md:p-8" @submit.prevent="execute()">
          <div class="flex flex-col gap-6">
            <div class="flex flex-col items-center text-center">
              <h1 class="text-2xl font-bold">
                {{ $t('welcome') }}
              </h1>
              <p class="text-balance text-muted-foreground">
                Login to your {{ $config.public.appName }} account
              </p>
            </div>
            <div class="grid gap-2">
              <Label for="email">{{ $t('email') }}</Label>
              <Input id="email" v-model="email" type="email" placeholder="zxreign@bringino.com" required />
            </div>
            <div class="grid gap-2">
              <div class="flex items-center">
                <Label for="password">{{ $t('password') }}</Label>
                <a
                  href="#"
                  class="ml-auto text-sm underline-offset-2 hover:underline"
                >
                  Forgot your password?
                </a>
              </div>
              <Input id="password" v-model="password" type="password" required />
            </div>
            <Button type="submit" class="w-full" :disabled="isPending">
              <template v-if="isPending">
                <Loader2 class="w-4 h-4 animate-spin" />
              </template>
              <template v-else>
                {{ $t('login') }}
              </template>
            </Button>
          </div>
        </form>
        <div class="relative hidden bg-muted md:block">
          <img
            src="/placeholder.svg"
            alt="Image"
            class="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
          >
        </div>
      </CardContent>
    </Card>
    <div class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      By clicking continue, you agree to our <a href="#">Terms of Service</a>
      and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
