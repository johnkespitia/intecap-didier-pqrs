import { Children, cloneElement, isValidElement, useState } from "react";
import { useUserStore } from "@stores";

const LoginHOC = ({children}) => {
 const {setUser} = useUserStore();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = {
            username: formData.get('username')?.trim(),
            password: password?.trim(),
        };

        if (!data.username || !data.password) {
            setError("Por favor, ingresa usuario y contraseña.");
            return;
        }
        setError(""); // Limpia el error si todo está bien
        setUser(data);
    };
    return Children.map(children, (child) => {
        if(!isValidElement(child)) return child;
        return cloneElement(child, {
            ...child.props
            //props inyectadas
            ,handleFormSubmit,
            password,
            setPassword,
            showPassword,
            handleClickShowPassword,
            handleMouseDownPassword,
            handleMouseUpPassword,
            error,
        });
    })
}
export default LoginHOC;