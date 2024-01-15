
# Recipe-App

This is a basic recipe app where a user can create recipe, update a recipe and delete a recipe.


## Run Locally

Clone the project

```bash
  git clone https://github.com/AnisurRahman06046/recipe_server.git
```

Go to the project directory

`Create a .env file in the root directory and paste all the credentials from .env.example`

### Install dependencies

```bash
  yarn 
```

### Start the server

```bash
  yarn dev for development
```
```bash
  tsc - to build the project
  yarn start - to run the project
```
### For database migration
```bash
  npx prisma migrate dev --name init 
```


## Note: Since the db has been hosted in Supabase using free plan so it sometimes takes time to fetch data.
## Hosted Database Url
`postgresql://postgres:oVo9E4KWikZO5KOo@db.akxghdyggbwvnctmctkn.supabase.co:5432/postgres
`



# API
### Create Recipe (POST) : http://localhost:5000/api/v1/recipe/create-recipe
### Recipe Lists (GET) : http://localhost:5000/api/v1/recipe/recipe-list
### Single recipe (GET):http://localhost:5000/api/v1/recipe/single-recipe/${ud}
### Update recipe (PATCH) : http://localhost:5000/api/v1/recipe/edit-recipe/${id}
### Delete recipe (DELETE): http://localhost:5000/api/v1/recipe/remove-recipe/${id}

## Tech Stack

**Client:** NextJs, react-select,TailwindCSS

**Server:** Node, Express, Typescript, Postgres, Prisma


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

```
NODE_ENV=development
PORT=5000
DATABASE_URL="postgresql://postgres:oVo9E4KWikZO5KOo@db.akxghdyggbwvnctmctkn.supabase.co:5432/postgres"

# local database url
# DATABASE_URL="postgresql://postgres:anis1234@localhost:5432/recipe?schema=public"
