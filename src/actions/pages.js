import axios from 'axios';

export function loadPage(id)
{
  return function(dispatch){
    axios.get('http://systemcallcenter.pl/wp-json/wp/v2/pages/'+id)
    .then(function (response) {
      dispatch({ type:"LOAD_PAGE", payload: response.data})


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })

  //siegnij do wordpresa w handleLocationChange
  //wez numer  77
//zawartośc posta umiesc we wlasciwosci dat
}
}
