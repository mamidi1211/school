/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/student/': {
    view: 'myview'
  },
  '/class/': {
    view: 'classview'
  },
  /*
  /students/
  get /students/  = viewAll   ?name=dasdfdsa&age=ewrwer
  post /students/ = insert
  get /students/:id = view
  get /students/:id/edit = edit
  post /student/:id = update
  delete /student/:id = delete

  */
  'get /student/find': 'StudentController.find',
  'post /student/insert': 'StudentController.insert',
  'get /student/viewAll': 'StudentController.viewAll',
  'get /student/view': 'StudentController.view',
  'post /student/update': 'StudentController.update',
  'get /student/edit/:id': 'StudentController.edit',



  'get /class/find': 'ClassController.find',
  'post /class/insert': 'ClassController.insert',
  'get /class/viewAll': 'ClassController.viewAll',
  'get /class/view': 'ClassController.view',
  'post /class/update': 'ClassController.update',
  'get /student/edit/:id': 'ClassController.edit',



  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};

