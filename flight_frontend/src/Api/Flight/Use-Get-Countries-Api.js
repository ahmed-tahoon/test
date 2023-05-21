import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetCountriesApi = async (id) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get(`users/${id}/all-flights`);
    return res.data;
}

export {UseGetCountriesApi};