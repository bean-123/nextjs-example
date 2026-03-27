// API call to supabase using REST API
const supabaseURL = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

// Direct API call to supabase using fetch
const response = await fetch(`${supabaseURL}/rest/v1/products`, {
  headers: {
    Authorization: `Bearer ${supabaseAnonKey}`,
    apiKey: supabaseAnonKey,
    "Content-Type": "application/json",
  },
});

const data = await response.json();

export async function GET() {
  return Response.json(data);
}
