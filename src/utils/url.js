// export const baseUriBackend = 'https://job.toletpanda.com/';
export const baseUriBackend = ' http://localhost:5000';

export const API_BASE_URL = baseUriBackend + '/api/v1/';

//   Authe
export const SIGN_IN = API_BASE_URL + 'user/sign-in';
export const SIGN_UP = API_BASE_URL + 'user/sign-up';

//product 
export const CREATE_PRODUCT = API_BASE_URL + 'product/create-product';
export const GET_PRODUCT = API_BASE_URL + 'product/get-product';
export const GET_SINGLE_PRODUCT = API_BASE_URL + 'product/get-single-product';
export const UPDATE_PRODUCT = API_BASE_URL + 'product/update-product';
export const DELETE_PRODUCT = API_BASE_URL + 'product/delete-product';


//service
export const CREATE_SERVICE = API_BASE_URL + 'service/create-service';
export const GET_SERVICE = API_BASE_URL + 'service/get-service';
export const GET_SINGLE_SERVICE = API_BASE_URL + 'service/get-single-service';
export const UPDATE_SERVICE = API_BASE_URL + 'service/update-service';
export const DELETE_SERVICE = API_BASE_URL + 'service/delete-service';


// team 


// Add these constants to your existing url.js file
export const CREATE_TEAM_MEMBER =API_BASE_URL + 'teams/create-team-member';
export const GET_TEAM_MEMBERS =API_BASE_URL + 'teams/get-team-members';
export const GET_SINGLE_TEAM_MEMBER = API_BASE_URL +'teams/get-single-team-member';
export const UPDATE_TEAM_MEMBER =API_BASE_URL + 'teams/update-team-member';
export const DELETE_TEAM_MEMBER =API_BASE_URL + 'teams/delete-team-member';


//contact

export const CREATE_CONTACT =API_BASE_URL + 'contact/create-contact';
export const GET_ALL_CONTACT =API_BASE_URL + 'contact/get-contact';
export const DELETE_CONTACT =API_BASE_URL + 'contact/delete-contact';