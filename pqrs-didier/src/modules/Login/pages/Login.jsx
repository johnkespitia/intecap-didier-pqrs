import LoginForm from "../componentes/LoginForm";
import LoginHOC from "../componentes/LoginHOC";
import LoginTemplate from "../componentes/LoginTemplate";


const Login = () => {
    return <LoginTemplate>
        <LoginHOC>
            <LoginForm />
        </LoginHOC>
    </LoginTemplate>
}

export default Login;