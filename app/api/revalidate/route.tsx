import { NextRequest } from 'next/server'
import { revalidateTag } from 'next/cache'
 
export async function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get('tag')
  const secret = request.nextUrl.searchParams.get('secret')

   // Check if the provided secret matches the one in the environment variables
   if (secret !== process.env.REVALIDATION_SECRET) {
    return new Response('Invalid secret', { status: 401 });
  }

  
  // Proceed with revalidation if the secret is correct
  if (tag) {
    revalidateTag(tag);
    return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), {
      headers: { 'Content-Type': 'application/json' },
      status: 200,
    });
  } else {
    return new Response('Missing tag', { status: 400 });
  }
}