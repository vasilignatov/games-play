const host = 'http://localhost:3030';

const getAll = () => fetch(host + '/data/games?sortBy=_createdOn%20desc').then(r => r.json());

const getById = (id) => fetch(host + `/data/games/${id}`).then(res => res.json());

export {
    getAll,
    getById
}