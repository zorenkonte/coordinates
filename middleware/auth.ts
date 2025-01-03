export default defineNuxtRouteMiddleware((_, _from) => {
  const user = useSupabaseUser()

  if (user.value) {
    return navigateTo('/')
  }
})
