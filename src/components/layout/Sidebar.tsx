
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
      'fixed inset-y-0 left-0 z-20 flex w-64 flex-col bg-white shadow-lg transition-transform duration-300 lg:relative lg:translate-x-0',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
      <div className="flex h-16 items-center border-b px-6">
        <h2 className="text-xl font-semibold">
          <span className="text-primary">Dinner</span>Party HQ
        </h2>
      </div>
      <div className="flex flex-1 flex-col gap-2 overflow-auto p-4">
        <div className="flex flex-col gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground',
                location.pathname === item.href ? 'bg-accent text-accent-foreground' : 'text-muted-foreground'
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t p-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-sm font-semibold">Recent Dinners</h3>
          <div className="grid gap-1">
            <Link to="/dinners/1" className="text-sm text-muted-foreground hover:text-foreground">
              Italian Night with Sarah & Tom
            </Link>
            <Link to="/dinners/2" className="text-sm text-muted-foreground hover:text-foreground">
              BBQ at John's place
            </Link>
            <Link to="/dinners/3" className="text-sm text-muted-foreground hover:text-foreground">
              Sushi making with Amy
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
