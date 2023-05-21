import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetFlightBasedCompanyApi = async (IDAirLines) => {
    // const [_,IDAirLines] = queryKey
    console.log(IDAirLines);

    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get(`flight-company/${IDAirLines}/flights`);
    return res.data;
}

export {UseGetFlightBasedCompanyApi};