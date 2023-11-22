import myKey from "./key.json";

function getSearchUrl(query, page = 1, key = myKey.key, type = "photo", orientation = "horizontal", per_page = 12) {
    const strApi = "https://pixabay.com/api/";
    const strKey = `?key=${key}`;
    const strQuery = `&q=${query}`;
    const strPage = `&page=${page}`;
    const strType = `&image_type=${type}`;
    const strOrientation = `&orientation=${orientation}`;
    const strPerPage = `&per_page=${per_page}`;

    return strApi + strKey + strQuery + strPage + strType + strOrientation + strPerPage;
};

export default function fetchFromUrl(query, page) {
    const url = getSearchUrl(query, page);
    const errorMsg = `Name ${query} not found`;
    return fetch(url)
        .then(
            response => {
                if (response.ok) return response.json();
                if (!response.ok) return Promise.reject(new Error(errorMsg));
            });
};

