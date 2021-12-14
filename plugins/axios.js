export default function ({ $axios, redirect,store }) {
    $axios.onRequest(config => {
      //console.log(config)
      store.commit('setLoading',true);
  

    });
  
    $axios.onResponse(config => {
       store.commit('setLoading',false);
      
     
  
    });

    $axios.onError(error => {
      //console.log(error.message);
      store.commit('setLoading',false);
      store.commit('setErrorMessage',error.message);
      store.commit('setAlertDangerVisible',true);
     
  
  
    });

  }