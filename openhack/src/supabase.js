import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fbqubifubkswdszvqbli.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZicXViaWZ1Ymtzd2RzenZxYmxpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ5MDg3NjMsImV4cCI6MjAyMDQ4NDc2M30.Sw2psZT2LpZ05vb_RdfYhBli7Pz2CMCZAak3NCM6Ubg';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
