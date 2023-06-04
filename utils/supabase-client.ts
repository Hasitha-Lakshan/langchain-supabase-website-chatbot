import { createClient } from '@supabase/supabase-js';
// Create a single supabase client for interacting with your database
const supabaseUrl = 'superbase_url_here';
const supabaseKey = 'superbase_key_here';
export const supabaseClient = createClient(supabaseUrl, supabaseKey);

// export const supabaseClient = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL || '',
//   process.env.SUPABASE_SERVICE_ROLE_KEY || '',
// );
