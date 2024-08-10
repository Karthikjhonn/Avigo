import React from "react";
import RootLayout from "../components/layout/RootLayout";
import { AuthProvider } from "@/context/AuthContext";
export default function Layout() {
  console.log("root file");

  return (
    <AuthProvider>
      <RootLayout />
    </AuthProvider>
  );
}
