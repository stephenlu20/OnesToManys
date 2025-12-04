CREATE TABLE user (
    id integer,
    age integer not null,
    first_name varchar(255),
    last_name varchar(255),
    weight integer not null,
    primary key (id)
);
CREATE TABLE activity (
    id integer,
    category varchar(255),
    description varchar(255),
    duration integer not null,
    label varchar(255),
    note varchar(255),
    date_time varchar(255),
    is_completed boolean not null,
    user_id bigint not null,
    primary key (id)
);
CREATE TABLE template (
    id integer,
    category varchar(255),
    label varchar(255),
    user_id bigint not null,
    primary key (id)
);
