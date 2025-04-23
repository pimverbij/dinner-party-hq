
import React from 'react';
import FriendsList from '@/components/friends/FriendsList';

const Friends = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="font-serif text-3xl font-bold tracking-tight">Friends</h1>
        <p className="text-muted-foreground">
          Manage your friends and dinner companions.
        </p>
      </div>
      
      <FriendsList />
    </div>
  );
};

export default Friends;
