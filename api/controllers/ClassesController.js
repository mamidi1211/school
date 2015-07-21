/**
 * ClassesController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	find:function(request, response){
		// camelCase
		//className	
		var cname=request.query.clas;
        
        sails.log("Done");

        Classes.find({name: sname}).exec(function(error, classes){
                if(error){
                  return response.serverError();
                }
              else{
                response.view("classview", {name:classes[0].age, inserted: undefined})
            }
            });
	},

	insert:function(request,response){

	var cname=request.body.number;
	var cstrength=request.body.strength;
	Classes.create({name:cname,strength:cstrength}).exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{
			response.view('classview',{name : "Recorded", recorded: classes});
		}
	});

	
},


edit:function(request,response){
	console.log("##",request.params.all());
	 var cid=request.params.all().id;
	// var sname=request.body.name;
	// var sage=request.body.age;
	// sails.log(id)
	console.log(cid);
	
	Classes.findOne({id:cid}).exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{

			// Student.findOne({id: id})
			console.log("##", student);
			response.view('editclassview',{name : "Edited", edited: student});
		}
	});
},	

update:function(request,response){
	var cid=request.body.id;
	var cname=request.body.cname;
	var sstrength=request.body.strength;

	Class.update({id:cid},{name:cname,strength:sstrength}).exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{
			response.view('classview',{name : "Recorded", recorded: classes});
		}
	});
},


viewAll:function(request,response){


	Student.find().exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{
			return response.view('classlistView',{name : "Getting All Records", recorded: classes});
		}

	});
},

view:function(request,response){
    var abc=request.query.id;
    sails.log(abc);
	Student.findOne({id: abc}).exec(function(error, classes){
        if(error){
        	return response.serverError();
        }
        else{
        	return response.view('classindividualview',{name : "Getting a record", recorded: classes});
        }
	});
}




};

