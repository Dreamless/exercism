/// <reference path="./global.d.ts" />
//
// @ts-check

const PIZZA_PRICES = {
  'Margherita' : 7,
  'Caprese' : 9,
  'Formaggio' : 10
}

const EXTRA_PRICES = {
  'ExtraSauce' : 1,
  'ExtraToppings' : 2,
}

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const [extra, ...otherExtras] = extras;
  if (extras.length) {
    return EXTRA_PRICES[extra] + pizzaPrice(pizza, ...otherExtras);
  } else {
    return PIZZA_PRICES[pizza];
  }
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  return pizzaOrders.reduce(
    (result, order) => result + pizzaPrice(order.pizza, ...order.extras),
    0
  );
}
