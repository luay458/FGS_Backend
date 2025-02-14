from django.shortcuts import render
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings
from .forms import ContactForm

def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            # Extract validated form data
            name = form.cleaned_data['name']
            email = form.cleaned_data['email']
            message = form.cleaned_data['message']
            
            # Create an email subject and body
            subject = f"Contact Form Submission from {name}"
            full_message = f"Message from {name} ({email}):\n\n{message}"
            
            # Send email (ensure these settings are configured securely in your settings)
            send_mail(
                subject,
                full_message,
                settings.DEFAULT_FROM_EMAIL,  # Use an environment variable here!
                [settings.CONTACT_EMAIL]        # Define a recipient email in your settings
            )
            # Redirect to a thank-you page or back to home
            return redirect('contact_thanks')
    else:
        form = ContactForm()
    
    return render(request, 'contact.html', {'form': form})

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
        # Process form data here (e.g., send an email)
        name = request.POST.get('name')
        email = request.POST.get('email')
        message = request.POST.get('message')
        # For now, simply print the data to the console (or add email functionality)
        print(f"Contact Form Submitted: {name}, {email}, {message}")
        # Optionally, you can add a success message or redirect
    return render(request, 'home.html')  # Redirect or render a thank-you page as needed
