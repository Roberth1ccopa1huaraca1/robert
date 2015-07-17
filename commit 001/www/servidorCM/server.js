var IPADDRESS="192.168.56.1";
var PORT=9095
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);

app.post('/obtenerLogin', function(req, res){	
	
    	var data=req.param('data');
    	data=JSON.parse(data);
    	//console.log(data);

    if(data.user === "jumanor" && data.pass ==="jumanor"){

		var user={}
    	user.id=1;
	    user.usuario=data.user;
		user.ciclo='X';

		var msn={};
		msn.data=user;	
		msn.status=1;
		msn.message=null;
	
   }
   else{

	   	var msn={};
		msn.data=null;	
		msn.status=0;
		msn.message="NO AUTENTICADO";
   }				
	
	res.json(msn);
	
});
app.post('/obtenerNombres', function(req, res){	

    	var data=req.param('data');
	data=JSON.parse(data);    	

	//console.log(data);

	var ciclo=null;	
	
	if(data.ciclo=="I"){
	  ciclo="I";
	}
	else if(data.ciclo=="II"){
	  ciclo="II";
	}	
	
    	var user={}
    	user.id=1;
    	user.usuario='jumanor1';
	user.ciclo=ciclo;
    
	var user1={}
    	user1.id=2;
    	user1.usuario='jumanor2';
	user1.ciclo=ciclo;
    	
	var user2={}
    	user2.id=3;
    	user2.usuario='jumanor3';
	user2.ciclo=ciclo;
    
	var users=[];
	users[0]=user;
	users[1]=user1;
	users[2]=user2;
	
	var msn={};
	msn.data=users;	
	msn.status=1;
	msn.message=null;
	
	res.json(msn);
	
});
app.post('/obtenerCursos', function(req, res){	

    	var data=req.param('data');
	data=JSON.parse(data);    	

	//console.log(data);

	var idAlumno=data.idAlumno;
	
	var cursos=[];
	for(var i=0;i<5;i++){

		var curso={};
    		curso.id=i;
    		curso.curso='CURSO'+i+'::'+idAlumno;		
		cursos[i]=curso;
	}	

	var msn={};
	msn.data=cursos;	
	msn.status=1;
	msn.message=null;
	
	res.json(msn);
	
});