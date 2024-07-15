

# Django 
Django is an open-source high-level Python web framework that is easy to use for CRUD operations. 

## Prerequisites
- Python 3.6 or later
- pip package installer for Python
  
## Installation
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
## Install Django 

```bash
pip install django
```

## Create a Django Project
```bash
django-admin startproject mynotes
```    
## Navigate to your project directory
```bash
cd mynotes
```

## Run the Development Server
```bash
python manage.py runserver
```
## Install Django REST FRAMEWORK

```bash
pip install djangorestframework
```

## Update Your Django Project Settings
Add 'rest_framework' to the INSTALLED_APPS list in mynotes/settings.py:
```bash
# mynotes/settings.py

INSTALLED_APPS = [
    ...
    'rest_framework',
    ...
]
```    
## Create a Django App
```bash
python manage.py startapp api
```
Add the new app to your INSTALLED_APPS list in mynotes/settings.py
```bash
# mynotes/settings.py

INSTALLED_APPS = [
    ...
    'notes',
    'rest_framework',
    ...
]
```


## React
React is the JavaScript library used for building single page interfaces out of individual pieces called components.

## Prerequisites
- Node.js
- npm

## Installation 

Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration. To install Create React App globally, run
```bash
npm install -g create-react-app
```
Once Create React App is installed, you can create a new React application. Replace frontend with your desired project name:
```bash
npx create-react-app frontend
```
### Navigate to your project directory
```bash
cd frontend
```
## Start the Development Server
To start the development server and see React application in action
```bash
npm start
```

## OR
## Cloning the repository

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



<img alt="JavaScript" src="https://img.shields.io/badge/-JavaScript-f7df1c?style=flat-square&logo=javascript&logoColor=black" /> <img alt="CSS3" src="https://img.shields.io/badge/-CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" /> <img alt="Django" src="https://img.shields.io/badge/-Django-092E20?style=flat-square&logo=django&logoColor=white" /> <img alt="React" src="https://img.shields.io/badge/-React-61DAFB?style=flat-square&logo=react&logoColor=black" />

