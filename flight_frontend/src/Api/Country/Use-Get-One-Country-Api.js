import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetOnecountryApi = async (country) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    console.log(country);

    const res = await BaseUrl.get(`country/${country}`);
    return res.data;
}

export {UseGetOnecountryApi};
