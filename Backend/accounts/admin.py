from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser as User

admin.site.register(User, UserAdmin)