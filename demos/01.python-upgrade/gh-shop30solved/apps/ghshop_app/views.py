from django.shortcuts import render, HttpResponse, redirect
import sys
import django

def index(request):
    if 'total_spent' not in request.session:
        request.session['total_spent'] = 0
    if 'total_purchases' not in request.session:
        request.session['total_purchases'] = 0
    context = {
        'python_version': sys.version,
        'django_version': django.get_version()
    }
    return render(request, "index.html", context)

def process(request):
    if request.method == "POST":
        if request.POST['product_id'] == "shirt":
            print("OMG BUYING SHIRTS")
            amount = int(request.POST['shirt_quantity'])
            request.session['price'] = 19.99 * amount
            request.session['total_spent'] += request.session['price']
            request.session['total_purchases'] += amount
        elif request.POST['product_id'] == "sweater":
            print("Buying a damn sweater")
            amount = int(request.POST['sweater_quantity'])
            request.session['price'] = 29.99 * amount
            request.session['total_spent'] += request.session['price']
            request.session['total_purchases'] += amount
        elif request.POST['product_id'] == "cup":
            print("Buying pring cup")
            amount = int(request.POST['cup_quantity'])
            request.session['price'] = 4.99 * amount
            request.session['total_spent'] += request.session['price']
            request.session['total_purchases'] += amount
        elif request.POST['product_id'] == "book":
            print("Books are boring, but buying anyways")
            amount = int(request.POST['book_quantity'])
            request.session['price'] = 49.99 * amount
            request.session['total_spent'] += request.session['price']
            request.session['total_purchases'] += amount
    return redirect('/ghshop/checkout')

def checkout(request):
    return render(request, "checkout.html")