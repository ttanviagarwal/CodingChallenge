export default function dispatchResponseToReducers(serviceMethod, actionType_Success, actionType_Failure, actionType_InProgress) {
    return (dispatch) => {
        dispatch({
            type: actionType_InProgress,
        });
        serviceMethod()
            .then((response) => {
                    return response.json();
            })
            .then((responseJson) => {
                if(responseJson){
                    if (validateResponse(responseJson.stat)) {
                        dispatch({
                            type: actionType_Success,
                            payload: responseJson
                        });
                    } else {
                        dispatch({
                            type: actionType_Failure,
                            payload: responseJson
                        });
                    }
                }else{
                    dispatch({
                        type: actionType_Failure,
                        payload: responseJson
                    }); 
                }   
            })
            .catch((error) => {
                dispatch({
                    type: actionType_Failure,
                    error: error,
                });
            });
    }
}

function validateResponse(stat) {
    switch (stat) {
        case "ok":
            return true;
        default:
            return false;
    }
}
