//import { Button } from "@/components/ui/button";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";


const HomePage =  () => {
  return (
    
    <>
      {/* <h2 className='h2-bold'>Latest Products</h2> */}
      <ProductList 
      data={sampleData.products} 
      title='Newest Arrivals'
      limit={4}
      />
      </>
    
  );

};

export default HomePage;