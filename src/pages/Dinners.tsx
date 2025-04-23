
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const upcomingDinners = [
  {
    id: 1,
    title: 'Italian Night',
    date: 'May 5, 2025',
    time: '7:00 PM',
    location: 'Home',
    guests: ['Sarah', 'Tom', 'James'],
    recipe: 'Homemade Pasta'
  },
  {
    id: 2,
    title: 'BBQ at the Park',
    date: 'May 12, 2025',
    time: '3:00 PM',
    location: 'Central Park',
    guests: ['Mike', 'Emma', 'Chris', 'Jessica'],
    recipe: 'Grilled Steaks'
  },
  {
    id: 3,
    title: 'Sushi Night',
    date: 'May 20, 2025',
    time: '6:30 PM',
    location: 'Amy\'s Place',
    guests: ['Amy', 'David', 'Lisa'],
    recipe: 'Homemade Sushi Rolls'
  }
];

const pastDinners = [
  {
    id: 4,
    title: 'Mediterranean Feast',
    date: 'April 10, 2025',
    time: '7:30 PM',
    location: 'Home',
    guests: ['Sarah', 'Tom'],
    recipe: 'Hummus and Kebabs'
  },
  {
    id: 5,
    title: 'Pizza Night',
    date: 'March 22, 2025',
    time: '6:00 PM',
    location: 'Home',
    guests: ['Mike', 'Emma'],
    recipe: 'Homemade Pizza'
  },
  {
    id: 6,
    title: 'Wine & Cheese',
    date: 'February 15, 2025',
    time: '8:00 PM',
    location: 'John\'s Apartment',
    guests: ['John', 'Lisa', 'David'],
    recipe: 'Cheese Board'
  }
];

const Dinners = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-1">
          <h1 className="font-serif text-3xl font-bold tracking-tight">Dinners</h1>
          <p className="text-muted-foreground">
            View and manage all your dinner parties.
          </p>
        </div>
        <Button asChild>
          <Link to="/dinners/new">Schedule New Dinner</Link>
        </Button>
      </div>
      
      <Tabs defaultValue="upcoming">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingDinners.length})</TabsTrigger>
          <TabsTrigger value="past">Past ({pastDinners.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {upcomingDinners.map((dinner) => (
                  <div key={dinner.id} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="grid place-items-center rounded-full bg-primary/10 p-3">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{dinner.title}</h3>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{dinner.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{dinner.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{dinner.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-3.5 w-3.5" />
                          <span>{dinner.guests.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" asChild>
                        <Link to={`/dinners/${dinner.id}/edit`}>Edit</Link>
                      </Button>
                      <Button asChild>
                        <Link to={`/dinners/${dinner.id}`}>Details</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="past">
          <Card>
            <CardContent className="pt-6">
              <div className="grid gap-4">
                {pastDinners.map((dinner) => (
                  <div key={dinner.id} className="flex items-center gap-4 rounded-lg border p-4">
                    <div className="grid place-items-center rounded-full bg-muted p-3">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{dinner.title}</h3>
                      <div className="grid gap-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{dinner.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{dinner.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{dinner.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Users className="h-3.5 w-3.5" />
                          <span>{dinner.guests.join(', ')}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" asChild>
                      <Link to={`/dinners/${dinner.id}`}>View Details</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dinners;
