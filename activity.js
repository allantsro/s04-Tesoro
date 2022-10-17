{
        "name" : "HTML Basics",
	"price" : 20000,
	"isActive" : true,
	"instructor" : "Sir Alvin"
}
{
	"name" : "CSS 101 + Flexbox",
	"price" : 21000,
	"isActive" : true,
	"instructor" : "Sir Alvin"
}
{
	"name" : "Javascript 101",
	"price" : 32000,
	"isActive" : true,
	"instuctor" : "Ma'am Tine"
}
{
	"name" : "Git 101, IDE and CLI",
	"price" : 19000,
	"isActive" : false,
	"instuctor" : "Ma'am Tine"
}
{
	"name" : "React.Js 101",
	"price" : 25000,
	"isActive" : true,
	"instructor" : "Ma'am Miah"

}

//----------------------------------------------------------------------
//Find courses whose instructor is "Sir Alvin" and is priced greater than or equal to 20000
		//-show only its name and price

db.getCollection('courses').find({$and:[
    {"instructor":{$eq: "Sir Alvin"}},
    {"price":{$gte:20000}}
    ]}, {_id:0,isActive:0,instructor:0} )
//---------------------------------------------------------------------
//Find courses whose instructor is "Ma'am Tine" and is inactive.
		//-show only its name and price

db.getCollection('courses').find({$and:[
    {"instructor":{$eq: "Ma'am Tine"}},
    {"isActive":{$eq:false}}
    ]}, {_id:0,isActive:0,instructor:0} )
//---------------------------------------------------------------------
//Find courses with letter 'r' in its name and has a price lower than or equal to 25000

db.getCollection('courses').find({$and:[
    {"name":{$regex: "r", $options: "$i"}},
    {"price":{$lte:25000}}
    ]})
//---------------------------------------------------------------------
//Update all courses with price less than 21000 to inactive.

db.getCollection('courses').updateMany(
  {"price": {$lt: 21000 }},
  {$set: {"isActive": false}
  })
//---------------------------------------------------------------------
//Delete all courses with price greater than or equal to 25000.

db.getCollection('courses').deleteMany(
  {"price": {$gte: 25000 }
  })
