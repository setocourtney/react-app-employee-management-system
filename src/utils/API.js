import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getUsers: function() {
    return axios.get("https://randomuser.me/api/?seed=allusers&results=100");
  },
  getBaseNameList: function() {
    return axios.get("https://randomuser.me/api/?seed=allusers&results=100?inc=name");
  }
};
