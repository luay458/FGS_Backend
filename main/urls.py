from django.urls import path
from . import views
from .views import contact
from django.views.generic import TemplateView

urlpatterns = [
    path('contact/', contact, name='contact'),
    path('contact/thanks/', TemplateView.as_view(template_name='contact_thanks.html'), name='contact_thanks'),
    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('quality-assurance/', views.quality_assurance, name='quality_assurance'),
    path('about-us/', views.about_us, name='about_us'),
    path('our_responsibility/', views.our_responsibility, name='our_responsibility'),
    path('contact/', views.contact, name='contact'),  # Handles the contact form
]
