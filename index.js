function validate()
{
var username = document.getElementById("Uid").value;
var password = document.getElementById("Pwd").value;
  if(username=="admin" && password=="user")
    {
      alert("login successfully");
      return false;
    }
  else
    {
      alert("login failed");
    }
  
  
}