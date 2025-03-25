import axios from "axios";

export default async function response(word, page) {
    const request = await axios.get (`https://api.unsplash.com/search/photos`, {params: {
            client_id: 'fsa77XoDKPaykQAv_wi--9WyXd62ZKKk8D6ar1O_kF4',
            page: page,
            query: 'plants',
            per_page: 3,}});

    return request.data.results;
}
export async function pict(id) {
    const pictRequest = await axios.get(`https://api.unsplash.com/photos/${id}`, {
        params: {
            client_id: 'fsa77XoDKPaykQAv_wi--9WyXd62ZKKk8D6ar1O_kF4',
        }
    });

    return pictRequest.data;
}


export async function medicine() {
    const requestmedicine = await axios.get (`https://api.unsplash.com/search/photos`, {params: {
            client_id: 'fsa77XoDKPaykQAv_wi--9WyXd62ZKKk8D6ar1O_kF4',
            query: 'rose',
            per_page: 3,}});

    return requestmedicine.data.results;
}

