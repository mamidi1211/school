/**
 * StudentController
 *
 * @description :: Server-side logic for managing students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
// find: function(request, response){

// 	// name = "sai";

// 	// return response.ok("working");

// 	//var name = request.query.name;	
// 	//http://localhost:1337/find?name=adit

// 	// return response.view("myview", {name: name});

// 	// Student.find({name: name }).exec(sails.log);
// 		//sails.log("working");
// 	// Student.find.exec(function(error, students){
// 	// 	if(error){
// 	// 		return response.serverError();
// 	// 	}
// 	// 	else{
// 	// 		response.view('myview', {name: students[0].name });	
// 	// 	}

// 	// });

//      Student.findOne({'id': request.params['id']}, function(error, student){

//      	response.view({student: student})
//      });


// },

find:function(request,response){    

   var sname=request.query.student;
        
        sails.log("Done");

        Student.find({name: sname}).exec(function(error, students){
                if(error){
                  return response.serverError();
                }
              else{
                response.view("myview", {name:students[0].age, inserted: undefined})
            }
            });
    }, 

insert:function(request,response){

	var sname=request.body.firstname;
	var sage=request.body.age;
	Student.create({name:sname,age:sage}).exec(function(error, students){
		if(error){
			return response.serverError();
		}
		else{
			response.view('myview',{name : "Recorded", recorded: students});
		}
	});
},


edit:function(request,response){
	console.log("##",request.params.all());
	 var sid=request.params.all().id;
	// var sname=request.body.name;
	// var sage=request.body.age;
	// sails.log(id)
	console.log(sid);
	
	Student.findOne({id:sid}).exec(function(error, student){
		if(error){
			return response.serverError();
		}
		else{

			// Student.findOne({id: id})
			console.log("##", student);
			response.view('editview',{name : "Edited", edited: student});
		}
	});
},	

update:function(request,response){
	var sid=request.body.id;
	var sname=request.body.fname;
	var sage=request.body.age;

	Student.update({id:sid},{name:sname,age:sage}).exec(function(error, students){
		if(error){
			return response.serverError();
		}
		else{
			response.view('myview',{name : "Recorded", recorded: students});
		}
	});
},


viewAll:function(request,response){


	Student.find().exec(function(error, students){
		if(error){
			return response.serverError();
		}
		else{
			return response.view('listView',{name : "Getting All Records", recorded: students});
		}

	});
},

view:function(request,response){
    var abc=request.query.id;
    sails.log(abc);
	Student.findOne({id: abc}).exec(function(error, student){
        if(error){
        	return response.serverError();
        }
        else{
        	return response.view('individualview',{name : "Getting a record", recorded: student});
        }
	});
}

};

