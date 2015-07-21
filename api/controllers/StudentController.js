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

   var studentName=request.query.student;
        
        sails.log("Done");

        Student.find({name: studentName}).exec(function(error, students){
                if(error){
                  return response.serverError();
                }
              else{
                response.view("myview", {name:students[0].age, inserted: undefined})
            }
            });
    }, 

insert:function(request,response){

	var studentName=request.body.firstname;
	var studentAge=request.body.age;
	Student.create({name:studentName,age:studentAge}).exec(function(error, students){
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
	 var studentid=request.params.all().id;
	// var sname=request.body.name;
	// var sage=request.body.age;
	// sails.log(id)
	console.log(studentid);
	
	Student.findOne({id:studentid}).exec(function(error, student){
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
	var studentid=request.body.id;
	var studentName=request.body.fname;
	var studentAge=request.body.age;

	Student.update({id:studentid},{name:studentName,age:studentAge}).exec(function(error, students){
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
    var studentid=request.query.id;
    sails.log(studentid);
	Student.findOne({id: studentid}).exec(function(error, student){
        if(error){
        	return response.serverError();
        }
        else{
        	return response.view('individualview',{name : "Getting a record", recorded: student});
        }
	});
}

};

