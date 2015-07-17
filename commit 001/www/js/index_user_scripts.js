(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
   $("body").append('<a id="irPageNOMBRES" href="#idPageNOMBRES"><a/>');
     //NOMBRES.cargarEnlaces();

        /* button  INGRESAR */
    $(document).on("click", "#irLogin", function(evt)
    {
        /* your code goes here */ 
        var Usuario=$("#idUsuario").val();
        var Password=$("#idPassw").val();
          var param={};
    param.user=Usuario;
    param.pass=Password;    
  $.ajax({  
     type:"POST",
      url:"http://192.168.56.1:9095/obtenerLogin",
      data:"data="+JSON.stringify(param),
      dataType:'text',
               success:function(data){
                var data=JSON.parse(data);
              
                
 if(data.status===1){
  
       // NOMBRES.cargarNombres();
  
        // NOMBRES.cargarNombres();
                 navigator.notification.confirm(
                data.message,  // message
                function(){
                    
                    $("#irPageNOMBRES").click();
                    
             
                },         // callback
                  'Mensaje',            // title
                'Aceptar' ); 
        };
                   
     
      },
        
        
      
            error:function(data){
            console.log("ERROR "+data)
            }
  });
        
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
