E-Commerce Api project in NodeJS

-System Requirements
    -NodeJs
    -MySQL
    -NPM

-Setting up the project
    -Clone the repository
    -Go inside the cloned folder from your terminal/cmd
    -Run `npm install`
    -Create a new file `.env` and then configure the following environment variables
        -PORT=3000
        -`npx sequelize init`
    
-Run the Project
    -Run `node server.js`

-Category Resource
    -GET `/ecom/api/v1/category`, get all categories,
    -POST `/ecom/api/v1/category`, create a category,    
    -PUT `/ecom/api/v1/category:id`, update a category,
    -DELETE `/ecom/api/v1/category:id`, delete a category,   
    -GET `/ecom/api/v1/category:id`, get the category,

##Associations
    -Every product must belong to a category
    -Every category must have many produts
    -So between product and categories we have setup a 1:n( one to many ) relation

##Seeding data in the database
    -```npx sequelize db:seed:all```