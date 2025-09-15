import { env } from "./env";

export function assertApiKey(req: Request) {
  const key = req.headers.get("x-api-key");
  if (key !== env.API_KEY) {
    const res = new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "content-type": "application/json" },
    });
    throw res; // let the route catch & return
  }
}
