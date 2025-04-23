
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, Utensils } from 'lucide-react';

interface RecipeCardProps {
  recipe: {
    id: number;
    title: string;
    image?: string;
    prepTime: string;
    cuisine: string;
    ingredients: string[];
    lastMade?: string;
  };
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full bg-muted">
        {recipe.image ? (
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Utensils className="h-10 w-10 text-muted-foreground/50" />
          </div>
        )}
      </div>
      <CardHeader className="p-4">
        <CardTitle className="line-clamp-1 text-lg">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            <span>{recipe.prepTime}</span>
          </div>
          <div>{recipe.cuisine}</div>
        </div>
        <div className="mt-2">
          <div className="line-clamp-2 text-sm">
            <span className="font-medium">Ingredients: </span>
            {recipe.ingredients.slice(0, 3).join(', ')}
            {recipe.ingredients.length > 3 && '...'}
          </div>
        </div>
        {recipe.lastMade && (
          <div className="mt-2 text-xs text-muted-foreground">
            Last made: {recipe.lastMade}
          </div>
        )}
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">View Recipe</Button>
      </CardFooter>
    </Card>
  );
};

export default RecipeCard;
