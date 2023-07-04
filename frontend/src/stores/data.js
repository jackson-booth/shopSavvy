import { writable } from 'svelte/store';

/**
 * @typedef Product
 * @property {number} id
 * @property {string} title
 * @property {number} price
 * @property {string} description
 * @property {string} category
 * @property {string} image
 * @property {Rating} rating
 */

/**
 * @typedef Rating
 * @property {number} rate
 * @property {number} count
 */

/**
 * Contains array of products
 * @type {Writable<Product[]>}
 */
export const products = writable([]);
