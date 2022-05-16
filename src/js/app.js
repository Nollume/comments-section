// IMPORT CSS

import '../sass/style.scss';



// IMPORT IMAGES

import '../images/favicon-32x32.png';
import '../images/image-amyrobson.png';
import '../images/image-juliusomo.png';
import '../images/image-maxblagun.png';
import '../images/image-ramsesmiron.png';

// IMPORT JS

import {User} from "./class";


let user = new User;

user.createCard();
user.createReplyContainer();
user.score();
user.createReply();
user.sendMessage();
user.modal();
user.edit();
user.pushToArray();






