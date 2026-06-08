import FrameworkTree from './FrameworkTree'
import { FaProjectDiagram, FaUserTie, FaShieldAlt, FaSitemap, FaPuzzlePiece, FaLightbulb } from 'react-icons/fa'

const items = [
  { 
    title: 'Program Management', 
    desc: 'Defining charter, schedule, resource plan and tracking mechanisms.', 
    icon: <FaProjectDiagram />,
    content: (
      <div>
        <h4>Program Management Framework</h4>
        <p>We believe program management is an art that needs to be done in a systematic way leveraging technology. At the core, overall program management requires key areas for any program implementation.</p>
        <ul>
          <li>Defining the program charter and developing overall program management plan, schedule and resourcing plan.</li>
          <li>Deploying right tools to track and publish tasks with all participants in the program.</li>
          <li>Developing mechanisms for real-time status on progress.</li>
          <li>Engaging all stakeholders on the same platform for project management.</li>
          <li>Tracking critical chain and preventing task slippage.</li>
          <li>Estimation of effort and budget for the program.</li>
        </ul>
      </div>
    )
  },
  { 
    title: 'Domain Expertise', 
    desc: 'Leveraging domain knowledge and product networks for execution.', 
    icon: <FaUserTie />,
    content: (
      <div>
        <h4>Domain Expertise</h4>
        <ul>
          <li>Program manager with required domain experience in implementing solutions for the specific industry.</li>
          <li>Leverage product network and vendor interfaces for knowledge execution.</li>
          <li>Overall business knowledge to integrate solutions as part of key organizational products.</li>
          <li>Understanding dependency of various functionalities to sequence the program correctly.</li>
        </ul>
      </div>
    )
  },
  { 
    title: 'Risk Mitigation', 
    desc: 'Comprehensive risk identification and continuous monitoring.', 
    icon: <FaShieldAlt />,
    content: (
      <div>
        <h4>Risk Mitigation Framework</h4>
        <ul>
          <li>Essential to identify risks and implement comprehensive risk mitigation strategies.</li>
          <li>Continuously look for alternatives to tasks at risk of derailing the program.</li>
          <li>Monitor multitasking and non-availability of people concentrating on specific projects.</li>
          <li>Identify potential risks in various parties and strengthen communication and exchange.</li>
        </ul>
      </div>
    )
  },
  { 
    title: 'Governance', 
    desc: 'Creating right channels for proactive stakeholder communication.', 
    icon: <FaSitemap />,
    content: (
      <div>
        <h4>Governance Framework</h4>
        <ul>
          <li>Governance as a framework for communicating with stakeholders and keeping them informed.</li>
          <li>Getting things done by gaining attention of decision makers.</li>
          <li>Creating right channels of communication and proactive communication.</li>
          <li>Ensuring all stakeholders are aligned with the program manager during the journey.</li>
        </ul>
      </div>
    )
  },
  { 
    title: 'Ecosystem Integration', 
    desc: 'Engaging partners and planning system integrations effectively.', 
    icon: <FaPuzzlePiece />,
    content: (
      <div>
        <h4>Ecosystem Integration Framework</h4>
        <ul>
          <li>Various partners involved need to be clearly engaged to deliver the program successfully.</li>
          <li>Clear plan for integration with various other systems and platforms.</li>
          <li>Clear plan for infrastructure on cloud as this is key for many SaaS solutions.</li>
        </ul>
      </div>
    )
  },
  { 
    title: 'Knowledge Network', 
    desc: 'Creating forums for domain, technology and program competency sharing.', 
    icon: <FaLightbulb />,
    content: (
      <div>
        <h4>Knowledge Network</h4>
        <ul>
          <li>Identify overall knowledge required for the program and engage experts from outside and inside constantly.</li>
          <li>Create a forum for sharing knowledge about the domain, technology and specific program competencies.</li>
          <li>Provide a platform for people to ask questions and get answers quickly, reducing project lag significantly.</li>
        </ul>
      </div>
    )
  },
]

export default function Promaf() {
  return (
    <FrameworkTree
      title="PROMAF Framework"
      description="We believe program management is an art that needs to be done in a systematic way leveraging technology. At the core, overall program management require 5 key areas, which are core for any program implementation."
      items={items}
      bgClass="promaf-bg"
      layoutType="graph"
    />
  )
}