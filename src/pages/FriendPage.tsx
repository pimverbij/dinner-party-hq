
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, User, Utensils } from 'lucide-react';

// This would come from your data source in a real app
const friend = {
  id: 1,
  name: 'Sarah Johnson',
  joinedDate: 'January 15, 2025',
  totalDinners: 5,
  upcomingDinner: 'Italian Night - May 5, 2025',
  dietaryPreferences: 'Vegetarian',
  recentDinners: [
    'Spanish Tapas Night - April 10, 2025',
    'Sushi Making Class - March 22, 2025',
    'Pizza Party - February 15, 2025'
  ]
};

const FriendPage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-20 w-20 rounded-full bg-muted grid place-items-center">
              <User className="h-10 w-10 text-muted-foreground" />
            </div>
            <div>
              <h1 className="font-serif text-4xl font-bold tracking-tight mb-1">{friend.name}</h1>
              <p className="text-muted-foreground">Member since {friend.joinedDate}</p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Dinner</CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{friend.upcomingDinner}</span>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Dinners</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {friend.recentDinners.map((dinner, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Utensils className="h-4 w-4 text-muted-foreground" />
                    {dinner}
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
              <CardTitle>Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Total Dinners</p>
                <p className="font-medium">{friend.totalDinners}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Dietary Preferences</p>
                <p className="font-medium">{friend.dietaryPreferences}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FriendPage;
