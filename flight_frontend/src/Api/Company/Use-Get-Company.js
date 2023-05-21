import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetflightcompanyApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("flight-company");
    return res.data;
}

export {UseGetflightcompanyApi};
