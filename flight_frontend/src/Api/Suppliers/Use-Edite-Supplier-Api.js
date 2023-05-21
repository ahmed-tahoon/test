import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditesupplierData = async (FormData) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`supplier/${FormData.id}`,FormData.data);
    return res.data;
}

export {UseEditesupplierData };
