import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletcountryData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`country/${id}`);
    return res.data;
}

export { UseDeletcountryData };
