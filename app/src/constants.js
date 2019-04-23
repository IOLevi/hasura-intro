const clusterName = 'minikube-hasura-cluster';
const GRAPHQL_URL = 'https://data.' + clusterName + '.xip.io/v1alpha1/graphql';
const AUTH_URL = 'https://auth.' + clusterName + '.xip.io';
var userInfo = null;
const REDIRECT_URL = 'http://localhost:3000'

function saveUserInfo(info) {
}

function getUserInfo() {
}

export {
  GRAPHQL_URL,
  AUTH_URL,
  REDIRECT_URL,
  getUserInfo,
  saveUserInfo,
};



