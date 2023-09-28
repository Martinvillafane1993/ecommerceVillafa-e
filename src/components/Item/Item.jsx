import { Link, useNavigate } from "react-router-dom"

const Item = ({ id, name, img, price }) => {


    const handleClick = (e) => {
        e.stopPropagation()
    }


    return (
        <Link to={`/detail/${id}`} className="card" onClick={handleClick}>
                <h3 className="itemName">{name}</h3>
                <img src={img} style={{ width: 180}}/>
                <p className="itemPrice">Precio: $ {price}</p>    
            
            </Link>

            // <Link className="btnLink" } >Ver Detalle</Link>
    )
}

export default Item