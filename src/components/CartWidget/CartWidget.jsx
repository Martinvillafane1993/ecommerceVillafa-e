import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity } = useCart()
    const navigate = useNavigate()

    const totalQuantityStyle = {
        fontWeight: 'bold', 
        fontSize: '16px',   
        color: '#6e1e51',    
        marginLeft: '15px',
        paddingTop:'15px'   
    }

    return (
        <div onClick={() => navigate('/cart')}>
        <FaShoppingCart style={{    
        textAlign: 'center',
    stroke: 'blue',
    fill: '#6e1e51',
    strokeWidth: 0,
    height: '30px',
    width: '30px',
    position:'relative',
    top:'25px',
    cursor:'pointer',
    }}/>
            <span style={totalQuantityStyle}>{totalQuantity} </span>
        </div>
    )
}

export default CartWidget