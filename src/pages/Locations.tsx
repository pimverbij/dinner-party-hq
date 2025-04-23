
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MapPin, Plus, Search, Utensils, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
  {
    id: 1,
    name: 'Home',
    address: '123 Main Street, Apartment 4B',
    dinnerCount: 8,
    lastUsed: 'April 10, 2025',
    notes: 'Our place. Has enough seating for 6 people comfortably.'
  },
  {
    id: 2,
    name: 'Central Park',
    address: 'Central Park, New York',
    dinnerCount: 3,
    lastUsed: 'May 12, 2025',
    notes: 'Good for BBQs and picnics in the summer.'
  },
  {
    id: 3,
    name: 'Amy\'s Place',
    address: '456 Oak Avenue',
    dinnerCount: 4,
    lastUsed: 'May 20, 2025',
    notes: 'Amy\'s apartment. Nice kitchen for cooking together.'
  },
  {
    id: 4,
    name: 'John\'s Apartment',
    address: '789 Pine Street',
    dinnerCount: 2,
    lastUsed: 'February 15, 2025',
    notes: 'Great view of the city. Good for small gatherings.'
  },
  {
    id: 5,
    name: 'Beachside Rental',
    address: '101 Beach Road',
    dinnerCount: 1,
    lastUsed: 'January 30, 2025',
    notes: 'Summer rental with a nice grill and outdoor seating.'
  }
];

const Locations = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-serif text-3xl font-bold tracking-tight">Locations</h1>
          <p className="text-muted-foreground">
            Manage your dinner party locations.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search locations..."
              className="pl-8 w-full"
            />
          </div>
          <Button asChild>
            <Link to="/locations/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Location
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-4">
        {locations.map((location) => (
          <Card key={location.id}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="grid place-items-center rounded-full bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{location.name}</h3>
                  <p className="text-sm text-muted-foreground">{location.address}</p>
                  
                  <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Utensils className="h-4 w-4 text-muted-foreground" />
                      <span>{location.dinnerCount} dinners hosted</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>Last used: {location.lastUsed}</span>
                    </div>
                  </div>
                  
                  {location.notes && (
                    <p className="mt-2 text-sm">{location.notes}</p>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/locations/${location.id}/edit`}>Edit</Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link to={`/locations/${location.id}`}>View Details</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Locations;
