import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetdapartureApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("daparture-airport");
    return res.data;
}

export {UseGetdapartureApi};
