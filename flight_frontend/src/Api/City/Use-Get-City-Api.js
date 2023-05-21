import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetcityApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("city");
    return res.data;
}

export {UseGetcityApi};
