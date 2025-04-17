'use client'

import { Button } from "@/components/ui/button";
import { Toaster, toast } from 'sonner';
import { ToasterProps } from "sonner";
//import { round2 } from '@/lib/utils'
import { CartItem } from "@/types"
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { addItemToCart } from "@/lib/actions/cart.actions";


const AddToCart = ({ item }: { item: Omit<CartItem, 'cartId'> }) => {

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

    return (
      <Button className='w-full' type='button' onClick={handleAddToCart}>
    {/* <Plus /> */}
    Add to cart
  </Button>
    )
  };
  
  export default AddToCart;