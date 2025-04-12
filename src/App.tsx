
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Devcation25 from "./pages/Devcation25";
import Timeline from "./pages/Timeline";
import Events from "./pages/Events";
import Tracks from "./pages/Tracks";
import Judges from "./pages/Judges";
import Mentors from "./pages/Mentors";
import Prizes from "./pages/Prizes";
import Sponsors from "./pages/Sponsors";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/devcation25" element={<Devcation25 />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/judges" element={<Judges />} />
          <Route path="/mentors" element={<Mentors />} />
          <Route path="/prizes" element={<Prizes />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
