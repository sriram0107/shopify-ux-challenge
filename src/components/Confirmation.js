import React from "react";
import "../styles/confirm.css";
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";

import Fb from "@material-ui/icons/Facebook";
import Email from "@material-ui/icons/Email";
import RedditIcon from "@material-ui/icons/Reddit";
import Twitter from "@material-ui/icons/Twitter";
import Whatsapp from "@material-ui/icons/WhatsApp";

const Confirmation = ({ nominees }) => {
  const app_url = "https://pacific-wave-49087.herokuapp.com/";
  const share_text = `I voted for ${nominees[0].Title}, ${nominees[1].Title}, ${nominees[2].Title}, ${nominees[3].Title}, ${nominees[4].Title}, for the Shoppies Award.\n Vote for your favorite movies now `;
  return (
    <div className="confirmation">
      <EmailShareButton
        url={app_url}
        subject={"Shoppies Movie Nomination"}
        body={share_text}
        children={
          <SocialShare
            media="Email"
            icon={<Email fontSize="large" />}
            color="gray"
          />
        }
      />
      <FacebookShareButton
        url={app_url}
        quote={share_text}
        body={share_text}
        hashtag="shoppies"
        children={
          <SocialShare
            media="Facebook"
            icon={<Fb fontSize="large" />}
            color="#3B5998"
          />
        }
      />
      <RedditShareButton
        url={app_url}
        title="My Shoppies Nominations"
        body={share_text}
        children={
          <SocialShare
            media="Reddit"
            icon={<RedditIcon fontSize="large" />}
            color="#FF5700"
          />
        }
      />
      <TwitterShareButton
        url={app_url}
        title={share_text}
        hashtags={["shoppies", "movies"]}
        children={
          <SocialShare
            media="Twitter"
            icon={<Twitter fontSize="large" />}
            color="#00ACEE"
          />
        }
      />
      <WhatsappShareButton
        url={app_url}
        title={share_text}
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
