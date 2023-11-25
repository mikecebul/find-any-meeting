import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  // Check if the provided secret matches the one in the environment variables
  if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }
  revalidatePath("/");
  return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}
