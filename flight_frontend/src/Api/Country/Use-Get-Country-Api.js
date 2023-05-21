import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetcountryApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("country");
    return res.data;
}

export {UseGetcountryApi};
