from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('ghshop/checkout', views.checkout),
    path('ghshop/process', views.process),
]