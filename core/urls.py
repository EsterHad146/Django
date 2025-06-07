from django.urls import path
from .views import index, contato, sobre

urlpatterns = [
    path('', index),
    path('contato', contato),
    path('sobre', sobre)
]
