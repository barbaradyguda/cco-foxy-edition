import axios from 'axios';

export function loadCategory(id)
{
  return function(dispatch){
    axios.get('http://systemcallcenter.pl/wp-json/wp/v2/posts/',{ params: {categories:id } } )
    .then(function (response) {
      dispatch({ type:"LOAD_CATEGORY", payload: response.data})


    })
    .catch(function (error) {
      console.log(error);
    })


}
}
