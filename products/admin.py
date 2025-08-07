# products/admin.py
from django.contrib import admin
from .models import Category, Product, ProductImage, Variation

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3

# Define the inline for the Variation model
class VariationInline(admin.TabularInline):
    model = Variation
    extra = 1  # Display one extra form for adding a new variation

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'category', 'available']
    list_filter = ['available', 'category']
    list_editable = ['price', 'available']
    prepopulated_fields = {'slug': ('name',)}
    # Add the VariationInline to the inlines list
    inlines = [ProductImageInline, VariationInline]

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}
