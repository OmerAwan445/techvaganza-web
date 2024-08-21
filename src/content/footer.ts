import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const footerContent = {
    title: "Techvaganza",
    description: "We rethink business growth for you through our collective experience with strategic partner ecosystem.",
    footerColumns:[
        {
            title: "Services",
            links: [
                {
                    name: "Web Development",
                    link: "/services/web-development",
                },
                {
                    name: "DevOps",
                    link: "/services/devops",
                },
            ]
        },
        {
            title: "Products",
            links: [
                {
                    name: "Customized POS",
                    link: "/products/customized-pos",
                },
            ]
        },
        {
            title: "Company",
            links: [
                {
                    name: "About Us",
                    link: "/about-us",
                },
                {
                    name: "Contact Us",
                    link: "/contact-us",
                },
                {
                    name: "Privacy Policy",
                    link: "/privacy-policy",
                },
                {
                    name: "Terms of Service",
                    link: "/terms-of-service",
                },
            ]
        },
    ],
    socials: [
        {
        name: 'Facebook',
        link: 'https://www.facebook.com/',
        SocialIcon: FaFacebook,
        },
        {
        name: 'Instagram',
        link: 'https://www.instagram.com/',
        SocialIcon: FaInstagram,
        },
        {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/',
        SocialIcon: FaLinkedin, 
    },
    ],
    
};

export default footerContent;
