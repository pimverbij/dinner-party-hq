
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Plus } from 'lucide-react';
import RecipeCard from '@/components/recipes/RecipeCard';
import { Link } from 'react-router-dom';

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
  {
    id: 4,
    title: 'Beef Tacos',
    prepTime: '25 mins',
    cuisine: 'Mexican',
    ingredients: ['Ground Beef', 'Taco Shells', 'Lettuce', 'Tomatoes', 'Cheese', 'Sour Cream'],
    lastMade: 'March 5, 2025'
  },
  {
    id: 5,
    title: 'Mushroom Risotto',
    prepTime: '40 mins',
    cuisine: 'Italian',
    ingredients: ['Arborio Rice', 'Mushrooms', 'Onion', 'Garlic', 'White Wine', 'Parmesan'],
    lastMade: 'January 22, 2025'
  },
  {
    id: 6,
    title: 'Chocolate Soufflé',
    prepTime: '50 mins',
    cuisine: 'French',
    ingredients: ['Dark Chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour'],
    lastMade: 'February 14, 2025'
  },
];

const Recipes = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-serif text-3xl font-bold tracking-tight">Recipes</h1>
          <p className="text-muted-foreground">
            Browse and manage your dinner recipes.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative flex-1 sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search recipes..."
              className="pl-8 w-full"
            />
          </div>
          <Button asChild>
            <Link to="/recipes/new">
              <Plus className="mr-2 h-4 w-4" />
              Add Recipe
            </Link>
          </Button>
        </div>
      </div>
      
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
