export const LOGO = 
"https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";
export const USER_AVATAR = 
"https://occ-0-4409-3646.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdYJV5wt63AcxNaDoqDXUhqZb55oN5Dxt1m-Zdn_z5rn_hIq9m8dA8JB2xdcPmrY3yXnlVWYKPXnOrbv2QN4aEVU28dESJg.png?r=1d4";
export const PHOTO_URL = "https://avatars.githubusercontent.com/u/33625823?u=67f7f69f368b8063509c6eb46f58526cbadf7a49&v=4";
export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";
export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_large.jpg";


export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_KEY
    }
  };


export const SUPPORTED_LANGUAGES = [
  {
    identifier: "en",
    name: "English"
  },
  {
    identifier: "hi",
    name: "Hindi"
  },
  {
    identifier: "es",
    name: "Spanish"
  }
]


export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;