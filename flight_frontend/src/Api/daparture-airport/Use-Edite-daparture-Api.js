import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditedapartureData = async (FormData) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`daparture-airport/${FormData.id}`,FormData.data);
    return res.data;
}

export {UseEditedapartureData };
