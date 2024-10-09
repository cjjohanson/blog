from django.urls import path, include
from website.views import HomeView, BlogView, ResumeView, ContactUsView

urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('blog', BlogView.as_view(), name='blog'),
    path('resume', ResumeView.as_view(), name='resume'),
    path('contact', ContactUsView.as_view(), name='contact'),
]