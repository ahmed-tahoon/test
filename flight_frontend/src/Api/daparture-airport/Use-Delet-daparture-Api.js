import BaseUrl from '../../BaseUrl/BaseUrl'


const UseDeletdapartureData = async (id,params) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.delete(`daparture-airport/${id}`);
    return res.data;
}

export { UseDeletdapartureData };
