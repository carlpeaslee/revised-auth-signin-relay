import Relay from 'react-relay';

export default {
  getPeople: () => Relay.QL`
    query {
      getPeople(all){
        personId,
        email,
        name
      }
    }`,
};
