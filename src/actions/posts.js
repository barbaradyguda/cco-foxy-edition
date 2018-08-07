import axios from 'axios';

export function loadPost(id)
{
  return function(dispatch){
    axios.get('http://systemcallcenter.pl/wp-json/wp/v2/posts/'+id)
    .then(function (response) {
      dispatch({ type:"LOAD_POST", payload: response.data})


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
