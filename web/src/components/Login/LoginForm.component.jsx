
import FormField from '../FormField/FormField.component';
import { email, required } from '../FormField/FormField.validation';

export default function LoginForm() {
    return (
        <>
            <form>
                <FormField
                    type="email"
                    label="Email"
                    name="email"
                    required
                    validations={[required, email]}
                    placeholder="email@domain.com"
                />
                <FormField
                    label="Password"
                    name="password"
                    required
                    validations={[required]}
                    placeholder="******"
                />
                <button type="submit">Enviar</button>
            </form>
        </>
    );
}
