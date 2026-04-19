export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  if (!body?.name || !body?.phone || !body?.message) {
    throw createError({
      statusCode: 422,
      statusMessage: 'Invalid lead payload',
    })
  }

  return {
    success: true,
    message: 'Заявка принята. Мы свяжемся с вами в ближайшее время.',
  }
})
