import { serve } from "https://deno.land/std@v0.42.0/http/server.ts";

const s = serve({ port: 3000 });
console.log("Hello, World");
for await (const req of s) {
  req.respond({ body: "Hello, World!\n" });
}
