from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('quality-assurance/', views.quality_assurance, name='quality_assurance'),
    path('about-us/', views.about_us, name='about_us'),
    path('our_responsibility/', views.our_responsibility, name='our_responsibility'),
    path('contact/', views.contact, name='contact'),  # Handles the contact form
]
