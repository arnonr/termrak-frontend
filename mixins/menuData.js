export default {
  data() {
    return {
      menuData: [
        {
          id: 1,
          hasDropdown: false,
          title: 'Home',
          link: "/",
        },
        {
          id: 2,
          title: "Service",
          hasDropdown: false,
          link: "/news",
        },
        {
          id: 3,
          title: "Projects",
          hasDropdown: false,
          link: "/project",
        },
        {
          id: 4,
          title: "News",
          hasDropdown: false,
          link: "/news",
        },
        {
          id: 5,
          title: "About Us",
          hasDropdown: true,
          link: "#",
          submenus: [
            { title: "History", link: "/about-us/1" },
            { title: "Goal", link: "/about-us/2" },
            { title: "Administrator", link: "/administrator" },
          ],
        },
        {
          id: 6,
          hasDropdown: false,
          title: "Contact Us",
          link: "/contact-us",
        },
      ],
    };
  },
};
