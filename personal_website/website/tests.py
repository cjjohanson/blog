from django.test import TestCase
from django.core import mail
from .forms import ContactForm
from .models import ContactMessage

# Create your tests here.


class ContactFormTest(TestCase):

    def test_contact_form_valid_data(self):
        # create mock ContactForm model data
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'john.doe@example.com',
            'message': 'Hi, this is a test message!'
        })
        # assert that the data is valid
        self.assertTrue(form.is_valid())

    def test_contact_form_invalid_data(self):
        # create invalid ContactForm model data
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'not-an-email',
            'message': 'Hi, this is a test message!'
        })
        # assert that the data is invalid
        self.assertFalse(form.is_valid())

    def test_contact_form_save_to_database(self):
        # create valid ContactForm model data
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'john.doe@example.com',
            'message': 'Hi, this is a test message!'
        })
        # assert that the form data is valid
        self.assertTrue(form.is_valid())
        # save the form data to the database
        contact_message = form.save()
        # check that the form data was saved correctly
        self.assertEqual(ContactMessage.objects.count(), 1)
        self.assertEqual(contact_message.name, 'John Doe')

    def test_contact_form_sends_email(self):
        # create valid ContactForm model data
        form = ContactForm(data={
            'name': 'John Doe',
            'email': 'john.doe@example.com',
            'message': 'Hi, this is a test message!'
        })

        # assert that the contact form data is valid
        self.assertTrue(form.is_valid())

        # simulate form submission and email sending
        form.save()

        # send email
        subject = (
            f"New contact form submission from {form.cleaned_data['name']}"
        )
        message = (
            f"Message: {form.cleaned_data['message']}\n\n"
            f"From: {form.cleaned_data['name']} ({form.cleaned_data['email']})"
        )
        recipient_list = ['test@email.com']
        from_email = form.cleaned_data['email']
        mail.send_mail(
            subject=subject,
            message=message,
            from_email=from_email,
            recipient_list=recipient_list
        )

        # check that exactly 1 email was send
        self.assertEqual(len(mail.outbox), 1)
        print(help(mail.outbox))

        # verify email subject, message, and recipient
        sent_email = mail.outbox[0]
        self.assertEqual(sent_email.subject, subject)
        self.assertEqual(sent_email.body, message)
        self.assertEqual(sent_email.to, recipient_list)
