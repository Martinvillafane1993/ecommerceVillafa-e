import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { collection, query, where, documentId, getDocs, writeBatch, addDoc } from 'firebase/firestore'
import { db } from '../../services/firebase/firebaseConfig'
import { useNavigate } from 'react-router-dom'
import ContactForm from '../ContactForm/ContactForm'

const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useCart()
    const [orderId, setOrderId] = useState ('')

    const navigate = useNavigate()

    const createOrder = async (name, phone, email) => {
        try {
            setLoading(true);
    
            const objOrder = {
                buyer: { name, phone, email },
                items: cart,
                total
            };
    
            const batch = writeBatch(db);
            const outOfStock = [];
    
            const ids = cart.map(prod => prod.id);
    
            const productsRef = query(collection(db, 'products'), where(documentId(), 'in', ids));
    
            const { docs } = await getDocs(productsRef);
    
            docs.forEach(doc => {
                const fields = doc.data();
                const stockDb = fields.stock;
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id);
                const prodQuantity = productAddedToCart?.quantity;
    
                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity });
                } else {
                    outOfStock.push({ id: doc.id, ...fields });
                }
            });
    
            if (outOfStock.length === 0) {
                await batch.commit();
                const orderRef = collection(db, 'orders');
    
                const orderDoc = await addDoc(orderRef, objOrder);
                const orderId = orderDoc.id; // Obtener el ID del documento creado
    
                setOrderId(orderId); // Establecer el ID en el estado
    
                clearCart();
                navigate('/');
                console.log('El número de orden es: ' + orderId);
            } else {
                console.error('Hay productos fuera de stock...');
            }
        } catch (error) {
            console.log('Ocurrió un error al obtener datos: ' + error.message);
        } finally {
            setLoading(false);
        }
    };
    
    if(loading) {
        return <h1>Se esta generando su orden...</h1>
    }

    if (orderId) {
        return <h1>El id de su orden es {orderId}</h1>
    }

    return (
        <>
            <ContactForm createOrder={createOrder} />
        </>
    );
};
export default Checkout