/**
 * Example - 1
 * -----------------------------
 */

// import ShareButton from './ShareButton';

// const shareButton = new ShareButton('http://www.youtube.com/rodrigobranas');

// shareButton.bind('.btn-twitter', 'twitter');
// shareButton.bind('.btn-facebook', 'facebook');
// shareButton.bind('.btn-linkedin', 'linkedin');

/**
 * Example - 2
 * -----------------------------
 */

import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonPrint from './ShareButtonPrint';

const twitter = new ShareButtonTwitter('.btn-twitter', 'http://www.youtube.com/rodrigobranas');
const facebook = new ShareButtonFacebook('.btn-facebook', 'http://www.youtube.com/rodrigobranas');
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'http://www.youtube.com/rodrigobranas');
const print = new ShareButtonPrint('.btn-print', 'http://www.youtube.com/rodrigobranas');

twitter.bind();
facebook.bind();
linkedin.bind();
print.bind();

console.log('hello-word');
