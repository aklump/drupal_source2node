/* $Id$ */

SUMMARY: While active, this module adds a fieldset to the node edit form which
allows you to enter information about a legacy webpage (via url) that contains
source code intended for the node you are creating. By design, it was intended
to help you convert a flat html pages into Drupal nodes very rapidly and
accurately.


REQUIREMENTS:


INSTALLATION:
- Download and unzip this module into your modules directory.
- Goto Administer > Site Building > Modules and enable this module.


CONFIGURATION:
- While active this module will add a fieldset to the top of all node edit
  forms (which have been enabled*). After content migration you should disable/uninstall this module and
  it's codebase form your site.
- *Go to /admin/structure/types/manage/[bundle_type] and select which insert
  field to use for each bundle type from the 'Source To Node' fieldset at the
  bottom of the form.
- IMPORTANT! It is highly recommended to install/enable the redirect module
  (http://drupal.org/project/redirect), as this will allow you to create
  redirects automatically from old urls to the new nodes

USAGE:

GOTCHAS (READ FIRST):
- You must be in full html mode (not WYSIWYG) on the textarea that is to receive
  the source code

URL OF SOURCE:
- Enter the absolute url of the flat html page you wish to convert to the Drupal
  node.
- When you click on Get Source Code Now, the designated* contents of the source
  at that url will be moved into the Body element of the page.

*SECTION START/END TEXT:
- You will not want to pull over the entire source code of the page; at the very
  least you'll only want what is inside the <body> tag of your source html.
- However this section is much more powerful in that it allows you to designate
  open and closing text snippets which delineate the section of the page you
  wish to capture into the body field of the node.

SECTION END TEXT:

SECTION OFFSET:

FIND AND REPLACE:


API:
-


--------------------------------------------------------
CONTACT: In the Loft
Studios Aaron Klump - Web Developer PO Box 29294 Bellingham, WA 98228-1294 aim:
theloft101 skype: intheloftstudios

http://www.InTheLoftStudios.com
