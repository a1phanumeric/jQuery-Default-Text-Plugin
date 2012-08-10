This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.


SETUP
------------

First, make sure you have jQuery included in your page. Then, include the jquery.DefaultText.js into your code like so:

``<script type="text/javascript" src="jquery.DefaultText.js"></script>

USAGE
-------------

Usage is really simple. First, you need to have some text inputs with the title attribute set to whatever you want the default text to be. For example:

``<input type="text" title="First Input" value="" /><br />
``<input type="text" title="Second Input" value="" /><br />

The default text for the inputs will be "First Input" and "Second Input" respectively.

To invoke the plugin, simply use:

``$("#element").DefaultText();

Where "#element" is a standard element on your page. You can also use a group of elements, by adding a class to your inputs and using a class selector (like ".elements"). You can also just use "form input:text" to get all the text inputs within a form.


PARAMETERS
----------------

There are some optional parameters you can pass to the plugin.

inactiveClass - This is a class name for the state of the input when it's inactive (the default state). You'd send this like so:

``$("#element").DefaultText({inactiveClass : "defaultTextInactive"});

NOTE: If you set this parameter, it will nullify the next four options, which are:

``inactiveFontStyle
``inactiveColour
``activeFontStyle
``activeColour

These have default values already set, but you may override them. This is useful if you don't want to use a class for the default state. The Colour options must be in the rgb(x,y,z) format.
