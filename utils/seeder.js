const Datastore = require('nedb') // set up a temporary (in memory) database

// read in developers data file
const developerData = require('../data/developers.json') 

// read in section data file
const sectionsData = require('../data/sections.json');

// inject Express app to configure it - EVERYTHING in through argument list

module.exports = (app) => {
  const db = {} // empty object to hold all collections

  /*console.log('START data seeder.')

  db.developers = new Datastore() // new object property
  db.developers.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.developers.insert(developerData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.developers = db.developers.find(developerData)
  console.log(`${app.locals.developers.query.length} developers seeded`)

  console.log('END Data Seeder. Sample data read and verified.')*/

  // read in constructor data file

  const instructorData = require('../data/instructors.json')

  console.log('START data seeder.')

  db.instructors = new Datastore() // new object property
  db.instructors.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.instructors.insert(instructorData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.instructors = db.instructors.find(instructorData)
  console.log(`${app.locals.instructors.query.length} instructors seeded`)

  console.log('END Data Seeder. Sample data read and verified.')

  // to add student data 

  const studentData = require('../data/students.json')

  console.log('START data seeder.')

  db.students = new Datastore() // new object property
  db.students.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.students.insert(studentData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.students = db.students.find(studentData)
  console.log(`${app.locals.students.query.length} students seeded`)

  console.log('END Data Seeder. Student data read and verified.')


  const courseData = require('../data/course.json')

  console.log('START data seeder.')

  db.course = new Datastore() // new object property
  db.course.loadDatabase() // call the loadDatabase method

  // insert the sample data into our datastore
  db.course.insert(courseData)

  // initialize app.locals (these objects are available to the controllers)
  app.locals.course = db.course.find(courseData)
  console.log(`${app.locals.students.course.length} students seeded`)

  console.log('END Data Seeder. Student data read and verified.')

  //add section sample data to database --------------------------------------------

  console.log('START data seeder for sections.')

  db.sections = new Datastore() // create new table named sections
  db.sections.loadDatabase() // call the loadDatabase method

  // insert the sample data for sections into our new table
  db.sections.insert(sectionsData)

  // initialize app.locals
  app.locals.sections = db.sections.find(sectionsData)
  console.log(`${app.locals.sections.query.length} sections seeded`)

  console.log('END Data Seeder. Sample data for sections read and verified.')
}
