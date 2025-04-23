
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const dinners = [
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

const UpcomingDinners = () => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Upcoming Dinners</CardTitle>
        <Button variant="outline" size="sm" asChild>
          <Link to="/dinners/new">+ Add Dinner</Link>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {dinners.map((dinner) => (
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
              <Button asChild>
                <Link to={`/dinners/${dinner.id}`}>View Details</Link>
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingDinners;
