'use Client' 

//import { startTransition, useTransition } from "react";
//import { useRouter } from "next/navigation";
import { useToast } from 'sonner'
import { addItemToCart, removeItemFromCart } from "@/lib/actions/cart.actions";
import { ArrowRight, Loader, Minus, Plus } from "lucide-react";
import { Cart } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table'




const CartTable = ({ cart } : { cart?: Cart }) => {
    const router = useRouter();
    const {isPending, startTransition} = useTransition();

    return (
        <>
        <h1 className="py-4 h2-bold">Shopping Cart</h1>
        {!cart || cart.items.length === 0 ? (
        <div>
          Cart is empty. <Link href='/'>Go shopping</Link>
        </div>
      ) : (
        <div className='grid md:grid-cols-4 md:gap-5'>
          <div className='overflow-x-auto md:col-span-3'></div>
        </div>
      )}
        </>
    );
};

export default CartTable;