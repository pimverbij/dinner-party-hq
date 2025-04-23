
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Users, Utensils } from 'lucide-react';

// This would come from your data source in a real app
const dinner = {
  id: 1,
  title: 'Italian Night',
  date: 'May 5, 2025',
  time: '7:00 PM',
  location: 'Home',
  guests: ['Sarah', 'Tom', 'James'],
  recipe: 'Homemade Pasta',
  notes: 'Bringing homemade wine. Sarah is vegetarian.',
  menu: [
    'Bruschetta',
    'Homemade Pasta with Tomato Sauce',
    'Tiramisu'
  ]
};

const DinnerPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-4xl font-bold tracking-tight mb-2">{dinner.title}</h1>
            <p className="text-muted-foreground">{dinner.notes}</p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{dinner.date}</p>
                  <p className="text-xs text-muted-foreground">Date</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{dinner.time}</p>
                  <p className="text-xs text-muted-foreground">Time</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{dinner.location}</p>
                  <p className="text-xs text-muted-foreground">Location</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <Users className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{dinner.guests.length} guests</p>
                  <p className="text-xs text-muted-foreground">Attending</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Menu</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dinner.menu.map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-muted-foreground" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Guests</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {dinner.guests.map((guest, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {guest}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DinnerPage;
