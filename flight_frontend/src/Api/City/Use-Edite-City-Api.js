import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditecityData = async (FormData) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`city/${FormData.id}`,FormData.data);
    return res.data;
}

export {UseEditecityData };
