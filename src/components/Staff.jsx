import { FaUserTie } from 'react-icons/fa'
import { staffMembers } from '../data/staff.js'

export default function Staff() {
  return (
    <section id="staff" className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 56 }} data-aos="fade-up">
          <p className="section-tag" style={{ justifyContent: 'center' }}>
            Equipo Técnico
          </p>
          <h2 className="section-title">
            NUESTRO <span>STAFF</span>
          </h2>
          <div className="gold-line" style={{ margin: '0 auto' }} />
        </div>

        {staffMembers.length > 0 ? (
          <div className="staff-grid">
            {staffMembers.map((member, idx) => (
              <div
                key={member.id}
                className="staff-card"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className="staff-photo">
                  {member.photo ? (
                    <>
                      <img className="staff-photo-bg" src={member.photo} alt="" aria-hidden="true" />
                      <img className="staff-photo-fg" src={member.photo} alt={member.name} loading="lazy" />
                    </>
                  ) : (
                    <FaUserTie />
                  )}
                </div>
                <div className="staff-name">{member.name}</div>
                <div className="staff-role">{member.role}</div>
              </div>
            ))}
          </div>
        ) : (
          <p
            style={{
              textAlign: 'center',
              fontSize: '.82rem',
              color: 'rgba(245,245,245,.25)',
              fontFamily: 'var(--font-cond)',
              letterSpacing: '.1em',
              textTransform: 'uppercase',
            }}
            data-aos="fade-up"
          >
            Muy pronto: conoce a nuestro cuerpo técnico
          </p>
        )}
      </div>
    </section>
  )
}
