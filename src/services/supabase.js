import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ycttxjfmlexjgahbxzmx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InljdHR4amZtbGV4amdhaGJ4em14Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkzMzg4MDYsImV4cCI6MjAxNDkxNDgwNn0.7-OdsZ0Uk_Y2EQ9Vwrzzhpu1eQL-5H7uhxG4-BtGBDo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
