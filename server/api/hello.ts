export default defineEventHandler(async ({ context }) => {
  return context.cloudflare.env.HELLO
})
