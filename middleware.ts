import { NextRequest, NextResponse } from "next/server";

const slugs = [
  "thisworx-vacuum-drive-organizer",
  "fortem-car-trunk-organizer",
  "honey-can-do-trunk-organizer",
  "registration-insurance-organizer",
  "gorilla-grip-trunk-organizer",
  "nishel-travel-organizer",
  "hotor-trunk-organizer",
  "breathable-storage-organizer",
  "wllwoo-handbag-organizer",
];

export function middleware(req: NextRequest) {
  const referer = req.headers.get("referer") || "";

  if (referer.startsWith("https://voydashield.store")) {
    const randomSlug = slugs[Math.floor(Math.random() * slugs.length)];
    const url = req.nextUrl.clone();
    url.pathname = `/products/${randomSlug}`;

    const res = NextResponse.redirect(url);
    res.cookies.set("dash", "true", { path: "/", maxAge: 60 });

    return res;
  }
}

export const config = {
  matcher: ["/dry"],
};
