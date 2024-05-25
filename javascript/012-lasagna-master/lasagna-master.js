/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Determine whether the lasagna is done
 * @param {number} timer
 * @return {string} lasagna status
 *
 */

export function cookingStatus(timer) {
  if (timer === undefined) {
    return 'You forgot to set the timer.';
  }

  return timer > 0 ? 'Not done, please wait.' : 'Lasagna is done.';
}

/**
 * Estimate lasagna preparation time
 * @param {string[]} layers of ingredients
 * @param {number} timer
 * @return {number} average preparation time
 *
 */
export function preparationTime(layers, timer = 2) {
  return layers.length * timer;
}

/**
 * Compute the amounts of noodles and sauce needed
 * @param {string[]} ingredients
 * @return {object} quantity of ingredients
 *
 */
export function quantities(ingredients) {
  const noodlesLayerQuantity = 50;
  const sauceLayerQuantity = 0.2;

  return {
    noodles: ingredients.filter(x => x === 'noodles').length * noodlesLayerQuantity,
    sauce: ingredients.filter(x => x === 'sauce').length * sauceLayerQuantity,
  }
}

/**
 * Add the secret ingredient
 * @param {string[]} friendsList
 * @param {string[]} myList
 * @return {string[]} myList with secret ingredient
 *
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.slice(-1)[0]);
}

/**
 * Scale the recipe
 * @param {Object} recipe
 * @param {number} scaleFactor
 * @return {Object} scaled recipe
 *
 */
export function scaleRecipe(recipe, scaleFactor) {
  if (!scaleFactor) {
    return recipe;
  }

  const scaledRecipe = {};

  for (const [key, value] of Object.entries(recipe)) {
    scaledRecipe[key] = value * scaleFactor / 2;
  }

  return scaledRecipe;
}
