import React from 'react';
import {
  Layout, Typography, Divider,
} from 'antd';
import { withRouter } from 'react-router-dom';
import './about.scss';

const About = () => (

  <Layout.Content className="layout-content-article">

    <Typography.Title level={1}>About Us</Typography.Title>
    <section className="about">
      <Divider className="divider">Our Story</Divider>
      <p>
        The world of virtual reality (VR) is a growing world, the consequence is that there are many VR headsets available on the market. Consumers will wonder what is the best VR headset or what makes a VR headset good?
        As VR enthusiasts and wanting to help people who want to enter the world of VR or just improve their experience, we created All About VR.
      </p>
      <p>
        All About VR aims to bring together all the informations about VR headsets available on the market in order to consult them in a simple and fast way.
      </p>
      <p>
        You can therefore search or compare headsets, obtain information on a specific spec using our Wiki and discover a list of VR games.
      </p>
      <Divider className="divider">Who are we ?</Divider>

      <p className="title">
        Bleuh · Passionate JavaScript Developer
      </p>
      <p>
        I wanted to create a place where people can find all any informations about VR because I had enough of asking who is the best VR headset for my setup to people online. So I'm one of All about VR users.
      </p>

      <p className="title">
        xCommando · Web Developer
      </p>
      <p>
        As a junior developer, I wanted to do a side project to learn new things. With this project and thanks to my experimented friend Bleuh I have improved my skills using React and how to code in a clean way.
      </p>
      <Divider className="divider">Other Informations</Divider>
      <p>
        If you want more informations about how we create this website, check our github :
        {' '}
        <a className="link" href="https://github.com/Bleuh/all-about-vr" target="_blank">https://github.com/Bleuh/all-about-vr</a>
      </p>
    </section>
  </Layout.Content>

);

export default withRouter(About);
