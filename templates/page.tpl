{% extends "base.tpl" %}

{% block content %}

	<h1>{{ m.rsc[id].title }}</h1>

	<p class="summary">
	    {{ m.rsc[id].summary }}
	</p>

	{{ m.rsc[id].body|show_media }}

	<section id="comments">{% include "_comments.tpl" id=id %}</section>
	
{% endblock %}

{% block sidebar %}
{% endblock %}