//import { Button } from "@/components/ui/button";
import ProductList from '@/components/shared/product/product-list';

import {
  getLatestProducts,
  getFeaturedProducts,
} from '@/lib/actions/product.actions';
import { ProductCarousel } from '@/components/shared/product/product-carousel';

const HomePage = async () => {
  const latestProducts = await getLatestProducts();
  const featuredProducts = await getFeaturedProducts();

  return (
    <>
      {/* <h2 className='h2-bold'>Latest Products</h2> */}
      {featuredProducts.length > 0 && (
        <ProductCarousel data={featuredProducts} />
      )}
      <ProductList data={latestProducts} title='Newest Arrivals' />
    </>
  );
};

export default HomePage;
