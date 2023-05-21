import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetOneFlightApi = async ({queryKey}) => {
    const [_,id] = queryKey
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get(`flight/${id}`);
    return res.data;
}

export {UseGetOneFlightApi};