import ShareButton from './ShareButton';

const shareButton = new ShareButton('http://www.youtube.com/rodrigobranas');

shareButton.bind('.btn-twitter', 'twitter');
shareButton.bind('.btn-facebook', 'facebook');
shareButton.bind('.btn-linkedin', 'linkedin');

console.log('hello-word');
