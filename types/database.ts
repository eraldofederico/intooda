export interface Database {
  public: {
    Tables: {
      contacts: {
        Row: {
          id: string
          email: string
          question: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          email: string
          question?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          question?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}