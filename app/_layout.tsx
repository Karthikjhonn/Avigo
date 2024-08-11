import React from "react";
import RootLayout from "../components/layout/RootLayout";
import { AuthProvider } from "@/context/AuthContext";
import { FontProvider } from "../context/FontContext";
export default function Layout() {
  return (
    <AuthProvider>
      <FontProvider>
        <RootLayout />
      </FontProvider>
    </AuthProvider>
  );
}
