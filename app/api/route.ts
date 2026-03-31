// API call to supabase using REST API

const supabaseURL = process.env.SUPABASE_URL!;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

export async function GET() {
  const response = await fetch(`${supabaseURL}/rest/v1/products`, {
    headers: {
      Authorization: `Bearer ${supabaseAnonKey}`,
      apikey: supabaseAnonKey,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return Response.json(data);
}
