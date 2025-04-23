import React, { useState } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Friends from "./pages/Friends";
import Dinners from "./pages/Dinners";
import Recipes from "./pages/Recipes";
import Locations from "./pages/Locations";
import NotFound from "./pages/NotFound";
import Navbar from "./components/layout/Navbar";
import Sidebar from "./components/layout/Sidebar";
import Calendar from "./pages/Calendar";
import RecipePage from "./pages/RecipePage";
import DinnerPage from "./pages/DinnerPage";
import FriendPage from "./pages/FriendPage";

const queryClient = new QueryClient();

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="flex min-h-screen w-full">
            <Sidebar isOpen={isSidebarOpen} />
            <div className="flex flex-1 flex-col">
              <Navbar toggleSidebar={toggleSidebar} />
              <div className="flex-1">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/friends" element={<Friends />} />
                  <Route path="/dinners" element={<Dinners />} />
                  <Route path="/recipes" element={<Recipes />} />
                  <Route path="/recipes/:id" element={<RecipePage />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/dinners/:id" element={<DinnerPage />} />
                  <Route path="/friends/:id" element={<FriendPage />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </div>
            </div>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
