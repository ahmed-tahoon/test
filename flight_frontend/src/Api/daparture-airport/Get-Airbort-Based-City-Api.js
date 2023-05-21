import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetAirPortBasecCityApi = async (cityID) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get(`city/${cityID}`);
    return res.data;
}

export {UseGetAirPortBasecCityApi};
