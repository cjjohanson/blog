from django.views.generic import TemplateView
from django.views.generic.edit import FormView
from django.urls import reverse_lazy
from django.core.mail import send_mail
from .forms import ContactForm
from decouple import config

class HomeView(TemplateView):
    template_name = 'home.html'

class BlogView(TemplateView):
    template_name = 'blog.html'

class ResumeView(TemplateView):
    template_name = 'resume.html'

class ContactUsView(FormView):
    template_name = 'contact.html'
    form_class = ContactForm
    # after success, stay on the same page
    success_url = reverse_lazy('contact')

    def form_valid(self, form):
        # called when valid form data has been posted
        form.save()

        # send email notification to yourself
        send_mail(
            subject=f"Incoming contact request from {form.cleaned_data['name']}",
            message=f"Message: {form.cleaned_data['message']}\n\nFrom: {form.cleaned_data['name']} ({form.cleaned_data['email']})",
            from_email=config('EMAIL_HOST_USER'),
            recipient_list=[config('EMAIL_HOST_USER')],
            fail_silently=False,
        )

        # pass 'success' flag to the template
        return self.render_to_response(self.get_context_data(success=True))