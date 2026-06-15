import FrameworkTree from './FrameworkTree'
import { FaUsers, FaClipboardCheck, FaHeart, FaUserCheck, FaBrain, FaComments } from 'react-icons/fa'

const items = [
  { 
    title: 'One Touch Network', 
    desc: 'Direct experiential references over database searched profiles.', 
    icon: <FaUsers />,
    content: (
      <div>
        <h4>One Touch Network</h4>
        <p>The HexaFit framework prioritizes direct experiential references over database searched profiles. While the resume details about specific work experience, it usually does not capture the finer nuances of an individual's working style.</p>
        <p>At Zeta-V, all recommended candidates would have worked with leadership team of Zeta-V or it's council of advisors for a minimum period of one year. The council of advisors constitute senior leaders from a wide range of industries and technology domains.</p>
      </div>
    )
  },
  { 
    title: '3T Summit Evaluation', 
    desc: '360 degree evaluation with self, peer and Zeta-V assessment.', 
    icon: <FaClipboardCheck />,
    content: (
      <div>
        <h4>3T Summit Evaluation Process</h4>
        <p>The HexaFit Framework advocates a 360 degree evaluation of the candidate before recommendation to the customer. This involves self-evaluation, peer evaluation and Zeta-V evaluation.</p>
        <p>The self-evaluation and peer-evaluation focus on different aspects of the candidate and Zeta-V evaluation examines the aspects of consistency and behavioral approach.</p>
      </div>
    )
  },
  { 
    title: 'Value Alignment Index', 
    desc: 'Stringent value system evaluation for cultural fitment.', 
    icon: <FaHeart />,
    content: (
      <div>
        <h4>Value Alignment Index</h4>
        <p>At Zeta-V, we believe that an individual's value system is the bedrock of performance. As such, a stringent value system evaluation is undertaken by one of the Directors of Zeta-V as part of the evaluation process. The focus is on Integrity, Learning, Respect and Caring.</p>
        <p>The HexaFit framework also maps the prospective employer organization's core values and assesses the candidate's alignment with such values. Cultural fitment and value alignment are critical for a candidate to deliver on the role expectations.</p>
      </div>
    )
  },
  { 
    title: 'Extended Compatibility', 
    desc: 'Evaluating compatibility beyond the job description.', 
    icon: <FaUserCheck />,
    content: (
      <div>
        <h4>Extended Compatibility Reference</h4>
        <p>Going beyond the Job Description, the HexaFit framework evaluates the candidate's compatibility with extended business functions. At medium to senior levels, it is vitally important to ensure that the candidate has a fair understanding and appreciation of the impacted stakeholders and is able to empathize their expectations.</p>
        <p>The extended compatibility check also examines non-technical aspects of digital friendliness, social compatibility, networking skills and leadership styles.</p>
      </div>
    )
  },
  { 
    title: 'MBTI Aspiration Fitment', 
    desc: 'Matching careers to aspirations with psychometric assessment.', 
    icon: <FaBrain />,
    content: (
      <div>
        <h4>MBTI based Aspiration Fitment</h4>
        <p>At Zeta-V, we believe in matching careers to aspirations. While a good role fitment would deliver short term results, aspiration fitment ensures synergistic value creation. Hence, proposed candidates undergo a Myers Briggs Test to psychometrically assess their personality fitment for the desired role and career aspirations.</p>
        <p>The HexaFit framework undertakes prospective employer organization's trajectory and in consultation with the hiring manager establishes a potential career path. Candidate fitment with this potential path is essential part of the process.</p>
      </div>
    )
  },
  { 
    title: '4Q Mentoring & Coaching', 
    desc: 'Quarterly coaching and continuous interactive mentoring sessions.', 
    icon: <FaComments />,
    content: (
      <div>
        <h4>4Q Mentoring and Coaching</h4>
        <p>Each proposed candidate is a part of the Zeta-V family. As such, we ensure hand-holding sessions for all our candidates through quarterly coaching sessions.</p>
        <p>Continuous interactive mentoring, both online and in person, is administered for each deployed candidate. This is done with no additional burden on the candidate or to the employer organization.</p>
      </div>
    )
  },
]

export default function HexaFit() {
  return (
    <section id="hexafit">
      <FrameworkTree
        title="HexaFit Framework"
        description="A proprietary talent sourcing and evaluation framework for enterprise-grade candidate selection."
        items={items}
        bgClass="hexafit-bg"
        layoutType="zigzag"
      />
    </section>
  )
}