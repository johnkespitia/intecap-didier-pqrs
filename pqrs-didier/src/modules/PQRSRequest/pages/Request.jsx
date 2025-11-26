import RequestForm from "../componentes/RequestForm";
import RequestHOC from "../componentes/RequestHOC";

const Request = () => {
    
    return (
        <div>
            <RequestHOC>
                <RequestForm />
            </RequestHOC>
        </div>
    );
};

export default Request;