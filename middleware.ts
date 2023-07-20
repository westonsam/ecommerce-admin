import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // allows public api routes to be accessed without authorization
  publicRoutes: ["/api/:path*"]
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
