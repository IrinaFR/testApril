import axios from '../node_modules/axios'

export const state = () => ({
    url_api: 'https://rickandmortyapi.com/api/',
})

export const getters = {
    getUrlApi(state) {
        return state.url_api
    },
    requestApi: (state, getters) => async (method, path, formData) => {
        try {
            const {data} = await axios({
                method,
                url: encodeURI(getters.getUrlApi + path),
                params: formData
            })
            if (!data.err) {
                return data;
            }
        } catch (error) {
            console.warn('Error', error.message);
            return false
        }
    }
}


