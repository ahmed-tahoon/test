import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletFlightData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`flight/${id}`);
    return res.data;
}

export { UseDeletFlightData };