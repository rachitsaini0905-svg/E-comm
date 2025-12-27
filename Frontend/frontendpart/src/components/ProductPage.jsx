import ProductList from "./ProductList";
import 'flowbite';
function ProductPage() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <ProductList />
        <ProductList />
        <ProductList />
      </div>
    </div>
  );
}
export default ProductPage;
