const ProductCard = () => {
  return (
    <div className="p-4 border-b border-gray-200 flex items-center justify-between">
      <div>
        <h3 className="font-semibold">Sample Product</h3>
        <p className="text-gray-500 text-sm">Quantity: 1</p>
      </div>
      <p className="font-semibold">$49.99</p>
    </div>
  );
};

export default ProductCard;
