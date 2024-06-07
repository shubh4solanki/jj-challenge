import useAuth from "./useAuth"
import getStripe from '../lib/getStripe'
import {
    worldIndividual,
    worldGroup,
    worldBusiness,
    universeIndividual,
    universeGroup,
    universeBusiness
} from "../config"

export default function usePay() {

    const { isLoggedIn, user } = useAuth()

    async function pay(subType, appType) {
        if (!isLoggedIn) {
            return
        }

        let price = '';
        if (subType === 'individual' && appType === 'world') {
            price = worldIndividual;
        }

        if (subType === 'group' && appType === 'world') {
            price = worldGroup;
        }

        if (subType === 'business' && appType === 'world') {
            price = worldBusiness;
        }

        if (subType === 'individual' && appType === 'universe') {
            price = universeIndividual;
        }

        if (subType === 'group' && appType === 'universe') {
            price = universeGroup;
        }

        if (subType === 'business' && appType === 'universe') {
            price = universeBusiness;
        }

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout({
            lineItems: [
                {
                    price,
                    quantity: 1,
                },
            ],
            mode: 'subscription',
            successUrl: `http://localhost:3000/success?subType=${subType}`,
            cancelUrl: `http://localhost:3000/cancel?subType=${subType}`,
            customerEmail: user.email,
        });

        console.warn(error.message);
    }

    return pay
}
