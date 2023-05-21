import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletflightcompanyData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`flight-company/${id}`);
    return res.data;
}

export { UseDeletflightcompanyData };
