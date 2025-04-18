//import { Button } from "@/components/ui/button";
import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";
import { getLatestProducts } from "@/lib/actions/product.actions";


const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <div className='space-y-8'>
      <h2 className='h2-bold'>Latest Products</h2>
      <ProductList data={latestProducts} title='Newest Arrivals'  />
    </div>
  );
};

export default HomePage;