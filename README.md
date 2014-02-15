We Use GnuPG
==========

[We Use GnuPG](http://weusepgp.info/) is a website I started to provide a very basic introduction to cryptography for end-users, just like [We Use Coins](https://www.weusecoins.com/en/) for BitCoin.


Contribute
----------

TODO-list

  * Establish a list of existing tools in `howtos.json`
  * Add more "More Information" links
  * i18n
  * Mobile version
  * Add a difficulty index (help identify easy/hard-to use tools)
  * Enhance the design


Add a translation
-----------------

  1. Copy `tr/en.yml`
  2. Translate it
  3. Add the language to `views/index.haml` (around line 30)


Run locally
-----------

You need bundle installed.

```
bundle install
ruby weusepgp.rb
```

Go on `http://localhost:4567/` then
