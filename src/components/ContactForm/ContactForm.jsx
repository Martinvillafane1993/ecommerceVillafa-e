import React, { useState } from 'react';



const ContactForm = ({ createOrder }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            name,phone,email
        }

        createOrder(userData)

    };

    return (
        <>
        <div className="formContainer">
        <h1 id='h1Check'>Checkout</h1>
        <h2 id='h2Check'>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <div className='labelInput'>
                    <label htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className='labelInput'>
                    <label htmlFor="phone">Teléfono:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className='labelInput'>
                    <label htmlFor="email">E-mail:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <button id='btnCheck' type="submit">Generar orden</button>
            </form>
        </div>

        </>
    );
};

export default ContactForm;

