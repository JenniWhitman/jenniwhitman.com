import { Job } from './WorkSection'
import WorkSection from "./WorkSection"

const jobs: Job[] = [
  {
    title: 'Administrative Tech. Systems Admin',
    company: 'Harvard Business School',
    range: 'June 2015 – July 2016',
    summary: 'Led service redesign initiatives, creating a comprehensive CMDB and service plans.',
    details: ['Fostered relationships across IT and university partners.'],
  },
  {
    title: 'Technical Consultant',
    company: 'Harvard Business School',
    range: 'Nov 2014 – June 2015',
    summary: '',
    details: [],
  },
  {
    title: 'Senior Client Service Representative',
    company: 'Harvard Medical School',
    range: 'Dec 2011 – Nov 2014',
    summary: '',
    details: [],
  },
  {
    title: 'Teaching Assistant',
    company: 'Harvard University Extension School',
    range: 'Sept 2014 – Dec 2022',
    summary: 'Assisted in teaching courses on web application development using PHP and Laravel, MySQL, and supporting technologies.',
    details: ['Provided support to students in online and in-person settings.'],
  },
  {
    title: 'Web & Software Development Consultant',
    company: 'Self-employed, contract basis',
    range: '2011 – present',
    summary: 'Developed large-scale applications for data scraping and accounting using Django, Python, and JavaScript.',
    details: ['Built small websites and applications for private clients.'],
  },
];

const OtherExperienceSection = () => {

  return (
    <WorkSection key='otherExperience' title={'Other Experience'} jobs={jobs}/>
  )
}

export default OtherExperienceSection;