//importer
import axios from "axios";

//enpoint sets
const enpointURL = "https://ashypls.com/endpoints/basetest.asmx/";

export default ({


    //methods
    async gdaArray(methodName, headersMap) {
        let requestData = {};
        for (const [key,value] of headersMap.entries()){
            requestData[key] = value;
        };       
        let postRequest = await axios.post(enpointURL + methodName,requestData);
        return postRequest;
    },


    responseObject(responseData){
        return JSON.parse(JSON.parse(responseData.data.d).message);
    },

    responseStatus(responseData){
        return JSON.parse(responseData.data.d).status;
    },

    responseMessage(responseData){
        return JSON.parse(responseData.data.d).message;
    }

})