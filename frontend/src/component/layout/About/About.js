import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://www.instagram.com/ab__02_/";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dyoczrvps/image/upload/v1674221317/avatars/IMG_0817_2_p1crj2.jpg"
              alt="Founder"
            />
            <Typography>Abdullah Sultan</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              I am Abdullah Sultan. I am a MERN stack developer, researcher and
              a mentor. I have taught many students, participated in hackathons,
              worked with great entrepreneurs. You can hire me for your tasks,
              mail is provided in the contact section.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">
              Connect me through social media
            </Typography>

            <a href="https://www.instagram.com/ab__02_/" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
