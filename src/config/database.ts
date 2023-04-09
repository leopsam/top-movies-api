import pg from "pg";

const { Pool } = pg;
const DATABASE_URL: string =
  "postgres://postgres:28828312@localhost:5432/topmovies";

const connectionDb = new Pool({
  connectionString: DATABASE_URL,
});

export default connectionDb;
