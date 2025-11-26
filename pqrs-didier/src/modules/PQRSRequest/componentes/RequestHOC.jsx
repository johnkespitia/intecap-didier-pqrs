import { usePQRSStore } from "@stores"
import { Children, cloneElement, useState } from "react"
import { useNavigate } from "react-router";

const RequestHOC = ({children}) => {
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(false);
    const [success , setSuccess] = useState(false);
    const navigate = useNavigate();
    const {addRequest, requests, updateRequest, removeRequest, clearRequests} = usePQRSStore()
    const onSubmit = (values) => {
        try {
            setError(null);
            setSuccess(false);
            setLoading(true);
            const data = {
                ...values,
                id: Date.now(),
                estado: 'pending',
                creadoEn: new Date().toISOString(),
            };
            addRequest(data);
            setSuccess(true);
            navigate('/request/success');
        } catch (err) {
            setError('Error al enviar la solicitud. Inténtalo de nuevo.');
            setSuccess(false);  
        }
        finally {
            setLoading(false);
        }
    }
    
    return Children.map(children, child => {
        return  cloneElement(child, {
            ...child.props,
            //props inyectadas
            addRequest,
            requests,
            updateRequest,
            removeRequest,
            clearRequests,
            onSubmit,
            error,
            loading,
            success,
        })
    })
}

export default RequestHOC