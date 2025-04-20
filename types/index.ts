import { z } from "zod";
import {
  cartItemSchema,
  insertCartSchema,
  insertProductSchema,
  shippingAddressSchema
} from '@/lib/validator'

// product types
export type Product = z.infer<typeof insertProductSchema> & {
    id: string;
    createdAt: Date;
    rating: string;
    numReviews: number;
  };


// cart types
  export type Cart = z.infer<typeof insertCartSchema>;
  export type CartItem = z.infer<typeof cartItemSchema>; 


// shipping types
  export type ShippingAddress = z.infer<typeof shippingAddressSchema>;

  export const shippingAddressDefaultValues = {
    fullName: 'John Doe',
    streetAddress: '123 Main St',
    city: 'Anytown',
    postalCode: '12345',
    country: 'USA',
  };