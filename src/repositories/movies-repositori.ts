import connectionDb from "../config/database.js";

async function create({ title, platform, genre, status }) {
  await connectionDb.query(
    `
        INSERT INTO movies (title, platform, genre, status)
        VALUES ($1, $2, $3, $4)
    `,
    [title, platform, genre, status]
  );
}

async function read() {
  await connectionDb.query(
    `
        SELECT * FROM movies
    `
  );
}

export default {
  create,
  read,
};
