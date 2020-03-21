/**
 * https://deno.land
 * 
 * curl -fsSL https://deno.land/x/install/install.sh | sh
 * brew install deno
 * deno https://deno.land/std/examples/welcome.ts
 * deno --allow-net index.ts
 * 
 * https://deno.land/std/manual.md#download-and-install
 * https://github.com/denoland/deno_website2
 * https://github.com/denoland/rusty_v8
 * 
 * https://deno.land/typedoc/
 * 
 */

console.log("Welcome to Deno 🦕");

import { serve } from "https://deno.land/std@v0.36.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
