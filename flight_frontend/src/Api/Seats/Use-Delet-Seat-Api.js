import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletSeatData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`Seat/${id}`);
    return res.data;
}

export { UseDeletSeatData };
