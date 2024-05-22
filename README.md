# Express JS JSON server with drizzle orm and Postgres(Supabase)
Our project is a robust Node.js Express REST API that allows users to perform all CRUD operations on posts. We have seamlessly integrated PostgreSQL database using Drizzle ORM for efficient data management. The API enables users to create, read, update, and delete posts, each containing a title and content field. 
Additionally, we have implemented user authentication and access control to ensure secure interactions with the API.
 Join us as we revolutionize the way posts are managed and accessed in the digital world.

## Install express and setup the routes

## install drizzle orm
``` npm i drizzle-orm  postgres```

install drizzle-kit
``` npm i -D drizzle-kit ```

ADD DB url in .env file

[Refer to this and configure](https://orm.drizzle.team/learn/tutorials/drizzle-with-supabase)

Generate migrations
``` npx drizzle-kit generate ```

Add migrate
``` npx drizzle-kit migrate ```

Push changes to db
``` npx drizzle-kit push ```


## Tools used
[gitignore generator](https://www.toptal.com/developers/gitignore)


## Old repo for reference
[express-mongoose-mongodb](https://github.com/jishnukoottala/task-manager-api/blob/master/src/routes/task.js)