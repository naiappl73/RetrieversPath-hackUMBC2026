module.exports = [
"[project]/lib/programs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// UMBC programs, minors and focus areas used by setup, the program browser and the planner.
// NOTE: compiled for the hackathon demo. Names and degree types should be checked against
// the UMBC catalog (catalog.umbc.edu) before launch; requirements change every year.
__turbopack_context__.s([
    "areaOf",
    ()=>areaOf,
    "areas",
    ()=>areas,
    "colleges",
    ()=>colleges,
    "experienceOptions",
    ()=>experienceOptions,
    "focusAreas",
    ()=>focusAreas,
    "getProgram",
    ()=>getProgram,
    "levelLabels",
    ()=>levelLabels,
    "minors",
    ()=>minors,
    "programs",
    ()=>programs,
    "yearsByLevel",
    ()=>yearsByLevel
]);
const CNMS = "Natural & Mathematical Sciences";
const COEIT = "Engineering & Information Technology";
const CAHSS = "Arts, Humanities & Social Sciences";
const ERICKSON = "Erickson School of Aging Studies";
const GRAD = "Graduate School";
// Helper keeps the big list below readable.
function p(id, name, degree, level, college, family, summary, careers, skills) {
    return {
        id,
        name,
        degree,
        level,
        college,
        family,
        summary,
        careers,
        skills
    };
}
const programs = [
    // ---------- Undergraduate: computing & engineering ----------
    p("cs-bs", "Computer Science", "B.S.", "undergrad", COEIT, "computing", "Algorithms, systems, and software, with electives in AI, security, data science and graphics.", [
        "Software Engineer",
        "Machine Learning Engineer",
        "Data Scientist",
        "Security Engineer",
        "Health Informatics Developer",
        "UX Engineer"
    ], [
        "Programming (Python, Java, C)",
        "Data structures & algorithms",
        "Git",
        "Testing",
        "Databases"
    ]),
    p("cmpe-bs", "Computer Engineering", "B.S.", "undergrad", COEIT, "engineering", "Where hardware meets software: embedded systems, digital design, and networks.", [
        "Embedded Systems Engineer",
        "Hardware Engineer",
        "Medical Device Engineer",
        "Robotics Engineer",
        "FPGA Engineer"
    ], [
        "C/C++",
        "Digital logic",
        "Microcontrollers",
        "Circuit analysis",
        "Signal processing"
    ]),
    p("is-bs", "Information Systems", "B.S.", "undergrad", COEIT, "computing", "Technology in organizations: databases, analytics, HCI, and systems design.", [
        "Data Analyst",
        "Business Analyst",
        "UX Researcher",
        "Health IT Analyst",
        "Product Manager",
        "Cybersecurity Analyst"
    ], [
        "SQL",
        "Data analysis",
        "Systems analysis",
        "UX research",
        "Project management"
    ]),
    p("bta-bs", "Business Technology Administration", "B.S.", "undergrad", COEIT, "business", "Business fundamentals combined with information technology management.", [
        "IT Project Manager",
        "Business Analyst",
        "Operations Analyst",
        "Technology Consultant"
    ], [
        "Project management",
        "Business analysis",
        "Spreadsheets & SQL",
        "Communication"
    ]),
    p("me-bs", "Mechanical Engineering", "B.S.", "undergrad", COEIT, "engineering", "Design, thermal-fluid systems, mechanics, and manufacturing.", [
        "Mechanical Design Engineer",
        "Biomedical Device Engineer",
        "Aerospace Engineer",
        "Manufacturing Engineer",
        "Energy Systems Engineer"
    ], [
        "CAD (SolidWorks)",
        "MATLAB",
        "Statics & dynamics",
        "Thermodynamics",
        "Prototyping"
    ]),
    p("che-bs", "Chemical Engineering", "B.S.", "undergrad", COEIT, "engineering", "Chemical and biological process engineering, with a strong biotech track.", [
        "Process Engineer",
        "Bioprocess Engineer",
        "Pharmaceutical Engineer",
        "Environmental Engineer"
    ], [
        "Process design",
        "Thermodynamics",
        "Lab safety",
        "MATLAB / Python",
        "Bioprocessing"
    ]),
    // ---------- Undergraduate: sciences & math ----------
    p("bio-bs", "Biological Sciences", "B.S./B.A.", "undergrad", CNMS, "life-science", "Cell biology, genetics, ecology, and physiology with extensive lab and research options.", [
        "Research Technician",
        "Physician (pre-med)",
        "Genetic Counselor",
        "Biotech Associate",
        "Public Health Scientist"
    ], [
        "Lab techniques",
        "Experimental design",
        "Scientific writing",
        "R or Python",
        "Statistics"
    ]),
    p("bioinf-bs", "Bioinformatics and Computational Biology", "B.S.", "undergrad", CNMS, "life-science", "Biology plus computing to analyze genomes, proteins, and biomedical data.", [
        "Bioinformatics Analyst",
        "Computational Biologist",
        "Genomics Data Scientist",
        "Biomedical Research Programmer"
    ], [
        "Python / R",
        "Genomics tools",
        "Statistics",
        "Molecular biology",
        "Linux command line"
    ]),
    p("bchm-bs", "Biochemistry and Molecular Biology", "B.S.", "undergrad", CNMS, "life-science", "The chemistry of life: proteins, enzymes, and molecular mechanisms.", [
        "Biochemist",
        "Pharmaceutical Scientist",
        "Physician (pre-med)",
        "Clinical Lab Scientist"
    ], [
        "Biochemical assays",
        "Protein chemistry",
        "Lab techniques",
        "Data analysis"
    ]),
    p("chem-bs", "Chemistry", "B.S./B.A.", "undergrad", CNMS, "physical-science", "Analytical, organic, physical, and inorganic chemistry with research opportunities.", [
        "Analytical Chemist",
        "Pharmaceutical Chemist",
        "Materials Scientist",
        "Forensic Chemist",
        "Chemistry Teacher"
    ], [
        "Instrumentation",
        "Synthesis",
        "Lab safety",
        "Data analysis",
        "Technical writing"
    ]),
    p("phys-bs", "Physics", "B.S./B.A.", "undergrad", CNMS, "physical-science", "Mechanics, electromagnetism, quantum, and atmospheric and astrophysics research.", [
        "Physicist",
        "Data Scientist",
        "Optical Engineer",
        "Medical Physicist",
        "Atmospheric Scientist"
    ], [
        "Mathematical modeling",
        "Python",
        "Experimental physics",
        "Data analysis"
    ]),
    p("math-bs", "Mathematics", "B.S./B.A.", "undergrad", CNMS, "math", "Pure and applied mathematics, with options in actuarial science and education.", [
        "Data Scientist",
        "Actuary",
        "Operations Research Analyst",
        "Math Teacher",
        "Quantitative Analyst"
    ], [
        "Proof writing",
        "Linear algebra",
        "Modeling",
        "Python / MATLAB",
        "Statistics"
    ]),
    p("stat-bs", "Statistics", "B.S.", "undergrad", CNMS, "math", "Probability, statistical modeling, and data analysis.", [
        "Statistician",
        "Biostatistician",
        "Data Scientist",
        "Actuary",
        "Survey Analyst"
    ], [
        "R",
        "SAS / Python",
        "Regression",
        "Experimental design",
        "Data visualization"
    ]),
    p("envs-bs", "Environmental Science", "B.S.", "undergrad", CAHSS, "physical-science", "Earth systems, ecology, and environmental data, with GIS and field work.", [
        "Environmental Scientist",
        "GIS Analyst",
        "Conservation Scientist",
        "Environmental Consultant"
    ], [
        "GIS",
        "Field methods",
        "Data analysis",
        "Environmental policy"
    ]),
    // ---------- Undergraduate: social sciences & psychology ----------
    p("psyc-ba", "Psychology", "B.A./B.S.", "undergrad", CAHSS, "psychology", "Behavior and mental processes: clinical, developmental, social, cognitive, and I/O psychology.", [
        "Clinical Psychologist",
        "Licensed Therapist (LPC/LCSW)",
        "School Counselor",
        "UX Researcher",
        "HR / I-O Specialist",
        "Research Coordinator"
    ], [
        "Research methods",
        "Statistics (SPSS/R)",
        "Active listening",
        "Scientific writing",
        "Ethics"
    ]),
    p("econ-ba", "Economics", "B.A.", "undergrad", CAHSS, "social-science", "Markets, policy, and data-driven economic analysis.", [
        "Economic Analyst",
        "Policy Analyst",
        "Financial Analyst",
        "Data Analyst",
        "Consultant"
    ], [
        "Econometrics",
        "Excel",
        "Stata / R",
        "Economic modeling",
        "Writing"
    ]),
    p("fin-econ-ba", "Financial Economics", "B.A.", "undergrad", CAHSS, "business", "Economics focused on financial markets, investment, and corporate finance.", [
        "Financial Analyst",
        "Investment Analyst",
        "Risk Analyst",
        "Banking Associate"
    ], [
        "Financial modeling",
        "Excel",
        "Econometrics",
        "Accounting basics"
    ]),
    p("posi-ba", "Political Science", "B.A.", "undergrad", CAHSS, "social-science", "Government, law, public policy, and international relations.", [
        "Policy Analyst",
        "Legislative Aide",
        "Attorney (pre-law)",
        "Campaign Manager",
        "Foreign Service Officer",
        "Intelligence Analyst"
    ], [
        "Policy analysis",
        "Research & writing",
        "Public speaking",
        "Data analysis"
    ]),
    p("soci-ba", "Sociology", "B.A.", "undergrad", CAHSS, "social-science", "Society, inequality, health, and communities, with strong research methods.", [
        "Social Researcher",
        "Program Evaluator",
        "Community Organizer",
        "Public Health Analyst"
    ], [
        "Survey research",
        "Qualitative interviews",
        "Statistics",
        "Writing"
    ]),
    p("sowk-ba", "Social Work", "B.A. (BSW)", "undergrad", CAHSS, "health", "Accredited social work practice with field placements in the community.", [
        "Licensed Clinical Social Worker",
        "School Social Worker",
        "Case Manager",
        "Medical Social Worker"
    ], [
        "Case management",
        "Counseling skills",
        "Advocacy",
        "Cultural humility"
    ]),
    p("gls-ba", "Global Studies", "B.A.", "undergrad", CAHSS, "social-science", "Interdisciplinary study of global issues, cultures, and international affairs.", [
        "International Development Specialist",
        "Foreign Service Officer",
        "NGO Program Manager"
    ], [
        "Cross-cultural communication",
        "Foreign language",
        "Research",
        "Policy analysis"
    ]),
    p("geog-ba", "Geography", "B.A./B.S.", "undergrad", CAHSS, "social-science", "People, places, and spatial data, with GIS and urban planning.", [
        "GIS Analyst",
        "Urban Planner",
        "Environmental Planner",
        "Cartographer"
    ], [
        "GIS (ArcGIS/QGIS)",
        "Spatial analysis",
        "Remote sensing",
        "Planning"
    ]),
    p("envst-ba", "Environmental Studies", "B.A.", "undergrad", CAHSS, "social-science", "Environmental policy, justice, and sustainability.", [
        "Sustainability Coordinator",
        "Environmental Policy Analyst",
        "Environmental Educator"
    ], [
        "Policy analysis",
        "Community engagement",
        "GIS basics",
        "Writing"
    ]),
    // ---------- Undergraduate: health ----------
    p("ehs-bs", "Emergency Health Services", "B.S.", "undergrad", CAHSS, "health", "Paramedicine, emergency management, and health administration.", [
        "Paramedic",
        "Emergency Manager",
        "Physician Assistant (pre-PA)",
        "Public Health Preparedness Specialist"
    ], [
        "Emergency medical care",
        "Incident command",
        "Health systems",
        "Leadership"
    ]),
    p("happ-ba", "Health Administration and Public Policy", "B.A.", "undergrad", CAHSS, "health", "How health systems are organized, financed, and improved.", [
        "Health Services Manager",
        "Health Policy Analyst",
        "Public Health Program Coordinator",
        "Hospital Administrator"
    ], [
        "Health policy",
        "Data analysis",
        "Program management",
        "Writing"
    ]),
    p("mgas-ba", "Management of Aging Services", "B.A.", "undergrad", ERICKSON, "health", "Leadership and business of services for older adults.", [
        "Senior Living Administrator",
        "Aging Services Manager",
        "Care Coordinator"
    ], [
        "Management",
        "Gerontology",
        "Finance basics",
        "Policy"
    ]),
    // ---------- Undergraduate: humanities ----------
    p("mcs-ba", "Media and Communication Studies", "B.A.", "undergrad", CAHSS, "humanities", "Media, culture, digital communication, and production.", [
        "Communications Specialist",
        "Social Media Manager",
        "Journalist",
        "UX Writer",
        "Public Relations Specialist"
    ], [
        "Writing",
        "Content strategy",
        "Video/audio production",
        "Audience research"
    ]),
    p("engl-ba", "English", "B.A.", "undergrad", CAHSS, "humanities", "Literature, writing, rhetoric, and communication and technology.", [
        "Technical Writer",
        "Editor",
        "Content Designer",
        "Teacher",
        "Attorney (pre-law)"
    ], [
        "Writing & editing",
        "Critical analysis",
        "Research",
        "Rhetoric"
    ]),
    p("hist-ba", "History", "B.A.", "undergrad", CAHSS, "humanities", "Historical research, public history, and museum work.", [
        "Historian",
        "Archivist",
        "Museum Educator",
        "Attorney (pre-law)",
        "Teacher"
    ], [
        "Archival research",
        "Writing",
        "Argumentation",
        "Digital humanities"
    ]),
    p("phil-ba", "Philosophy", "B.A.", "undergrad", CAHSS, "humanities", "Logic, ethics, and big questions, excellent preparation for law and tech ethics.", [
        "Attorney (pre-law)",
        "Ethics & Policy Analyst",
        "AI Ethics Researcher",
        "Consultant"
    ], [
        "Logic",
        "Argumentation",
        "Ethics",
        "Writing"
    ]),
    p("mll-ba", "Modern Languages, Linguistics & Intercultural Communication", "B.A.", "undergrad", CAHSS, "humanities", "Languages, linguistics, and communication across cultures.", [
        "Translator / Interpreter",
        "Computational Linguist",
        "International Business Associate",
        "Language Teacher"
    ], [
        "Foreign languages",
        "Linguistic analysis",
        "Intercultural communication"
    ]),
    p("gwst-ba", "Gender, Women's, and Sexuality Studies", "B.A.", "undergrad", CAHSS, "humanities", "Gender and sexuality across cultures, policy, and health.", [
        "Advocacy Coordinator",
        "Diversity & Inclusion Specialist",
        "Policy Analyst",
        "Nonprofit Manager"
    ], [
        "Research",
        "Advocacy",
        "Writing",
        "Community engagement"
    ]),
    p("afst-ba", "Africana Studies", "B.A.", "undergrad", CAHSS, "humanities", "History, cultures, and politics of Africa and the African diaspora.", [
        "Community Development Specialist",
        "Educator",
        "Policy Analyst",
        "Attorney (pre-law)"
    ], [
        "Research",
        "Writing",
        "Cultural analysis",
        "Public speaking"
    ]),
    p("asian-ba", "Asian Studies", "B.A.", "undergrad", CAHSS, "humanities", "Languages, cultures, and societies of Asia.", [
        "International Relations Specialist",
        "Translator",
        "Global Business Associate"
    ], [
        "Language skills",
        "Cultural analysis",
        "Research"
    ]),
    p("amst-ba", "American Studies", "B.A.", "undergrad", CAHSS, "humanities", "American culture, media, and communities.", [
        "Museum Professional",
        "Cultural Programs Manager",
        "Journalist"
    ], [
        "Cultural analysis",
        "Oral history",
        "Writing"
    ]),
    p("ancs-ba", "Ancient Studies", "B.A.", "undergrad", CAHSS, "humanities", "The ancient Mediterranean world: languages, history, and archaeology.", [
        "Archaeologist",
        "Museum Curator",
        "Teacher",
        "Attorney (pre-law)"
    ], [
        "Latin / Greek",
        "Archaeological methods",
        "Research"
    ]),
    p("inds-ba", "Interdisciplinary Studies", "B.A.", "undergrad", CAHSS, "humanities", "Design your own major around a question no single department covers.", [
        "Depends on your design: e.g. Health Equity Specialist, Tech Policy Analyst, Social Entrepreneur"
    ], [
        "Self-directed learning",
        "Research",
        "Synthesis across fields"
    ]),
    // ---------- Undergraduate: arts ----------
    p("art-ba", "Visual Arts", "B.A./B.F.A.", "undergrad", CAHSS, "arts", "Studio art, graphic design, animation, photography, and interactive media.", [
        "Graphic Designer",
        "UX/UI Designer",
        "Animator",
        "Art Director",
        "Illustrator"
    ], [
        "Adobe Creative Suite",
        "Figma",
        "Typography",
        "Motion design",
        "Portfolio development"
    ]),
    p("musc-ba", "Music", "B.A.", "undergrad", CAHSS, "arts", "Performance, composition, music technology, and education.", [
        "Music Educator",
        "Audio Engineer",
        "Composer",
        "Arts Administrator"
    ], [
        "Performance",
        "Music technology",
        "Theory",
        "Teaching"
    ]),
    p("danc-ba", "Dance", "B.A.", "undergrad", CAHSS, "arts", "Performance, choreography, and dance in the community.", [
        "Dancer",
        "Choreographer",
        "Dance Educator",
        "Arts Administrator"
    ], [
        "Choreography",
        "Performance",
        "Teaching",
        "Production"
    ]),
    p("thtr-ba", "Theatre", "B.A.", "undergrad", CAHSS, "arts", "Acting, design and production, and theatre studies.", [
        "Actor",
        "Stage Manager",
        "Production Designer",
        "Arts Administrator"
    ], [
        "Performance",
        "Design & tech",
        "Collaboration",
        "Project management"
    ]),
    // ---------- Undergraduate: other ----------
    p("tlst-bs", "Translational Life Science Technology", "B.S.", "undergrad", CNMS, "life-science", "Hands-on biotechnology for industry, offered at the Universities at Shady Grove.", [
        "Biotech Manufacturing Associate",
        "Quality Control Analyst",
        "Research Associate"
    ], [
        "GMP / lab techniques",
        "Quality systems",
        "Cell culture",
        "Data recording"
    ]),
    // ---------- Graduate (master's) ----------
    p("cs-ms", "Computer Science", "M.S.", "grad", COEIT, "computing", "Advanced study in AI, systems, security, and theory, with thesis and non-thesis options.", [
        "Senior Software Engineer",
        "ML Engineer",
        "Research Scientist",
        "Security Engineer"
    ], [
        "Advanced algorithms",
        "Machine learning",
        "Systems",
        "Research"
    ]),
    p("ds-mps", "Data Science", "M.P.S.", "grad", COEIT, "computing", "Professional program in data analysis, machine learning, and data engineering.", [
        "Data Scientist",
        "Machine Learning Engineer",
        "Data Engineer",
        "Analytics Manager"
    ], [
        "Python",
        "Machine learning",
        "Big data tools",
        "SQL",
        "Communication"
    ]),
    p("cyber-mps", "Cybersecurity", "M.P.S.", "grad", COEIT, "computing", "Applied security: defense, forensics, risk, and policy.", [
        "Security Analyst",
        "Penetration Tester",
        "Security Architect",
        "GRC Analyst"
    ], [
        "Network security",
        "Incident response",
        "Risk management",
        "Forensics"
    ]),
    p("is-ms", "Information Systems", "M.S.", "grad", COEIT, "computing", "Data science, HCI, health IT, and information management.", [
        "Data Analyst",
        "Health IT Specialist",
        "UX Researcher",
        "IT Manager"
    ], [
        "Data analytics",
        "Database design",
        "HCI",
        "Project management"
    ]),
    p("hcc-ms", "Human-Centered Computing", "M.S.", "grad", COEIT, "computing", "Design and evaluation of technology around people: UX, accessibility, and assistive tech.", [
        "UX Researcher",
        "UX Designer",
        "Accessibility Specialist",
        "Product Designer"
    ], [
        "User research",
        "Prototyping (Figma)",
        "Usability testing",
        "Accessibility (WCAG)"
    ]),
    p("engm-ms", "Engineering Management", "M.S.", "grad", COEIT, "engineering", "Leadership, project management, and operations for engineers.", [
        "Engineering Manager",
        "Program Manager",
        "Operations Manager"
    ], [
        "Project management",
        "Leadership",
        "Finance for engineers",
        "Systems thinking"
    ]),
    p("syse-ms", "Systems Engineering", "M.S.", "grad", COEIT, "engineering", "Designing and integrating complex systems across their life cycle.", [
        "Systems Engineer",
        "Requirements Engineer",
        "Defense Systems Engineer"
    ], [
        "Requirements",
        "Modeling (SysML)",
        "Integration & test",
        "Risk"
    ]),
    p("ee-ms", "Electrical Engineering", "M.S.", "grad", COEIT, "engineering", "Communications, signal processing, photonics, and microelectronics.", [
        "Electrical Engineer",
        "Signal Processing Engineer",
        "RF Engineer",
        "Biomedical Imaging Engineer"
    ], [
        "Signal processing",
        "Circuit design",
        "MATLAB",
        "Communications"
    ]),
    p("me-ms", "Mechanical Engineering", "M.S.", "grad", COEIT, "engineering", "Advanced mechanics, thermal-fluids, and biomechanics research.", [
        "Research Engineer",
        "Biomechanics Engineer",
        "Design Engineer"
    ], [
        "Finite element analysis",
        "CFD",
        "Experimental methods"
    ]),
    p("cbe-ms", "Chemical and Biochemical Engineering", "M.S.", "grad", COEIT, "engineering", "Bioprocess engineering, biopharmaceuticals, and advanced materials.", [
        "Bioprocess Engineer",
        "Process Development Scientist",
        "Research Engineer"
    ], [
        "Bioprocessing",
        "Process modeling",
        "Lab research"
    ]),
    p("biotech-mps", "Biotechnology", "M.P.S.", "grad", CNMS, "life-science", "Science plus management for the biotech industry.", [
        "Biotech Project Manager",
        "Regulatory Affairs Specialist",
        "Quality Manager"
    ], [
        "Regulatory affairs",
        "Project management",
        "Bioprocess basics"
    ]),
    p("stat-ms", "Statistics", "M.S.", "grad", CNMS, "math", "Statistical theory and applied statistics, including biostatistics.", [
        "Statistician",
        "Biostatistician",
        "Data Scientist"
    ], [
        "Statistical modeling",
        "R / SAS",
        "Experimental design"
    ]),
    p("amath-ms", "Applied Mathematics", "M.S.", "grad", CNMS, "math", "Numerical analysis, differential equations, and mathematical modeling.", [
        "Applied Mathematician",
        "Quantitative Analyst",
        "Operations Research Analyst"
    ], [
        "Numerical methods",
        "Modeling",
        "Scientific computing"
    ]),
    p("gis-mps", "Geographic Information Systems", "M.P.S.", "grad", CAHSS, "social-science", "Professional GIS: spatial analysis, remote sensing, and geospatial programming.", [
        "GIS Analyst",
        "Geospatial Developer",
        "Remote Sensing Analyst"
    ], [
        "ArcGIS / QGIS",
        "Python for GIS",
        "Spatial databases"
    ]),
    p("io-mps", "Industrial/Organizational Psychology", "M.P.S.", "grad", CAHSS, "psychology", "Psychology applied to the workplace: selection, training, and organizational development.", [
        "I-O Psychology Consultant",
        "People Analytics Specialist",
        "Training & Development Manager"
    ], [
        "Assessment design",
        "People analytics",
        "Survey design",
        "Consulting"
    ]),
    p("mpp", "Public Policy", "M.P.P.", "grad", CAHSS, "social-science", "Policy analysis, evaluation, and management, with health and education tracks.", [
        "Policy Analyst",
        "Program Evaluator",
        "Government Analyst",
        "Nonprofit Director"
    ], [
        "Policy analysis",
        "Program evaluation",
        "Statistics",
        "Memo writing"
    ]),
    p("epa-ma", "Economic Policy Analysis", "M.A.", "grad", CAHSS, "social-science", "Applied economics and econometrics for public and private policy.", [
        "Economist",
        "Policy Analyst",
        "Research Analyst"
    ], [
        "Econometrics",
        "Stata / R",
        "Cost-benefit analysis"
    ]),
    p("soc-ma", "Applied Sociology", "M.A.", "grad", CAHSS, "social-science", "Sociological research applied to health, work, and communities.", [
        "Research Analyst",
        "Program Evaluator",
        "Community Health Researcher"
    ], [
        "Research design",
        "Statistics",
        "Qualitative methods"
    ]),
    p("mat", "Teaching", "M.A.T.", "grad", CAHSS, "education", "Teacher certification for early childhood, elementary, and secondary education.", [
        "K-12 Teacher",
        "STEM Teacher",
        "Instructional Coach"
    ], [
        "Lesson planning",
        "Classroom management",
        "Assessment"
    ]),
    p("icc-ma", "Intercultural Communication", "M.A.", "grad", CAHSS, "humanities", "Language, culture, and communication in global contexts.", [
        "International Program Manager",
        "Diversity Trainer",
        "Language Specialist"
    ], [
        "Intercultural communication",
        "Research",
        "Training design"
    ]),
    p("ttl-ma", "Texts, Technologies, and Literature", "M.A.", "grad", CAHSS, "humanities", "Literature and writing in a digital age.", [
        "Content Strategist",
        "Technical Writer",
        "Digital Humanities Specialist"
    ], [
        "Writing",
        "Digital tools",
        "Research"
    ]),
    p("idia-mfa", "Intermedia and Digital Arts", "M.F.A.", "grad", CAHSS, "arts", "Experimental art across animation, interactive media, and emerging technology.", [
        "Interactive Media Artist",
        "Creative Technologist",
        "Art Professor"
    ], [
        "Interactive media",
        "Animation",
        "Creative coding"
    ]),
    p("mgas-ma", "Management of Aging Services", "M.A.", "grad", ERICKSON, "health", "Leadership in the aging services industry.", [
        "Aging Services Executive",
        "Senior Living Administrator"
    ], [
        "Leadership",
        "Finance",
        "Policy"
    ]),
    // ---------- Doctoral ----------
    p("cs-phd", "Computer Science", "Ph.D.", "phd", COEIT, "computing", "Original research in AI, security, systems, and theory.", [
        "Research Scientist",
        "Professor",
        "AI Research Engineer"
    ], [
        "Research",
        "Publishing",
        "Advanced ML / systems"
    ]),
    p("hcc-phd", "Human-Centered Computing", "Ph.D.", "phd", COEIT, "computing", "Research on how people use and are affected by technology.", [
        "UX Research Scientist",
        "Professor",
        "Accessibility Researcher"
    ], [
        "Research methods",
        "Publishing",
        "Study design"
    ]),
    p("is-phd", "Information Systems", "Ph.D.", "phd", COEIT, "computing", "Research in data science, health informatics, and HCI.", [
        "Research Scientist",
        "Professor",
        "Health Informatics Researcher"
    ], [
        "Research",
        "Data science",
        "Publishing"
    ]),
    p("psyc-phd", "Human Services Psychology", "Ph.D.", "phd", CAHSS, "psychology", "Clinical, community, and behavioral medicine psychology research and practice.", [
        "Clinical Psychologist",
        "Health Psychologist",
        "Community Psychologist",
        "Professor"
    ], [
        "Clinical assessment",
        "Therapy",
        "Research",
        "Grant writing"
    ]),
    p("bio-phd", "Biological Sciences", "Ph.D.", "phd", CNMS, "life-science", "Research in molecular, cellular, and ecological biology.", [
        "Research Scientist",
        "Professor",
        "Biotech R&D Scientist"
    ], [
        "Research",
        "Publishing",
        "Grant writing"
    ]),
    p("pubpol-phd", "Public Policy", "Ph.D.", "phd", CAHSS, "social-science", "Research on policy design and evaluation.", [
        "Policy Researcher",
        "Professor",
        "Senior Government Analyst"
    ], [
        "Causal inference",
        "Research",
        "Publishing"
    ]),
    p("atph-phd", "Atmospheric Physics", "Ph.D.", "phd", CNMS, "physical-science", "Research on climate, aerosols, and remote sensing.", [
        "Atmospheric Scientist",
        "Climate Researcher",
        "NASA Research Scientist"
    ], [
        "Remote sensing",
        "Scientific computing",
        "Research"
    ]),
    p("llc-phd", "Language, Literacy and Culture", "Ph.D.", "phd", CAHSS, "education", "Interdisciplinary research on language, literacy, and culture in society.", [
        "Professor",
        "Education Researcher",
        "Policy Researcher"
    ], [
        "Qualitative research",
        "Theory",
        "Publishing"
    ]),
    p("aging-phd", "Gerontology", "Ph.D.", "phd", ERICKSON, "health", "Research on aging, offered with the University of Maryland, Baltimore.", [
        "Gerontology Researcher",
        "Professor",
        "Aging Policy Analyst"
    ], [
        "Research",
        "Epidemiology",
        "Policy"
    ])
];
const minors = [
    "Computer Science",
    "Information Systems",
    "Human-Centered Computing",
    "Cybersecurity",
    "Data Science",
    "Mathematics",
    "Statistics",
    "Physics",
    "Chemistry",
    "Biology",
    "Psychology",
    "Sociology",
    "Economics",
    "Political Science",
    "Philosophy",
    "Entrepreneurship",
    "Public Health",
    "Geography",
    "Media and Communication Studies",
    "Writing",
    "History",
    "Linguistics",
    "Gender, Women's, and Sexuality Studies",
    "Africana Studies",
    "Asian Studies",
    "Visual Arts",
    "Music",
    "Dance",
    "Theatre",
    "Education"
];
const focusAreas = [
    {
        id: "healthcare",
        label: "Healthcare & biomedical",
        icon: "🩺"
    },
    {
        id: "data-ai",
        label: "Data science & AI",
        icon: "🤖"
    },
    {
        id: "ux",
        label: "UX / human-centered design",
        icon: "🎨"
    },
    {
        id: "security",
        label: "Cybersecurity",
        icon: "🔐"
    },
    {
        id: "software",
        label: "Software & product",
        icon: "💻"
    },
    {
        id: "research",
        label: "Research & grad school",
        icon: "🔬"
    },
    {
        id: "clinical",
        label: "Clinical & counseling",
        icon: "🧠"
    },
    {
        id: "premed",
        label: "Pre-med / health professions",
        icon: "🏥"
    },
    {
        id: "policy",
        label: "Government & public policy",
        icon: "🏛️"
    },
    {
        id: "law",
        label: "Law & pre-law",
        icon: "⚖️"
    },
    {
        id: "business",
        label: "Business & entrepreneurship",
        icon: "📈"
    },
    {
        id: "finance",
        label: "Finance & economics",
        icon: "💵"
    },
    {
        id: "education",
        label: "Teaching & education",
        icon: "🍎"
    },
    {
        id: "environment",
        label: "Environment & sustainability",
        icon: "🌱"
    },
    {
        id: "media",
        label: "Media, arts & communication",
        icon: "🎬"
    },
    {
        id: "community",
        label: "Nonprofit & community impact",
        icon: "🤝"
    },
    {
        id: "hardware",
        label: "Hardware, robotics & devices",
        icon: "🔧"
    },
    {
        id: "global",
        label: "International & global",
        icon: "🌍"
    }
];
const experienceOptions = [
    "None yet, just starting",
    "Personal projects",
    "Club or organization member",
    "Leadership role",
    "Part-time job",
    "Internship",
    "Undergraduate research",
    "Volunteering",
    "Hackathon",
    "Teaching or tutoring"
];
const levelLabels = {
    undergrad: "Undergraduate",
    grad: "Master's",
    phd: "Doctoral"
};
const yearsByLevel = {
    undergrad: [
        "Freshman",
        "Sophomore",
        "Junior",
        "Senior"
    ],
    grad: [
        "First year",
        "Second year"
    ],
    phd: [
        "Year 1",
        "Year 2",
        "Year 3",
        "Year 4",
        "Year 5"
    ]
};
function getProgram(id) {
    return programs.find((x)=>x.id === id);
}
const colleges = Array.from(new Set(programs.map((x)=>x.college)));
const areas = [
    "STEM",
    "Arts & Humanities",
    "Social & Behavioral Sciences",
    "Health & Human Services",
    "Business",
    "Education"
];
const familyArea = {
    computing: "STEM",
    engineering: "STEM",
    "life-science": "STEM",
    "physical-science": "STEM",
    math: "STEM",
    "social-science": "Social & Behavioral Sciences",
    psychology: "Social & Behavioral Sciences",
    humanities: "Arts & Humanities",
    arts: "Arts & Humanities",
    health: "Health & Human Services",
    business: "Business",
    education: "Education"
};
function areaOf(p) {
    return familyArea[p.family];
}
}),
"[project]/components/ProgramCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProgramCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/programs.ts [app-ssr] (ecmascript)");
;
;
;
function ProgramCard({ program }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/paths/${program.id}`,
        className: "glass-card interactive group h-full p-5 grid gap-3 content-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between gap-2 text-xs font-semibold",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-ink-3",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areaOf"])(program)
                    }, void 0, false, {
                        fileName: "[project]/components/ProgramCard.tsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-surface-2 text-ink-2 px-2 py-0.5",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelLabels"][program.level],
                            " · ",
                            program.degree
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ProgramCard.tsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ProgramCard.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "font-display text-lg font-semibold group-hover:text-teal transition-colors",
                children: program.name
            }, void 0, false, {
                fileName: "[project]/components/ProgramCard.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-ink-2 line-clamp-2",
                children: program.summary
            }, void 0, false, {
                fileName: "[project]/components/ProgramCard.tsx",
                lineNumber: 13,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "flex flex-wrap gap-1.5",
                "aria-label": `Example careers for ${program.name}`,
                children: program.careers.slice(0, 3).map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "rounded-full bg-teal-tint text-teal text-xs font-bold px-2.5 py-1",
                        children: c
                    }, c, false, {
                        fileName: "[project]/components/ProgramCard.tsx",
                        lineNumber: 16,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/ProgramCard.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-sm font-semibold text-teal mt-1",
                children: "Explore →"
            }, void 0, false, {
                fileName: "[project]/components/ProgramCard.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ProgramCard.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/paths/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Programs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgramCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ProgramCard.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/programs.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function Programs() {
    const [area, setArea] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("All");
    const [level, setLevel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const shown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const q = query.trim().toLowerCase();
        return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["programs"].filter((p)=>(area === "All" || (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areaOf"])(p) === area) && (level === "all" || p.level === level) && (!q || `${p.name} ${p.degree} ${p.summary} ${p.careers.join(" ")}`.toLowerCase().includes(q)));
    }, [
        area,
        level,
        query
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 py-10 lg:py-14 grid gap-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "grid gap-3 rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-3xl lg:text-4xl font-bold",
                        children: "Explore UMBC programs"
                    }, void 0, false, {
                        fileName: "[project]/app/paths/page.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-ink-2 max-w-3xl",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["programs"].length,
                            " majors and graduate programs across STEM, the arts and humanities, social sciences, health, business, and education. Pick one to see the careers it can lead to, then build a plan around your own goal."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/paths/page.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/paths/page.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass glass-strong p-4 lg:p-5 grid gap-4 rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 md:grid-cols-[1fr_auto] md:items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "grid gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "sr-only",
                                        children: "Search programs and careers"
                                    }, void 0, false, {
                                        fileName: "[project]/app/paths/page.tsx",
                                        lineNumber: 30,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search a program or a career, e.g. “therapist” or “GIS”",
                                        className: "rounded-xl border border-line bg-surface px-4 py-3 outline-none focus:border-teal"
                                    }, void 0, false, {
                                        fileName: "[project]/app/paths/page.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/paths/page.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                role: "group",
                                "aria-label": "Filter by degree level",
                                className: "flex flex-wrap gap-2",
                                children: [
                                    "all",
                                    "undergrad",
                                    "grad",
                                    "phd"
                                ].map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        "aria-pressed": level === l,
                                        onClick: ()=>setLevel(l),
                                        className: `press rounded-full px-4 py-2 text-sm font-semibold border ${level === l ? "bg-ink text-bg border-ink" : "bg-surface border-line hover:bg-surface-2"}`,
                                        children: l === "all" ? "All levels" : __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["levelLabels"][l]
                                    }, l, false, {
                                        fileName: "[project]/app/paths/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/paths/page.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/paths/page.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        role: "group",
                        "aria-label": "Filter by area",
                        className: "flex flex-wrap gap-2",
                        children: [
                            "All",
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["areas"]
                        ].map((a)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": area === a,
                                onClick: ()=>setArea(a),
                                className: `press rounded-full px-4 py-2 text-sm font-semibold border ${area === a ? "bg-teal text-white border-teal" : "bg-surface border-line hover:border-teal"}`,
                                children: a
                            }, a, false, {
                                fileName: "[project]/app/paths/page.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/paths/page.tsx",
                        lineNumber: 43,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/paths/page.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-ink-3",
                "aria-live": "polite",
                children: [
                    shown.length,
                    " programs shown"
                ]
            }, void 0, true, {
                fileName: "[project]/app/paths/page.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 stagger",
                children: shown.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ProgramCard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            program: p
                        }, void 0, false, {
                            fileName: "[project]/app/paths/page.tsx",
                            lineNumber: 55,
                            columnNumber: 42
                        }, this)
                    }, p.id, false, {
                        fileName: "[project]/app/paths/page.tsx",
                        lineNumber: 55,
                        columnNumber: 27
                    }, this))
            }, `${area}-${level}`, false, {
                fileName: "[project]/app/paths/page.tsx",
                lineNumber: 54,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-ink-3",
                children: "Program list compiled for this prototype. Confirm names and requirements in the UMBC catalog (catalog.umbc.edu)."
            }, void 0, false, {
                fileName: "[project]/app/paths/page.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/paths/page.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_b8661cbf._.js.map