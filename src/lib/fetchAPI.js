
export const fetchAPI = async ({
    url,
    method="GET",
    accessToken=false,
    bodySend=null,
}) => {
    let headers = {
        "Content-Type":"application/json",
    }
    let body= null;

    if(accessToken){
        headers = {
            ...headers,
            "Authorization":accessToken
        }
    }
    if(bodySend){
        body = JSON.stringify({
          ...bodySend,  
        })
    }
    
    return fetch(url)
    .then(res => {
        const r = res.json()
        console.log(r)
        return r})
    .catch(err=>{
        throw err;
    });
}