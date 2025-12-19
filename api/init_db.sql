DROP TABLE IF EXISTS activity;
DROP TABLE IF EXISTS template;
DROP TABLE IF EXISTS user;

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

-------------------------------------------------------
-- INSERT USERS (5 USERS)
-------------------------------------------------------

INSERT INTO user (id, age, first_name, last_name, weight) VALUES
(1, 28, 'Alice', 'Walker', 140),
(2, 32, 'Brian', 'Smith', 185),
(3, 25, 'Carla', 'Johnson', 150),
(4, 40, 'David', 'Miller', 200),
(5, 22, 'Elena', 'Davis', 125),
(6, 32, 'Alex', 'Morgan', 175);

-------------------------------------------------------
-- TEMPLATE LIST (10 PER USER → 100 TOTAL)
-- Categories: 
-- "Personal Development", "Home & Life Management",
-- "Work & Productivity", "Health & Wellness",
-- "Lifestyle", "Hobbies", "Social"
-------------------------------------------------------

INSERT INTO template (id, category, label, user_id) VALUES
-- USER 1 TEMPLATES (1–10)
(1,'Health & Wellness','Running',1),
(2,'Health & Wellness','Barbell Squat',1),
(3,'Home & Life Management','Clean Room',1),
(4,'Home & Life Management','Cook Dinner',1),
(5,'Personal Development','Meditation',1),
(6,'Personal Development','Journaling',1),
(7,'Work & Productivity','Email Cleanup',1),
(8,'Lifestyle','Grocery Shopping',1),
(9,'Hobbies','Painting',1),
(10,'Social','Call a Friend',1),

-- USER 2 TEMPLATES (11–20)
(11,'Health & Wellness','Swimming',2),
(12,'Health & Wellness','Cycling',2),
(13,'Home & Life Management','Laundry',2),
(14,'Home & Life Management','Dishes',2),
(15,'Personal Development','Read Book',2),
(16,'Work & Productivity','Project Planning',2),
(17,'Lifestyle','Meal Prep',2),
(18,'Hobbies','Guitar Practice',2),
(19,'Social','Meet for Coffee',2),
(20,'Lifestyle','Clothes Shopping',2),

-- USER 3 TEMPLATES (21–30)
(21,'Health & Wellness','Yoga',3),
(22,'Health & Wellness','Walking',3),
(23,'Home & Life Management','Vacuum House',3),
(24,'Work & Productivity','Organize Files',3),
(25,'Personal Development','Study Course',3),
(26,'Personal Development','Goal Review',3),
(27,'Hobbies','Photography',3),
(28,'Lifestyle','Budget Review',3),
(29,'Home & Life Management','Car Cleanup',3),
(30,'Social','Dinner with Family',3),

-- USER 4 TEMPLATES (31–40)
(31,'Health & Wellness','Stretching',4),
(32,'Health & Wellness','Weight Lifting',4),
(33,'Lifestyle','Walk Dog',4),
(34,'Home & Life Management','Yard Work',4),
(35,'Personal Development','Skill Practice',4),
(36,'Work & Productivity','Task Review',4),
(37,'Hobbies','Gardening',4),
(38,'Lifestyle','Errands',4),
(39,'Social','Visit Parents',4),
(40,'Personal Development','Time Blocking',4),

-- USER 5 TEMPLATES (41–50)
(41,'Health & Wellness','Pilates',5),
(42,'Health & Wellness','Treadmill Jog',5),
(43,'Personal Development','Language Learning',5),
(44,'Home & Life Management','Organize Closet',5),
(45,'Lifestyle','Coffee Break',5),
(46,'Hobbies','Knitting',5),
(47,'Social','Chat with Friend',5),
(48,'Work & Productivity','Weekly Summary',5),
(49,'Home & Life Management','Pay Bills',5),
(50,'Personal Development','Read Non-Fiction',5);

INSERT INTO template (id, category, label, user_id)
VALUES
(51, 'Health & Wellness', 'Upper Body Workout', 6),
(52, 'Health & Wellness', 'Lower Body Workout', 6);

INSERT INTO activity (id, user_id, label, category, duration, date_time, is_completed, description, note) VALUES
(1,1,'Running','Health & Wellness',45,'2026-01-03T07:30:00',false,'Morning run','Felt good'),
(2,1,'Barbell Squat','Health & Wellness',60,'2026-01-05T09:00:00',false,'Leg day warmup',NULL),
(3,1,'Clean Room','Home & Life Management',20,'2026-01-07T18:00:00',false,'Weekly cleanup',NULL),
(4,1,'Cook Dinner','Home & Life Management',40,'2026-01-09T17:30:00',false,'Cooking something simple',NULL),
(5,1,'Meditation','Personal Development',15,'2026-01-10T06:45:00',false,'Meditation session','Very calming'),
(6,1,'Journaling','Personal Development',10,'2026-01-11T21:00:00',false,'Wrote 1 page',NULL),
(7,1,'Email Cleanup','Work & Productivity',30,'2026-01-13T14:00:00',false,'Cleaned out inbox',NULL),
(8,1,'Grocery Shopping','Lifestyle',35,'2026-02-01T08:00:00',false,'Shopping before work','Forgot milk'),
(9,1,'Painting','Hobbies',50,'2026-02-02T19:00:00',false,'Painted landscape','Fun session'),
(10,1,'Call a Friend','Social',25,'2026-02-04T20:15:00',false,'Called college friend',NULL),

(11,2,'Swimming','Health & Wellness',55,'2026-01-04T08:00:00',false,'Long swim',NULL),
(12,2,'Cycling','Health & Wellness',70,'2026-01-06T09:00:00',false,'Road cycling',NULL),
(13,2,'Laundry','Home & Life Management',25,'2026-01-07T17:00:00',false,'Laundry day',NULL),
(14,2,'Dishes','Home & Life Management',10,'2026-01-08T20:00:00',false,'Quick dish cleanup',NULL),
(15,2,'Read Book','Personal Development',30,'2026-01-09T21:30:00',false,'Read 20 pages','Interesting chapter'),
(16,2,'Project Planning','Work & Productivity',45,'2026-01-10T10:00:00',false,'High-level outline',NULL),
(17,2,'Meal Prep','Lifestyle',40,'2026-01-11T16:00:00',false,'Prepped lunches',NULL),
(18,2,'Guitar Practice','Hobbies',30,'2026-01-13T19:00:00',false,'Chord practice',NULL),
(19,2,'Meet for Coffee','Social',60,'2026-01-15T15:00:00',false,'Met coworker',NULL),
(20,2,'Clothes Shopping','Lifestyle',35,'2026-01-17T14:00:00',false,'New jacket',NULL),

(21,3,'Yoga','Health & Wellness',30,'2026-01-03T09:00:00',false,'Morning yoga',NULL),
(22,3,'Walking','Health & Wellness',40,'2026-01-04T17:00:00',false,'Scenic walk',NULL),
(23,3,'Vacuum House','Home & Life Management',18,'2026-01-06T16:00:00',false,'Vacuuming floors',NULL),
(24,3,'Organize Files','Work & Productivity',25,'2026-01-07T10:00:00',false,'Sorted downloads',NULL),
(25,3,'Study Course','Personal Development',60,'2026-01-08T19:00:00',false,'Study session',NULL),
(26,3,'Goal Review','Personal Development',15,'2026-01-09T21:00:00',false,'Reviewed goals',NULL),
(27,3,'Photography','Hobbies',45,'2026-01-10T14:00:00',false,'Took photos outside',NULL),
(28,3,'Budget Review','Lifestyle',20,'2026-01-12T18:00:00',false,'Budget check',NULL),
(29,3,'Car Cleanup','Home & Life Management',30,'2026-01-13T11:00:00',false,'Cleaned car interior',NULL),
(30,3,'Dinner with Family','Social',90,'2026-01-14T19:00:00',false,'Dinner with mom',NULL),

(31,4,'Morning Run','Health & Wellness',30,'2026-01-05T07:15:00',false,'Daily cardio run',''),
(32,4,'Meditation','Personal Development',15,'2026-01-06T06:45:00',false,'Morning mindfulness session',''),
(33,4,'Clean Room','Home & Life Management',25,'2026-01-06T18:20:00',true,'Evening clean-up',''),
(34,4,'Cook Dinner','Home & Life Management',40,'2026-01-07T19:00:00',false,'',''),
(35,4,'Strength Training','Health & Wellness',50,'2026-01-08T08:30:00',false,'Leg day session',''),
(36,4,'Journaling','Personal Development',20,'2026-01-09T20:45:00',false,'','Wrote about weekly goals'),
(37,4,'Swimming','Health & Wellness',45,'2026-01-10T10:00:00',false,'',''),
(38,4,'Meal Prep','Home & Life Management',60,'2026-01-11T14:00:00',true,'',''),
(39,4,'Reading','Personal Development',30,'2026-01-12T21:00:00',false,'',''),
(40,4,'Yoga Session','Health & Wellness',35,'2026-01-13T07:00:00',false,'',''),

(41,5,'Pilates Session','Health & Wellness',40,'2026-02-01T07:15:00',false,'',''),
(42,5,'Language Learning','Personal Development',25,'2026-02-01T18:40:00',false,'',''),
(43,5,'Organize Closet','Home & Life Management',35,'2026-02-02T19:10:00',true,'',''),
(44,5,'Coffee Break','Lifestyle',10,'2026-02-02T15:20:00',false,'',''),
(45,5,'Treadmill Jog','Health & Wellness',30,'2026-02-03T08:00:00',false,'',''),
(46,5,'Weekly Summary','Work & Productivity',20,'2026-02-03T17:05:00',false,'',''),
(47,5,'Knitting','Hobbies',45,'2026-02-04T20:30:00',false,'',''),
(48,5,'Pay Bills','Home & Life Management',15,'2026-02-04T12:00:00',true,'',''),
(49,5,'Read Non-Fiction','Personal Development',30,'2026-02-04T21:15:00',false,'',''),
(50,5,'Pilates Session','Health & Wellness',50,'2026-02-05T07:30:00',false,'','');

INSERT INTO activity
(id, category, description, duration, label, note, date_time, is_completed, user_id)
VALUES
-- JANUARY
(51, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-05T14:00:00Z', false, 6),
(52, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-06T14:00:00Z', false, 6),
(53, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-08T14:00:00Z', false, 6),
(54, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-09T14:00:00Z', false, 6),

(55, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-12T14:00:00Z', false, 6),
(56, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-13T14:00:00Z', false, 6),
(57, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-15T14:00:00Z', false, 6),
(58, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-16T14:00:00Z', false, 6),

(59, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-19T14:00:00Z', false, 6),
(60, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-20T14:00:00Z', false, 6),
(61, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-22T14:00:00Z', false, 6),
(62, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-23T14:00:00Z', false, 6),

(63, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-26T14:00:00Z', false, 6),
(64, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-27T14:00:00Z', false, 6),
(65, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-01-29T14:00:00Z', false, 6),
(66, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-01-30T14:00:00Z', false, 6),

-- FEBRUARY
(67, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-02-02T14:00:00Z', false, 6),
(68, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-02-03T14:00:00Z', false, 6),
(69, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-02-05T14:00:00Z', false, 6),
(70, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-02-06T14:00:00Z', false, 6),

(71, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-02-09T14:00:00Z', false, 6),
(72, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-02-10T14:00:00Z', false, 6),
(73, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-02-12T14:00:00Z', false, 6),
(74, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-02-13T14:00:00Z', false, 6),

(75, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-02-16T14:00:00Z', false, 6),
(76, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-02-17T14:00:00Z', false, 6),
(77, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-02-19T14:00:00Z', false, 6),
(78, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-02-20T14:00:00Z', false, 6),

-- MARCH
(79, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-03-02T14:00:00Z', false, 6),
(80, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-03-03T14:00:00Z', false, 6),
(81, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-03-05T14:00:00Z', false, 6),
(82, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-03-06T14:00:00Z', false, 6),

(83, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-03-09T14:00:00Z', false, 6),
(84, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-03-10T14:00:00Z', false, 6),
(85, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-03-12T14:00:00Z', false, 6),
(86, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-03-13T14:00:00Z', false, 6),

-- APRIL
(87, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-04-06T14:00:00Z', false, 6),
(88, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-04-07T14:00:00Z', false, 6),
(89, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-04-09T14:00:00Z', false, 6),
(90, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-04-10T14:00:00Z', false, 6),

(91, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-04-13T14:00:00Z', false, 6),
(92, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-04-14T14:00:00Z', false, 6),
(93, 'Health & Wellness', 'Upper body strength training', 60, 'Upper Body Workout', 'Chest, shoulders, arms', '2026-04-16T14:00:00Z', false, 6),
(94, 'Health & Wellness', 'Lower body strength training', 60, 'Lower Body Workout', 'Legs and glutes', '2026-04-17T14:00:00Z', false, 6);
