import url from 'url';

const getPath = (req) => {
    return req.url; // Trả về đường dẫn URL
};

const getParamsURL = (req) => {
    let urlData = url.parse(req.url, true);
    return JSON.stringify(urlData.query); // Trả về tham số trong URL
};

export default { getPath, getParamsURL };
