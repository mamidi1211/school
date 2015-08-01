/**
 * ClassesController
 *
 * @description :: Server-side logic for managing classes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
  // find:function(request, response){
  // 	// camelCase
  // 	//className	
  // 	var className=request.query.clas;
  //        sails.log("Done");
  //        Class.find({name: className}).exec(function(error, classes){
  //                if(error){
  //                  return response.serverError();
  //                }
  //              else{
  //                response.view("class/classview", {name:classes[0].age, inserted: undefined})
  //            }
  //            });
  // },
  insert: function(request, response) {
    var className = request.body.classname;
    var classStrength = request.body.strength;
    sails.log(className);
    sails.log(classStrength);
    Class.create({
      name: className,
      strength: classStrength
    }).exec(function(error, classes) {
      if (error) {
        return response.serverError();
      } else {
        response.view('class/classview', {
          name: "Recorded",
          recorded: classes
        });
      }
    });
  },
  edit: function(request, response) {
    console.log("##", request.params.all());
    var classid = request.params.id;
    // var sname=request.body.name;
    // var sage=request.body.age;
    // sails.log(id)
    console.log(classid);
    Class.findOne({
      id: classid
    }).exec(function(error, classes) {
      if (error) {
        return response.serverError();
      } else {
        // Student.findOne({id: id})
        console.log("##", classes);
        response.view('class/classeditview', {
          name: "Edited",
          edited: classes
        });
      }
    });
  },
  update: function(request, response) {
    var classid = request.body.id;
    var className = request.body.classname;
    var classStrength = request.body.strength;
    sails.log(className);
    Class.update({
      id: classid
    }, {
      name: className,
      strength: classStrength
    }).exec(function(error, classes) {
      if (error) {
        return response.serverError();
      } else {
        response.view('class/classview', {
          name: "Recorded",
          recorded: classes
        });
      }
    });
  },
  find: function(request, response) {
    Class.find().exec(function(error, classes) {
      if (error) {
        return response.serverError();
      } else {
        return response.view('class/classlistview', {
          name: "Getting All Records",
          recorded: classes
        });
      }
    });
  },
  findOne: function(request, response) {
    var classid = request.params.id;
    sails.log(classid);
    Class.findOne({
      id: classid
    }).exec(function(error, classes) {
      if (error) {
        return response.serverError();
      } else {
        return response.view('class/classindividualview', {
          name: "Getting a record",
          recorded: classes
        });
      }
    });
  }
};