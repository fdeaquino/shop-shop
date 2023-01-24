//UPDATE_PRODUCTS will be used in the ProductList component - we want to store the date retrieved for products by Apollo and store it in this global state, that way, we can add offline capabilities later and persist our product data!
export const UPDATE_PRODUCTS = "UPDATE_PRODUCTS";

//UPDATE_CATEGORIES works similarly to UPDATE_PRODUCTS
export const UPDATE_CATEGORIES = "UPDATE_CATEGORIES";

//UPDATE_CURRENT_CATEGORY is the connecting piece of data from the prev two actions - we want to be able to select a category from the state created by UPDATE_CATEGORIES action, and display products form that category from the list we create from the UPDATE_PRODUCTS action
export const UPDATE_CURRENT_CATEGORY = "UPDATE_CURRENT_CATEGORY";
