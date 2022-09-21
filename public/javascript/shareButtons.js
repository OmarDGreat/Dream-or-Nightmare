const  {ShareLink}  = require('../../node_modules/social-media-sharing/lib/index.js');
let socialMediaLinks = new ShareLink(twitter);
let shareLink = socialMediaLinks.get({ url })

