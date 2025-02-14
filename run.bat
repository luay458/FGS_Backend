@echo off
REM Clear static files without prompting
python manage.py collectstatic --clear --noinput

REM Collect static files without input (redundant if you've already cleared, but kept for your workflow)
python manage.py collectstatic --noinput

REM Start the Django development server
python manage.py runserver 0.0.0.0:8000
