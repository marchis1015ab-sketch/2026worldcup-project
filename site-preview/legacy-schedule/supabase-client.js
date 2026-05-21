const supabaseUrl = window.APP_CONFIG.supabaseUrl;
const supabaseKey = window.APP_CONFIG.supabaseAnonKey;
const supabaseCloudEnabled = window.APP_CONFIG?.supabaseCloudEnabled !== false;

const appSupabaseClient = window.supabase?.createClient && supabaseUrl && supabaseKey
  ? window.supabase.createClient(supabaseUrl, supabaseKey)
  : null;

window.supabaseClient = appSupabaseClient;

if (!appSupabaseClient) {
  console.warn('Supabase client is not ready. Check the Supabase CDN script.');
} else if (!supabaseCloudEnabled) {
  console.info('Supabase shared-state sync is disabled by APP_CONFIG, but Supabase client is available for direct features.');
}
