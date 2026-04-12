const supabaseUrl = window.APP_CONFIG.supabaseUrl;
const supabaseKey = window.APP_CONFIG.supabaseAnonKey;

const appSupabaseClient = window.supabase?.createClient
  ? window.supabase.createClient(supabaseUrl, supabaseKey)
  : null;

window.supabaseClient = appSupabaseClient;

if (!appSupabaseClient) {
  console.warn('Supabase client is not ready. Check the Supabase CDN script.');
}
