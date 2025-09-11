import { createBrowserClient } from "@supabase/ssr"
import type { Database } from "@/types/database.types"

export function createSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) throw new Error("Missing Supabase public env vars")
  return createBrowserClient<Database>(url, anonKey)
}
