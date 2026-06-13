import { authClient } from "@/lib/auth-client";

export const handleGoogleLogin = async () => {
  await authClient.signIn.social({
    provider: "google",
    callbackURL: "/dashboard"
  });
};
