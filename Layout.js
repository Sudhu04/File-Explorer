import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { FolderTree, Activity } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const navigationItems = [
  {
    title: "Explorer",
    url: createPageUrl("Explorer"),
    icon: FolderTree,
  },
  {
    title: "Algorithms",
    url: createPageUrl("Algorithms"),
    icon: Activity,
  },
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();

  return (
    <SidebarProvider>
      <style>{`
        :root {
          --primary-navy: #0F172A;
          --secondary-slate: #1E293B;
          --accent-emerald: #10B981;
          --accent-amber: #F59E0B;
          --text-primary: #0F172A;
          --text-secondary: #64748B;
          --background-primary: #FEFEFE;
          --background-secondary: #F8FAFC;
          --border-subtle: #E2E8F0;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%);
        }
        
        .glass-effect {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .premium-shadow {
          box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.15);
        }
      `}</style>
      
      <div className="min-h-screen flex w-full gradient-bg">
        <Sidebar className="border-r border-gray-200/60 glass-effect">
          <SidebarHeader className="border-b border-gray-200/60 p-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center premium-shadow">
                <FolderTree className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="font-bold text-lg text-gray-900">TreeTraversal</h2>
                <p className="text-xs text-gray-500 font-medium">Algorithm Explorer</p>
              </div>
            </div>
          </SidebarHeader>
          
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-3">
                Navigation
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton 
                        asChild 
                        className={`hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-300 rounded-xl mb-2 ${
                          location.pathname === item.url ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : ''
                        }`}
                      >
                        <Link to={item.url} className="flex items-center gap-3 px-4 py-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-semibold">{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            <SidebarGroup className="mt-8">
              <SidebarGroupLabel className="text-xs font-semibold text-gray-500 uppercase tracking-wider px-2 py-3">
                Quick Stats
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="px-4 py-3 space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Activity className="w-4 h-4 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">Algorithms</p>
                      <p className="text-xs text-gray-500">2 Methods</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center">
                      <FolderTree className="w-4 h-4 text-amber-600" />
                    </div>
                    <div>
                      <p className="text-gray-600 font-medium">File System</p>
                      <p className="text-xs text-gray-500">Interactive</p>
                    </div>
                  </div>
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main className="flex-1 flex flex-col">
          <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200/60 px-6 py-4 md:hidden">
            <div className="flex items-center gap-4">
              <SidebarTrigger className="hover:bg-gray-100 p-2 rounded-lg transition-colors duration-200" />
              <h1 className="text-xl font-bold">TreeTraversal</h1>
            </div>
          </header>

          <div className="flex-1 overflow-auto">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
