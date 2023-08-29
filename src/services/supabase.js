import {createClient} from "@supabase/supabase-js";

const supabaseUrl = "https://xlvjygrwjeqbnxciqufh.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS" +
	"IsInJlZiI6Inhsdmp5Z3J3amVxYm54Y2lxdWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTMyM" +
	"TM1ODQsImV4cCI6MjAwODc4OTU4NH0.qHxgpg3o5DJ5Bkx_1C2E0-JXWS-D-HzylO2sBu7LVVA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
