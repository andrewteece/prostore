'use client'

import { Button } from "@/components/ui/button";
import { Toaster, toast } from 'sonner';
//import { ToasterProps } from "sonner";
//import { round2 } from '@/lib/utils'
import { Cart, CartItem } from "@/types"
import { Plus, Minus } from "lucide-react";
import { useRouter } from "next/navigation";
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";


// const AddToCart = ({ cart, item }: { cart?: Cart; item: CartItem > }) => {

const AddToCart = ({ cart, item }: { cart?: Cart; item: Omit<CartItem, 'cartId'> }) => {

  const router = useRouter();
  // const toast = useToast();

  const handleAddToCart = async () => {
    // Execute the addItemToCart action
    const res = await addItemToCart(item);
  
    // Display appropriate toast message based on the result
    if (!res.success) {
     toast.error(res.message, {
        style: {
          backgroundColor: 'red',
          color: 'white',
        },
       description: res.message
     });
      return;
    }
     // Handle success add to cart
    toast.success("Item added", {
      description: `${item.name} added to the cart`,
      action: (
        <Button
          className='bg-primary text-white hover:bg-gray-800'
          onClick={() => router.push('/cart')}
        >
          Go to cart
        </Button>
      ),
    });
  };

  // Remove item from cart
const handleRemoveFromCart = async () => {
  const res = await removeItemFromCart(item.productId);

  toast({
    variant: res.success ? 'default' : 'destructive',
    description: res.message,
  });
};

// Check if item is in cart 
const existItem =
  cart && cart.items.find((x) => x.productId === item.productId);

  return existItem ? (
    <div>
      <Button type='button' variant='outline' onClick={handleRemoveFromCart}>
        <Minus className='w-4 h-4' />
      </Button>
      <span className='px-2'>{existItem.qty}</span>
      <Button type='button' variant='outline' onClick={handleAddToCart}>
        <Plus className='w-4 h-4' />
      </Button>
    </div>
  ) : (
    <Button className='w-full' type='button' onClick={handleAddToCart}>
      <Plus className='w-4 h-4' />
      Add to cart
    </Button>
  );

  //   return (
  //     <Button className='w-full' type='button' onClick={handleAddToCart}>
  //   <Plus />
  //   Add to cart
  // </Button>
  //   )
  };
  
  export default AddToCart;