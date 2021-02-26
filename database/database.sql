CREATE USER api_admin WITH LOGIN PASSWORD 'mmm';
ALTER USER api_admin CREATEDB;
CREATE DATABASE ts_api;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE TABLE mentors (
	mentor_id uuid DEFAULT uuid_generate_v4(),
	first_name VARCHAR NOT NULL,
	last_name VARCHAR NOT NULL,
	email VARCHAR NOT NULL,
	PRIMARY KEY (mentor_id)
);

--Can be replaced by POST with JSON--
INSERT INTO mentors (
    first_name,
    last_name,
    email
)
VALUES
    (
        'John',
        'Smith',
        'john.smith@example.com'
    ),
    (
        'Jane',
        'Maclaren',
        'jane.maclaren@example.com'
    ),
    (
        'Alex',
        'Quintero',
        'alex.quintero@example.com'
    );
GRANT ALL PRIVILEGES ON DATABASE ts_admin TO api_admin;
GRANT SELECT ON mentors TO api_admin;
GRANT INSERT ON mentors TO api_admin;
GRANT DELETE ON mentors TO api_admin;
GRANT UPDATE ON mentors TO api_admin;