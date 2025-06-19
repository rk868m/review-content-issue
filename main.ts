import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

const handler = async (_req: Request): Promise<Response> => {
  try {
    const html = await Deno.readTextFile("./index.html");
    return new Response(html, {
      status: 200,
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  } catch (_err) {
    return new Response("Failed to load index.html", { status: 500 });
  }
};

serve(handler);
