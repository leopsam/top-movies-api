import pg from "pg";

const { Pool } = pg;

const connectionDb = new Pool({
  connectionString: "postgres://postgres:28828312@localhost:5432/topmovies",
});

export default connectionDb;
