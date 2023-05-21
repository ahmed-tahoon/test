import BaseUrl from '../../BaseUrl/BaseUrl'


const UseEditeflightcompanyData = async (FORMDATA) => {
    // const config = {
    //     headers: { token: localStorage.getItem("token") }
    // }
    const res = await BaseUrl.patch(`flight-company/${FORMDATA.id}`,FORMDATA.data);
    return res.data;
}

export {UseEditeflightcompanyData };
