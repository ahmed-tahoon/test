import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditeFlightData = async (FormData) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`flight/${FormData.id}`,FormData.data);
    return res.data;
}

export {UseEditeFlightData };