
import Cookies from 'js-cookie';

import qs from 'qs';

const BASEAPI = 'http://alunos.b7web.com.br:501';

const apiFetchPost = async (endpoint, body) => {

    if(!body.token){
        let token = Cookies.get('token');

        if(token){
           token.body = token;
        }
    }

    const res = await fetch(BASEAPI + endpoint, {
       method: 'POST',
       headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json'
       },
       body:JSON.stringify(body)
    });

    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}



const apiFetchGet = async (endpoint, body = []) => {

    if(!body.token){
        let token = Cookies.get('token');

        if(token){
           token.body = token;
        }
    }

    const res = await fetch(`${BASEAPI+endpoint}?${qs.stringify(body)}`);

    const json = await res.json();

    if(json.notallowed){
        window.location.href = '/signin';
        return;
    }

    return json;
}

const LojaAPI = {

    login: async (email, password) => {
        //Fazer consulta ao Web SERVICE
       const json = await apiFetchPost(
           '/user/signin',
           {email, password}
       );
       return json;
    }
};

export default () => LojaAPI;