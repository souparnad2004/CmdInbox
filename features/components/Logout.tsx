"use client";

import { authClient } from "@/lib/auth-client";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
    router.refresh();
  };

  return (
    <div onClick={handleLogout} className="flex items-center gap-1.5">
      <LogOut className="w-4 h-4 mr-2"/>
      Sign Out
    </div>
  );
}
