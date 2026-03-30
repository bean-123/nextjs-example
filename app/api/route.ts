// API call to supabase using REST API

export async function GET() {
  const supabaseURL = process.env.SUPABASE_URL!;
  const supabaseAnonKey = process.env.SUPABASE_ANON_KEY!;

  const response = await fetch(`${supabaseURL}/rest/v1/products`, {
    headers: {
      Authorization: `Bearer ${supabaseAnonKey}`,
      apikey: supabaseAnonKey, // lowercase preferred
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();

  return Response.json(data);
}
