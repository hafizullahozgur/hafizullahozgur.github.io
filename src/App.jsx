// App.jsx

import "./App.css";

export default function App() {
  return (
    <div className="container">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="profile">
          <div className="profile-image">
            <img src="/profile1.jpg" alt="Hafizullah Ozgur" />
          </div>

          <div className="profile-info">
            <h1>
              Hafizullah
              <br />
              Ozgur
            </h1>

            <p>Senior POS & Payment Systems Developer</p>
          </div>
        </div>

        {/* CONTACT */}
        <div className="small-section">
          <h3>CONTACT INFORMATION</h3>

          <p>Email: hafizullah.ozgur@gmail.com</p>

          <p>
            LinkedIn:
            <a
              href="https://www.linkedin.com/in/hafizullah-ozgur/"
              target="_blank"
              rel="noreferrer"
            >
              linkedin
            </a>
          </p>

          <p>Address: Istanbul</p>
          <p>Phone: +90 507 609 0344</p>
          <p>Date of Birth: 15 Feb. 1988</p>
          <p>Marital Status: Married</p>
          <p>Children: 1</p>
        </div>

        {/* LANGUAGE */}
        <div className="small-section">
          <h3>LANGUAGE</h3>

          <p>English Proficiency: 75/100</p>
        </div>

        {/* ACHIEVEMENTS */}
        <div className="small-section">
          <h3>ACHIEVEMENTS</h3>

          <p>Altınbaş University 100% Scholarship</p>
          <p>Driving License: B</p>
        </div>

        {/* SKILLS */}
        <div className="small-section">
          <h3>CORE TECHNOLOGY SKILLS</h3>

          <ul>
            <li>C#</li>
            <li>ISO8583</li>
            <li>EMV</li>
            <li>TLV</li>
            <li>Kotlin</li>
            <li>Java</li>
            <li>.NET 6/7/8</li>
            <li>Docker</li>
            <li>Oracle</li>
            <li>IBMMQ</li>
            <li>RSA</li>
            <li>DES / 3DES</li>
            <li>OpenSSL</li>
            <li>Angular</li>
            <li>Python</li>
            <li>C/C++</li>
          </ul>
        </div>

        {/* ARCHITECTURES */}
        <div className="small-section">
          <h3>ARCHITECTURES</h3>

          <ul>
            <li>Onion Architecture</li>
            <li>Domain-Driven Design</li>
            <li>Repository Pattern</li>
          </ul>
        </div>

        {/* DESIGN PATTERNS */}
        <div className="small-section">
          <h3>DESIGN PATTERNS</h3>

          <ul>
            <li>Abstract Factory</li>
            <li>Factory Method</li>
            <li>Prototype</li>
            <li>Singleton</li>
            <li>Proxy</li>
            <li>Adapter</li>
            <li>Decorator</li>
            <li>Visitor</li>
            <li>Observer</li>
            <li>Strategy</li>
          </ul>
        </div>
      </aside>

      {/* MAIN */}
      <main className="main">
        <a
          href="/hafizozgur_cv.pdf"
          download
          className="cv-btn"
        >
          Download CV
        </a>

        {/* SUMMARY */}
        <section className="card">
          <h2 className="card-title">Professional Summary</h2>

          <ul className="summary">
            <li>
              Payments and POS application development: in Java & Kotlin for
              Türkiye and Slovakia markets Experience with BKM TechPOS, VUK, ÖKC compliance
              Strong knowledge of EMV and payment terminal technologies
            </li>

            <li>
              Card Personalization: Development of bank card personalization
              applications Building and maintaining card personalization management portals
            </li>

            <li>
              Backend and Programming: C#, .NET (6/7/8), Entity Framework Core,
              LINQ, Python, C/C++ ISO 8583 messaging, TLV parsing & data handling
            </li>

            <li>Cryptography and security: OpenSSL, RSA, DES / 3DES</li>
            <li>
              Infrastructure & Integration: API applications, Docker, IBMMQ
            </li>
          </ul>
        </section>

        {/* EXPERIENCE */}
        <section className="card">
          <h2 className="card-title">Experience (8+ Years)</h2>

          {/* VERISOFT */}
          <div className="experience-item">
            <div className="date">Jul. 2022 – Dec. 2025</div>

            <div className="company">Verisoft</div>

            <div className="role">Software Developer</div>

            <p>
              Card Perso and POS app developer (Kotlin, java), ISO8583, TLV, C#,
              Net8, Net7, Net6, API between pos device apps, IBMMQ, Docker,
              Angular, typescript, EMV, Oracle, T-SQL, Python, C/C++, RSA, DES,
              3DES, OpenSSL
            </p>

            <div className="badges">
              <div className="badge">C#</div>
              <div className="badge">Kotlin</div>
              <div className="badge">Java</div>
              <div className="badge">ISO8583</div>
              <div className="badge">EMV</div>
              <div className="badge">IBMMQ</div>
              <div className="badge">Docker</div>
              <div className="badge">Oracle</div>
              <div className="badge">OpenSSL</div>
            </div>
          </div>

          {/* IBN HALDUN */}
          <div className="experience-item">
            <div className="date">Sep. 2021 – Jun. 2022</div>

            <div className="company">İbn Haldun Üniversitesi</div>

            <div className="role">Software Developer</div>

            <p>
              .Net 6 Core & C#, Services & Integration, JS, Ajax, JQuery, LINQ,
              HTML5, CSS, Bootstrap, etc (Full Stack)
            </p>
          </div>

          {/* CLOCKWORK */}
          <div className="experience-item">
            <div className="date">Mar. 2020 – Sep. 2021</div>

            <div className="company">Clockwork</div>

            <div className="role">Software Developer</div>

            <p>
              C#, .Net, SAP Service Consuming & Integration, .Net API, JS, Ajax,
              JQuery, LINQ, HTML5, CSS, Bootstrap, etc (Full Stack)
            </p>
          </div>

          {/* MAGICLICK */}
          <div className="experience-item">
            <div className="date">Mar. 2018 – Feb. 2020</div>

            <div className="company">MagiClick</div>

            <div className="role">Software Developer</div>

            <p>
              C#, .Net, MSSQL, LINQ, NHibernate .Net Framework, Entity
              Framework, HTML5, CSS, Javascript, JQuery, Ajax, Bootstrap,
              HangFire, AntiXSS, CacheManager, Castle.Core, Castle.Windsor,
              (Backend)
            </p>
          </div>

          {/* VADI */}
          <div className="experience-item">
            <div className="date">Sep. 2017 – Feb. 2018</div>

            <div className="company">Vadi Kurumsal Bilgi Sistemleri</div>

            <div className="role">Software Developer</div>

            <p>
              Java Programming Language (JSF JSP technologies), Oracle (Toad),
              Git, iReport, JavaScript, CSS, jQuery, etc. (Backend)
            </p>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="card">
          <h2 className="card-title">Education</h2>

          <div className="education-item">
            <h3>Yıldız Technical University</h3>

            <div className="date">2022 – 2024</div>

            <p>M.Sc. Computer Engineering (GPA: 3.00/4.00) — Graduated</p>
          </div>

          <div className="education-item">
            <h3>Altınbaş University</h3>

            <div className="date">2014 – 2018</div>

            <p>
              B.Sc. Computer Engineering English 100% Scholarship (GPA:
              2.02/4.00) — Graduated
            </p>
          </div>

          <div className="education-item">
            <h3>Maltepe University</h3>

            <div className="date">2013 – 2014</div>

            <p>
              B.Sc. Software Engineering and Computer Education & Instructional
              Technology (Farabi Exchange Program)
            </p>
          </div>

          <div className="education-item">
            <h3>Ondokuz Mayıs University</h3>

            <div className="date">2010 – 2014</div>

            <p>
              B.Sc. Computer and Instructional Technologies Education Program
              (GPA: 2.48/4.00) — Graduated
            </p>
          </div>
        </section>

        {/* GENERAL INFO */}
        <section className="card">
          <h2 className="card-title">General Information</h2>

          <ul
            style={{
              paddingLeft: "20px",
              color: "#444",
              lineHeight: "2",
            }}
          >
            <li>
              Developed İşbankası credit and debit transaction queue
              applications using IBMQ.
            </li>

            <li>Developed POS applications for Slovakia and Türkiye.</li>

            <li>Worked on Burgan Bank card personalization applications.</li>

            <li>Worked on Boubyan Bank applications.</li>

            <li>Developed many console, API and portal applications.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
