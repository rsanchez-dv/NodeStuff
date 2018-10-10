from django import forms

class FormName(forms.Form):
    name = forms.CharField()
    email = forms.Email()
    text = forms.CharField(widget = forms.Text)