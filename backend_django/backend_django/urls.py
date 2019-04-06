
from django.conf.urls import url
from django.urls import include, path
from django.contrib import admin
from rest_framework import routers
from blog import views

router =routers.DefaultRouter()
router.register(r'blogs',views.PostView,'post')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    path('api/',include(router.urls))
]
