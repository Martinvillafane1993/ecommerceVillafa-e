import Item from "../Item/Item"

const ItemList = ({ products }) => {
    return (
        <div id="cardContainer">
            {products.map(product => {
                return (
                    <Item key={product.id} {...product}/>
                )
            })}
        </div>
    )
}

export default ItemList