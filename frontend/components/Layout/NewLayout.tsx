import styled from '@emotion/styled';
import React, { FC } from 'react';
import Link from 'next/link';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  FolderOpenOutlined,
  HourglassOutlined,
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

interface NewLayoutProps {
  children: React.ReactNode;
}

const Logo = styled.div({
  height: '32px',
  margin: '16px',
  background: '#282a36',
});

const LayoutBackground = styled.div({
  background: '#282a36',
  padding: 24,
  minHeight: 360,
});

const FooterLink = styled.a({
  color: '#f8f8f2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexGrow: 1,
});

const menuItems = [
  {
    text: 'Home',
    icon: <HomeOutlined />,
    path: '/',
  },
  {
    text: 'About',
    icon: <UserOutlined />,
    path: '/about',
  },
  {
    text: 'Projects',
    icon: <FolderOpenOutlined />,
    path: '/projects',
  },
  {
    text: 'Experience',
    icon: <HourglassOutlined />,
    path: '/experience',
  },
  {
    text: 'Contact',
    icon: <MailOutlined />,
    path: '/contact',
  },
];

const NewLayout: FC<NewLayoutProps> = ({ children }) => {
  return (
    <>
      <Layout>
        <Sider
          breakpoint='lg'
          collapsedWidth='0'
          onBreakpoint={(broken: any) => {
            console.log(broken);
          }}
          onCollapse={(collapsed: any, type: any) => {
            console.log(collapsed, type);
          }}
          style={{ background: '#282a36' }}
        >
          <Logo />
          <Menu theme='dark' mode='inline' style={{ background: '#282a36' }}>
            {menuItems.map((item, index) => (
              <Menu.Item key={index} icon={item.icon}>
                <Link key={index} href={item.path} passHref>
                  {item.text}
                </Link>
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout style={{ background: '#44475a' }}>
          <Header
            style={{
              background: '#282a36',
              padding: 0,
            }}
          />
          <Content style={{ margin: '24px 16px 0' }}>
            <LayoutBackground>{children}</LayoutBackground>
          </Content>
          <Footer
            style={{
              width: '100%',
              backgroundColor: '#44475a',
              padding: '2rem 0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FooterLink
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <LinkedinOutlined style={{ fontSize: '2rem' }} />
            </FooterLink>
            <FooterLink
              href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
              target='_blank'
              rel='noopener noreferrer'
            >
              <GithubOutlined style={{ fontSize: '2rem' }} />
            </FooterLink>
          </Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default NewLayout;
0;
