// import { loadStripe } from "@stripe/stripe-js";

// export async function Checkout({lineItems}) {
//     let stripePromise = null;
//     let getStripe =()=>{
//         if(!stripePromise){
//            let stripePromise = loadStripe(process.env.NEXT_PUBLIC_API_KEY)
//         }
//         return stripePromise
//     }

//     const stripe = await getStripe()

//     await stripe.redirectToCheckout({
//         mode:"payment",
//         lineItems
//     })
//     return(
       
//     )
// }


// import Stripe from "stripe";
// import { NextResponse } from "next/server";

// interface IProcess{
//     NEXT_PUBLIC_API_KEY:any;
//     request:string
// }

// export async function GET({request}:IProcess) {
//     const stripe = new Stripe(process.env.NEXT_PUBLIC_API_KEY);
//     const price = await stripe.prices.list({
//         limit:4,
//     });
//     return NextResponse.json(price.data.reverse())
    
// }

import { Stripe, loadStripe } from '@stripe/stripe-js';

export async function Checkout({ lineItems }: { lineItems: { price: string, quantity: number }[] }) {
    let stripePromise: Promise<Stripe | null>;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }
  return stripePromise;
};

const stripe = await getStripe()

await stripe?.redirectToCheckout({
    mode:"payment",
    lineItems,
    successUrl:`${window.location.origin}?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl:`${window.location.origin}`
})
}
export default Checkout;


// import { Stripe, loadStripe } from '@stripe/stripe-js';

// let stripePromise: Promise<Stripe | null>;
// const getStripe = () => {
//   if (!stripePromise) {
//     stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
//   }
//   return stripePromise;
// };

// export async function Checkout({ lineItems }: { lineItems: { price: string, quantity: number }[] }) {
//   const response = await fetch('/api/create-checkout-session', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ lineItems }),
//   });

//   const session = await response.json();

//   const stripe = await getStripe();
//   const { error } = await stripe?.redirectToCheckout({
//     sessionId: session.id,
//   })!;

//   if (error) {
//     console.error('Stripe checkout error', error);
//   }
// }

// export default Checkout;
