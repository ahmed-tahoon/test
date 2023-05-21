import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletcityData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`city/${id}`);
    return res.data;
}

export { UseDeletcityData };
