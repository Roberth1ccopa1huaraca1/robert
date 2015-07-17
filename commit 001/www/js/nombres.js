var NOMBRES=(function(){
 var my={};
    //////
    my.cargarNombres=function(){
    var param={};
        param.ciclo='I';
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/obtenerNombres",
            data:"data="+JSON.stringify(param),
            dataType:'text',
        
        //
            success:function(data){
            var data=JSON.parse(data);
                //
                for(var i=0;i<data.data.length;i++){
                    $("#idNombres").append('<li><a href="#INFORMACION" idNombre="'+data.data[i].id+'">'+data.data[i].usuario+'</a></li>');        
                
};
            },
            Error:function(data){
            console.log("error"+data);
            }
        
        });
    
    };
    
    //////
    
    return my;
}());