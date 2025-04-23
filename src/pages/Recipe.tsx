
import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BookOpen, Clock, Utensils } from 'lucide-react';

// This would come from your data source in a real app
const recipe = {
  id: 1,
  title: 'Homemade Pasta with Tomato Sauce',
  description: 'A classic Italian dish made with fresh ingredients and lots of love. Perfect for family dinners or special occasions.',
  prepTime: '45 mins',
  servings: 4,
  cuisine: 'Italian',
  difficulty: 'Medium',
  ingredients: [
    '400g all-purpose flour',
    '4 large eggs',
    '2 tbsp olive oil',
    '6 ripe tomatoes',
    '4 cloves garlic',
    'Fresh basil leaves',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Mix flour and eggs to make pasta dough',
    'Knead dough for 10 minutes until smooth',
    'Rest dough for 30 minutes',
    'Roll out and cut into desired shape',
    'Prepare tomato sauce with garlic and basil',
    'Cook pasta in boiling water',
    'Combine pasta with sauce and serve'
  ],
  lastMade: 'March 15, 2025'
};

const RecipePage = () => {
  const { id } = useParams();

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <div className="space-y-6">
          <div>
            <h1 className="font-serif text-4xl font-bold tracking-tight mb-2">{recipe.title}</h1>
            <p className="text-muted-foreground">{recipe.description}</p>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{recipe.prepTime}</p>
                  <p className="text-xs text-muted-foreground">Prep Time</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <Utensils className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{recipe.servings} servings</p>
                  <p className="text-xs text-muted-foreground">Yield</p>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex items-center gap-2 p-4">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{recipe.difficulty}</p>
                  <p className="text-xs text-muted-foreground">Difficulty</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-4 list-decimal list-inside">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="text-base">
                    {step}
                  </li>
                ))}
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {ingredient}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recipe Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div>
                <span className="text-sm font-medium">Cuisine: </span>
                <span className="text-sm text-muted-foreground">{recipe.cuisine}</span>
              </div>
              <div>
                <span className="text-sm font-medium">Last Made: </span>
                <span className="text-sm text-muted-foreground">{recipe.lastMade}</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecipePage;
