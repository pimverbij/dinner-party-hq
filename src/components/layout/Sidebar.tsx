
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Calendar, Home, MapPin, Users, Utensils } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  
  const navigation = [
    { name: 'Dashboard', href: '/', icon: Home },
    { name: 'Friends', href: '/friends', icon: Users },
    { name: 'Dinners', href: '/dinners', icon: Utensils },
    { name: 'Recipes', href: '/recipes', icon: Utensils },
    { name: 'Locations', href: '/locations', icon: MapPin },
    { name: 'Calendar', href: '/calendar', icon: Calendar },
  ];

  return (
    <aside className={cn(
      'fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-background border-r transition-transform duration-300 lg:relative lg:translate-x-0',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-xl font-bold">
          Dinner<span className="text-primary">PartyHQ</span>
        </h2>
      </div>
      
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors',
              location.pathname === item.href 
                ? 'bg-primary text-primary-foreground' 
                : 'text-foreground/60 hover:bg-accent hover:text-foreground'
            )}
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="border-t p-4">
        <div className="rounded-lg bg-accent p-4">
          <h3 className="text-sm font-semibold mb-3">Recent Dinners</h3>
          <div className="space-y-2">
            <Link to="/dinners/1" className="block text-sm text-foreground/60 hover:text-foreground">
              Italian Night with Sarah & Tom
            </Link>
            <Link to="/dinners/2" className="block text-sm text-foreground/60 hover:text-foreground">
              BBQ at John's place
            </Link>
            <Link to="/dinners/3" className="block text-sm text-foreground/60 hover:text-foreground">
              Sushi making with Amy
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
