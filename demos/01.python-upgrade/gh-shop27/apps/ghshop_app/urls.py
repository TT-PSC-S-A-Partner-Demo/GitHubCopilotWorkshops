from django.conf.urls import url
from . import views
urlpatterns = [
url(r'^$', views.index),
url(r'^ghshop/checkout$', views.checkout),
url(r'^ghshop/process$', views.process)
]