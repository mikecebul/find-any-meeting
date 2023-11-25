import { NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  revalidatePath("/");
  return Response.json({ revalidated: true, path: "/", now: Date.now() });
}
