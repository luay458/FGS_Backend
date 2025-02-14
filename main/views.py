from django.shortcuts import render
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm
from django.contrib import messages  # import messages


def home(request):
    return render(request, 'home.html')

def services(request):
    return render(request, 'services.html')

def quality_assurance(request):
    return render(request, 'quality_assurance.html')

def about_us(request):
    return render(request, 'about_us.html')

def our_responsibility(request):
    return render(request, 'our_responsibility.html')

# View to handle the contact form submission
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        message_content = request.POST.get('message')
        
        print(f"Contact Form Submitted: {name}, {email}, {message_content}")
        
        subject = f"Contact Form Submission from {name}"
        message = f"Message from {name} ({email}):\n\n{message_content}"
        
        send_mail(
            subject,
            message,
            settings.DEFAULT_FROM_EMAIL,
            [settings.CONTACT_EMAIL],
        )
        
        # Add a success message that will trigger the popup
        messages.success(request, "Thanks for sending your message! We'll get back to you as soon as we can!")
        
        # Render the same template so the message appears as a popup
        return render(request, 'home.html')
    
    return render(request, 'home.html')