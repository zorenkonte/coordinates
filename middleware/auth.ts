export default defineNuxtRouteMiddleware(async (_, from) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  const urlParams = new URLSearchParams(from.hash.substring(1))
  const refreshToken = urlParams.get('refresh_token')

  if (user.value) {
    return navigateTo('/')
  }
  else if (refreshToken) {
    await supabase.auth.refreshSession({ refresh_token: refreshToken })

    window.location.href = '/'
  }
})
