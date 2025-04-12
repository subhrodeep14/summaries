import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// src/app/api/uploadthing/route.ts
export const runtime = "nodejs";

export const { GET, POST } = createRouteHandler({router:ourFileRouter ,
    //config
});