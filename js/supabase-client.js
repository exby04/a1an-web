/* ============================================
   Safe&Sound Robotics — A1AN Web
   Supabase Client — inicialización global
   ============================================ */

const SUPABASE_URL  = 'https://gcgkapizvqwewxfcldfo.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjZ2thcGl6dnF3ZXd4ZmNsZGZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1NDc1MzUsImV4cCI6MjA5MjEyMzUzNX0.FAeUhvTSvqM6SpoYURP58nbHrDWIBZcV_rHpaPry-EE';

var supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
