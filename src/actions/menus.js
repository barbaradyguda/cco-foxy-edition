import axios from 'axios';

export function loadMenu()
{
  return function(dispatch){
    axios.get('http://systemcallcenter.pl/wp-json/wp-api-menus/v2/menus/23')
    .then(function (response) {
      dispatch({ type:"LOAD_MENU", payload: response.data})



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

{/*
function onClik ()
{
    if (id=71)
    { loadPage


    }


*/}
