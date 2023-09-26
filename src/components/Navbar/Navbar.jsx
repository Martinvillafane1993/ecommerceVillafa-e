import classes from './Navbar.module.css'
import Logo from '../Brand/Brand'
import { useEffect, useState } from 'react'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, useNavigate } from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDocs, collection, query, orderBy } from 'firebase/firestore'

const Navbar = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const categoryRef = query(collection(db, 'category'), orderBy('order', 'asc'))
        
        getDocs(categoryRef)
            .then(querySnapshot => {
                const categoryAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data()
                    return { id: doc.id, ...fields }
                })

                setCategory(categoryAdapted)
            }).catch(error => {
                console.error("Error al obtener datos de Firestore:", error);
            });
    }, [])

    console.log(category)
    return (
        <nav className={classes.container}>
                    <span onClick={() => navigate('/')} className="logo"><Logo/></span>
            <section>
                
                {
                    category.map(cat => (
                        <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({ isActive }) => isActive ? classes.active : classes.inactive  }>{cat.name}</NavLink>
                    ))
                    
                }
            </section>
            <CartWidget />
        </nav>
        
    )
} 

export default Navbar