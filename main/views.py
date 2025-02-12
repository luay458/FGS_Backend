from django.shortcuts import render

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
