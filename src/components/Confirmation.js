import React from "react";
import "../styles/confirm.css";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";

import Fb from "@material-ui/icons/Facebook";
import Email from "@material-ui/icons/Email";
import RedditIcon from "@material-ui/icons/Reddit";
import Twitter from "@material-ui/icons/Twitter";
import Whatsapp from "@material-ui/icons/WhatsApp";

const Confirmation = () => {
  return (
    <div className="confirmation">
      <EmailShareButton
        url="https://github.com/sriram0107"
        children={
          <SocialShare
            media="Email"
            icon={<Email fontSize="large" />}
            color="gray"
          />
        }
      />
      <FacebookShareButton
        url="https://github.com/sriram0107"
        children={
          <SocialShare
            media="Facebook"
            icon={<Fb fontSize="large" />}
            color="#3B5998"
          />
        }
      />
      <RedditShareButton
        url="https://github.com/sriram0107"
        children={
          <SocialShare
            media="Reddit"
            icon={<RedditIcon fontSize="large" />}
            color="#FF5700"
          />
        }
      />
      <TwitterShareButton
        url="https://github.com/sriram0107"
        children={
          <SocialShare
            media="Twitter"
            icon={<Twitter fontSize="large" />}
            color="#00ACEE"
          />
        }
      />
      <WhatsappShareButton
        url="https://github.com/sriram0107"
        children={
          <SocialShare
            media="WhatsApp"
            icon={<Whatsapp fontSize="large" />}
            color="	#25D366"
          />
        }
      />
    </div>
  );
};
const SocialShare = ({ media, icon, color }) => {
  return (
    <div className="socials" style={{ backgroundColor: color }}>
      {`Share with ${media}`}
      {icon}
    </div>
  );
};

export default Confirmation;
