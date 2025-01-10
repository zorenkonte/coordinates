export default defineNuxtRouteMiddleware(async (_, from) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  const access_token = from.hash.split('&').find(x => x.includes('access_token'))?.split('=')[1]
  const refresh_token = from.hash.split('&').find(x => x.includes('refresh_token'))?.split('=')[1]

  if (user.value) {
    return navigateTo('/')
  }
  else if (access_token && refresh_token) {
    await supabase.auth.setSession({ access_token, refresh_token })

    window.location.href = '/'
  }
})
