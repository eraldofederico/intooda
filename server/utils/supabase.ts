import { createClient } from '@supabase/supabase-js'

let supabaseAdmin: ReturnType<typeof createClient> | null = null

export const useSupabaseAdmin = () => {
  if (!supabaseAdmin) {
    const config = useRuntimeConfig()
    
    if (!config.public.supabaseUrl || !config.supabaseServiceRoleKey) {
      throw new Error('Supabase URL and Service Role Key are required for admin operations')
    }

    supabaseAdmin = createClient(
      config.public.supabaseUrl,
      config.supabaseServiceRoleKey,
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false
        }
      }
    )
  }

  return supabaseAdmin
}