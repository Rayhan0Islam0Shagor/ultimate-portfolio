import { DiReact, DiTerminal } from 'react-icons/di';
import { SiFirebase, SiGit, SiMongodb, SiJavascript } from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';

export const Skills = [
  {
    slug: 'javascript',
    Component: SiJavascript,
    title: 'JavaScript',
    Description: () => (
      <>Javascript is a scripting high perform programming language.</>
    ),
  },
  {
    slug: 'react',
    Component: DiReact,
    title: 'React',
    Description: () => (
      <>ReactJs is a high performed Javascript library. I work with React.</>
    ),
  },
  {
    slug: 'git',
    Component: SiGit,
    title: 'Git',
    Description: () => (
      <>Git is a tool that I use every day. I use GitHub for pushing my code.</>
    ),
  },
  {
    slug: 'nodejs',
    Component: FaNodeJs,
    title: 'NodeJs',
    Description: () => <>I also work with nodejs backend technology.</>,
  },
  {
    slug: 'mongodb',
    Component: SiMongodb,
    title: 'MongoDB',
    Description: () => <>For database I prefer mongodb is a good choice</>,
  },
  {
    slug: 'firebase',
    Component: SiFirebase,
    title: 'Firebase',
    Description: () => (
      <>I have used Firebase for auth, database & firestore in my apps.</>
    ),
  },
];
