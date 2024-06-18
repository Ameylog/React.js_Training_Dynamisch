
import axios from "axios";

export const productApiGet = async () => {

    const URL = process.env.REACT_APP_PRODUCT_API

    try {
        const response = await axios.get(URL);
        const res = response.data;
        const res2 = res["products"];
        return res2;

    } catch (error) {
        console.log(error);
        return null;
    }
}