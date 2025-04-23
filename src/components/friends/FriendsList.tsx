
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, User, UserPlus } from 'lucide-react';

const friends = [
  { id: 1, name: 'Sarah Johnson', lastDinner: 'April 10, 2025', dinnersCount: 5 },
  { id: 2, name: 'Tom Wilson', lastDinner: 'March 22, 2025', dinnersCount: 3 },
  { id: 3, name: 'James Brown', lastDinner: 'February 15, 2025', dinnersCount: 2 },
  { id: 4, name: 'Amy Chen', lastDinner: 'April 5, 2025', dinnersCount: 4 },
  { id: 5, name: 'Mike Smith', lastDinner: 'January 30, 2025', dinnersCount: 1 },
  { id: 6, name: 'Emma Davis', lastDinner: 'March 15, 2025', dinnersCount: 2 },
  { id: 7, name: 'Chris Taylor', lastDinner: 'February 28, 2025', dinnersCount: 3 },
  { id: 8, name: 'Jessica Lee', lastDinner: 'April 2, 2025', dinnersCount: 2 },
];

const FriendsList = () => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Friends</CardTitle>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search friends..."
              className="pl-8"
            />
          </div>
          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Add Friend
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {friends.map((friend) => (
            <div key={friend.id} className="flex items-center gap-4 rounded-lg border p-4">
              <div className="grid place-items-center rounded-full bg-muted p-3">
                <User className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">{friend.name}</h3>
                <div className="text-sm text-muted-foreground">
                  <span>Last dinner: {friend.lastDinner}</span>
                  <span className="mx-2">•</span>
                  <span>{friend.dinnersCount} dinners together</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">View History</Button>
                <Button size="sm">Invite</Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FriendsList;
