import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");
  const path = request.nextUrl.searchParams.get("path");

  if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response("Invalid secret", { status: 401 });
  }
  if (path) {
    revalidatePath(path);
    return Response.json({ revalidated: true, path: path, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: "Missing path to revalidate",
  });
}
