export const fetchData = async (dataPath) => {
    return fetch(dataPath)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Fail to load data:', error);
            throw error;
        });
};
