export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, question } = body

    if (!email) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Email is required'
      })
    }

    const supabase = useSupabaseAdmin()
    
    const { data, error } = await supabase
      .from('contacts')
      .insert({
        email,
        question: question || null
      })
      .select()
      .single()

    if (error) {
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to save contact'
      })
    }

    return {
      success: true,
      data
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal server error'
    })
  }
})