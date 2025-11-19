const LoginTemplate = ({children})=>{
    return <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm border-2 p-4 rounded-lg
                            shadow-xl/40 border-gray-300 bg-gray-50">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    alt="Desigual"
                    src="../img/LogoDesigual.svg"
                    className="mx-auto h-10 w-auto"
                />
                <h1 className="my-4 text-center text-2xl/9 font-bold tracking-tight">Gestión de PQRs</h1>
            </div>
            {children}
            <p className="mt-10 text-center text-sm/6 text-gray-400">
                © 2025. <b>DIFERMODA SAS</b>
            </p>
            <p className="text-center text-sm/6 text-gray-400">
                Todos los derechos reservados.
            </p>
        </div>

    </div>
}
export default LoginTemplate;