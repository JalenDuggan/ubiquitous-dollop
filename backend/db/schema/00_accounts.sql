DROP TABLE IF EXISTS users CASCADE;
CREATE TABLE accounts (
  account_id SERIAL PRIMARY KEY NOT NULL,
  first_name varchar(50) DEFAULT NULL,
  last_name varchar(50) DEFAULT NULL,
  email varchar(580) DEFAULT NULL,
  phone_num varchar(14) DEFAULT NULL,
  account_status tinyint(1) DEFAULT NULL,
  username varchar(32) DEFAULT NULL,
  hash_pass varchar(120) DEFAULT NULL
)