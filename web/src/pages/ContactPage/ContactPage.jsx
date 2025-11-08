import { useState } from 'react';

import { Facebook, Mail, Phone, Twitter } from 'react-feather';

import styles from './ContactPage.module.css';
import ContactForm from '../../components/Contact/ContactForm.component';

export default function ContactPage() {
    return (
        <div className="container">
            <article className="grid">
                <div className={styles['col-contact-info-left']}>
                    <h1>Contacto</h1>
                    <span>
                        Celular: 11 1111-1111
                        <br />
                        Mail: <a href="mailto:info@domain.com.ar">info@domain.com.ar</a>
                    </span>
                    <div className='divider'/>
                    <span>
                        Av. Siempre viva 123
                        Buenos Aires - Argentina
                    </span>
                    <div className='divider'/>
                    <span>
                        <a href="https://www.facebook.com/domain.com.ar" className={styles['social-icons']}>
                            <Facebook />
                        </a>
                        <a href="https://www.twitter.com/domain.com.ar" className={styles['social-icons']}>
                            <Twitter />
                        </a>
                        <a href="mailto:info@domain.com.ar" className={styles['social-icons']}>
                            <Mail />
                        </a>
                        <a href="tel:11 1111-1111" className={styles['social-icons']}>
                            <Phone />
                        </a>
                    </span>
                </div>
                <div className={styles['col-contact-info-right']}>
                    <h5>¿Tienes preguntas?</h5>
                    <p>Los campos son obligatorios para un mejor servicio.</p>
                    <ContactForm />
                </div>
            </article>
        </div>
    );
}
