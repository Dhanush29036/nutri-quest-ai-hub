
import React from "react";
import Navbar from "./Navbar";
import AppSidebar from "./AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

interface AppLayoutProps {
  children: React.ReactNode;
  onLogout?: () => void;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children, onLogout }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full overflow-hidden">
        <AppSidebar onLogout={onLogout} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar onLogout={onLogout} />
          <main className="flex-1 overflow-y-auto bg-background">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
