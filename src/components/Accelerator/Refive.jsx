import FrameworkTree from './FrameworkTree'
import { FaLightbulb, FaChartLine, FaBullhorn, FaSitemap, FaEye } from 'react-icons/fa'

const items = [
  { 
    title: 'Re-Imagine', 
    desc: 'Creating a unifying purpose through stakeholder vision mapping.', 
    icon: <FaLightbulb />,
    content: (
      <div>
        <h4>Re-Imagine</h4>
        <p>The underlying process is a systematic mapping and correlation of multiple stakeholder views and aspirations deliberated in a senior management Strategy workshop to create a unifying Purpose of the customer organization through a Vision for the next three to five years.</p>
      </div>
    )
  },
  { 
    title: 'Re-Calibrate', 
    desc: 'Strengthening thought leadership and building operational leaders.', 
    icon: <FaChartLine />,
    content: (
      <div>
        <h4>Re-Calibrate</h4>
        <p>The underlying process is to strengthen thought leadership of the customer organization through planned interventions and mentoring in building operational leaders who can act independently, yet cohesively to power to the next stage of growth. A Strategic Business Plan in alignment with the vision is the key outcome of this stage.</p>
      </div>
    )
  },
  { 
    title: 'Re-Position', 
    desc: 'Holistic rebranding and strategic communication planning.', 
    icon: <FaBullhorn />,
    content: (
      <div>
        <h4>Re-Position</h4>
        <p>The underlying process is a detailed understanding of market trends and expectations, both customer and competitive, for a focused and holistic rebranding exercise for the customer organization and then ensuring a rigorous articulation to all stakeholders through a systematically designed communication plan.</p>
      </div>
    )
  },
  { 
    title: 'Re-Structure', 
    desc: 'Annual Operating Plan with Balanced Score Card alignment.', 
    icon: <FaSitemap />,
    content: (
      <div>
        <h4>Re-Structure</h4>
        <p>The underlying process is to enable and empower the associates of customer organization through an Annual Operating Plan that details the roles, responsibilities and goals of different functions of the organization. The ongoing management of the process should be through an integrated Balanced Score Card that is aligned to the strategic business plan.</p>
      </div>
    )
  },
  { 
    title: 'Re-View', 
    desc: 'Institutionalizing a structured governance and review framework.', 
    icon: <FaEye />,
    content: (
      <div>
        <h4>Re-View</h4>
        <p>The underlying process is to create a simplified and holistic review, support and rewarding mechanism aimed at institutionalizing a structured governance framework.</p>
      </div>
    )
  },
]

export default function Refive() {
  return (
    <section id="refive" style={{ background: '#EDE0F5' }}>
      <FrameworkTree
        title="RE-FIVE Framework"
        description="The RE-FIVE Framework ® is a proprietary tool of Zeta-V specifically developed for strategic growth assessment of our customers. This study has deployed the framework in the 4D process of Discuss, Digest, Diagnose and Draw."
        items={items}
        bgClass="refive-bg"
        layoutType="stacked"
      />
    </section>
  )
}