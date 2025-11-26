import { useEffect, useState } from "react";

const RequestConfirm = ({requests}) => {
    const [lastRequest, setlastRequest] = useState(null);
    useEffect(() => {
        if (requests.length > 0) {
            setlastRequest(requests[requests.length - 1]);
        }
    }, [requests]);
    return (
        <div>
            <h2>Confirmación de Solicitud</h2>
            <p>Su solicitud ha sido enviada exitosamente.</p>
            {lastRequest && (
                <div>
                    <h3>Detalles de la Solicitud {lastRequest.id}:</h3>
                    <p><strong>Título:</strong> {lastRequest.title}</p>
                    <p><strong>Descripción:</strong> {lastRequest.description}</p>
                    <p><strong>Solicitante:</strong> {lastRequest.solicitante}</p>
                    <p><strong>Estado:</strong> {lastRequest.estado}</p>
                    <p><strong>Creado En:</strong> {new Date(lastRequest.creadoEn).toLocaleString()}</p>
                </div>
            )}  
        </div>
    );
};

export default RequestConfirm;