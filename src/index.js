import { Router, error, json } from 'itty-router'
import { createCors } from 'itty-cors'

const { preflight, corsify } = createCors()

const router = Router()
router.all('*', preflight)

router.get('*', req => {
  const u = new URL(req.url)
  return new Response(`Test with this code, in another origin:

console.log(await fetch('${u.origin}/test', {
  method: 'POST',
  body: JSON.stringify({ message: 'Hi!' })
}).then(r => r.json()))

`)
})

router.post('*', async req => {
  const userMessage = await req.json()
  return json({
    userMessage
  })
})

export default {
  fetch: (...args) => router
    .handle(...args)
    .catch(err => error(500, err.stack))
    .then(corsify)
}
