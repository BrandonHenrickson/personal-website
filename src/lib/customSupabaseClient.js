import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://khninkeghqgjquiaytms.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtobmlua2VnaHFnanF1aWF5dG1zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA0MjcwMTUsImV4cCI6MjA4NjAwMzAxNX0.VDkcm9KGEQwSTu_uf8IlwI-BxO7App7Tx8Rt6L4SSCw';

const customSupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

export default customSupabaseClient;

export { 
    customSupabaseClient,
    customSupabaseClient as supabase,
};
