"use server";

import { NextResponse } from "next/server";
import { ROUTES } from "@nextjs/constants/routes.constants";

/**
 * Determines whether a given pathname corresponds to a public route.
 *
 * @param nextUrl - The current request URL
 * @returns True if the route is public, false otherwise
 */
export function isPublicRoute(nextUrl: URL): boolean {
  const publicRoutes: string[] = [ROUTES.INTERNAL.SIGN_IN];
  return publicRoutes.includes(nextUrl.pathname);
}

/**
 * Redirects user to the sign-in page.
 *
 * @param nextUrl - The current request URL
 * @returns A redirect response to the sign-in route
 */
export function redirectToSignIn(nextUrl: URL): NextResponse {
  return NextResponse.redirect(
    new URL(ROUTES.INTERNAL.SIGN_IN, nextUrl.origin)
  );
}

/**
 * Redirects authenticated user to the home page.
 *
 * @param nextUrl - The current request URL
 * @returns A redirect response to the home route
 */
export function redirectToHome(nextUrl: URL): NextResponse {
  return NextResponse.redirect(new URL(ROUTES.INTERNAL.HOME, nextUrl.origin));
}
