const axios = require('axios');

export const search = {
  state: {
    subway: [],
    officetel: [],
    apt: []
  },
  reducers: {
    findeSearchTwo(state, payload) {
      let tmpSubway = [];
      let tmpOfficetel = [];
      let tmpApt = [];

      tmpSubway = payload.filter(data => data.complex_type === null);
      tmpOfficetel = payload.filter(data => data.complex_type === 0);
      tmpApt = payload.filter(data => data.complex_type === 1);

      state = {
        subway: tmpSubway,
        officetel: tmpOfficetel,
        apt: tmpApt
      };
      return state;
    },
  },
  effects: dispatch => ({
    async findSearch(payload, rootState) {
      const { keyword } = payload;
      const res = await axios.get(`/api/3/loc/keyword?api_version=3.0.1&keyword=${keyword}`);
      dispatch.search.findeSearchTwo(res.data);
    }
  })
};