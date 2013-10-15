Summary

   While active, this module adds a fieldset to the node edit form which
   allows you to enter information about a legacy webpage (via url) that
   contains source code intended for the node you are creating. By design,
   it was intended to help you convert a flat html pages into Drupal nodes
   very rapidly and accurately.

Requirements

Installation

    1. Download and unzip this module into your modules directory.
    2. Goto Administer > Site Building > Modules and enable this module.
    3. While active this module will add a fieldset to the top of all node
       edit forms (which have been enabled*). After content migration you
       should disable/uninstall this module and it's codebase form your
       site.

Configuration

    1. For every node type to which you wish to import content, visit the
       respective edit page /admin/structure/types/manage/[bundle_type]
       and configure settings in the the Source To Node fieldset at the
       bottom of the form.
    2. This module will automatically create the necessary redirects when
       you use it, so long as you've enabled the [1]Redirect module. You
       should really do that now.

Usage

  Gotchas (READ FIRST):

    1. You must be in full html mode (not WYSIWYG) on the textarea that is
       to receive the source code.
    2. With your old flat site on the left and your drupal site on the
       right (in two separate windows), you may proceed...
    3. In the Drupal window, open the new content form for one of the node
       types you just configured and you will see a new fieldset at the
       top of the form.

  Url Of Source

    1. Enter the absolute url of the flat html page you wish to convert to
       the Drupal node.
    2. When you click on Get Source Code Now, the designated* contents of
       the source at that url will be moved into the Body element of the
       page.

  Section Start/End Text

    1. You will not want to pull over the entire source code of the page;
       at the very least you'll only want what is inside the

   tag of your source html.

     However this section is much more powerful in that it allows you to
   designate open and closing text snippets which delineate the section of
   the page you wish to capture into the body field of the node.

  Section End #Text

  Section #Offset

  Find And #Replace

API

Contact

     * In the Loft Studios
     * Aaron Klump - Developer
     * PO Box 29294 Bellingham, WA 98228-1294
     * aim: theloft101
     * skype: intheloftstudios
     * d.o: aklump
     * [2]http://www.InTheLoftStudios.com

References

   1. http://drupal.org/project/redirect
   2. http://www.InTheLoftStudios.com/
