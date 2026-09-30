export const ProductCard = ({name, price, description}) => {
  return (
    <div className="ProductCard">
      <h3>name :{name}</h3>
      <p>price : {price}</p>
      <p> description: {description}</p>
    </div>
  )
}

export default ProductCard;
