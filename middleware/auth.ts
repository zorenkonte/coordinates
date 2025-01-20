export default defineNuxtRouteMiddleware(async (_, from) => {
  const user = useSupabaseUser()
  const supabase = useSupabaseClient()

  const urlParams = new URLSearchParams(from.hash.substring(1))
  const refreshToken = urlParams.get('refresh_token')
  const type = urlParams.get('type')

  if (user.value) {
    return navigateTo('/')
  }
  else if (refreshToken && type === 'invite') {
    await supabase.auth.refreshSession({ refresh_token: refreshToken })

    window.location.href = '/'
  }
})
