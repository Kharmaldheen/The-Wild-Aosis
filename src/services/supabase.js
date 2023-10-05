import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://rkmjzeoljvadldkgicng.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJrbWp6ZW9sanZhZGxka2dpY25nIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMzMjQxMzQsImV4cCI6MjAwODkwMDEzNH0.bjnWPG2IDPr3x1fDUK-qFeT0a1HdY0J5Ym7553bFmt4";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
