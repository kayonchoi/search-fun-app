import axios from 'axios';

const initState = {
  oneRoom: [],
  officetel: [],
  apt: [],
};

export default {
  state: initState,
  reducers: {
    initState(state, payload) {
      return initState;
    },
    findeSearchList(state, payload) {
      let tmpSubway = [];
      let tmpOfficetel = [];
      let tmpApt = [];

      tmpSubway = payload.filter(data => data.complex_type === null);
      tmpOfficetel = payload.filter(data => data.complex_type === 0);
      tmpApt = payload.filter(data => data.complex_type === 1);

      return {
        oneRoom: tmpSubway,
        officetel: tmpOfficetel,
        apt: tmpApt,
      };
    }
  },
  effects: dispatch => ({
    async findSearchApi(payload, rootState) {
      const { keyword } = payload;
      const res = await axios.get(`/api/3/loc/keyword?api_version=3.0.1&keyword=${keyword}`);
      dispatch.search.findeSearchList(res.data);
    }
  })
};

