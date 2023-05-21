import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditeSeatData = async (formdata) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`seat/${formdata.idapi}`,formdata.data);
    return res.data;
}

export {UseEditeSeatData };
