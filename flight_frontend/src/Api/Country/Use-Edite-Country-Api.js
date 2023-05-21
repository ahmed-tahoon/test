import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditeCountryData = async (FormData) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`Country/${FormData.id}`,FormData.data);
    return res.data;
}

export {UseEditeCountryData };
