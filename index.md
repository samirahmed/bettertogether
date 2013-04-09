<title>Let's Make GitHub Better, Together</title>
<link href="//netdna.bootstrapcdn.com/twitter-bootstrap/2.2.1/css/bootstrap-combined.min.css" rel="stylesheet">
<style type="text/css">body { margin: 10px; }</style>

GitHub, I <span class="love">❤</span> You Too
=============================================
But you've got some issues. And I want to help you fix them.


GitHub Mac App can enter a bad state if sidebar is extended too far
-------------------------------------------------------------------

<video controls src="./video/github_mac_app_resizing_bug.mov">

**Fix:** Set a limit on how far out the sidebar can extend, to avoid this problematic state from ever occurring.


Gists that have zero stars have a broken link (404)
---------------------------------------------------

<video controls src="./video/gist_zero_stars_leads_to_404.mov">

**Fix:** When there are zero stars, link to <u>https://gist.github.com/`username`/`gist_id`/stars</u> rather than <u>https://gist.github.com/`username`/false</u>.


Different defaults for indent settings all over the place
---------------------------------------------------------

![](./img/default_indent_settings_github.png)

![](./img/default_indent_settings_gist.png)

**Fix:** Make consistent default values for indent mode and indent size.

**Pro-level:** If your defaults aren't my preferred values, please let me [override](https://github.com/shurcooL/preferences.content/blob/master/README.toml) the defaults in my GitHub settings. Personally, I like tabs of size 4.
