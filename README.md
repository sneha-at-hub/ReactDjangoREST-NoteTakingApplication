<img width="1440" alt="image" src="https://github.com/user-attachments/assets/3e1d5316-9e56-4ed2-bc89-1c7e2b289e35">

# Django 
Django is an open-source high-level Python web framework that is easy to use for CRUD operations. 

# Prerequisites
- Python 3.6 or later
- pip package installer for Python
  
# Installation
Create a virtual environment:
```bash

# If you are on Windows
virtualenv env
# If you are on Linux or Mac
python -m venv env

```

Activate virtual environment:
```bash

# If you are on Windows
.\env\Scripts\activate
# If you are on Linux or Mac
source env/bin/activate

```
# Install Django 

```bash
pip install django
```

# Create a Django Project
```bash
django-admin startproject mynotes
```    
## Navigate to your project directory
```bash
cd mynotes
```

# Run the Development Server
```bash
python manage.py runserver
```
# React
React is the JavaScript library used for building single page interfaces out of individual pieces called components.

# Prerequisites
- Node.js
- npm

# Installation 

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration. To install Create React App globally, run
```bash
npm install -g create-react-app
```
Once Create React App is installed, you can create a new React application. Replace frontend with your desired project name:
```bash
npx create-react-app frontend
```
## Navigate to your project directory
```bash
cd frontend
```
# Start the Development Server
To start the development server and see React application in action
```bash
npm start
```

# OR
# Cloning the repository

```bash
git clone -----
```
## Project Structure

Ensure the project structure looks like this:
```bash

project_root/
│
├── mynotes/   # Django backend directory
│   ├── manage.py
│   └── api/
│
└── frontend/  # React frontend directory
    ├── public/
    ├── src/
    ├── package.json
    └── ...other React files
```




