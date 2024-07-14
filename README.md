<img width="1440" alt="image" src="https://github.com/user-attachments/assets/3e1d5316-9e56-4ed2-bc89-1c7e2b289e35">

# Django-React Notes App

This repository contains a Notes App built with Django backend and React frontend.

## Getting Started

### Clone the Repository

Clone the repository using the command below:

```bash
git clone https://github.com/your-username/your-repository.git


# Django and React Integration

This guide explains how to integrate a React frontend with a Django backend, ensuring that Django correctly serves the React application's static files.

## Prerequisites

- Python 3.x
- Django 3.x or later
- Node.js and npm (Node Package Manager)

## Project Structure

Ensure your project structure looks something like this:


## Setting Up React

1. **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2. **Install dependencies and build the React app:**

    ```bash
    npm install
    npm run build
    ```

    This will create a `build` directory with production-ready static files.

## Configuring Django

1. **Update `settings.py`**:

    - Add the `build` directory to the `DIRS` list in the `TEMPLATES` setting.
    - Add the `build/static` directory to the `STATICFILES_DIRS` list.

    ```python
    import os
    from pathlib import Path

    BASE_DIR = Path(__file__).resolve().parent.parent

    TEMPLATES = [
        {
            'BACKEND': 'django.template.backends.django.DjangoTemplates',
            'DIRS': [
                BASE_DIR / 'frontend/build',  # Path to React build directory
            ],
            'APP_DIRS': True,
            'OPTIONS': {
                'context_processors': [
                    'django.template.context_processors.debug',
                    'django.template.context_processors.request',
                    'django.contrib.auth.context_processors.auth',
                    'django.contrib.messages.context_processors.messages',
                ],
            },
        },
    ]

    STATIC_URL = '/static/'
    STATICFILES_DIRS = [
        BASE_DIR / 'frontend/build/static',  # Path to React static files
    ]

    # Optional: if you want to collect all static files in one place
    # STATIC_ROOT = BASE_DIR / 'staticfiles'
    ```

2. **Create a view to serve `index.html`**:

    ```python
    # views.py

    from django.shortcuts import render

    def index(request):
        return render(request, 'index.html')
    ```

3. **Update URL patterns**:

    Ensure your `urls.py` routes requests to the view:

    ```python
    # urls.py

    from django.contrib import admin
    from django.urls import path
    from . import views  # Make sure to import the view

    urlpatterns = [
        path('admin/', admin.site.urls),
        path('', views.index, name='index'),  # Route the root URL to the index view
    ]
    ```

## Running the Server

1. **Run the Django server**:

    ```bash
    python manage.py runserver
    ```

2. **Access the React app**:

    Open your browser and navigate to `http://127.0.0.1:8000/`. You should see your React app served by the Django backend.

## Troubleshooting

1. **Static files not found**:

    Ensure the `build` directory exists and contains the `index.html` file and the `static` directory. If you see a warning like `The directory '...' in the STATICFILES_DIRS setting does not exist`, double-check the paths in `settings.py`.

2. **Template not found**:

    If you encounter a `TemplateDoesNotExist` error for `index.html`, ensure the `DIRS` list in the `TEMPLATES` setting correctly points to the React `build` directory.

## Conclusion

By following these steps, you should have a working integration of a React frontend with a Django backend. Django will serve the `index.html` file from the React build directory, along with any static files needed for the React app to function.
