

export const isAuthenticated = async () => {

  var res = await fetch("http://localhost:5000/api/current_user", {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": true
    }
  })
  
  //authenticated = data.success;
  console.log(res);
  return true;
  
};
