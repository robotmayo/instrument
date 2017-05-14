-- users, articles, images, comments, tags

CREATE TABLE users(
    id serial,
    username varchar(32),
    name varchar(256),
    bio varchar(300),
    email varchar(128),
    password varchar(128),
    created_on timestamp default now(),
    updated_on timestamp
);

CREATE TABLE thing(
    id varchar(12),
    title varchar(128),
    slug varchar(256),
    author int,
    created_on timestamp,
    updated_on timestamp,
    was_edited boolean default false,
    type varchar(12), -- article, response
    parent int
);

CREATE TABLE images(
    id varchar(32),
    location varchar(256),
    created_on timestamp default now()
);

CREATE TABLE tags(
    id serial,
    name varchar(20),
    created_on timestamp
);

CREATE TABLE article_tags(
    article_id varchar(12),
    tag_id int
);
