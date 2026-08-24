import { NextResponse, type NextRequest } from "next/server";
import { siteFromHost, SITE_PREFIX, SITES } from "@/lib/sites";

/**
 * Maps the request's subdomain onto the internal route prefix for that site.
 *
 * The prefixes are an implementation detail. Requesting them directly on the
 * wrong host would serve the same page on two URLs, so those requests 404
 * rather than silently duplicating every screen on the apex domain.
 */
export function proxy(request: NextRequest) {
  const site = siteFromHost(request.headers.get("host"));
  const prefix = SITE_PREFIX[site];
  const { pathname } = request.nextUrl;

  const requestedPrefix = SITES.map((s) => SITE_PREFIX[s]).find(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  );

  if (requestedPrefix && requestedPrefix !== prefix) {
    return new NextResponse(null, { status: 404 });
  }

  // Already rewritten, or a request that happens to match its own prefix.
  if (requestedPrefix === prefix) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `${prefix}${pathname === "/" ? "" : pathname}`;

  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    /*
     * Everything except Next internals and static assets. Auth callback
     * routes are deliberately included, since they are site-scoped too.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)",
  ],
};
