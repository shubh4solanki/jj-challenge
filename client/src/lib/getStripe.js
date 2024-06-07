import { loadStripe } from '@stripe/stripe-js';
import { stripeKey } from '../config';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(stripeKey);
  }
  return stripePromise;
};

export default getStripe;