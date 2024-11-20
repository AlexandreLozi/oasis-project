import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nqfrdkbhspeimahzrkgg.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5xZnJka2Joc3BlaW1haHpya2dnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUzNTIwMDMsImV4cCI6MjAzMDkyODAwM30.8DSL0A_lipdUgmWKssKl2kPlS9q2OpgldZICT_vAHkU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
