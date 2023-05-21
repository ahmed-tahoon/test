import BaseUrl from '../../BaseUrl/BaseUrl'




const UseGetsupplierApi = async (url, parmas) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.get("supplier");
    return res.data;
}

export {UseGetsupplierApi};
