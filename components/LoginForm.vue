<script setup lang="ts">
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
    <UiCard class="overflow-hidden">
      <UiCardContent class="grid p-0 md:grid-cols-2">
        <UiForm v-slot="{ handleSubmit }" as="div">
          <form class="p-6 md:p-8" @submit="handleSubmit($event, execute)">
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
                <UiLabel for="email">
                  {{ $t('email') }}
                </UiLabel>
                <UiInput id="email" v-model="email" type="email" placeholder="zxreign@bringino.com" required />
              </div>
              <div class="grid gap-2">
                <div class="flex items-center">
                  <UiLabel for="password">
                    {{ $t('password') }}
                  </UiLabel>
                  <a
                    href="#"
                    class="ml-auto text-sm underline-offset-2 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <UiInput id="password" v-model="password" type="password" required />
              </div>
              <UiButton type="submit" class="w-full" :disabled="isPending">
                <template v-if="isPending">
                  <Loader2 class="w-4 h-4 animate-spin" />
                </template>
                <template v-else>
                  {{ $t('login') }}
                </template>
              </UiButton>
              <div class="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                <span class="relative z-10 bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
              <div class="grid grid-cols-1">
                <UiButton variant="outline" class="w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </UiButton>
              </div>
              <div class="text-center text-sm">
                Don&apos;t have an account?
                <a href="#" class="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </UiForm>
        <div class="relative hidden bg-muted md:flex md:items-center md:justify-center">
          <img
            src="https://kbqatxbcqvppkrjpmras.supabase.co/storage/v1/object/public/images//logo.png"
            alt="Image"
            class="dark:brightness-[0.2] dark:grayscale"
          >
        </div>
      </UiCardContent>
    </UiCard>
    <div class="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary">
      By clicking continue, you agree to our <a href="#">Terms of Service</a>
      and <a href="#">Privacy Policy</a>.
    </div>
  </div>
</template>
