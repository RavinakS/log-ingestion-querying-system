# Log Ingestion querying Application

This project consists of two folders: `backend` and `frontend`.

The **frontend** uses a GitHub theme for styling (only for looks), but all forms, listings, logic, and code are written by me.

---

## 🚀 How to Run

### ▶️ Backend

To run the backend:

1. Go to the backend directory:
    ```bash
    cd backend
    ```
2. Run the server:
    ```bash
    node server.js
    ```

### ▶️ Frontend

To run the frontend:

1. Go to the frontend directory:
    ```bash
    cd frontend
    ```
2. Start the React app:
    ```bash
    npm start
    ```

---

## 🧩 Backend

The backend provides **two APIs**:

### POST `/add-log`
- Adds a log.
- Performs required fields validation.

### GET `/get-logs`
- Retrieves log data.
- Supports three filters:
  1. **Level Filter:** dropdown to filter logs by level.
  2. **Search:** searches in the `message` field.
  3. **Date Filter:** filters by timestamp.

---

## 🎨 Frontend

The frontend is built using React.

---

### 🔷 Add Log Page

- Location:  
frontend/src/views/auth/SignIn.jsx

- Notes:  
I reused the `SignIn` component because it already looked like a form.  

---

### 🔷 Logs Listing Page

- Location:  
frontend/src/views/admin/tables/index.jsx
or 

frontend/src/views/admin/tables/components/ColumnsTable.jsx

- Notes:  
To display log data, I used a table component.  

---

## ✍️ Author Notes

✅ Every single change in the used components was implemented and written by me.  
✅ Only the theme/style was reused.

---
