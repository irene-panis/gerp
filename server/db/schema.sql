CREATE TABLE IF NOT EXISTS Profile (
  id SERIAL PRIMARY KEY,
  username VARCHAR(16) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL, -- hashed passwords
  display_name VARCHAR(16),
  bio TEXT,
  location VARCHAR(255),
  fav_games INT[], -- referencing game ids
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  UNIQUE(username),
  UNIQUE (email)
);

CREATE TABLE IF NOT EXISTS Game (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  genre VARCHAR(100)[]
);

CREATE TABLE IF NOT EXISTS Rating (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  game_id INT NOT NULL,
  rating DECIMAL(2,1) NOT NULL, -- decimal type to allow values from 0.5 to 5
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES Profile(id),
  FOREIGN KEY (game_id) REFERENCES Game(id),
  UNIQUE(user_id, game_id), -- each user can rate a game only once
  CHECK (rating >= 0.5 AND rating <= 5.0) -- enforce rating range
);

CREATE TABLE IF NOT EXISTS Review (
  id SERIAL PRIMARY KEY,
  rating_id INT NOT NULL,
  content TEXT,
  FOREIGN KEY (rating_id) REFERENCES Rating(id)
);
