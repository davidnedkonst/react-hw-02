import myKey from "./key.json";

function getSearchUrl(query, page = 1, perPage = 12, key = myKey.key, type = "photo", orientation = "horizontal") {
    const strApi = "https://pixabay.com/api/";
    const strKey = `?key=${key}`;
    const strQuery = `&q=${query}`;
    const strPage = `&page=${page}`;
    const strType = `&image_type=${type}`;
    const strOrientation = `&orientation=${orientation}`;
    const strPerPage = `&per_page=${perPage}`;

    return strApi + strKey + strQuery + strPage + strType + strOrientation + strPerPage;
};

export default function fetchFromUrl(query, page, perPage) {
    const url = getSearchUrl(query, page, perPage);
    const errorMsg = `Name ${query} not found`;
    return (
        fetch(url)
            .then(
                response => {
                    if (response.ok) return response.json();
                    if (!response.ok) return Promise.reject(new Error(errorMsg));
                }
            )
    );
};

