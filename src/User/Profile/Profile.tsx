import React, { useContext,useState } from "react";
import "./Profile.css";
import { Image, Text, Button,Modal, Group, Textarea } from "@mantine/core";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import {
  FcAbout,
  RiInformationLine,
  FaRegAddressCard,
  FaCity,
  BiPhone,
  AiOutlineMail,
} from "react-icons/all";


function Profile() {

  const { user} = useContext(UserContext)
  const [opened, setOpened] = useState(false);
  
  return (
    <div>
      <Modal 
        opened={opened}
        onClose={() => setOpened(false)}
        padding="xl"
        size="xl"
        className='Drawer'
      >
      <div className='Ask'>
        <div className='Ask-box'>
            <Text align='center' sx={{"fontSize":"30px"}}> Ask Question </Text>
           <Textarea placeholder=' Enter your question ' mt={40} />
           <Group position="center" >
           <Button mt={20}>
            Ask Question
           </Button>
           </Group>
          
        </div>
      </div>
      </Modal>
    
    <div className="Profile">
      <small >Course Management System / <Link to="/">Profile</Link></small>
      <div className="Spacing">
        <div className="User-info">
        <h5>My Profile</h5>
          <div className="image">
            <div className="user-img">
              <img
                src={user.images[0].url}
                alt="img"
                width={130}
                height={130}
              />
            </div>
            <Group  className="btn">
        <Button onClick={() => setOpened(true)}>Edit</Button>
      </Group>
          </div>

          <div className="user-name">
            <Text>{user.first_name} {user.last_name}</Text>
          </div>
          <div className="Contact">
            <div className="About">
              <h4>
                <span>
                  <FcAbout />
                </span>
                About Me
              </h4>
              <p>
              {user.about}
              </p>
            </div>
            <div className="address">
              <h4>
                <span>
                  <RiInformationLine />
                </span>
                My Information
              </h4>
              <h6>
                <span>
                  <FaRegAddressCard />
                </span>
                Address: {user.address}
              </h6>
              <h6>
                <span>
                  <FaCity />
                </span>
                City: {user.city}
              </h6>
              <h6>
                <span>
                  <BiPhone />
                </span>
                Phone: {user.phone}
              </h6>
              <h6>
                <span>
                  <AiOutlineMail />
                </span>
                Email: {user.email}
              </h6>
            </div>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
    </div>
  );
}


export default Profile;
