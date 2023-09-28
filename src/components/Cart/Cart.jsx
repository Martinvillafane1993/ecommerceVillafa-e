import { useCart } from "../../context/CartContext"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, removeItem, total } = useCart()

    return (
        <>
            <h1>Cart</h1>
            <section>
                {
                    cart.map(prod => {
                        return (
                            <div key={prod.id} style={{ display: 'flex', justifyContent: 'space-between', margin:50}}>
                                <h2 style={{
                                    marginLeft:45
                                }}>{prod.name}</h2>
                                <button style={{
                                    marginRight:50,
                                }} onClick={() => removeItem(prod.id)}>Eliminar</button>
                            </div>
                        )
                    })
                }
            </section>
            <h2 style={{
                margin:50
            }}>Total: $ {total}</h2>
            <Link className='btnLink' to='/checkout'>Checkout</Link>
        </>
    )
}

export default Cart