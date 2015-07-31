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

// find:function(request,response){    

//    var studentName=request.query.student;
        
//         sails.log("Done");

//         Student.find({name: studentName}).exec(function(error, students){
//                 if(error){
//                   return response.serverError();
//                 }
//               else{
//                 response.view("student/myview", {name:students[0].age, inserted: undefined})
//             }
//             });
//     }, 

insert:function(request,response){
	var studentName=request.body.firstname;
	var studentAge=request.body.age;
	var className=request.body.classname;
	Student.create({name:studentName,age:studentAge,classname:className}).exec(function(error, students){
		if(error){
			return response.serverError();
		}
		else{
			response.view('student/myview',{name : "Recorded", recorded: students});
		}
	});
},


edit:function(request,response){
	console.log("##",request.params.all());
	 var studentid=request.params.id;
	// var sname=request.body.name;
	// var sage=request.body.age;
	// sails.log(id)
	//console.log(studentid);
	
	Student.findOne({id:studentid}).exec(function(error, student){
		if(error){
			return response.serverError();
		}
		else{

			// Student.findOne({id: id})
			console.log("##", student);
			response.view('student/editview',{name : "Edited", edited: student});
		}
	});
},	

update:function(request,response){	
	var studentid=request.params.all().id;
	var studentName=request.body.name;
	var studentAge=request.body.age;
	var className=request.body.classname;
	sails.log.verbose("!!!!!!", studentName , studentAge, studentid, "$$$");
	//Student.findOne({id: studentid}).exec(sails.log);
	Student.update({id :studentid}, {name:studentName,age:studentAge,classname:className}).exec(function(error, student){	
		if(error){
			//console.log(error);	
			return response.serverError();
		}
		else{
			console.log("####",student);
			response.view('student/myview',{name : "Recordsorded", recorded: student});
		}
	});

	// if(request.isAjax == true)
	// {
	// 	request.view('student/myview',{name : "Recorded"});
	// }	
	// else{
	// 	request.view('student/myview',{name : "Recorded"});	
	// }
	
},


find:function(request,response){

    //sails.log('hello');
	Student.find().exec(function(error, students){
		if(error){
			return response.serverError();
		}
		else{
			return response.view('student/listView',{name : "Getting All Records", recorded: students});
		}

	});
},

findOne:function(request,response){
    var studentid=request.params.id;
    sails.log(studentid);
	Student.findOne({id: studentid}).exec(function(error, student){
        if(error){
        	return response.serverError();
        }
        else{
        	return response.view('student/individualview',{name : "Getting a record", recorded: student});
        }
	});
},

populate:function(request,response)
{
	var data=request.params.id;
	console.log(data+"   "+JSON.stringify(request.params.all()));

	Student.findOne({id: data}).populate('standard').exec(function(error, assoc)
	{
		if(error)
		{
			return response.serverError();
		}
		else
		{
			sails.log("##",assoc);
			Class.find().exec(function(error, clas)
			{
				if(error)
				{
					return response.serverError();
				}
				else
				{
					return response.view('associate',{ name : "Association", recorded1: clas, recorded:assoc });
				}	
			});

		}
	});
}


};

