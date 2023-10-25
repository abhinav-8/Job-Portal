# JOB-PORTAL

This is a platform where users can search for jobs and apply for them.


## DEMO: 

https://github.com/abhinav-8/Job-Portal/assets/72845356/5548c146-0d18-4874-b62d-060dcde12eda


### Tech Stack:
- Express.js(Node.js)
- React.js
- AntDesign,Tailwind CSS

### Features:

- Users can signup and signin ,have used JWT based authorization

- Companies can create profiles and create job openings with the description,requirements,experience etc. 

- Users can apply to these jobs,one user can apply to a job only one time

### Project Structure and Design:

- Implemented a microservices architecture utilising HTTP communication for enhanced code quality, abstraction, and exploratory purposes. Due to time limitations, an API gateway for streamlined communication and acting as a reverse proxy was not developed.

- Employed a SQL database, specifically MySQL, and utilised the Sequelize ORM due to the project's well-defined data structure and relatively moderate scale.

- Implemented secure frontend authentication by storing JWT tokens in HTTP-only cookies, ensuring enhanced security measures for user session management.

- Have also integrated swagger for api contract in AUTH Service
  <br><br>
![Architecture ](https://github.com/abhinav-8/Job-Portal/assets/72845356/3f36a48b-2cc0-430d-b013-f223d2afdee3)

### Project Setup

**Frontend:** Checkout client directory's Readme  
**Backend:** Checkout individual service's Readme inside the server directory





