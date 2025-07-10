There are two folders "backend" and "fronend"
To run backend <> go to backend directory (cd backend) <> run server.js file (node server.js)
To run fronend <> go to frontend directory (cd frontend) <> npm start

**Backend**
ther are two api in backend
Router.post("/add-log", addLog);
Router.get("/get-logs", getLogData);

in adding a log I have done required fields validation and
in get logs api three filters implemented 
1. lever filter which is a dropdown
2. search - searching in message field
3. date - timestemp filter

**Frontend**
I have used github theme for frontend, just to look the website good, otherthen that the form and listing and all are done by me.
to see add log page code got to --> frontend <> src <> views <> auth <> SignIn.jsx component
``have used there signin component because that was looking like a form``

to see listing page got to --> frontend <> src <> admin <> tables <> index.jsx or components <> ColumnsTable.jsx
to show logs data I wanted a table so used this component

inside every used component each and every change or line of code is written by me.
