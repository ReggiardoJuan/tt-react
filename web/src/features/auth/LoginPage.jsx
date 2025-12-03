import LoginForm from './components/LoginForm.component';
import styles from '../content/Contact/ContactPage.module.css';

export default function LoginPage() {
    return (
        <div className="container">
            <article className="grid">
                <div >
                    <h1>Ingresá tu e-mail para iniciar sesión</h1>
                    <span>Necesitas ayuda? <a href="mailto:info@domain.com.ar">Envíanos un correo</a></span>
                </div>
                <div className={styles['col-contact-info-right']}>
                    <LoginForm />
                </div>
            </article>
        </div>
    );
}
