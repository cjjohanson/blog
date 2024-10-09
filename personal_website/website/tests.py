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

