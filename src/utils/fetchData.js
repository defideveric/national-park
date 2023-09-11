export const parkOptions = {
    method: 'GET',
    url: "https://developer.nps.gov/api/v1/parks?stateCode=CA&limit=12",
    headers: {
        'X-Api-Key': 
    }
}

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}