from . import views
from django.urls import path
from .views import contact
from django.views.generic import TemplateView

urlpatterns = [
    path('', views.home, name='home'),
    path('contact/', contact, name='contact'),
    path('services/', views.services, name='services'),
    path('quality-assurance/', views.quality_assurance, name='quality_assurance'),
    path('about-us/', views.about_us, name='about_us'),
    path('our-responsibility/', views.our_responsibility, name='our_responsibility')
]
