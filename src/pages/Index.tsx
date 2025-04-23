
import React from 'react';
import DashboardStats from '@/components/dashboard/DashboardStats';
import UpcomingDinners from '@/components/dashboard/UpcomingDinners';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import RecipeCard from '@/components/recipes/RecipeCard';
import { Utensils } from 'lucide-react';

const recipes = [
  {
    id: 1,
    title: 'Homemade Pasta with Tomato Sauce',
    prepTime: '45 mins',
    cuisine: 'Italian',
    ingredients: ['Flour', 'Eggs', 'Olive Oil', 'Tomatoes', 'Garlic', 'Basil'],
    lastMade: 'March 15, 2025'
  },
  {
    id: 2,
    title: 'Grilled Steaks with Herb Butter',
    prepTime: '30 mins',
    cuisine: 'American',
    ingredients: ['Ribeye Steak', 'Butter', 'Garlic', 'Thyme', 'Rosemary', 'Salt', 'Pepper'],
    lastMade: 'April 1, 2025'
  },
  {
    id: 3,
    title: 'Homemade Sushi Rolls',
    prepTime: '60 mins',
    cuisine: 'Japanese',
    ingredients: ['Sushi Rice', 'Nori', 'Fish', 'Avocado', 'Cucumber', 'Soy Sauce'],
    lastMade: 'February 20, 2025'
  },
];

const Index = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-1">
        <h1 className="font-serif text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's an overview of your dinner party planning.
        </p>
      </div>
      
      <DashboardStats />
      
      <div className="grid gap-6 md:grid-cols-7">
        <div className="md:col-span-4">
          <UpcomingDinners />
        </div>
        
        <div className="md:col-span-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Popular Recipes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                {recipes.map((recipe) => (
                  <div key={recipe.id} className="flex items-center gap-4">
                    <div className="h-12 w-12 bg-muted rounded flex items-center justify-center">
                      <Utensils className="h-6 w-6 text-muted-foreground/60" />
                    </div>
                    <div>
                      <div className="font-medium">{recipe.title}</div>
                      <div className="text-sm text-muted-foreground">
                        {recipe.cuisine} • {recipe.prepTime}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <div>
        <h2 className="font-serif text-2xl font-semibold tracking-tight mb-4">Popular Recipes</h2>
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
