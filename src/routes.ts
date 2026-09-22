/**
 * Application Routes Configuration for React Router
 * Add new routes here as the application expands.
 */

export const ROUTES = {
  HOME: "/",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS: "/terms",
} as const;

export type AppRouteKey = keyof typeof ROUTES;
export type AppRoutePath = (typeof ROUTES)[AppRouteKey];

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
}

export const ROUTE_METADATA: Record<AppRoutePath, RouteMeta> = {
  [ROUTES.HOME]: {
    path: ROUTES.HOME,
    title: "Xpense Cloud - Smart Financial Management for Android, iOS & Web",
    description:
      "Sync expenses across Android, iOS, and Web with real-time analytics, AI insights, and bank-grade security.",
  },
  [ROUTES.PRIVACY_POLICY]: {
    path: ROUTES.PRIVACY_POLICY,
    title: "Privacy Policy | Xpense Cloud",
    description:
      "Official Privacy Policy for Xpense mobile application, cloud services, and on-device storage.",
  },
  [ROUTES.TERMS]: {
    path: ROUTES.TERMS,
    title: "Terms & Conditions | Xpense Cloud",
    description:
      "Official Terms & Conditions governing access and use of the Xpense mobile application and cloud services.",
  },
};

