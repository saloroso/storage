document.addEventListener('DOMContentLoaded',function(){
    PName();
   if(user!= "null" || user!="undefined")
              {
                document.getElementById("returnName").innerHTML = "Seja bem vindo " + localStorage.getItem('user',user);
              }
              else
              {
                  alert("Digite o seu nome para salvar");
              }
});
function PName()
{
       var user ;
       var returnName = document.getElementById("returnName");
      $(document).ready(function(){
      $("#user").keydown(function(e){
          if(e.which == 13)
          {
              user  = document.getElementById('user').value;
              returnName.innerHTML = "Seja bem vindo " + user + '.'+'<br>';
              console.log(user);
              localStorage.setItem('user',user);
          }

      });6
      });
}
