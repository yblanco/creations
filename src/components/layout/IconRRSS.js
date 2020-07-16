import React from 'react';
import { Content, Image } from 'react-bulma-components';

import ln from './images/in.png';
import ws from './images/ws.png';
import tw from './images/tw.png';
import ig from './images/ig.png';
import fb from './images/fb.png';
import yt from './images/yt.png';
import skype from './images/skype.png';


const rrss = {
  linkedn: {
    icon: ln,
    name: 'Linkedn',
  },
  whatsapp: {
    icon: ws,
    name: 'Whatsapp',
  },
  twitter: {
    icon: tw,
    name: 'Twitter',
  },
  instagram: {
    icon: ig,
    name: 'Instagram',
  },
  facebook: {
    icon: fb,
    name: 'Facebook',
  },
  skype: {
    icon: skype,
    name: 'Skype',
  },
  youtube: {
    icon: yt,
    name: 'Youtube',
  }
}

const IconRRSS = ({ rs }) =>{
  const { [rs]:icon = false } = rrss;
  if(icon === false) {
    throw new Error('Icon doesnt exist');
  }
  return (
    <Content>
      <Image src={icon.icon} alt={icon.name}  className="is-48x48" />
    </Content>
  );
}

export default IconRRSS;
