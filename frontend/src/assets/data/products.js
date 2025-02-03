import imageCase1 from '../../assets/images/cases/nostra.png';
import imageCase2 from '../../assets/images/cases/global_roster.png';
import imageCase3 from '../../assets/images/cases/crisis_2.png';
import imageCase4 from '../../assets/images/cases/weeklydashboard.png';

export const products = [
  {
    title: 'Nostradumus',
    description: 'Nostradamus offers a monthly global disaster overview with projections for the upcoming month and a detailed action plan. It prioritizes response strategies across regions, ensuring rapid mobilization and enhanced disaster readiness.',
    image: imageCase1,
    coming_soon: false,
    link: 'https://public.tableau.com/views/WorldDisasterCentreReport/Overview?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  },
  {
    title: 'Crisis Atlas',
    description: 'Crisis Atlas offers a weekly global disaster overview of the latest disasters happening globally, as well as the projected disater events in the following week.',
    image: imageCase4,
    coming_soon: false,
    link: 'https://public.tableau.com/views/WorldDisasterCentreReport-ActNowforTomorrow/WeeklyDashboard?:language=en-US&publish=yes&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link',
  }, 
  {
    title: 'Global Disaster Roster Portal',
    description: 'Connect individuals, organizations, and companies globally, to close funding gaps.',
    image: imageCase2,
    coming_soon: true,
    link: '',
  }
];
