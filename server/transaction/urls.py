from django.urls import path
from transaction.views import paySubscription, listSubscriptions

app_name = "transaction"

urlpatterns = [
    path('pay', paySubscription),
    path('list', listSubscriptions)
]
