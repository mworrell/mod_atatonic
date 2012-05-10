/* unlink js
----------------------------------------------------------

@package:	Zotonic 2009	
@Author: 	Tim Benniks <tim@timbenniks.nl>

Copyright 2009 Tim Benniks

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

---------------------------------------------------------- */

$.widget("ui.unlink", 
{
	_init: function() 
	{
		var self = this;
		var obj  = this.element;
		
		$('.unlink-cross', obj).hover(function()
		{
			$(this).closest('.rsc-edge').addClass('rsc-edge-hover');
		},
		function()
		{
			$(this).closest('.rsc-edge').removeClass('rsc-edge-hover');
			
			if($.ui.tooltip)
			{
				$.fn.tooltip.destroy()
			}
		});
	}
});