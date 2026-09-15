const RESTAURANT_PHOTOS: Record<string, string> = {
  'rest-green-bite': '/images/food/salad-bowl.jpg',
  'rest-fresh-wave': '/images/food/salmon.jpg',
  'rest-fit-kitchen': '/images/food/eggs.jpg',
  'rest-lean-clean': '/images/food/chicken-bowl.jpg',
  'rest-nourish': '/images/food/salad-bowl.jpg',
};

const MEAL_PHOTOS: Record<string, string> = {
  'gb-1': '/images/food/chicken-bowl.jpg',
  'gb-2': '/images/food/salmon.jpg',
  'gb-4': '/images/food/oats.jpg',
  'gb-5': '/images/food/chicken-bowl.jpg',
  'fk-1': '/images/food/oats.jpg',
  'fk-2': '/images/food/chicken-bowl.jpg',
  'lc-2': '/images/food/chicken-bowl.jpg',
  'lc-4': '/images/food/eggs.jpg',
  'nl-1': '/images/food/salad-bowl.jpg',
  'nl-3': '/images/food/smoothie.jpg',
};

const RECIPE_PHOTOS: Record<string, string> = {
  r1: '/images/food/chicken-bowl.jpg',
  r2: '/images/food/oats.jpg',
  r3: '/images/food/salad-bowl.jpg',
  r4: '/images/food/eggs.jpg',
  r5: '/images/food/salmon.jpg',
  r8: '/images/food/oats.jpg',
};

const QUICK_PHOTOS: Record<string, string> = {
  'quick-banana-yogurt': '/images/food/grocery.jpg',
  'quick-protein-smoothie': '/images/food/smoothie.jpg',
};

export const DEFAULT_RESTAURANT_HERO = '/images/food/restaurant-hero.jpg';

export function restaurantPhoto(restaurantId: string): string | null {
  return RESTAURANT_PHOTOS[restaurantId] ?? null;
}

export function mealPhoto(mealId: string): string | null {
  return MEAL_PHOTOS[mealId] ?? null;
}

export function recipePhoto(recipeId: string): string | null {
  return RECIPE_PHOTOS[recipeId] ?? null;
}

export function quickMealPhoto(quickMealId: string): string | null {
  return QUICK_PHOTOS[quickMealId] ?? null;
}

export function plannedMealPhoto(meal: {
  source: string;
  mealId?: string;
  recipeId?: string;
  quickMealId?: string;
  restaurantId?: string;
}): string | null {
  if (meal.source === 'restaurant' && meal.mealId) return mealPhoto(meal.mealId);
  if (meal.source === 'recipe' && meal.recipeId) return recipePhoto(meal.recipeId);
  if (meal.source === 'quick' && meal.quickMealId) return quickMealPhoto(meal.quickMealId);
  return null;
}
