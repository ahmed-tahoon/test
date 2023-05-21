import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetFlightApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("flight");
    return res.data;
}

export {UseGetFlightApi};