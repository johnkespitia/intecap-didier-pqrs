import RequestConfirm from "../componentes/RequestConfirm";
import RequestHOC from "../componentes/RequestHOC";

const Success = () => {
    return (
        <div>   
            <RequestHOC>
                <RequestConfirm />
            </RequestHOC>
        </div>
    );
};

export default Success;