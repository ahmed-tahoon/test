import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletsupplierData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`supplier/${id}`);
    return res.data;
}

export { UseDeletsupplierData };
