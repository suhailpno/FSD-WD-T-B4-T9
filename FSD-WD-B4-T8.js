GUVI ZEN CLASS TASK - FSD-WD-B4-T9

---------------------------------------

Step 1: Database Design

Database Name: Zen_Class

Collections:

users - Stores information about users.
codekata - Stores information about users' problem-solving activities.
attendance - Tracks attendance of users.
topics - Stores information about the topics covered in classes.
tasks - Stores tasks given to users.
company_drives - Stores details about company placement drives.
mentors - Stores information about mentors and their mentees.

---------------------------------------

Step 2: Sample Data Insertion

Below is an example of inserting 10 sample documents for each collection.

1. Inserting sample data into users collection:

db.users.insertMany([
    { _id: 1, name: "Syed", email: "syed@gmail.com", batch: "FSD1" },
    { _id: 2, name: "Smith", email: "smith@yahoo.com", batch: "FSD2" },
    { _id: 3, name: "Prasanna", email: "prasanna@yahoo.com", batch: "FSD3" },
    { _id: 4, name: "Bob", email: "bob@yahoo.com", batch: "FSD4" },
    { _id: 5, name: "Charlie", email: "charlie@gmail.com", batch: "FSD5" },
    { _id: 6, name: "Kumar", email: "kumar@gmail.com", batch: "FSD6" },
    { _id: 7, name: "John", email: "john@gmail.com", batch: "FSD7" },
    { _id: 8, name: "Harris", email: "harris@gmail.com", batch: "FSD8" },
    { _id: 9, name: "Grace", email: "grace@gmail.com", batch: "FSD9" },
    { _id: 10, name: "Henry", email: "henry@gmail.com", batch: "FSD10" }
]);

2. Inserting sample data into codekata collection:

db.codekata.insertMany([
    { user_id: 1, problems_solved: 20 },
    { user_id: 2, problems_solved: 15 },
    { user_id: 3, problems_solved: 10 },
    { user_id: 4, problems_solved: 5 },
    { user_id: 5, problems_solved: 25 },
    { user_id: 6, problems_solved: 30 },
    { user_id: 7, problems_solved: 35 },
    { user_id: 8, problems_solved: 40 },
    { user_id: 9, problems_solved: 45 },
    { user_id: 10, problems_solved: 50 }
]);

3. Inserting sample data into attendance collection:

db.attendance.insertMany([
    { user_id: 1, date: ISODate("2024-10-15"), status: "Present" },
    { user_id: 2, date: ISODate("2024-10-16"), status: "Absent" },
    { user_id: 3, date: ISODate("2024-10-17"), status: "Present" },
    { user_id: 4, date: ISODate("2024-10-18"), status: "Absent" },
    { user_id: 5, date: ISODate("2024-10-19"), status: "Present" },
    { user_id: 6, date: ISODate("2024-10-20"), status: "Absent" },
    { user_id: 7, date: ISODate("2024-10-21"), status: "Present" },
    { user_id: 8, date: ISODate("2024-10-22"), status: "Present" },
    { user_id: 9, date: ISODate("2024-10-23"), status: "Absent" },
    { user_id: 10, date: ISODate("2024-10-24"), status: "Present" }
]);

4. Inserting sample data into topics collection:

db.topics.insertMany([
    { _id: 1, topic: "JavaScript Basics", date: ISODate("2024-10-01") },
    { _id: 2, topic: "HTML & CSS", date: ISODate("2024-10-05") },
    { _id: 3, topic: "React Introduction", date: ISODate("2024-10-10") },
    { _id: 4, topic: "Node.js", date: ISODate("2024-10-12") },
    { _id: 5, topic: "MongoDB Basics", date: ISODate("2024-10-15") },
    { _id: 6, topic: "Express.js", date: ISODate("2024-10-18") },
    { _id: 7, topic: "API Integration", date: ISODate("2024-10-20") },
    { _id: 8, topic: "Advanced JavaScript", date: ISODate("2024-10-22") },
    { _id: 9, topic: "Deployment", date: ISODate("2024-10-25") },
    { _id: 10, topic: "DevOps Basics", date: ISODate("2024-10-30") }
]);

5. Inserting sample data into tasks collection:

db.tasks.insertMany([
    { _id: 1, task: "Build a landing page", date: ISODate("2024-10-02"), user_id: 1 },
    { _id: 2, task: "Create a to-do app", date: ISODate("2024-10-06"), user_id: 2 },
    { _id: 3, task: "Weather API integration", date: ISODate("2024-10-11"), user_id: 3 },
    { _id: 4, task: "Build a REST API", date: ISODate("2024-10-13"), user_id: 4 },
    { _id: 5, task: "MongoDB CRUD operations", date: ISODate("2024-10-16"), user_id: 5 },
    { _id: 6, task: "User authentication", date: ISODate("2024-10-19"), user_id: 6 },
    { _id: 7, task: "Socket.io chat app", date: ISODate("2024-10-21"), user_id: 7 },
    { _id: 8, task: "Unit testing", date: ISODate("2024-10-23"), user_id: 8 },
    { _id: 9, task: "Responsive design", date: ISODate("2024-10-26"), user_id: 9 },
    { _id: 10, task: "Build a blog", date: ISODate("2024-10-29"), user_id: 10 }
]);

6. Inserting sample data into company_drives collection:

db.company_drives.insertMany([
    { _id: 1, company: "Google", date: ISODate("2024-10-15") },
    { _id: 2, company: "Amazon", date: ISODate("2024-10-18") },
    { _id: 3, company: "Facebook", date: ISODate("2024-10-20") },
    { _id: 4, company: "Apple", date: ISODate("2024-10-22") },
    { _id: 5, company: "Microsoft", date: ISODate("2024-10-25") },
    { _id: 6, company: "Netflix", date: ISODate("2024-10-27") },
    { _id: 7, company: "Twitter", date: ISODate("2024-10-29") },
    { _id: 8, company: "Tesla", date: ISODate("2024-10-30") },
    { _id: 9, company: "Uber", date: ISODate("2024-10-31") },
    { _id: 10, company: "LinkedIn", date: ISODate("2024-11-01") }
]);

7. Inserting sample data into mentors collection:

db.mentors.insertMany([
    { _id: 1, name: "Mentor A", mentee_count: 10 },
    { _id: 2, name: "Mentor B", mentee_count: 16 },
    { _id: 3, name: "Mentor C", mentee_count: 20 },
    { _id: 4, name: "Mentor D", mentee_count: 5 },
    { _id: 5, name: "Mentor E", mentee_count: 30 },
    { _id: 6, name: "Mentor F", mentee_count: 8 },
    { _id: 7, name: "Mentor G", mentee_count: 18 },
    { _id: 8, name: "Mentor H", mentee_count: 22 },
    { _id: 9, name: "Mentor I", mentee_count: 3 },
    { _id: 10, name: "Mentor J", mentee_count: 25 }
]);

---------------------------------------

Step 3: MongoDB Queries

1. Find all the topics and tasks that are taught in October:

db.topics.find({ date: { $gte: ISODate("2024-10-01"), $lte: ISODate("2024-10-31") } });
db.tasks.find({ date: { $gte: ISODate("2024-10-01"), $lte: ISODate("2024-10-31") } });

2. Find all the company drives that appeared between 15-Oct-2024 and 31-Oct-2024:

db.company_drives.find({ date: { $gte: ISODate("2024-10-15"), $lte: ISODate("2024-10-31") } });

3. Find all the company drives and students who appeared for the placement:

db.company_drives.aggregate([
    {
        $lookup: {
            from: "users",
            localField: "_id",
            foreignField: "company_drive_id",
            as: "students"
        }
    }
]);

4. Find the number of problems solved by each user in Codekata:

db.codekata.find({}, { user_id: 1, problems_solved: 1 });

5. Find all mentors with more than 15 mentees:

db.mentors.find({ mentee_count: { $gt: 15 } });

6. Find the number of users who were absent and did not submit a task between 15-Oct-2024 and 31-Oct-2024:

db.attendance.aggregate([
    {
        $match: {
            date: { $gte: ISODate("2024-10-15"), $lte: ISODate("2024-10-31") },
            status: "Absent"
        }
    },
    {
        $lookup: {
            from: "tasks",
            localField: "user_id",
            foreignField: "user_id",
            as: "tasks"
        }
    },
    {
        $match: { "tasks.0": { $exists: false } }
    },
    {
        $count: "absent_and_no_task"
    }
]);

---------------------------------------

This MongoDB schema and the queries address all the requirements specified. 
