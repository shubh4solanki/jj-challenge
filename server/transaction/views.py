from rest_framework import response, decorators as rest_decorators, permissions as rest_permissions
from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

@swagger_auto_schema(
    methods=['post'],
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        required=['amount'],
        properties={
            'amount': openapi.Schema(type=openapi.TYPE_INTEGER, description='Amount to be paid')
        }
    ),
    responses={
        200: openapi.Response(description='Successful payment', schema=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'msg': openapi.Schema(type=openapi.TYPE_STRING, description='Success message')
            }
        )),
        400: openapi.Response(description='Bad request')
    }
)
@rest_decorators.api_view(["POST"])
@rest_decorators.permission_classes([rest_permissions.IsAuthenticated])
def paySubscription(request):
    """
    Pay Subscription API
    
    Endpoint to initiate a subscription payment.
    """
    return response.Response({"msg": "Success"}, 200)


@swagger_auto_schema(
    methods=['post'],
    responses={
        200: openapi.Response(description='List of subscriptions retrieved', schema=openapi.Schema(
            type=openapi.TYPE_OBJECT,
            properties={
                'msg': openapi.Schema(type=openapi.TYPE_STRING, description='Success message')
            }
        )),
        400: openapi.Response(description='Bad request')
    }
)
@rest_decorators.api_view(["POST"])
@rest_decorators.permission_classes([rest_permissions.IsAuthenticated])
def listSubscriptions(request):
    """
    List Subscriptions API
    
    Endpoint to retrieve a list of user subscriptions.
    """
    return response.Response({"msg": "Success"}, 200)
