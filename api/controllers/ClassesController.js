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
		var className=request.query.clas;
        
        sails.log("Done");

        Classes.find({name: className}).exec(function(error, classes){
                if(error){
                  return response.serverError();
                }
              else{
                response.view("classview", {name:classes[0].age, inserted: undefined})
            }
            });
	},

	insert:function(request,response){

	var className=request.body.number;
	var classStrength=request.body.strength;
	sails.log(className);
	sails.log(classStrength);
	Classes.create({name:className,strength:classStrength}).exec(function(error, classes){
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
	 var classid=request.params.all().id;
	// var sname=request.body.name;
	// var sage=request.body.age;
	// sails.log(id)
	console.log(classid);
	
	Classes.findOne({id:classid}).exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{

			// Student.findOne({id: id})
			console.log("##", classes);
			response.view('classeditview',{name : "Edited", edited: classes});
		}
	});
},	

update:function(request,response){
	var classid=request.body.id;
	var className=request.body.className;
	var classStrength=request.body.classStrength;

	Classes.update({id:classid},{name:className,strength:classStrength}).exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{
			response.view('classview',{name : "Recorded", recorded: classes});
		}
	});
},


viewAll:function(request,response){


	Classes.find().exec(function(error, classes){
		if(error){
			return response.serverError();
		}
		else{
			return response.view('classlistview',{name : "Getting All Records", recorded: classes});
		}

	});
},

view:function(request,response){
    var classid=request.query.id;
    sails.log(classid);
	Classes.findOne({id: classid}).exec(function(error, classes){
        if(error){
        	return response.serverError();
        }
        else{
        	return response.view('classindividualview',{name : "Getting a record", recorded: classes});
        }
	});
}




};

