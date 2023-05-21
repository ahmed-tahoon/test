import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetSeatApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("Seat");
    return res.data;
}

export {UseGetSeatApi};
