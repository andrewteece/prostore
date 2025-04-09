import { Button } from "@/components/ui/button";
import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const HomePage = async () => {
  await delay(2000)
  return <>Prostore</>;
};

export default HomePage;