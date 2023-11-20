export default function fetchFromUrl(url, search) {
    const errorMsg = `Name ${search} not found`;
    return fetch(url)
        .then(
            response => {
                // if (response.ok) return response.json();
                // if (!response.ok) return Promise.reject(new Error(errorMsg));
                console.log(response);
            });
}