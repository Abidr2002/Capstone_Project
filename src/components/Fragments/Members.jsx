import PropTypes from 'prop-types';
import LogoSVG from '../Elements/LogoSVG';

const members = [
  {
    name: 'Tralya Dharmada',
    role: 'Project Manager',
    imageSrc: '/images/profile/tral.jpg',
    socialMedia: [
      { name: 'Instagram', url: 'https://www.instagram.com/tralyaa_/' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/tralya-dharmada/' },
      { name: 'Github', url: 'https://github.com/tralyaa' }
    ],
  },
  {
    name: 'Muhammad Abyan Shidqi',
    role: 'Front-End Developer',
    imageSrc: '/images/profile/abyan.jpg',
    socialMedia: [
      { name: 'Instagram', url: 'https://www.instagram.com/abyansdq/' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/abyansdq/' },
      { name: 'Github', url: 'https://github.com/abyansdq' },
    ],
  },
  {
    name: 'Prasetya Kusuma Atmaja',
    role: 'Front-End Developer',
    imageSrc: '/images/profile/pras.jpeg',
    socialMedia: [
      { name: 'Instagram', url: 'https://instagram.com/prstyaka_/' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/prasetya-kusuma-atmaja-15630a29a/' },
      { name: 'Github', url: 'https://github.com/praset911' },
    ],
  },
  {
    name: 'Mohammad Agil Rofiqul Zein',
    role: 'Back-End Developer',
    imageSrc: '/images/profile/agil.jpeg',
    socialMedia: [
      { name: 'Instagram', url: 'https://https://instagram.com/11agil/' },
      { name: 'Linkedin', url: 'https://www.linkedin.com/in/mohammad-agil/' },
      { name: 'Github', url: 'https://https://github.com/Mohammadagil' },
    ],
  },
  {
    name: 'Ahmad Hauzan Abid Romadhon',
    role: 'Back-End Developer',
    imageSrc: '/images/profile/abid.jpg',
    socialMedia: [
      { name: 'Instagram', url: 'https://#/' },
      { name: 'Linkedin', url: 'https://https://www.linkedin.com/in/abid-romadhon/' },
      { name: 'Github', url: 'https://https://github.com/Abidr2002' },
    ],
  },
];

const MemberProfile = ({ name, role, imageSrc, socialMedia }) => (
  <div className="rounded-md mb-10 bg-white sm:mb-0 sm:w-64 md:w-80 hover:-translate-y-4 duration-500 ease-in-out">
    <img
      src={imageSrc}
      alt={`${name} Profile`}
      className="w-[200px] h-[200px] object-cover rounded-full m-auto"
    />
    <div className="px-6 pt-4">
      <p className="font-bold text-xl mb-2 text-slate-700">{name}</p>
      <p className="text-sm text-slate-600">{role}</p>
    </div>
    <LogoSVG socialMedia={socialMedia} />
  </div>
);

MemberProfile.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

const Members = () => (
  <section id="memberSection" className="my-20">
    <h2 className="mb-10 text-center font-bold text-3xl text-slate-700">
      Meet Our Members
    </h2>
    <div className="container mx-auto px-6 font-inter sm:flex sm:flex-wrap sm:gap-6 sm:justify-evenly">
      {members.map((member, index) => (
        <MemberProfile key={index} {...member} />
      ))}
    </div>
  </section>
);

export default Members;
