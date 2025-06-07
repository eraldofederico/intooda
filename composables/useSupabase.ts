import { createClient } from '@supabase/supabase-js'

let supabase: ReturnType<typeof createClient> | null = null

export const useSupabase = () => {
  if (!supabase) {
    const config = useRuntimeConfig()
    
    if (!config.public.supabaseUrl || !config.public.supabaseAnonKey) {
      throw new Error('Supabase URL and Anon Key are required')
    }

    supabase = createClient(
      config.public.supabaseUrl,
      config.public.supabaseAnonKey
    )
  }

  return supabase
}