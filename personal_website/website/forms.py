from django import forms
from .models import ContactMessage

class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'message']

    def save(self, commit=True):
        # NOTE: saving without committing is a convention and is not necessary.
        # for example, with this setup you could add some transformation(s) to
        # the data before saving, allowing you to save the transformed data
        contact_message = super().save(commit=False)
        if commit:
            contact_message.save()
        return contact_message