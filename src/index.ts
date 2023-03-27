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

const twitter = new ShareButtonTwitter('.btn-twitter', 'http://www.youtube.com/rodrigobranas');
const facebook = new ShareButtonFacebook('.btn-facebook', 'http://www.youtube.com/rodrigobranas');
const linkedin = new ShareButtonLinkedin('.btn-linkedin', 'http://www.youtube.com/rodrigobranas');

twitter.bind();
facebook.bind();
linkedin.bind();

console.log('hello-word');
