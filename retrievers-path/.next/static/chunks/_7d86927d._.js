(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/programs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/plan.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Plan types + the built-in (no-AI) planner. The AI route in app/api/plan returns the same shape.
__turbopack_context__.s([
    "PlanSchema",
    ()=>PlanSchema,
    "ProfileSchema",
    ()=>ProfileSchema,
    "RESOURCE_LINKS",
    ()=>RESOURCE_LINKS,
    "buildBuiltinPlan",
    ()=>buildBuiltinPlan,
    "finalizePlan",
    ()=>finalizePlan,
    "isAllowedUrl",
    ()=>isAllowedUrl,
    "isJobTitle",
    ()=>isJobTitle,
    "itemKinds",
    ()=>itemKinds,
    "usajobsSearchUrl",
    ()=>usajobsSearchUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-client] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/programs.ts [app-client] (ecmascript)");
;
;
const itemKinds = [
    "Class",
    "Project",
    "Experience",
    "Internship",
    "Skill",
    "Career"
];
const ProfileSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    level: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum([
        "undergrad",
        "grad",
        "phd"
    ]),
    programIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).min(1).max(2),
    minors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(3),
    focusIds: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()).max(4),
    customFocus: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(200),
    careerGoal: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(300),
    year: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    experience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    notes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().max(500)
});
const PlanSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
    headline: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
    careerTargets: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        why: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        searchKeyword: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })),
    keySkills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()),
    years: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        label: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        theme: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        items: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            title: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].enum(itemKinds),
            detail: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        })),
        resources: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
            name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
            why: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
        }))
    }))
});
function finalizePlan(body, generatedBy) {
    const id = "p".concat(Date.now().toString(36));
    return {
        ...body,
        id,
        createdAt: new Date().toISOString(),
        generatedBy,
        years: body.years.map((y, yi)=>({
                ...y,
                items: y.items.map((it, ii)=>({
                        ...it,
                        id: "".concat(id, "-y").concat(yi, "-i").concat(ii)
                    })),
                resources: y.resources.filter((r)=>isAllowedUrl(r.url))
            }))
    };
}
const RESOURCE_LINKS = {
    careerCenter: {
        name: "UMBC Career Center & Handshake",
        url: "https://careers.umbc.edu"
    },
    research: {
        name: "UMBC Undergraduate Research (URCAD)",
        url: "https://ur.umbc.edu"
    },
    shriver: {
        name: "Shriver Center (internships & service)",
        url: "https://shriver.umbc.edu"
    },
    catalog: {
        name: "UMBC Catalog (official requirements)",
        url: "https://catalog.umbc.edu"
    },
    clubs: {
        name: "myUMBC Groups (clubs & orgs)",
        url: "https://my.umbc.edu/groups"
    },
    gradSchool: {
        name: "UMBC Graduate School",
        url: "https://gradschool.umbc.edu"
    },
    hackumbc: {
        name: "hackUMBC",
        url: "https://hackumbc.org"
    },
    ooh: {
        name: "BLS Occupational Outlook Handbook",
        url: "https://www.bls.gov/ooh/"
    },
    onet: {
        name: "O*NET OnLine career explorer",
        url: "https://www.onetonline.org"
    },
    usajobs: {
        name: "USAJOBS (federal jobs & internships)",
        url: "https://www.usajobs.gov"
    },
    pathways: {
        name: "Federal Pathways internships",
        url: "https://www.usajobs.gov/help/working-in-government/unique-hiring-paths/students/"
    }
};
const ALLOWED_HOSTS = [
    "umbc.edu",
    "hackumbc.org",
    "bls.gov",
    "onetonline.org",
    "usajobs.gov",
    "nih.gov",
    "nsf.gov",
    "apa.org",
    "aamc.org",
    "kaggle.com",
    "github.com"
];
function isAllowedUrl(url) {
    try {
        const h = new URL(url).hostname;
        return url.startsWith("https://") && ALLOWED_HOSTS.some((a)=>h === a || h.endsWith("." + a));
    } catch (e) {
        return false;
    }
}
function usajobsSearchUrl(keyword) {
    return "https://www.usajobs.gov/Search/Results?k=".concat(encodeURIComponent(keyword));
}
const it = (kind, title, detail)=>({
        kind,
        title,
        detail
    });
// What students in each family of majors typically do at each stage.
const familyStages = {
    computing: [
        [
            it("Class", "Intro programming sequence (e.g. CMSC 201/202)", "Build the foundation every later course assumes."),
            it("Skill", "Set up GitHub and commit weekly", "Employers look at activity; small consistent commits count."),
            it("Experience", "Attend hackUMBC or a club build night", "Low-pressure way to ship something with a team.")
        ],
        [
            it("Class", "Data structures & discrete math", "Core for technical interviews and upper-level electives."),
            it("Experience", "Join a club project team or research group", "Team experience is the #1 thing internship interviewers ask about."),
            it("Career", "Get your résumé reviewed at the Career Center", "Aim for one page with 2-3 projects.")
        ],
        [
            it("Internship", "Apply to 20+ summer internships (Aug-Oct)", "Big companies and federal programs recruit early in the fall."),
            it("Skill", "Weekly technical interview practice", "Two problems a week beats cramming."),
            it("Class", "Upper-level electives in your focus area", "Pick the electives that match your target career.")
        ],
        [
            it("Career", "Apply to full-time roles or grad school in the fall", "Most offers for new grads go out Oct-Feb."),
            it("Project", "Capstone or portfolio centerpiece", "One polished project you can demo in 2 minutes."),
            it("Experience", "Mentor a first-year student", "Leadership stories strengthen interviews.")
        ]
    ],
    engineering: [
        [
            it("Class", "Calculus, physics, and intro engineering design", "These gate most sophomore engineering courses."),
            it("Experience", "Join an engineering team (robotics, SAE-style, EWB)", "Hands-on building is what employers look for."),
            it("Skill", "Learn CAD or a programming language for your field", "SolidWorks, MATLAB, or C are common starting points.")
        ],
        [
            it("Class", "Core engineering sciences (statics, circuits, thermo)", "Keep your GPA strong here; it matters for co-ops."),
            it("Career", "Build a résumé and project portfolio", "Photos and short write-ups of what you built."),
            it("Internship", "Apply for co-ops or summer engineering internships", "Defense, energy, and med-device companies hire sophomores and juniors.")
        ],
        [
            it("Class", "Technical electives + lab courses", "Choose electives aligned with your target industry."),
            it("Career", "Consider the FE exam timeline", "Many engineers take the FE exam near graduation."),
            it("Experience", "Research with a faculty lab", "Great if you are considering grad school.")
        ],
        [
            it("Project", "Senior design capstone", "Treat it like your first job: document everything."),
            it("Career", "Apply to full-time roles (fall)", "Use career fairs and your internship network."),
            it("Skill", "Professional communication & design reviews", "Practice presenting technical trade-offs.")
        ]
    ],
    "life-science": [
        [
            it("Class", "Intro biology and chemistry sequence", "These are prerequisites for nearly everything else."),
            it("Skill", "Learn to read a research paper", "Start with review articles in your interest area."),
            it("Career", "Email 3 faculty about their research", "Short, specific emails get replies.")
        ],
        [
            it("Class", "Genetics, cell biology, or organic chemistry", "The core of the major; form a study group."),
            it("Experience", "Join a research lab", "Commit 8-10 hrs/week for at least two semesters."),
            it("Skill", "Learn basic R or Python for data", "Biology is increasingly computational.")
        ],
        [
            it("Internship", "Apply to summer research programs (REUs, NIH SIP)", "Deadlines are often December-February."),
            it("Experience", "Present a poster at URCAD", "UMBC's undergraduate research showcase each spring."),
            it("Class", "Upper-level lab course in your focus", "Builds techniques you can list on your résumé.")
        ],
        [
            it("Project", "Honors thesis or independent research", "A strong signal for grad and professional schools."),
            it("Career", "Apply to grad school, professional school, or industry roles", "Start applications the summer before."),
            it("Career", "Ask your research mentor for a recommendation letter", "Give them 4+ weeks and your résumé.")
        ]
    ],
    "physical-science": [
        [
            it("Class", "Calculus and intro sequence for the major", "Math fluency makes everything else easier."),
            it("Skill", "Python for scientific computing", "NumPy and plotting show up in every lab."),
            it("Experience", "Join the department club", "Meet upper-level students and faculty.")
        ],
        [
            it("Class", "Core major courses + first lab-intensive course", "Keep a lab notebook you'd be proud to show."),
            it("Experience", "Start undergraduate research", "Ask faculty whose papers interest you."),
            it("Career", "Build a résumé with lab skills", "List instruments and methods specifically.")
        ],
        [
            it("Internship", "Apply to REUs, NASA, NIST, or industry internships", "Many deadlines are in the winter."),
            it("Experience", "Present research at URCAD or a conference", "Practice explaining your work to non-experts."),
            it("Class", "Advanced electives aligned with your goal", "Choose depth over breadth now.")
        ],
        [
            it("Project", "Senior research project or thesis", "Aim for a result you can present."),
            it("Career", "Apply to grad programs or jobs", "Research experience is key for both."),
            it("Career", "Line up recommendation letters", "Ask early; share your goals.")
        ]
    ],
    math: [
        [
            it("Class", "Calculus sequence and intro proofs", "Proof writing is the big shift from high school math."),
            it("Skill", "Learn Python or R", "Pair math with computing for more career options."),
            it("Experience", "Join a math or actuarial club", "Find study partners for tougher courses.")
        ],
        [
            it("Class", "Linear algebra and probability", "The two most career-relevant math courses."),
            it("Experience", "Try a modeling competition or research project", "Great résumé material."),
            it("Career", "Explore actuarial, data, teaching, and research paths", "Talk to alumni in each.")
        ],
        [
            it("Internship", "Apply to analytics, actuarial, or research internships", "Actuarial exams (P/FM) help for insurance roles."),
            it("Class", "Statistics, numerical methods, or optimization electives", "Match electives to your target career."),
            it("Project", "Data analysis project with a real dataset", "Publish the notebook on GitHub.")
        ],
        [
            it("Career", "Apply to jobs or grad school", "Quantitative roles recruit in the fall."),
            it("Project", "Senior capstone or independent study", "Showcase applied math."),
            it("Experience", "Tutor at the Learning Resources Center", "Teaching deepens mastery.")
        ]
    ],
    "social-science": [
        [
            it("Class", "Intro courses and a research methods course", "Methods classes unlock research roles."),
            it("Experience", "Join a club tied to your interest (debate, Model UN, advocacy)", "Builds public speaking and network."),
            it("Skill", "Build strong academic writing habits", "Visit the Writing Center with your first big paper.")
        ],
        [
            it("Class", "Statistics for social science", "Quantitative skills set you apart."),
            it("Experience", "Volunteer or work with a local organization", "The Shriver Center connects students to community partners."),
            it("Career", "Informational interviews with 3 professionals", "Ask what they wish they knew as students.")
        ],
        [
            it("Internship", "Internship in government, nonprofit, or research", "Consider Annapolis, D.C., or Baltimore City programs."),
            it("Experience", "Research assistant for a faculty project", "Great for grad school and policy careers."),
            it("Class", "Advanced seminar in your focus", "Write a paper you can use as a writing sample.")
        ],
        [
            it("Project", "Senior thesis or capstone research", "Doubles as a writing sample for jobs and grad school."),
            it("Career", "Apply to jobs, fellowships, or grad/law school", "Many fellowships have fall deadlines."),
            it("Career", "Prepare for the GRE or LSAT if needed", "Plan test dates around application deadlines.")
        ]
    ],
    psychology: [
        [
            it("Class", "Intro Psychology and Research Methods", "Research methods is the gateway to upper-level courses."),
            it("Experience", "Join Psychology Club or Psi Chi", "Meet students who are already in labs."),
            it("Skill", "Learn APA-style writing", "You'll use it in nearly every psychology course.")
        ],
        [
            it("Class", "Statistics for psychology", "Needed for research positions and grad school."),
            it("Experience", "Join a faculty research lab as an RA", "Most psychology grad programs expect research experience."),
            it("Experience", "Volunteer in a helping role (crisis line, mentoring)", "Shows commitment to working with people.")
        ],
        [
            it("Internship", "Clinical or applied internship / practicum", "Hospitals, schools, and community mental-health settings."),
            it("Class", "Upper-level electives in your specialty", "e.g., abnormal, developmental, health, or I-O psychology."),
            it("Experience", "Present research at URCAD", "Posters are a strong grad-school signal.")
        ],
        [
            it("Project", "Honors thesis or independent study", "Especially important for Ph.D. applicants."),
            it("Career", "Apply to grad programs (M.A., M.S.W., Psy.D., Ph.D.) or jobs", "Deadlines are often December."),
            it("Career", "Prepare for the GRE if your programs require it", "Many programs are now GRE-optional; check each.")
        ]
    ],
    humanities: [
        [
            it("Class", "Intro courses + a writing-intensive course", "Writing is the core professional skill here."),
            it("Experience", "Join a publication, club, or cultural organization", "Build a portfolio from day one."),
            it("Skill", "Start a writing or content portfolio", "Save your best work in one place.")
        ],
        [
            it("Class", "Language study or digital humanities course", "Languages and digital skills widen your options."),
            it("Experience", "Work or volunteer with a museum, archive, or nonprofit", "Hands-on work makes your degree concrete."),
            it("Career", "Explore careers: publishing, law, UX writing, education", "Talk to alumni via LinkedIn.")
        ],
        [
            it("Internship", "Internship in communications, publishing, education, or cultural orgs", "Many are paid through federal or campus programs."),
            it("Class", "Advanced seminar in your focus area", "Produce a strong writing sample."),
            it("Experience", "Study abroad or a global program", "Especially valuable for language majors.")
        ],
        [
            it("Project", "Senior thesis, portfolio, or public project", "Show employers what you can create."),
            it("Career", "Apply to jobs, fellowships, or grad/law school", "Start in early fall."),
            it("Skill", "Polish your portfolio website", "A simple site with your best 5 pieces.")
        ]
    ],
    arts: [
        [
            it("Class", "Foundation studio or performance courses", "Build technique and critique skills."),
            it("Experience", "Show or perform your work on campus", "Get comfortable sharing work early."),
            it("Skill", "Start documenting your work", "Photograph or record everything you make.")
        ],
        [
            it("Class", "Intermediate studio + digital tools course", "Digital skills open design and media careers."),
            it("Experience", "Join or start a collaborative project", "Collaborations lead to references and credits."),
            it("Career", "Build an online portfolio", "Quality over quantity.")
        ],
        [
            it("Internship", "Internship at a studio, agency, theater, or arts org", "Baltimore has a strong arts and design scene."),
            it("Experience", "Enter a juried show, festival, or competition", "Deadlines are listed by arts councils."),
            it("Class", "Advanced courses in your specialty", "Develop a recognizable body of work.")
        ],
        [
            it("Project", "Senior exhibition, recital, or capstone production", "Treat it as a professional launch."),
            it("Career", "Apply to jobs, residencies, or M.F.A. programs", "Portfolio deadlines are often in winter."),
            it("Skill", "Learn freelancing basics: contracts & pricing", "Many arts careers include freelance work.")
        ]
    ],
    health: [
        [
            it("Class", "Intro courses in health, biology, or social systems", "Check prerequisites for your target program."),
            it("Experience", "Volunteer in a health or community setting", "Direct patient or client contact is valued."),
            it("Career", "Shadow a professional in your target role", "Confirms your interest early.")
        ],
        [
            it("Class", "Core major courses + statistics", "Data skills matter across health careers."),
            it("Experience", "Get certified (CPR, EMT, CNA, Mental Health First Aid)", "Opens paid clinical or community work."),
            it("Career", "Meet with pre-health or career advising", "Map out prerequisites and timelines.")
        ],
        [
            it("Internship", "Field placement or health internship", "Hospitals, public health departments, and nonprofits."),
            it("Experience", "Leadership role in a health-related organization", "Shows initiative and teamwork."),
            it("Class", "Upper-level courses in policy, management, or practice", "Align with your target role.")
        ],
        [
            it("Project", "Capstone or community health project", "Measure an outcome you can talk about."),
            it("Career", "Apply to jobs, licensure steps, or graduate programs", "Check licensure requirements for your state."),
            it("Career", "Secure recommendation letters", "Supervisors from placements are ideal.")
        ]
    ],
    business: [
        [
            it("Class", "Intro economics, accounting, and business courses", "Foundations for everything else."),
            it("Experience", "Join a business, finance, or entrepreneurship club", "Case competitions build real skills."),
            it("Skill", "Get fluent in Excel", "Pivot tables, lookups, and charts.")
        ],
        [
            it("Class", "Statistics and finance/management core", "Quantitative confidence stands out."),
            it("Experience", "Start or join a small venture or case competition", "UMBC's entrepreneurship programs can help."),
            it("Career", "Build your LinkedIn and network with alumni", "Aim for 2 coffee chats a month.")
        ],
        [
            it("Internship", "Summer internship in finance, consulting, or tech", "Many firms recruit juniors in the fall."),
            it("Skill", "Learn SQL or a BI tool (Tableau, Power BI)", "Data skills are in demand in every business role."),
            it("Class", "Electives in your focus area", "Finance, analytics, or management.")
        ],
        [
            it("Career", "Convert your internship or apply for full-time roles", "Return offers are the most common path."),
            it("Project", "Capstone or consulting project with a real client", "Great interview story."),
            it("Career", "Consider certifications (e.g., CAPM, SHRM, CFA Level I)", "Pick one aligned with your role.")
        ]
    ],
    education: [
        [
            it("Class", "Intro education and content-area courses", "Check certification course requirements early."),
            it("Experience", "Tutor or mentor students", "The Learning Resources Center and local schools need tutors."),
            it("Career", "Decide on grade level and subject area", "Observe classrooms at different levels.")
        ],
        [
            it("Class", "Educational psychology and methods courses", "Learn how students learn."),
            it("Experience", "Classroom observation hours", "Required for most certification pathways."),
            it("Skill", "Build lesson-planning skills", "Save your best lesson plans in a portfolio.")
        ],
        [
            it("Internship", "Student teaching / internship placement", "Your most important experience; plan the timing."),
            it("Career", "Prepare for Praxis or other licensure exams", "Schedule them before your final year."),
            it("Class", "Content-area methods + inclusive teaching", "Serving all learners is essential.")
        ],
        [
            it("Career", "Apply for teaching positions (spring hiring season)", "Maryland districts hire heavily in spring."),
            it("Project", "Teaching portfolio with evidence of student learning", "Used in interviews."),
            it("Experience", "Join a professional association", "Find mentors and job leads.")
        ]
    ]
};
// Focus-area add-ons by stage: project ideas, internships, and skills specific to the student's direction.
const focusModules = {
    healthcare: [
        [
            it("Skill", "Learn basic medical terminology & HIPAA", "Speaks the language of healthcare teams.")
        ],
        [
            it("Project", "Health data project using a public dataset", "e.g., analyze CDC or CMS data on a health question you care about.")
        ],
        [
            it("Internship", "Health-sector internship (Johns Hopkins, UMMS, NIH, FDA, CMS)", "Maryland has one of the densest health ecosystems in the U.S.")
        ],
        [
            it("Project", "Capstone with a clinical or public-health partner", "Solve a real problem for patients or providers.")
        ]
    ],
    "data-ai": [
        [
            it("Skill", "Python + pandas fundamentals", "The toolkit for nearly all data work.")
        ],
        [
            it("Project", "Kaggle-style analysis with a clear question", "Publish the notebook and a short write-up.")
        ],
        [
            it("Internship", "Data analytics or ML internship", "Also look at federal data roles (Census Bureau, SSA, NIH).")
        ],
        [
            it("Project", "End-to-end ML project deployed as a web app", "Shows you can go from data to a working product.")
        ]
    ],
    ux: [
        [
            it("Skill", "Learn Figma and basic design principles", "Free tutorials + redesign an app you use daily.")
        ],
        [
            it("Project", "Usability test of a campus website or app", "Recruit 5 students, write up findings and a redesign.")
        ],
        [
            it("Internship", "UX research or design internship", "Build a case-study portfolio first.")
        ],
        [
            it("Project", "Accessibility-focused design case study", "Apply WCAG guidelines; a strong differentiator.")
        ]
    ],
    security: [
        [
            it("Experience", "Join the cybersecurity club and play CTFs", "Capture-the-flag events build practical skills.")
        ],
        [
            it("Skill", "Networking and Linux fundamentals", "Prep for Security+ if you want a certification.")
        ],
        [
            it("Internship", "Security internship (federal, defense, or industry)", "Many Maryland roles require U.S. citizenship and clearance.")
        ],
        [
            it("Project", "Home lab or vulnerability research write-up", "Document what you broke and how you'd defend it.")
        ]
    ],
    software: [
        [
            it("Project", "Build and ship a small web app", "Something a friend actually uses.")
        ],
        [
            it("Project", "Team project with real users (club or hackathon)", "Practice code review and Git workflows.")
        ],
        [
            it("Internship", "Software engineering internship", "Apply broadly: big tech, startups, government, and banks.")
        ],
        [
            it("Project", "Open-source contribution", "Start with documentation or good-first-issues.")
        ]
    ],
    research: [
        [
            it("Experience", "Attend a research talk or lab meeting", "See what research actually looks like.")
        ],
        [
            it("Experience", "Join a lab and aim for a semester-long project", "Ask for a defined question you can own.")
        ],
        [
            it("Internship", "Summer research program (REU / NIH / national labs)", "Apply broadly; acceptance rates vary.")
        ],
        [
            it("Project", "First-author poster or paper", "Present at URCAD or a national conference.")
        ]
    ],
    clinical: [
        [
            it("Experience", "Volunteer with a crisis line or peer support program", "Builds listening skills and confirms fit.")
        ],
        [
            it("Experience", "Research assistant in a clinical psychology lab", "Critical for clinical Ph.D. applications.")
        ],
        [
            it("Internship", "Practicum at a hospital, clinic, or community mental-health center", "Ask your department about approved sites.")
        ],
        [
            it("Career", "Compare paths: Ph.D., Psy.D., M.S.W., LPC master's", "Each leads to licensure differently; talk to professionals in each.")
        ]
    ],
    premed: [
        [
            it("Career", "Meet with pre-health advising", "Map prerequisites and a timeline.")
        ],
        [
            it("Experience", "Clinical hours (scribe, EMT, CNA, hospital volunteer)", "Most programs expect hundreds of hours.")
        ],
        [
            it("Career", "MCAT / GRE / DAT prep plan", "Give yourself 3-4 months of focused study.")
        ],
        [
            it("Career", "Primary applications (AMCAS / CASPA etc.)", "Submit early in the cycle.")
        ]
    ],
    policy: [
        [
            it("Experience", "Attend a city council or state legislative hearing", "Annapolis is close; watch policy happen.")
        ],
        [
            it("Project", "Write a 2-page policy memo on an issue you care about", "A great writing sample.")
        ],
        [
            it("Internship", "Legislative or agency internship (Annapolis, D.C., federal)", "Also look at federal Pathways internships.")
        ],
        [
            it("Project", "Program evaluation or policy research capstone", "Use real data from a public agency.")
        ]
    ],
    law: [
        [
            it("Experience", "Join mock trial, debate, or pre-law society", "Builds argumentation and public speaking.")
        ],
        [
            it("Career", "Shadow or interview attorneys in 2 practice areas", "Find the area that fits you.")
        ],
        [
            it("Internship", "Internship at a law office, court, or legal nonprofit", "Paralegal-style work is valuable.")
        ],
        [
            it("Career", "LSAT prep and law school applications", "Apply in the fall for the next year.")
        ]
    ],
    business: [
        [
            it("Experience", "Enter a pitch or case competition", "Great practice working under pressure.")
        ],
        [
            it("Project", "Launch a small side venture or campus service", "Track revenue or users.")
        ],
        [
            it("Internship", "Business, consulting, or startup internship", "Startups give broad responsibility early.")
        ],
        [
            it("Project", "Business plan or consulting project for a real client", "Use it as a portfolio piece.")
        ]
    ],
    finance: [
        [
            it("Skill", "Personal finance + Excel modeling basics", "Build a simple budget and investment model.")
        ],
        [
            it("Experience", "Join an investment or finance club", "Manage a paper portfolio.")
        ],
        [
            it("Internship", "Finance internship (banking, asset management, federal agencies)", "T. Rowe Price and other Baltimore firms recruit locally.")
        ],
        [
            it("Career", "Pursue a certification (e.g., CFA Level I, FMVA)", "Signals commitment.")
        ]
    ],
    education: [
        [
            it("Experience", "Tutor or mentor K-12 students", "Local schools and after-school programs need volunteers.")
        ],
        [
            it("Project", "Design a mini-lesson or learning resource", "Test it with real learners.")
        ],
        [
            it("Internship", "Education internship or summer teaching program", "Also consider educational technology companies.")
        ],
        [
            it("Career", "Certification and licensure planning", "Check Maryland State Department of Education requirements.")
        ]
    ],
    environment: [
        [
            it("Experience", "Join a sustainability or environmental club", "Campus projects make great résumé lines.")
        ],
        [
            it("Skill", "Learn GIS basics", "Mapping skills are used across environmental careers.")
        ],
        [
            it("Internship", "Environmental internship (EPA, NOAA, DNR, nonprofits)", "The Chesapeake Bay region has many opportunities.")
        ],
        [
            it("Project", "Field or data project on a local environmental issue", "Present findings to a community group.")
        ]
    ],
    media: [
        [
            it("Experience", "Write, film, or design for a campus outlet", "Get published early.")
        ],
        [
            it("Project", "Create a content series or short film", "Show consistency and voice.")
        ],
        [
            it("Internship", "Media, marketing, or communications internship", "Agencies, newsrooms, museums, and nonprofits.")
        ],
        [
            it("Project", "Portfolio website with case studies", "Explain your process, not just the result.")
        ]
    ],
    community: [
        [
            it("Experience", "Volunteer through the Shriver Center", "Find a cause you care about.")
        ],
        [
            it("Project", "Organize a small community event or drive", "Leadership plus measurable impact.")
        ],
        [
            it("Internship", "Nonprofit internship or AmeriCorps program", "Learn how nonprofits run.")
        ],
        [
            it("Project", "Community-based capstone with a local partner", "Evaluate the impact you made.")
        ]
    ],
    hardware: [
        [
            it("Project", "Arduino or Raspberry Pi mini-project", "Start with a sensor that measures something useful.")
        ],
        [
            it("Experience", "Join robotics or a maker space team", "Build with others.")
        ],
        [
            it("Internship", "Hardware, robotics, or medical device internship", "Maryland has strong defense and med-device employers.")
        ],
        [
            it("Project", "Prototype a device that solves a real problem", "Document design iterations with photos.")
        ]
    ],
    global: [
        [
            it("Skill", "Commit to a language sequence", "Consistency matters more than speed.")
        ],
        [
            it("Experience", "Study abroad or a virtual exchange", "Plan finances and credits early.")
        ],
        [
            it("Internship", "Internship with an international org or embassy", "Also look at State Department student programs.")
        ],
        [
            it("Career", "Apply to fellowships (Fulbright, Gilman, Boren)", "Prestigious scholarships advising can help.")
        ]
    ]
};
function stageFor(yearIndex, total) {
    if (total <= 2) return yearIndex === 0 ? 1 : 3;
    const r = yearIndex / (total - 1);
    return r < 0.25 ? 0 : r < 0.5 ? 1 : r < 0.85 ? 2 : 3;
}
const themes = [
    "Explore & build foundations",
    "Build skills & experience",
    "Get real-world experience",
    "Launch your career"
];
function buildBuiltinPlan(profile) {
    var _targets_, _progs_;
    const progs = profile.programIds.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgram"]).filter(Boolean);
    const main = progs[0];
    const yearNames = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearsByLevel"][profile.level];
    const focus = profile.focusIds.map((f)=>__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusAreas"].find((x)=>x.id === f)).filter(Boolean);
    const goal = profile.careerGoal.trim() && profile.careerGoal !== "Not sure yet" ? profile.careerGoal.trim() : main.careers[0];
    const levelName = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["levelLabels"][profile.level];
    const targets = careerTargetsFor(profile, main, goal);
    var _targets__title;
    const role = (_targets__title = (_targets_ = targets[0]) === null || _targets_ === void 0 ? void 0 : _targets_.title) !== null && _targets__title !== void 0 ? _targets__title : main.careers[0];
    const years = yearNames.map((name, yi)=>{
        var _focusModules_f_stage, _focusModules_f;
        const stage = stageFor(yi, yearNames.length);
        const items = [];
        if (profile.level === "phd") {
            items.push(...phdStage(yi, main));
        } else {
            items.push(...familyStages[main.family][stage]);
            // Second major adds its core courses.
            if (progs[1]) items.push(it("Class", "".concat(progs[1].name, ": core ").concat(stage < 2 ? "intro" : "upper-level", " requirement"), "Plan double-major courses with both advisors so nothing conflicts."));
        }
        for (const f of profile.focusIds)(_focusModules_f = focusModules[f]) === null || _focusModules_f === void 0 ? void 0 : (_focusModules_f_stage = _focusModules_f[stage]) === null || _focusModules_f_stage === void 0 ? void 0 : _focusModules_f_stage.forEach((x)=>items.push(x));
        // Minors: one course per year until finished.
        profile.minors.forEach((m, mi)=>{
            if (yi <= 2 && (yi + mi) % 2 === 0) items.push(it("Class", "".concat(m, " minor course"), "Space minor courses out so they don't crowd your ".concat(main.name, " requirements.")));
        });
        if (profile.customFocus && stage >= 1) {
            items.push(it("Project", "Project that combines ".concat(main.name, " with ").concat(profile.customFocus), "Pick a small, specific problem where both fields meet."));
        }
        if (stage === 2) items.push(it("Career", "Informational interviews with 2 people working as a ".concat(role), "Ask how they got there and what skills matter most."));
        const resources = [];
        const R = RESOURCE_LINKS;
        if (stage === 0) resources.push({
            ...R.catalog,
            why: "Check exact course requirements for your program."
        }, {
            ...R.clubs,
            why: "Find clubs related to your goals."
        });
        if (stage === 1) resources.push({
            ...R.careerCenter,
            why: "Résumé reviews and Handshake job listings."
        }, {
            ...R.research,
            why: "Find research opportunities and URCAD."
        });
        if (stage === 2) resources.push({
            ...R.shriver,
            why: "Internships, service-learning, and community placements."
        }, {
            ...R.pathways,
            why: "Paid federal internships for students."
        });
        if (stage === 3) resources.push({
            ...R.usajobs,
            why: "Federal roles related to your goal."
        }, {
            ...R.ooh,
            why: "Salary and job-outlook data."
        });
        if (profile.level !== "undergrad" && yi === 0) resources.push({
            ...R.gradSchool,
            why: "Funding, policies, and professional development."
        });
        return {
            label: "Year ".concat(yi + 1, " · ").concat(name),
            theme: themes[stage],
            items: dedupe(items).slice(0, 10),
            resources
        };
    });
    const focusText = [
        ...focus.map((f)=>f.label.toLowerCase()),
        profile.customFocus
    ].filter(Boolean).join(", ");
    var _progs__skills;
    return {
        headline: "".concat(progs.map((x)=>"".concat(x.name, " (").concat(x.degree, ")")).join(" + "), " → ").concat(role),
        summary: "A ".concat(yearNames.length, "-year ").concat(levelName.toLowerCase(), " plan toward ").concat(isJobTitle(goal) ? goal : "your goal: “".concat(goal, "”")).concat(focusText ? ", focused on ".concat(focusText) : "").concat(profile.minors.length ? ", with a minor in ".concat(profile.minors.join(" and ")) : "", ". Built from typical UMBC pathways; confirm course requirements with your advisor."),
        careerTargets: targets,
        keySkills: uniq([
            ...main.skills,
            ...(_progs__skills = (_progs_ = progs[1]) === null || _progs_ === void 0 ? void 0 : _progs_.skills) !== null && _progs__skills !== void 0 ? _progs__skills : []
        ]).slice(0, 8),
        years
    };
}
// Job titles that match each focus area; used when the student's goal is a sentence, not a title.
const focusJobs = {
    healthcare: {
        title: "Health Informatics Specialist",
        keyword: "health informatics",
        hint: /health|medical|biomed|clinical/i
    },
    "data-ai": {
        title: "Data Scientist",
        keyword: "data scientist",
        hint: /data|machine learning|ml|analytics|statistic/i
    },
    ux: {
        title: "UX Researcher",
        keyword: "user experience",
        hint: /ux|design|user/i
    },
    security: {
        title: "Cybersecurity Specialist",
        keyword: "cybersecurity",
        hint: /secur|cyber/i
    },
    software: {
        title: "Software Developer",
        keyword: "software developer",
        hint: /software|developer/i
    },
    research: {
        title: "Research Scientist",
        keyword: "research scientist",
        hint: /research/i
    },
    clinical: {
        title: "Clinical Psychologist",
        keyword: "clinical psychologist",
        hint: /clinical|therap|counsel|social worker/i
    },
    premed: {
        title: "Medical Officer",
        keyword: "medical officer",
        hint: /physician|pre-med|medic/i
    },
    policy: {
        title: "Policy Analyst",
        keyword: "policy analyst",
        hint: /policy|government|legislat/i
    },
    law: {
        title: "Paralegal / Legal Specialist",
        keyword: "paralegal",
        hint: /law|attorney|legal/i
    },
    business: {
        title: "Management Analyst",
        keyword: "management analyst",
        hint: /business|manag|consult/i
    },
    finance: {
        title: "Financial Analyst",
        keyword: "financial analyst",
        hint: /financ|invest|bank/i
    },
    education: {
        title: "Education Program Specialist",
        keyword: "education specialist",
        hint: /teach|educat/i
    },
    environment: {
        title: "Environmental Scientist",
        keyword: "environmental scientist",
        hint: /environment|climate|sustain/i
    },
    media: {
        title: "Public Affairs Specialist",
        keyword: "public affairs",
        hint: /media|communicat|writ|design/i
    },
    community: {
        title: "Program Coordinator",
        keyword: "program coordinator",
        hint: /community|nonprofit|advoca/i
    },
    hardware: {
        title: "Electronics Engineer",
        keyword: "electronics engineer",
        hint: /hardware|device|robot|embedded/i
    },
    global: {
        title: "Foreign Affairs Officer",
        keyword: "foreign affairs",
        hint: /international|global|foreign/i
    }
};
function isJobTitle(goal) {
    return goal.trim().split(/\s+/).length <= 5 && goal !== "Not sure yet";
}
// A goal like "Clinical Psychologist" is already a job title; a sentence becomes titles from the focus areas.
function careerTargetsFor(profile, main, goal) {
    const clean = (t)=>t.replace(/\(.*?\)/g, "").trim();
    const isTitle = isJobTitle(goal);
    const out = [];
    if (isTitle) out.push({
        title: goal,
        why: "Your stated goal.",
        searchKeyword: clean(goal)
    });
    for (const f of profile.focusIds){
        const j = focusJobs[f];
        if (!j) continue;
        // Prefer a career from the student's own program that fits this focus (e.g. CS + healthcare -> Health Informatics Developer).
        const fromProgram = main.careers.find((c)=>j.hint.test(c) && !out.some((o)=>o.title === c));
        const title = fromProgram !== null && fromProgram !== void 0 ? fromProgram : j.title;
        if (!out.some((o)=>o.title === title)) {
            var _focusAreas_find;
            out.push({
                title,
                why: "Combines ".concat(main.name, " with your ").concat((_focusAreas_find = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusAreas"].find((x)=>x.id === f)) === null || _focusAreas_find === void 0 ? void 0 : _focusAreas_find.label.toLowerCase(), " focus."),
                searchKeyword: fromProgram ? clean(fromProgram) : j.keyword
            });
        }
    }
    for (const c of main.careers){
        if (out.length >= 4) break;
        if (!out.some((o)=>o.title === c)) out.push({
            title: c,
            why: "A common path for ".concat(main.name, " graduates."),
            searchKeyword: clean(c)
        });
    }
    return out.slice(0, 4);
}
function phdStage(yi, main) {
    const s = [
        [
            it("Class", "Core doctoral coursework", "Build the theory and methods your research needs."),
            it("Experience", "Lab rotations or meet with 3+ potential advisors", "Fit with your advisor matters most."),
            it("Career", "Apply for fellowships (e.g., NSF GRFP)", "Fall deadlines; ask for feedback on drafts.")
        ],
        [
            it("Class", "Finish coursework and qualifying exam prep", "Form a study group with your cohort."),
            it("Project", "First research project in ".concat(main.name), "Aim for a conference paper or poster."),
            it("Skill", "Scientific writing and peer review", "Offer to review for workshops.")
        ],
        [
            it("Project", "Dissertation proposal", "Define the questions you'll answer."),
            it("Internship", "Research internship in industry, government, or a national lab", "Summer internships broaden options after the Ph.D."),
            it("Experience", "Teach or mentor undergraduates", "Valuable for academic job applications.")
        ],
        [
            it("Project", "Publish 1-2 papers from your dissertation", "Target venues your field respects."),
            it("Experience", "Present at a national conference", "Network with future employers and collaborators."),
            it("Career", "Decide: academia, industry, government, or nonprofit", "Talk to alumni in each.")
        ],
        [
            it("Project", "Write and defend your dissertation", "Set a timeline with your committee."),
            it("Career", "Apply to postdocs, faculty, or industry roles", "Start 12 months before you finish."),
            it("Career", "Prepare job talk and research statement", "Practice with your lab.")
        ]
    ];
    return s[Math.min(yi, s.length - 1)];
}
function dedupe(items) {
    const seen = new Set();
    return items.filter((x)=>seen.has(x.title) ? false : (seen.add(x.title), true));
}
function uniq(xs) {
    return Array.from(new Set(xs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/TranscriptGapRoadmap.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TranscriptGapRoadmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
"use client";
;
const TARGET_CAREER_OPTIONS = [
    "Data & Analytics",
    "Software Engineering",
    "Cybersecurity",
    "Machine Learning & AI",
    "Infrastructure & Cloud",
    "IT Business & Product",
    "IT Support & Operations",
    "Health IT"
];
function TranscriptGapRoadmap(param) {
    let { roadmap, loading, error, selectedTarget, onTargetChange, onAddCourseToPlan, onAddLabToPlan } = param;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "roadmap-diff-title",
        className: "glass-card p-5 lg:p-7 grid gap-6 rise border-2 border-gold/40",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4 border-b border-line pb-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1",
                                        children: "⚡ Live Transcript Diff"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 42,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono text-xs font-semibold text-ink-3",
                                        children: roadmap ? roadmap.campus_id : "Active Student"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 41,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "roadmap-diff-title",
                                className: "font-display text-2xl lg:text-3xl font-bold text-ink",
                                children: [
                                    "Target Career: ",
                                    selectedTarget
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 49,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-ink-2",
                                children: "Automated transcript analysis comparing your completed UMBC courses against historical alumni in this field."
                            }, void 0, false, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "target-career-select",
                                className: "text-xs font-semibold text-ink-3 whitespace-nowrap",
                                children: "Switch Target:"
                            }, void 0, false, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 59,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "target-career-select",
                                value: selectedTarget,
                                onChange: (e)=>onTargetChange(e.target.value),
                                disabled: loading,
                                className: "rounded-xl border border-line bg-bg px-3.5 py-2 text-sm font-semibold text-ink outline-none focus:border-gold",
                                children: TARGET_CAREER_OPTIONS.map((opt)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: opt,
                                        children: opt
                                    }, opt, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 70,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 58,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-12 text-center grid gap-3 place-items-center animate-pulse",
                "aria-busy": "true",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-10 h-10 rounded-full border-4 border-gold border-t-transparent animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-display text-lg font-bold text-ink",
                        children: "Diffing Transcripts with Target Requirements..."
                    }, void 0, false, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-ink-3 max-w-sm",
                        children: "Fetching course history and matching skill graphs from PostgreSQL."
                    }, void 0, false, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 82,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this) : error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "py-8 text-center grid gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-coral font-medium",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>onTargetChange(selectedTarget),
                        className: "press mx-auto rounded-full bg-surface border border-line px-4 py-2 text-xs font-bold hover:bg-surface-2",
                        children: "Retry Analysis"
                    }, void 0, false, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 89,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                lineNumber: 87,
                columnNumber: 9
            }, this) : roadmap ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-mint/30 bg-mint-tint/30 p-4 lg:p-5 grid gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-sm font-bold text-ink flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-mint font-bold",
                                                        children: "✓"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Skills You Already Have"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 104,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono font-bold text-mint",
                                                children: [
                                                    roadmap.skills_acquired.length,
                                                    " verified"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 107,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-ink-2",
                                        children: "Derived from your completed UMBC coursework (excluding W, F, IP)."
                                    }, void 0, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5 pt-1",
                                        children: roadmap.skills_acquired.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-surface border border-mint/40 px-3 py-1 text-xs font-bold text-ink shadow-sm",
                                                children: [
                                                    "✓ ",
                                                    skill
                                                ]
                                            }, skill, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 114,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "rounded-2xl border border-coral/30 bg-coral-tint/30 p-4 lg:p-5 grid gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-display text-sm font-bold text-ink flex items-center gap-1.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-coral font-bold",
                                                        children: "⚡"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this),
                                                    " Identified Skill Gaps"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 129,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono font-bold text-coral",
                                                children: [
                                                    roadmap.skill_gaps_to_target.length,
                                                    " to bridge"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 132,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-ink-2",
                                        children: [
                                            "Key competencies prioritized by employers in ",
                                            roadmap.target_career,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 136,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-1.5 pt-1",
                                        children: roadmap.skill_gaps_to_target.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "rounded-full bg-surface border border-coral/40 px-3 py-1 text-xs font-bold text-coral shadow-sm",
                                                children: [
                                                    "● ",
                                                    skill
                                                ]
                                            }, skill, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 141,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 127,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 100,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-lg font-bold text-ink flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: "🎯"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 19
                                                }, this),
                                                " Recommended Next UMBC Courses"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                            lineNumber: 156,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-ink-2",
                                            children: "Courses that directly address your identified skill gaps."
                                        }, void 0, false, {
                                            fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                            lineNumber: 159,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                    lineNumber: 155,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-2 gap-3",
                                children: roadmap.recommended_next_courses.map((course)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-line bg-surface p-4 grid gap-2 hover:border-gold transition-colors",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "font-mono text-xs font-bold text-gold-deep bg-gold-tint px-2.5 py-1 rounded-lg",
                                                        children: course.course_id
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                        lineNumber: 172,
                                                        columnNumber: 21
                                                    }, this),
                                                    onAddCourseToPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        type: "button",
                                                        onClick: ()=>onAddCourseToPlan(course),
                                                        className: "press text-xs font-bold text-teal hover:underline",
                                                        title: "Add to my semester checklist",
                                                        children: "＋ Add to Plan"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 171,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-sm text-ink",
                                                children: course.title
                                            }, void 0, false, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 187,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid gap-1 pt-1 border-t border-line",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[11px] font-semibold text-ink-3",
                                                        children: "Bridges Gaps In:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap gap-1",
                                                        children: course.addresses_skills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "rounded-md bg-teal-tint text-teal px-2 py-0.5 text-xs font-bold",
                                                                children: s
                                                            }, s, false, {
                                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                                lineNumber: 193,
                                                                columnNumber: 25
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                        lineNumber: 191,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 189,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, course.course_id, true, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 167,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 165,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    roadmap.undergraduate_research_pathways && roadmap.undergraduate_research_pathways.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-3 pt-2 border-t border-line",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-display text-base font-bold text-ink flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "🔬"
                                    }, void 0, false, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 211,
                                        columnNumber: 17
                                    }, this),
                                    " Proven UMBC Research Labs for This Target"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 210,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid sm:grid-cols-3 gap-3",
                                children: roadmap.undergraduate_research_pathways.map((path, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-xl border border-line bg-surface-2 p-3.5 grid gap-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-bold text-mint bg-mint-tint px-2 py-0.5 rounded w-max",
                                                children: "Research Lab"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 219,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-semibold text-sm text-ink",
                                                children: path.lab
                                            }, void 0, false, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 222,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-ink-3",
                                                children: path.role
                                            }, void 0, false, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 223,
                                                columnNumber: 21
                                            }, this),
                                            onAddLabToPlan && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                type: "button",
                                                onClick: ()=>onAddLabToPlan(path),
                                                className: "press text-xs font-bold text-teal text-left mt-1 hover:underline",
                                                children: "＋ Add to Experience"
                                            }, void 0, false, {
                                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                                lineNumber: 225,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, "".concat(path.lab, "-").concat(idx), true, {
                                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                        lineNumber: 215,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                                lineNumber: 213,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
                        lineNumber: 209,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true) : null
        ]
    }, void 0, true, {
        fileName: "[project]/components/TranscriptGapRoadmap.tsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_c = TranscriptGapRoadmap;
var _c;
__turbopack_context__.k.register(_c, "TranscriptGapRoadmap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/roadmap/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Roadmap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/plan.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/programs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/storage.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth-context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/api.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TranscriptGapRoadmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/TranscriptGapRoadmap.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const kindStyle = {
    Class: "bg-teal-tint text-teal",
    Project: "bg-gold-tint text-gold-deep",
    Experience: "bg-mint-tint text-mint",
    Internship: "bg-coral-tint text-coral",
    Skill: "bg-surface-2 text-ink-2",
    Career: "bg-surface-2 text-ink"
};
const kindIcon = {
    Class: "📘",
    Project: "🛠️",
    Experience: "🌱",
    Internship: "💼",
    Skill: "⚡",
    Career: "🎯"
};
function Roadmap() {
    var _plan_careerTargets_;
    _s();
    const { ready, profile, plan, done, custom, hidden, toggle, addItem, removeItem, restoreAll, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoadmap"])();
    const { user, isAuthenticated, isGuest, targetJobFamily, setTargetJobFamily, openLoginModal, login } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const [yearIdx, setYearIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [note, setNote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Backend Roadmap state (POST /api/roadmap/generate)
    const [roadmapData, setRoadmapData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [roadmapLoading, setRoadmapLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [roadmapError, setRoadmapError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [demoLoading, setDemoLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Fetch backend roadmap whenever authenticated campus_id or target career changes
    const fetchBackendRoadmap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "Roadmap.useCallback[fetchBackendRoadmap]": async (campusId, career)=>{
            setRoadmapLoading(true);
            setRoadmapError(null);
            try {
                const data = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$api$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["api"].generateRoadmap({
                    campus_id: campusId,
                    target_job_family: career
                });
                setRoadmapData(data);
            } catch (err) {
                const msg = err instanceof Error ? err.message : "Failed to generate roadmap from backend.";
                setRoadmapError(msg);
            } finally{
                setRoadmapLoading(false);
            }
        }
    }["Roadmap.useCallback[fetchBackendRoadmap]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Roadmap.useEffect": ()=>{
            if (isAuthenticated && (user === null || user === void 0 ? void 0 : user.campusId)) {
                fetchBackendRoadmap(user.campusId, targetJobFamily || "Data & Analytics");
            }
        }
    }["Roadmap.useEffect"], [
        isAuthenticated,
        user === null || user === void 0 ? void 0 : user.campusId,
        targetJobFamily,
        fetchBackendRoadmap
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Roadmap.useEffect": ()=>{
            try {
                const n = sessionStorage.getItem("rp-plan-note");
                if (n) {
                    setNote(n);
                    sessionStorage.removeItem("rp-plan-note");
                }
            } catch (e) {
            /* optional */ }
        }
    }["Roadmap.useEffect"], []);
    // Quick 1-click Demo Student login
    async function handleDemoLogin() {
        setDemoLoading(true);
        try {
            await login("test@umbc.edu", "CID-116490");
        } catch (e) {
        /* handled in context */ } finally{
            setDemoLoading(false);
        }
    }
    // Auto-initialize fallback plan if user is authenticated but no local plan exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Roadmap.useEffect": ()=>{
            if (ready && !plan && isAuthenticated && user) {
                const progId = user.major === "Information Systems" ? "is-bs" : "cs-bs";
                const autoProfile = {
                    level: "undergrad",
                    programIds: [
                        progId
                    ],
                    minors: [],
                    focusIds: [],
                    customFocus: user.track,
                    careerGoal: targetJobFamily || "Data & Analytics",
                    year: user.classLevel || "Junior",
                    experience: [],
                    notes: "Auto-generated for authenticated UMBC student"
                };
                const autoPlan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["finalizePlan"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["buildBuiltinPlan"])(autoProfile), "builtin");
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveNewPlan"])(autoProfile, autoPlan);
                window.location.reload();
            }
        }
    }["Roadmap.useEffect"], [
        ready,
        plan,
        isAuthenticated,
        user,
        targetJobFamily
    ]);
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-6xl px-4 py-10 lg:py-14 grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-10 animate-pulse",
            "aria-busy": "true",
            "aria-label": "Loading your plan",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-96 rounded-2xl bg-surface-2"
                }, void 0, false, {
                    fileName: "[project]/app/roadmap/page.tsx",
                    lineNumber: 110,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-10 w-2/3 rounded-xl bg-surface-2"
                        }, void 0, false, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 112,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "h-80 rounded-2xl bg-surface-2"
                        }, void 0, false, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/roadmap/page.tsx",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/roadmap/page.tsx",
            lineNumber: 109,
            columnNumber: 7
        }, this);
    }
    if (!profile || !plan) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mx-auto max-w-2xl px-4 py-20 grid gap-6 justify-items-start rise",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "rounded-full bg-gold-tint text-gold-deep text-sm font-bold px-3 py-1",
                    children: "Personalized Career Roadmap"
                }, void 0, false, {
                    fileName: "[project]/app/roadmap/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "font-display text-4xl font-bold text-ink",
                    children: "Connect Your Student Path"
                }, void 0, false, {
                    fileName: "[project]/app/roadmap/page.tsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-ink-2",
                    children: "Run automated transcript gap diffing against 140,000+ historical UMBC alumni records, or build a custom semester-by-semester checklist."
                }, void 0, false, {
                    fileName: "[project]/app/roadmap/page.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-2xl border border-line bg-surface p-6 w-full grid gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "grid place-items-center w-10 h-10 rounded-xl bg-gold text-on-gold font-bold",
                                    children: "⚡"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-display font-bold text-ink text-base",
                                            children: "Instant Demo Student (CID-116490)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-ink-2",
                                            children: "Loads live transcript data, calculates verified skills, and identifies course gaps."
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 133,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3 pt-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleDemoLogin,
                                    disabled: demoLoading,
                                    className: "press rounded-full bg-gold px-6 py-3 font-bold text-on-gold hover:bg-gold-soft shadow-md disabled:opacity-50",
                                    children: demoLoading ? "Connecting to PostgreSQL..." : "Load Demo Student (CID-116490)"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 148,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/start",
                                    className: "press rounded-full border border-line px-5 py-3 font-semibold text-ink hover:bg-surface-2",
                                    children: "Explore Career Matches →"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/roadmap/page.tsx",
                    lineNumber: 132,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/roadmap/page.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this);
    }
    const currentIdx = Math.max(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["yearsByLevel"][profile.level].indexOf(profile.year));
    const active = yearIdx !== null && yearIdx !== void 0 ? yearIdx : Math.min(currentIdx, plan.years.length - 1);
    const rowsFor = (yi)=>[
            ...plan.years[yi].items.filter((i)=>!hidden.includes(i.id)).map((i)=>({
                    ...i,
                    mine: false
                })),
            ...custom.filter((c)=>c.yearIndex === yi).map((c)=>({
                    ...c,
                    mine: true
                }))
        ];
    const allRows = plan.years.flatMap((_, yi)=>rowsFor(yi));
    const doneCount = allRows.filter((r)=>done.includes(r.id)).length;
    const pct = allRows.length ? Math.round(doneCount / allRows.length * 100) : 0;
    var _rowsFor_find;
    const nextUp = (_rowsFor_find = rowsFor(currentIdx).find((r)=>!done.includes(r.id))) !== null && _rowsFor_find !== void 0 ? _rowsFor_find : allRows.find((r)=>!done.includes(r.id));
    const programs = profile.programIds.map(__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getProgram"]).filter(Boolean);
    const focus = [
        ...profile.focusIds.map((f)=>{
            var _focusAreas_find;
            return (_focusAreas_find = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$programs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["focusAreas"].find((x)=>x.id === f)) === null || _focusAreas_find === void 0 ? void 0 : _focusAreas_find.label;
        }),
        profile.customFocus
    ].filter(Boolean);
    // Add course from transcript diff into timeline checklist
    const handleAddCourseToPlan = (course)=>{
        addItem({
            title: "".concat(course.course_id, ": ").concat(course.title),
            kind: "Class",
            detail: "Recommended by transcript gap analysis. Addresses: ".concat(course.addresses_skills.join(", ")),
            yearIndex: active
        });
    };
    // Add research lab from transcript diff into timeline checklist
    const handleAddLabToPlan = (lab)=>{
        addItem({
            title: "".concat(lab.role, " (").concat(lab.lab, ")"),
            kind: "Experience",
            detail: "Historical undergraduate research pathway for ".concat(targetJobFamily),
            yearIndex: active
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto max-w-6xl px-4 py-10 lg:py-14 grid gap-6 lg:grid-cols-[320px_1fr] lg:gap-x-10 lg:items-start",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "grid gap-2 lg:col-start-2 lg:row-start-1 rise",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-between gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-ink-3 flex items-center gap-2",
                                children: [
                                    isAuthenticated ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-2.5 py-1",
                                        children: [
                                            "🎓 Verified Student: ",
                                            user === null || user === void 0 ? void 0 : user.campusId
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-surface-2 text-ink-2 text-xs font-bold px-2.5 py-1",
                                        children: "Guest View"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 212,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: plan.headline
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 216,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            !isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: openLoginModal,
                                className: "press text-xs font-bold text-gold-deep bg-gold-tint px-3 py-1.5 rounded-full hover:bg-gold-soft/40",
                                children: "⚡ Sign In to Unlock Transcript Diff"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 220,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-display text-3xl lg:text-4xl font-bold text-ink",
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJobTitle"])(profile.careerGoal) ? "Your path to ".concat(profile.careerGoal) : "Your path to ".concat(targetJobFamily || ((_plan_careerTargets_ = plan.careerTargets[0]) === null || _plan_careerTargets_ === void 0 ? void 0 : _plan_careerTargets_.title) || "your goal")
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    profile.careerGoal && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isJobTitle"])(profile.careerGoal) && profile.careerGoal !== "Not sure yet" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-ink font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                children: "🎯 "
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 235,
                                columnNumber: 47
                            }, this),
                            "Your goal: “",
                            profile.careerGoal,
                            "”"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 235,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-ink-2 max-w-3xl",
                        children: plan.summary
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this),
                    note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        role: "status",
                        className: "rounded-xl bg-gold-tint text-ink text-sm px-4 py-2.5",
                        children: note
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 238,
                        columnNumber: 18
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 204,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                "aria-label": "Your profile and progress",
                className: "grid gap-5 lg:col-start-1 lg:row-start-1 lg:row-span-2 lg:sticky lg:top-28 stagger",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6 grid gap-5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-ink-3",
                                                children: profile.year
                                            }, void 0, false, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 246,
                                                columnNumber: 15
                                            }, this),
                                            isAuthenticated && user && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs font-mono font-bold text-mint bg-mint-tint px-2 py-0.5 rounded",
                                                children: user.campusId
                                            }, void 0, false, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 248,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 245,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-display text-lg font-semibold leading-snug",
                                        children: programs.map((x)=>"".concat(x.name, " (").concat(x.degree, ")")).join(" + ")
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this),
                                    profile.minors.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-ink-2",
                                        children: [
                                            "Minor: ",
                                            profile.minors.join(", ")
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 256,
                                        columnNumber: 43
                                    }, this),
                                    focus.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "flex flex-wrap gap-1.5 mt-2",
                                        "aria-label": "Focus areas",
                                        children: focus.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "rounded-full bg-teal-tint text-teal text-xs font-bold px-2.5 py-1",
                                                children: f
                                            }, f, false, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 259,
                                                columnNumber: 35
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 244,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between text-sm mb-1.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-ink-2 font-medium",
                                                children: "Overall progress"
                                            }, void 0, false, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 66
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-mono",
                                                children: [
                                                    pct,
                                                    "%"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 265,
                                                columnNumber: 130
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 265,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-3 rounded-full bg-surface-2",
                                        role: "progressbar",
                                        "aria-label": "Plan progress",
                                        "aria-valuenow": pct,
                                        "aria-valuemin": 0,
                                        "aria-valuemax": 100,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bar-fill h-3 rounded-full bg-gold",
                                            style: {
                                                width: "".concat(pct, "%")
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 264,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                                className: "grid grid-cols-3 gap-3",
                                children: [
                                    {
                                        label: "Done",
                                        value: doneCount
                                    },
                                    {
                                        label: "To go",
                                        value: allRows.length - doneCount
                                    },
                                    {
                                        label: "Year",
                                        value: currentIdx + 1
                                    }
                                ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-surface-2 rounded-xl p-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                                                className: "text-xs text-ink-3 font-medium",
                                                children: s.label
                                            }, void 0, false, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 274,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                                                className: "font-display text-2xl font-bold",
                                                children: s.value
                                            }, void 0, false, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 275,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, s.label, true, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 271,
                                columnNumber: 11
                            }, this),
                            nextUp ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-xl bg-gold-tint text-ink px-4 py-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-bold",
                                        children: "Up next:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 280,
                                        columnNumber: 79
                                    }, this),
                                    " ",
                                    nextUp.title
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 280,
                                columnNumber: 21
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "rounded-xl bg-mint-tint text-mint font-bold px-4 py-3",
                                children: "🎉 You finished every step!"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 281,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/start",
                                        className: "press whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold hover:bg-surface-2",
                                        children: "Career Explorer"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 284,
                                        columnNumber: 13
                                    }, this),
                                    programs[0] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/paths/".concat(programs[0].id),
                                        className: "press whitespace-nowrap rounded-full border border-line bg-surface px-4 py-2 text-sm font-semibold hover:bg-surface-2",
                                        children: "About my program"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (confirm("Start over? This deletes your plan, checkmarks, and added items.")) reset();
                                        },
                                        className: "press whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold text-coral hover:bg-coral-tint",
                                        children: "Start over"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 288,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    plan.keySkills.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-5 grid gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs font-semibold text-ink-3 uppercase tracking-wide",
                                children: "Key skills to build"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 295,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "flex flex-wrap gap-1.5",
                                children: plan.keySkills.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "rounded-full bg-surface-2 text-ink-2 text-xs font-bold px-2.5 py-1",
                                        children: s
                                    }, s, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 296,
                                        columnNumber: 79
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 296,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-8 min-w-0 lg:col-start-2",
                children: [
                    isAuthenticated && (user === null || user === void 0 ? void 0 : user.campusId) ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$TranscriptGapRoadmap$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        roadmap: roadmapData,
                        loading: roadmapLoading,
                        error: roadmapError,
                        selectedTarget: targetJobFamily || "Data & Analytics",
                        onTargetChange: (newTarget)=>{
                            setTargetJobFamily(newTarget);
                            fetchBackendRoadmap(user.campusId, newTarget);
                        },
                        onAddCourseToPlan: handleAddCourseToPlan,
                        onAddLabToPlan: handleAddLabToPlan
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 305,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "glass-card p-6 border-2 border-dashed border-line rounded-2xl grid gap-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-start justify-between gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-3 py-1",
                                            children: "Automated Transcript Diffing"
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-display text-xl font-bold text-ink mt-2",
                                            children: "Unlock Your Transcript Gap Analysis"
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 324,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink-2 max-w-xl",
                                            children: [
                                                "Sign in with your Campus ID to see verified skills extracted from your transcript, specific skill gaps for ",
                                                targetJobFamily || "your target career",
                                                ", and recommended next UMBC courses."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 320,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: handleDemoLogin,
                                    disabled: demoLoading,
                                    className: "press rounded-full bg-gold px-5 py-2.5 text-xs font-bold text-on-gold hover:bg-gold-soft shadow-md shrink-0",
                                    children: demoLoading ? "Connecting..." : "⚡ Quick Demo (CID-116490)"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 332,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 319,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 318,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-display text-xl font-bold text-ink",
                                        children: "Semester-by-Semester Execution Plan"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-ink-3",
                                        children: "Interactive Checklist"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                "aria-label": "Years",
                                className: "flex gap-2 overflow-x-auto pb-1",
                                children: plan.years.map((y, yi)=>{
                                    const rows = rowsFor(yi);
                                    const d = rows.filter((r)=>done.includes(r.id)).length;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setYearIdx(yi),
                                        "aria-current": yi === active ? "true" : undefined,
                                        className: "press shrink-0 rounded-2xl border px-4 py-2.5 text-left ".concat(yi === active ? "glass-card !border-gold ring-2 ring-gold" : "border-line bg-surface hover:border-teal"),
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-sm font-semibold whitespace-nowrap",
                                                children: [
                                                    y.label.split(" · ")[0],
                                                    yi === currentIdx && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "ml-1.5 text-gold-deep",
                                                        children: "● now"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/roadmap/page.tsx",
                                                        lineNumber: 360,
                                                        columnNumber: 130
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 360,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "block text-xs text-ink-3 font-mono",
                                                children: [
                                                    d,
                                                    "/",
                                                    rows.length,
                                                    " done"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/roadmap/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, y.label, true, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 358,
                                        columnNumber: 17
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 353,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(YearPanel, {
                        plan: plan,
                        yearIdx: active,
                        isCurrent: active === currentIdx,
                        rows: rowsFor(active),
                        done: done,
                        hiddenCount: plan.years[active].items.filter((i)=>hidden.includes(i.id)).length,
                        onToggle: toggle,
                        onAdd: (item)=>addItem({
                                ...item,
                                yearIndex: active
                            }),
                        onRemove: removeItem,
                        onRestore: restoreAll
                    }, "".concat(plan.id, "-").concat(active), false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 369,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(JobsPanel, {
                        plan: plan
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 374,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 302,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/roadmap/page.tsx",
        lineNumber: 202,
        columnNumber: 5
    }, this);
}
_s(Roadmap, "tPuwcm8ZecyHzPvUiz9/gZ3yedM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$storage$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRoadmap"],
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2d$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Roadmap;
function YearPanel(param) {
    let { plan, yearIdx, isCurrent, rows, done, hiddenCount, onToggle, onAdd, onRemove, onRestore } = param;
    _s1();
    const year = plan.years[yearIdx];
    const [filter, setFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All");
    const [adding, setAdding] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const counts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "YearPanel.useMemo[counts]": ()=>{
            const c = {
                All: rows.length,
                Mine: rows.filter({
                    "YearPanel.useMemo[counts]": (r)=>r.mine
                }["YearPanel.useMemo[counts]"]).length
            };
            for (const k of __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemKinds"])c[k] = rows.filter({
                "YearPanel.useMemo[counts]": (r)=>r.kind === k
            }["YearPanel.useMemo[counts]"]).length;
            return c;
        }
    }["YearPanel.useMemo[counts]"], [
        rows
    ]);
    const shown = rows.filter((r)=>filter === "All" || (filter === "Mine" ? r.mine : r.kind === filter));
    const d = rows.filter((r)=>done.includes(r.id)).length;
    const filters = [
        "All",
        ...__TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemKinds"].filter((k)=>counts[k] > 0),
        ...counts.Mine ? [
            "Mine"
        ] : []
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "year-title",
        className: "glass-card p-5 lg:p-7 grid gap-5 rise ".concat(isCurrent ? "ring-2 ring-gold" : ""),
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-start justify-between gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                id: "year-title",
                                className: "font-display text-2xl font-bold flex flex-wrap items-center gap-2",
                                children: [
                                    year.label,
                                    isCurrent && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "rounded-full bg-gold-tint text-gold-deep text-xs font-bold px-2.5 py-1",
                                        children: "You are here"
                                    }, void 0, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 402,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 400,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-ink-2",
                                children: year.theme
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 404,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 399,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-mono text-sm text-ink-3",
                        children: [
                            d,
                            "/",
                            rows.length,
                            " done"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 398,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                role: "group",
                "aria-label": "Filter by type",
                className: "flex flex-wrap gap-2",
                children: filters.map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": filter === f,
                        onClick: ()=>setFilter(f),
                        className: "press rounded-full px-3.5 py-1.5 text-sm font-semibold border ".concat(filter === f ? "bg-ink text-bg border-ink" : "bg-surface border-line hover:border-teal"),
                        children: [
                            f === "Mine" ? "✍️ Added by me" : f === "All" ? "All" : "".concat(kindIcon[f], " ").concat(f === "Class" ? "Classes" : f === "Internship" ? "Internships" : f + "s"),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "ml-1.5 font-mono text-xs opacity-70",
                                children: counts[f]
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 414,
                                columnNumber: 13
                            }, this)
                        ]
                    }, f, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 411,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 409,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-2 stagger",
                "aria-live": "polite",
                children: [
                    shown.map((r)=>{
                        const checked = done.includes(r.id);
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "group flex items-start gap-3 rounded-xl bg-bg border border-line px-3 py-3 hover:border-teal transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "checkbox",
                                    checked: checked,
                                    onChange: ()=>onToggle(r.id),
                                    "aria-label": r.title,
                                    className: "tick mt-0.5 w-5 h-5 accent-[var(--rp-mint)] shrink-0 cursor-pointer"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 424,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 min-w-0 grid gap-0.5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-semibold ".concat(checked ? "line-through text-ink-3" : ""),
                                            children: r.title
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 427,
                                            columnNumber: 17
                                        }, this),
                                        r.detail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-ink-2",
                                            children: r.detail
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 428,
                                            columnNumber: 30
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 426,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 rounded-full text-xs font-bold px-2.5 py-1 ".concat(kindStyle[r.kind]),
                                    children: [
                                        kindIcon[r.kind],
                                        " ",
                                        r.kind
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 430,
                                    columnNumber: 15
                                }, this),
                                r.mine && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "shrink-0 rounded-full bg-surface-2 text-ink-2 text-xs font-bold px-2 py-1",
                                    title: "Added by you",
                                    children: "✍️"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 431,
                                    columnNumber: 26
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>onRemove(r.id),
                                    "aria-label": "Remove “".concat(r.title, "”"),
                                    title: "Remove",
                                    className: "press shrink-0 grid place-items-center w-7 h-7 rounded-full text-ink-3 hover:text-coral hover:bg-coral-tint opacity-60 group-hover:opacity-100 focus:opacity-100",
                                    children: "✕"
                                }, void 0, false, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 432,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, r.id, true, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 423,
                            columnNumber: 13
                        }, this);
                    }),
                    shown.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "text-ink-3 px-1",
                        children: "Nothing here yet for this filter."
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 437,
                        columnNumber: 32
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 419,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center gap-3",
                children: [
                    !adding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setAdding(true),
                        className: "press flex items-center gap-2 rounded-full border-2 border-dashed border-teal text-teal px-4 py-2 font-bold hover:bg-teal-tint",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                "aria-hidden": "true",
                                className: "text-lg leading-none",
                                children: "＋"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 443,
                                columnNumber: 13
                            }, this),
                            " Add to this year"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 442,
                        columnNumber: 11
                    }, this),
                    hiddenCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onRestore,
                        className: "press text-sm font-semibold text-ink-3 hover:text-teal",
                        children: [
                            "Restore ",
                            hiddenCount,
                            " removed item",
                            hiddenCount > 1 ? "s" : ""
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 447,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 440,
                columnNumber: 7
            }, this),
            adding && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(AddItemForm, {
                onCancel: ()=>setAdding(false),
                onSave: (item)=>{
                    onAdd(item);
                    setAdding(false);
                }
            }, void 0, false, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 450,
                columnNumber: 18
            }, this),
            year.resources.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-2 border-t border-line pt-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xs font-semibold text-ink-3 uppercase tracking-wide",
                        children: "Helpful for this year"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 454,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "grid gap-2 sm:grid-cols-2",
                        children: year.resources.map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: res.url,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "press block rounded-xl border border-line bg-surface px-4 py-3 hover:border-teal",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-teal",
                                            children: [
                                                res.name,
                                                " ↗"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 459,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "block text-sm text-ink-2",
                                            children: res.why
                                        }, void 0, false, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 460,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 17
                                }, this)
                            }, res.url + res.name, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 457,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 455,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 453,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/roadmap/page.tsx",
        lineNumber: 397,
        columnNumber: 5
    }, this);
}
_s1(YearPanel, "l0k5S63V/KG2jYOAhrGW+sXYfvs=");
_c1 = YearPanel;
function AddItemForm(param) {
    let { onSave, onCancel } = param;
    _s2();
    const [title, setTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [kind, setKind] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("Class");
    const [detail, setDetail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const uid = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AddItemForm.useEffect": ()=>{
            var _titleRef_current;
            (_titleRef_current = titleRef.current) === null || _titleRef_current === void 0 ? void 0 : _titleRef_current.focus();
        }
    }["AddItemForm.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        className: "pop grid gap-3 rounded-2xl border border-teal bg-surface p-4",
        onSubmit: (e)=>{
            e.preventDefault();
            if (title.trim()) onSave({
                title: title.trim(),
                kind,
                detail: detail.trim()
            });
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "font-semibold",
                children: "Add your own item"
            }, void 0, false, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 483,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-3 sm:grid-cols-[1fr_180px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "".concat(uid, "-title"),
                                className: "text-sm font-semibold",
                                children: "What is it?"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 486,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "".concat(uid, "-title"),
                                ref: titleRef,
                                required: true,
                                value: title,
                                onChange: (e)=>setTitle(e.target.value),
                                maxLength: 120,
                                placeholder: "e.g. Take CMSC 461 (Database Systems)",
                                className: "rounded-xl border border-line bg-bg px-3 py-2.5 outline-none focus:border-teal"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 485,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "".concat(uid, "-kind"),
                                className: "text-sm font-semibold",
                                children: "Type"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 491,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "".concat(uid, "-kind"),
                                value: kind,
                                onChange: (e)=>setKind(e.target.value),
                                className: "rounded-xl border border-line bg-bg px-3 py-2.5",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["itemKinds"].map((k)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        children: k
                                    }, k, false, {
                                        fileName: "[project]/app/roadmap/page.tsx",
                                        lineNumber: 493,
                                        columnNumber: 35
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 490,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 484,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "".concat(uid, "-detail"),
                        className: "text-sm font-semibold",
                        children: [
                            "Notes ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-normal text-ink-3",
                                children: "(optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/roadmap/page.tsx",
                                lineNumber: 498,
                                columnNumber: 82
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 498,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        id: "".concat(uid, "-detail"),
                        value: detail,
                        onChange: (e)=>setDetail(e.target.value),
                        maxLength: 200,
                        placeholder: "Why it matters, a deadline, or who suggested it",
                        className: "rounded-xl border border-line bg-bg px-3 py-2.5 outline-none focus:border-teal"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 499,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 497,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        className: "press bg-teal text-white rounded-full px-5 py-2 font-bold",
                        children: "Add"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 503,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: onCancel,
                        className: "press rounded-full px-5 py-2 font-semibold text-ink-2 hover:bg-surface-2",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 504,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 502,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/roadmap/page.tsx",
        lineNumber: 481,
        columnNumber: 5
    }, this);
}
_s2(AddItemForm, "SbF8hlAiiKGrdHa+8NpZSzN4PcU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c2 = AddItemForm;
function JobsPanel(param) {
    let { plan } = param;
    var _targets_sel, _targets_sel1, _targets_sel2;
    _s3();
    const targets = plan.careerTargets;
    const [sel, setSel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [state, setState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        loading: true,
        configured: true,
        jobs: []
    });
    var _targets_sel_searchKeyword;
    const keyword = (_targets_sel_searchKeyword = (_targets_sel = targets[sel]) === null || _targets_sel === void 0 ? void 0 : _targets_sel.searchKeyword) !== null && _targets_sel_searchKeyword !== void 0 ? _targets_sel_searchKeyword : "";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsPanel.useEffect": ()=>{
            if (!keyword) return;
            let alive = true;
            setState({
                "JobsPanel.useEffect": (s)=>({
                        ...s,
                        loading: true
                    })
            }["JobsPanel.useEffect"]);
            fetch("/api/jobs?q=".concat(encodeURIComponent(keyword))).then({
                "JobsPanel.useEffect": (r)=>r.json()
            }["JobsPanel.useEffect"]).then({
                "JobsPanel.useEffect": (d)=>{
                    var _d_jobs;
                    return alive && setState({
                        loading: false,
                        configured: d.configured !== false,
                        jobs: (_d_jobs = d.jobs) !== null && _d_jobs !== void 0 ? _d_jobs : [],
                        error: d.error
                    });
                }
            }["JobsPanel.useEffect"]).catch({
                "JobsPanel.useEffect": ()=>alive && setState({
                        loading: false,
                        configured: true,
                        jobs: [],
                        error: "Job search is unavailable right now."
                    })
            }["JobsPanel.useEffect"]);
            return ({
                "JobsPanel.useEffect": ()=>{
                    alive = false;
                }
            })["JobsPanel.useEffect"];
        }
    }["JobsPanel.useEffect"], [
        keyword
    ]);
    if (!targets.length) return null;
    var _state_error;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        "aria-labelledby": "jobs-title",
        className: "glass-card p-5 lg:p-7 grid gap-4 rise",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        id: "jobs-title",
                        className: "font-display text-xl font-bold",
                        children: "Careers you're building toward"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 531,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-ink-3",
                        children: "Tap a career to see live federal postings from USAJOBS."
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 532,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 530,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2",
                children: targets.map((t, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        "aria-pressed": i === sel,
                        onClick: ()=>setSel(i),
                        className: "press rounded-full px-3.5 py-1.5 text-sm font-semibold border ".concat(i === sel ? "bg-teal text-white border-teal" : "bg-surface border-line hover:border-teal"),
                        children: t.title
                    }, t.title, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 536,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 534,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-ink-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "font-semibold text-ink",
                        children: [
                            (_targets_sel1 = targets[sel]) === null || _targets_sel1 === void 0 ? void 0 : _targets_sel1.title,
                            ":"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 540,
                        columnNumber: 41
                    }, this),
                    " ",
                    (_targets_sel2 = targets[sel]) === null || _targets_sel2 === void 0 ? void 0 : _targets_sel2.why
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 540,
                columnNumber: 7
            }, this),
            state.loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-2 animate-pulse",
                "aria-busy": "true",
                children: [
                    0,
                    1,
                    2
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        className: "h-16 rounded-xl bg-surface-2"
                    }, i, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 543,
                        columnNumber: 89
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 543,
                columnNumber: 9
            }, this) : state.jobs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                className: "grid gap-2 stagger",
                children: state.jobs.map((j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: j.url,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "press block rounded-xl border border-line bg-surface px-4 py-3 hover:border-teal",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-semibold",
                                    children: [
                                        j.title,
                                        " ↗"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 549,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-sm text-ink-2",
                                    children: [
                                        j.agency,
                                        j.location ? " · ".concat(j.location) : ""
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 550,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block text-sm font-mono text-teal",
                                    children: [
                                        j.salary,
                                        j.closes ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-ink-3",
                                            children: [
                                                " · closes ",
                                                j.closes
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/roadmap/page.tsx",
                                            lineNumber: 551,
                                            columnNumber: 91
                                        }, this) : null
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/roadmap/page.tsx",
                                    lineNumber: 551,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/roadmap/page.tsx",
                            lineNumber: 548,
                            columnNumber: 15
                        }, this)
                    }, j.url, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 547,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 545,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "rounded-xl bg-surface-2 px-4 py-3 text-sm text-ink-2",
                children: [
                    !state.configured ? "Live job listings aren't set up yet (needs a free USAJOBS API key)." : (_state_error = state.error) !== null && _state_error !== void 0 ? _state_error : "No open federal postings for this search right now.",
                    " Try the links below."
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 557,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 text-sm",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usajobsSearchUrl"])(keyword),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "press rounded-full border border-line bg-surface px-3.5 py-1.5 font-semibold hover:border-teal",
                        children: "Search USAJOBS ↗"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 563,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "https://www.onetonline.org/find/quick?s=".concat(encodeURIComponent(keyword)),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "press rounded-full border border-line bg-surface px-3.5 py-1.5 font-semibold hover:border-teal",
                        children: "O*NET career profile ↗"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 564,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$plan$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RESOURCE_LINKS"].ooh.url,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "press rounded-full border border-line bg-surface px-3.5 py-1.5 font-semibold hover:border-teal",
                        children: "Salary & outlook (BLS) ↗"
                    }, void 0, false, {
                        fileName: "[project]/app/roadmap/page.tsx",
                        lineNumber: 565,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/roadmap/page.tsx",
                lineNumber: 562,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/roadmap/page.tsx",
        lineNumber: 529,
        columnNumber: 5
    }, this);
}
_s3(JobsPanel, "V5x0tXlg+4p+w+RqZU9ZPrEtgZM=");
_c3 = JobsPanel;
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Roadmap");
__turbopack_context__.k.register(_c1, "YearPanel");
__turbopack_context__.k.register(_c2, "AddItemForm");
__turbopack_context__.k.register(_c3, "JobsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7d86927d._.js.map