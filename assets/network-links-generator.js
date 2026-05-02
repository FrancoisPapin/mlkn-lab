// =============================================
// MLKN.lab - Network Links Generator (Hybrid Solution)
// Auteur: François Papin (adapté par Le Chat)
// =============================================

// =============================================
// CONFIGURATION PAR DISCIPLINE
// =============================================
const DISCIPLINE_CONFIG = {
  "Anthropology": {
    clusters: [
      "CULTURAL",
      "BIOANTH",
      "LINGAUTH",
      "ARCHAEO",
      "MEDICAL",
      "ECOANTH",
      "POLITANH",
      "APPLIED"
    ],
    clusterConnections: {
      "CULTURAL": ["LINGAUTH", "MEDICAL", "POLITANH"],
      "BIOANTH": ["ARCHAEO", "MEDICAL"],
      "LINGAUTH": ["CULTURAL", "POLITANH"],
      "ARCHAEO": ["BIOANTH", "ECOANTH"],
      "MEDICAL": ["CULTURAL", "ECOANTH"],
      "ECOANTH": ["ARCHAEO", "MEDICAL", "POLITANH"],
      "POLITANH": ["CULTURAL", "LINGAUTH", "ECOANTH"],
      "APPLIED": ["CULTURAL", "MEDICAL", "POLITANH"]
    },
    expertLinks: [
      ["Ethnography", "Language & Culture", 4],
      ["Cultural Relativism", "Ethnolinguistics", 3],
      ["Human Evolution", "Cultural Ecology", 3],
      ["Medical Pluralism", "Political Ecology", 3],
      ["Power & Hegemony", "Discourse & Power", 4],
      ["Social Structure", "State & Governance", 3],
      ["Behavioral Ecology", "Human Evolution", 3],
      ["Ethnomedicine", "Global Health", 4],
      ["Settlement Patterns", "Landscape Archaeology", 3],
      ["Colonialism & Decolonization", "Race & Ethnicity", 4]
    ],
    conceptKeywords: {
      // Cultural Anthropology
      "Ethnography": ["fieldwork", "culture", "observation", "qualitative", "ethnographic"],
      "Kinship & Marriage": ["family", "social-structure", "marriage", "relationships", "kinship"],
      "Ritual & Symbolism": ["ritual", "symbolism", "ceremony", "meaning", "religion"],
      "Cultural Relativism": ["diversity", "values", "perspective", "culture", "relativism"],
      "Social Structure": ["society", "hierarchy", "organization", "roles", "institutions"],
      "Myth & Narrative": ["myth", "story", "narrative", "folklore", "tradition"],
      "Material Culture": ["artifacts", "objects", "technology", "materials", "crafts"],

      // Biological Anthropology
      "Human Evolution": ["evolution", "hominids", "fossils", "adaptation", "natural-selection"],
      "Primatology": ["primates", "apes", "monkeys", "behavior", "ecology"],
      "Osteology": ["bones", "skeleton", "fossils", "anatomy", "paleopathology"],
      "Paleoanthropology": ["fossils", "human-ancestors", "prehistory", "excavation"],
      "Human Genetics": ["DNA", "genes", "heredity", "population", "variation"],
      "Forensic Anthropology": ["forensics", "skeletons", "identification", "crime", "legal"],

      // Linguistic Anthropology
      "Language & Culture": ["language", "communication", "culture", "symbols", "meaning"],
      "Ethnolinguistics": ["language", "culture", "dialects", "linguistic-diversity"],
      "Discourse & Power": ["language", "power", "ideology", "communication", "authority"],
      "Language Ideologies": ["beliefs", "language", "values", "attitudes"],
      "Communicative Practices": ["communication", "interaction", "speech", "gestures"],
      "Language Endangerment (A)": ["endangered-languages", "preservation", "revitalization"],

      // Archaeology
      "Stratigraphy": ["layers", "soil", "excavation", "chronology"],
      "Lithic Analysis": ["stone-tools", "artifacts", "technology", "flint"],
      "Settlement Patterns": ["villages", "cities", "architecture", "urbanism"],
      "Mortuary Archaeology": ["burials", "graves", "funerary-practices", "afterlife"],
      "Landscape Archaeology": ["landscape", "environment", "monuments", "geography"],
      "Historical Archaeology": ["history", "artifacts", "colonialism", "industrialization"],

      // Medical Anthropology
      "Medical Pluralism": ["health", "traditional-medicine", "modern-medicine", "pluralism"],
      "Ethnomedicine": ["traditional-healing", "herbs", "rituals", "health-beliefs"],
      "Illness Narratives": ["disease", "sickness", "stories", "experience"],
      "Global Health": ["health", "global", "epidemics", "policy", "inequality"],
      "Body & Embodiment": ["body", "perception", "identity", "experience"],

      // Ecological Anthropology
      "Cultural Ecology": ["environment", "adaptation", "subsistence", "ecosystem"],
      "Political Ecology": ["environment", "power", "resources", "conflict"],
      "Human-Environment Rel.": ["human", "environment", "interaction", "sustainability"],
      "Ethnoecology": ["knowledge", "nature", "indigenous", "biodiversity"],
      "Food & Subsistence": ["food", "agriculture", "hunting", "gathering"],
      "Climate Anthropology": ["climate", "adaptation", "change", "resilience"],

      // Political Anthropology
      "Power & Hegemony": ["power", "control", "domination", "authority", "hegemony"],
      "State & Governance": ["state", "government", "laws", "institutions"],
      "Social Movements": ["protest", "activism", "change", "resistance"],
      "Colonialism & Decolonization": ["colonialism", "imperialism", "independence", "postcolonial"],
      "Race & Ethnicity": ["race", "ethnicity", "identity", "discrimination"],
      "Violence & Conflict": ["war", "conflict", "peace", "resolution"],

      // Applied Anthropology
      "Development Anthropology": ["development", "projects", "NGOs", "sustainability"],
      "Action Research": ["research", "participatory", "community", "change"],
      "Advocacy Anthropology": ["advocacy", "rights", "justice", "policy"],
      "Heritage Management": ["heritage", "conservation", "museums", "tourism"],
      "Corporate Ethnography": ["business", "consumer", "marketing", "workplace"],
      "Policy Anthropology": ["policy", "government", "recommendations", "impact"]
    }
  }
  
  "Cognitive Psychology": {
  clusters: [
    "PERCEPT",   // Perception
    "MEMORY",    // Mémoire
    "LANGUAGE",  // Langage
    "EXEC",      // Fonctions exécutives
    "EMOTION",   // Émotion
    "SOCIAL",    // Cognition sociale
    "JUDGMENT",  // Jugement et prise de décision
    "METHODS"    // Méthodes
  ],
  clusterConnections: {
    // Connexions logiques entre clusters
    "PERCEPT": ["MEMORY", "LANGUAGE", "EXEC", "METHODS"],  // La perception influence la mémoire, le langage, les fonctions exécutives et utilise des méthodes
    "MEMORY": ["PERCEPT", "LANGUAGE", "EXEC", "EMOTION"],    // La mémoire est liée à la perception, au langage, aux fonctions exécutives et aux émotions
    "LANGUAGE": ["PERCEPT", "MEMORY", "EXEC", "SOCIAL"],    // Le langage dépend de la perception, de la mémoire, des fonctions exécutives et a un rôle social
    "EXEC": ["PERCEPT", "MEMORY", "LANGUAGE", "JUDGMENT", "EMOTION", "SOCIAL"], // Les fonctions exécutives coordonnent plusieurs processus
    "EMOTION": ["MEMORY", "EXEC", "SOCIAL", "JUDGMENT"],     // Les émotions influencent la mémoire, les fonctions exécutives, la cognition sociale et le jugement
    "SOCIAL": ["LANGUAGE", "EXEC", "EMOTION", "JUDGMENT"],  // La cognition sociale implique le langage, les fonctions exécutives, les émotions et le jugement
    "JUDGMENT": ["EXEC", "EMOTION", "SOCIAL", "METHODS"],    // Le jugement dépend des fonctions exécutives, des émotions, de la cognition sociale et utilise des méthodes
    "METHODS": ["PERCEPT", "MEMORY", "EXEC", "JUDGMENT"]    // Les méthodes sont appliquées à la perception, la mémoire, les fonctions exécutives et le jugement
  },
  expertLinks: [
    // Liens forts entre concepts clés
    ["Visual Attention", "Object Recognition", 4],
    ["Working Memory Model", "Episodic Memory", 4],
    ["Language Comprehension", "Sentence Processing", 4],
    ["Cognitive Control", "Inhibitory Control", 4],
    ["Theory of Mind (Psy)", "Perspective Taking", 4],
    ["Heuristics & Biases", "Dual-Process Theory", 4],
    ["Prospect Theory", "Risk Perception", 4],

    // Liens moyens
    ["Selective Attention", "Perceptual Load Theory", 3],
    ["Semantic Memory", "Mental Lexicon", 3],
    ["Planning & Problem Solving", "Goal-Directed Behavior", 3],
    ["Emotional Appraisal", "Mood & Cognition", 3],
    ["Attribution Theory", "Stereotypes & Schemas", 3],
    ["Framing Effects", "Anchoring Effect", 3],

    // Liens entre clusters
    ["Multisensory Integration", "Object Recognition", 3],
    ["Memory Consolidation", "Episodic Memory", 3],
    ["Language Production", "Mental Lexicon", 3],
    ["Task Switching", "Cognitive Flexibility", 3],
    ["Self-Regulation", "Intrinsic Motivation", 3],
    ["Stress & Cognition", "Working Memory Model", 3],
    ["Moral Psychology", "Theory of Mind (Psy)", 3],
    ["Signal Detection Theory", "Reaction Time Paradigms", 3]
  ],
  conceptKeywords: {
    // Perception
    "Visual Attention": ["attention", "visual", "focus", "selective", "gaze"],
    "Selective Attention": ["attention", "selection", "filtering", "focus"],
    "Sustained Attention": ["attention", "vigilance", "sustained", "concentration"],
    "Perceptual Load Theory": ["perception", "load", "attention", "capacity", "theory"],
    "Change Blindness": ["perception", "change", "blindness", "attention", "visual"],
    "Object Recognition": ["recognition", "objects", "visual", "perception", "identification"],
    "Multisensory Integration": ["perception", "senses", "integration", "multimodal", "brain"],
    "Top-Down Processing": ["perception", "top-down", "expectations", "knowledge", "cognition"],

    // Mémoire
    "Working Memory Model": ["memory", "working", "short-term", "baddeley", "hitch"],
    "Episodic Memory": ["memory", "episodic", "events", "personal", "autobiographical"],
    "Semantic Memory": ["memory", "semantic", "knowledge", "facts", "general"],
    "Procedural Memory": ["memory", "procedural", "skills", "habits", "automatic"],
    "Encoding & Retrieval": ["memory", "encoding", "retrieval", "storage", "processes"],
    "False Memories": ["memory", "false", "distortion", "misinformation", "reconstruction"],
    "Memory Consolidation": ["memory", "consolidation", "sleep", "long-term", "stabilization"],

    // Langage
    "Mental Lexicon": ["language", "lexicon", "mental", "words", "vocabulary"],
    "Sentence Processing": ["language", "sentence", "processing", "parsing", "comprehension"],
    "Language Comprehension": ["language", "comprehension", "understanding", "meaning", "semantics"],
    "Language Production": ["language", "production", "speech", "writing", "expression"],
    "Reading Processes": ["language", "reading", "decoding", "comprehension", "literacy"],
    "Linguistic Relativity": ["language", "relativity", "sapir-whorf", "thought", "culture"],

    // Fonctions exécutives
    "Mental Models": ["cognition", "mental-models", "representation", "reasoning", "problem-solving"],
    "Cognitive Flexibility": ["executive", "flexibility", "adaptation", "switching", "cognition"],
    "Inhibitory Control": ["executive", "inhibition", "control", "suppression", "self-regulation"],
    "Planning & Problem Solving": ["executive", "planning", "problem-solving", "strategy", "goals"],
    "Task Switching": ["executive", "switching", "multitasking", "cognitive-control", "flexibility"],
    "Cognitive Control": ["executive", "control", "regulation", "attention", "monitoring"],
    "Goal-Directed Behavior": ["executive", "goals", "behavior", "motivation", "planning"],

    // Émotion
    "Emotional Appraisal": ["emotion", "appraisal", "evaluation", "cognition", "stimulus"],
    "Mood & Cognition": ["emotion", "mood", "cognition", "affect", "thinking"],
    "Intrinsic Motivation": ["emotion", "motivation", "intrinsic", "drive", "interest"],
    "Self-Regulation": ["emotion", "regulation", "self-control", "management", "coping"],
    "Stress & Cognition": ["emotion", "stress", "cognition", "performance", "anxiety"],

    // Cognition sociale
    "Theory of Mind (Psy)": ["social", "theory-of-mind", "empathy", "perspective", "beliefs"],
    "Attribution Theory": ["social", "attribution", "causality", "explanation", "bias"],
    "Stereotypes & Schemas": ["social", "stereotypes", "schemas", "categorization", "bias"],
    "Moral Psychology": ["social", "morality", "ethics", "judgment", "values"],
    "Perspective Taking": ["social", "perspective", "empathy", "understanding", "others"],
    "Dual-Process Theory": ["social", "dual-process", "intuition", "reasoning", "cognition"],

    // Jugement et prise de décision
    "Heuristics & Biases": ["judgment", "heuristics", "biases", "decision-making", "cognitive"],
    "Prospect Theory": ["judgment", "prospect-theory", "risk", "decision", "kahneman"],
    "Risk Perception": ["judgment", "risk", "perception", "danger", "uncertainty"],
    "Framing Effects": ["judgment", "framing", "bias", "decision", "presentation"],
    "Anchoring Effect": ["judgment", "anchoring", "bias", "decision", "reference"],

    // Méthodes
    "Reaction Time Paradigms": ["methods", "reaction-time", "speed", "processing", "cognition"],
    "Eye-Tracking": ["methods", "eye-tracking", "gaze", "attention", "visual"],
    "Priming Paradigms": ["methods", "priming", "activation", "implicit", "memory"],
    "Stroop Task": ["methods", "stroop", "interference", "attention", "control"],
    "N-Back Task": ["methods", "n-back", "working-memory", "updating", "cognition"],
    "Signal Detection Theory": ["methods", "signal-detection", "sensitivity", "bias", "perception"]
  }
}

"Computer Science": {
  clusters: [
    "AI",        // Intelligence Artificielle
    "THEORY",    // Théorie
    "SYSTEMS",   // Systèmes
    "DATA",      // Données
    "HCI",       // Interaction Homme-Machine
    "SECURITY",  // Sécurité
    "EMERGING",  // Technologies émergentes
    "SE"         // Génie Logiciel
  ],
  clusterConnections: {
    // Connexions logiques entre clusters
    "AI": ["THEORY", "DATA", "SYSTEMS", "HCI", "EMERGING"],  // L'IA utilise la théorie, les données, les systèmes, l'interaction HCI et les technologies émergentes
    "THEORY": ["AI", "SYSTEMS", "DATA", "SECURITY"],          // La théorie sous-tend l'IA, les systèmes, les données et la sécurité
    "SYSTEMS": ["AI", "THEORY", "DATA", "SECURITY", "SE", "EMERGING"], // Les systèmes sont liés à l'IA, la théorie, les données, la sécurité, le génie logiciel et les technologies émergentes
    "DATA": ["AI", "THEORY", "SYSTEMS", "HCI", "SECURITY"],    // Les données sont centrales pour l'IA, la théorie, les systèmes, l'HCI et la sécurité
    "HCI": ["AI", "DATA", "SYSTEMS", "EMERGING"],             // L'HCI est liée à l'IA, les données, les systèmes et les technologies émergentes
    "SECURITY": ["THEORY", "SYSTEMS", "DATA", "EMERGING"],    // La sécurité dépend de la théorie, des systèmes, des données et des technologies émergentes
    "EMERGING": ["AI", "SYSTEMS", "DATA", "HCI", "SECURITY"],  // Les technologies émergentes combinent IA, systèmes, données, HCI et sécurité
    "SE": ["SYSTEMS", "THEORY", "DATA", "SECURITY"]           // Le génie logiciel repose sur les systèmes, la théorie, les données et la sécurité
  },
  expertLinks: [
    // Liens forts (poids 4)
    ["Machine Learning", "Deep Learning", 4],
    ["Neural Networks", "Deep Learning", 4],
    ["Natural Language Processing", "Machine Learning", 4],
    ["Computer Vision", "Machine Learning", 4],
    ["Reinforcement Learning", "Machine Learning", 4],
    ["Algorithms", "Complexity Theory", 4],
    ["Graph Theory", "Algorithms", 4],
    ["Distributed Systems", "Cloud Computing", 4],
    ["Operating Systems", "Computer Networks", 4],
    ["Databases", "Big Data", 4],
    ["Data Mining", "Big Data", 4],
    ["Human-Computer Interaction", "User Experience", 4],
    ["Computer Graphics", "Virtual Reality", 4],
    ["Cybersecurity", "Network Security", 4],
    ["Blockchain", "Cryptography", 4],
    ["Software Engineering", "Programming Languages", 4],

    // Liens moyens (poids 3)
    ["Generative AI", "Machine Learning", 3],
    ["Explainable AI", "Machine Learning", 3],
    ["Optimization", "Algorithms", 3],
    ["Cryptography", "Formal Methods", 3],
    ["IoT", "Edge Computing", 3],
    ["Information Retrieval", "Data Mining", 3],
    ["Data Visualization", "Big Data", 3],
    ["Virtual Reality", "Augmented Reality", 3],
    ["Privacy", "Cybersecurity", 3],
    ["Differential Privacy", "Privacy", 3],
    ["Quantum Computing", "Algorithms", 3],
    ["Robotics", "AI", 3],
    ["Bioinformatics", "Data Mining", 3],
    ["Federated Learning", "Machine Learning", 3],
    ["Testing & Verification", "Formal Methods", 3],
    ["DevOps", "Software Engineering", 3],

    // Liens entre concepts transversaux
    ["Machine Learning", "Databases", 3],
    ["Cloud Computing", "Data Mining", 3],
    ["Human-Computer Interaction", "AI", 3],
    ["Security", "Blockchain", 3],
    ["Edge Computing", "IoT", 3]
  ],
  conceptKeywords: {
    // Intelligence Artificielle
    "Machine Learning": ["ai", "learning", "models", "training", "prediction"],
    "Deep Learning": ["neural-networks", "layers", "training", "gpu", "big-data"],
    "Neural Networks": ["nodes", "weights", "activation", "backpropagation", "architecture"],
    "Natural Language Processing": ["nlp", "text", "language", "semantics", "syntax"],
    "Computer Vision": ["images", "recognition", "classification", "cnn", "features"],
    "Reinforcement Learning": ["reward", "agent", "environment", "policy", "q-learning"],
    "Generative AI": ["generation", "creativity", "gans", "transformers", "llm"],
    "Explainable AI": ["interpretability", "transparency", "xai", "trust", "ethics"],

    // Théorie
    "Algorithms": ["complexity", "efficiency", "sorting", "searching", "recursion"],
    "Complexity Theory": ["p-np", "computability", "big-o", "turing", "reducibility"],
    "Graph Theory": ["nodes", "edges", "paths", "networks", "topology"],
    "Optimization": ["minimization", "maximization", "constraints", "linear", "nonlinear"],

    // Systèmes
    "Distributed Systems": ["nodes", "communication", "fault-tolerance", "scalability", "consensus"],
    "Cloud Computing": ["servers", "virtualization", "scalability", "iaas", "paas"],
    "Operating Systems": ["kernel", "processes", "memory", "scheduling", "filesystem"],
    "Computer Networks": ["protocols", "routing", "tcp-ip", "bandwidth", "latency"],

    // Données
    "Databases": ["sql", "nosql", "queries", "transactions", "indexing"],
    "Big Data": ["volume", "velocity", "variety", "hadoop", "spark"],
    "Data Mining": ["patterns", "clustering", "classification", "association", "anomalies"],
    "Information Retrieval": ["search", "indexing", "ranking", "relevance", "query"],
    "Data Visualization": ["charts", "graphs", "d3js", "interactive", "dashboard"],

    // Interaction Homme-Machine
    "Human-Computer Interaction": ["usability", "design", "interface", "user-centered", "accessibility"],
    "User Experience": ["ux", "usability", "design", "feedback", "satisfaction"],
    "Computer Graphics": ["rendering", "3d", "shaders", "opengl", "ray-tracing"],
    "Virtual Reality": ["immersion", "3d", "headset", "simulation", "interaction"],
    "Augmented Reality": ["overlay", "real-world", "mobile", "ar-glasses", "mixed-reality"],

    // Sécurité
    "Cybersecurity": ["threats", "vulnerabilities", "protection", "firewall", "encryption"],
    "Network Security": ["firewall", "ids", "vpn", "authentication", "encryption"],
    "Privacy": ["confidentiality", "anonymity", "gdpr", "data-protection", "consent"],
    "Blockchain": ["decentralized", "ledger", "bitcoin", "smart-contracts", "consensus"],
    "Differential Privacy": ["anonymization", "noise", "query", "privacy-preserving", "epsilon"],

    // Technologies émergentes
    "Quantum Computing": ["qubits", "superposition", "entanglement", "shor", "grover"],
    "Robotics": ["automation", "sensors", "actuators", "ros", "autonomy"],
    "Bioinformatics": ["genomics", "sequences", "alignment", "blast", "phylogeny"],

    // Génie Logiciel
    "Software Engineering": ["development", "lifecycle", "requirements", "design", "maintenance"],
    "Programming Languages": ["syntax", "compiler", "interpreter", "paradigms", "frameworks"],
    "Testing & Verification": ["unit-tests", "integration", "debugging", "validation", "verification"],
    "DevOps": ["ci-cd", "automation", "deployment", "monitoring", "containers"],
    "Federated Learning": ["distributed", "privacy", "collaborative", "model-aggregation", "local-training"]
  }
}

"Education Science": {
  clusters: [
    "LEARNING",   // Théories et processus d'apprentissage
    "PEDAGOGY",   // Méthodes et approches pédagogiques
    "CURRICUL",   // Conception et organisation des programmes
    "ASSESS",     // Évaluation et mesure des apprentissages
    "SPECIAL",    // Éducation spécialisée et inclusive
    "TECH",       // Technologies éducatives
    "SOCIAL",     // Dimensions sociales et communautaires
    "POLICY"      // Politiques et gouvernance éducative
  ],
  clusterConnections: {
    // Connexions logiques entre clusters
    "LEARNING": ["PEDAGOGY", "CURRICUL", "ASSESS", "SPECIAL", "TECH", "SOCIAL"],
    // L'apprentissage est au cœur de la pédagogie, du curriculum, de l'évaluation, de l'inclusion, des technologies et des aspects sociaux

    "PEDAGOGY": ["LEARNING", "CURRICUL", "ASSESS", "SPECIAL", "TECH", "SOCIAL"],
    // La pédagogie influence directement l'apprentissage, le curriculum, l'évaluation, l'inclusion, les technologies et les aspects sociaux

    "CURRICUL": ["LEARNING", "PEDAGOGY", "ASSESS", "SPECIAL", "POLICY"],
    // Le curriculum est lié à l'apprentissage, à la pédagogie, à l'évaluation, à l'inclusion et aux politiques

    "ASSESS": ["LEARNING", "PEDAGOGY", "CURRICUL", "TECH", "POLICY"],
    // L'évaluation mesure l'apprentissage, guide la pédagogie, valide le curriculum, utilise les technologies et influence les politiques

    "SPECIAL": ["LEARNING", "PEDAGOGY", "CURRICUL", "ASSESS", "SOCIAL", "POLICY"],
    // L'éducation spécialisée s'appuie sur les théories d'apprentissage, les méthodes pédagogiques, le curriculum, l'évaluation, les aspects sociaux et les politiques

    "TECH": ["LEARNING", "PEDAGOGY", "ASSESS", "POLICY"],
    // Les technologies éducatives soutiennent l'apprentissage, la pédagogie, l'évaluation et sont encadrées par les politiques

    "SOCIAL": ["LEARNING", "PEDAGOGY", "SPECIAL", "POLICY"],
    // Les dimensions sociales impactent l'apprentissage, la pédagogie, l'inclusion et sont influencées par les politiques

    "POLICY": ["CURRICUL", "ASSESS", "SPECIAL", "TECH", "SOCIAL"]
    // Les politiques éducatives encadrent le curriculum, l'évaluation, l'inclusion, les technologies et les aspects sociaux
  },
  expertLinks: [
    // Liens forts (poids 4) - Théories et concepts fondamentaux
    ["Constructivism", "Situated Learning", 4],
    ["Behaviorism", "Direct Instruction", 4],
    ["Cognitivism", "Metacognition", 4],
    ["Social Learning Theory", "Cooperative Learning", 4],
    ["Zone of Proximal Dev.", "Scaffolding", 4],
    ["Self-Regulated Learning", "Metacognition", 4],
    ["Curriculum Design", "Standards-Based Education", 4],
    ["Formative Assessment", "Feedback", 4],
    ["Inclusive Education", "Universal Design for Learning", 4],
    ["EdTech", "E-Learning", 4],
    ["AI in Education", "Adaptive Learning", 4],

    // Liens moyens (poids 3) - Approches et pratiques
    ["Experiential Learning", "Project-Based Learning", 3],
    ["Differentiated Instruction", "Individualized Learning", 3],
    ["Inquiry-Based Learning", "Problem-Based Learning", 3],
    ["Flipped Classroom", "Blended Learning", 3],
    ["Mastery Learning", "Competency-Based Education", 3],
    ["Summative Assessment", "Standardized Testing", 3],
    ["Authentic Assessment", "Learning Analytics", 3],
    ["Special Education", "Neurodiversity", 3],
    ["Gamification", "Motivation (Ed)", 3],
    ["MOOCs", "Blended Learning", 3],
    ["Social-Emotional Learning", "School Climate", 3],
    ["Educational Equity", "Cultural Capital", 3],
    ["Teacher Professional Dev.", "School Reform", 3],
    ["Higher Education", "Early Childhood Education", 3],

    // Liens transversaux (poids 3)
    ["Constructivism", "Project-Based Learning", 3],
    ["Behaviorism", "Feedback Literacy", 3],
    ["Cognitivism", "Transfer of Learning", 3],
    ["Critical Pedagogy", "Educational Equity", 3],
    ["Hidden Curriculum", "School Climate", 3],
    ["Interdisciplinary Learning", "STEM / STEAM", 3],
    ["Spiral Curriculum", "Competency-Based Education", 3],
    ["Response to Intervention", "Special Education", 3],
    ["Family Engagement", "School Climate", 3],
    ["Education Funding", "Educational Policy", 3]
  ],
  conceptKeywords: {
    // Théories et processus d'apprentissage
    "Constructivism": ["learning", "construction", "knowledge", "piaget", "active"],
    "Behaviorism": ["learning", "stimulus", "response", "skinner", "conditioning"],
    "Cognitivism": ["learning", "cognition", "mental-processes", "information-processing", "memory"],
    "Social Learning Theory": ["learning", "observation", "imitation", "bandura", "modeling"],
    "Situated Learning": ["learning", "context", "authentic", "lave", "wenger"],
    "Experiential Learning": ["learning", "experience", "reflection", "kolb", "cycle"],
    "Self-Regulated Learning": ["learning", "self-direction", "metacognition", "strategies", "goals"],
    "Metacognition": ["thinking", "learning", "awareness", "monitoring", "regulation"],
    "Zone of Proximal Dev.": ["learning", "vygotsky", "potential", "scaffolding", "development"],
    "Scaffolding": ["support", "learning", "guidance", "temporary", "vygotsky"],
    "Transfer of Learning": ["learning", "application", "contexts", "generalization", "skills"],
    "Motivation (Ed)": ["motivation", "engagement", "intrinsic", "extrinsic", "achievement"],

    // Méthodes et approches pédagogiques
    "Differentiated Instruction": ["teaching", "diversity", "adaptation", "needs", "flexibility"],
    "Project-Based Learning": ["learning", "projects", "real-world", "collaboration", "problem-solving"],
    "Inquiry-Based Learning": ["learning", "questions", "investigation", "discovery", "exploration"],
    "Direct Instruction": ["teaching", "explicit", "structured", "scripted", "mastery"],
    "Flipped Classroom": ["teaching", "inverted", "video", "homework", "class-time"],
    "Cooperative Learning": ["learning", "group", "collaboration", "interdependence", "teamwork"],
    "Problem-Based Learning": ["learning", "problems", "real-world", "investigation", "solutions"],
    "Mastery Learning": ["learning", "mastery", "competency", "progression", "assessment"],
    "Feedback Literacy": ["feedback", "understanding", "interpretation", "use", "improvement"],
    "Critical Pedagogy": ["teaching", "critical", "social-justice", "empowerment", "freire"],

    // Conception et organisation des programmes
    "Curriculum Design": ["curriculum", "planning", "objectives", "content", "alignment"],
    "Hidden Curriculum": ["curriculum", "implicit", "values", "norms", "unwritten"],
    "Standards-Based Education": ["education", "standards", "benchmarks", "accountability", "alignment"],
    "Interdisciplinary Learning": ["learning", "disciplines", "integration", "connections", "holistic"],
    "STEM / STEAM": ["education", "science", "technology", "engineering", "math", "arts"],
    "Competency-Based Education": ["education", "competencies", "skills", "mastery", "outcomes"],
    "Spiral Curriculum": ["curriculum", "repetition", "depth", "progression", "bruner"],

    // Évaluation et mesure des apprentissages
    "Formative Assessment": ["assessment", "feedback", "progress", "adjustment", "learning"],
    "Summative Assessment": ["assessment", "evaluation", "final", "grades", "achievement"],
    "Standardized Testing": ["assessment", "standardized", "comparison", "norms", "accountability"],
    "Authentic Assessment": ["assessment", "real-world", "tasks", "performance", "application"],
    "Learning Analytics": ["data", "learning", "analysis", "patterns", "insights"],
    "Rubrics": ["assessment", "criteria", "scoring", "transparency", "feedback"],
    "Feedback": ["communication", "improvement", "specific", "timely", "actionable"],

    // Éducation spécialisée et inclusive
    "Inclusive Education": ["education", "diversity", "access", "equity", "participation"],
    "Special Education": ["education", "disabilities", "iep", "accommodations", "support"],
    "Neurodiversity": ["diversity", "neurological", "strengths", "differences", "inclusion"],
    "Universal Design for Learning": ["design", "accessibility", "flexibility", "multiple-means", "udl"],
    "Response to Intervention": ["education", "intervention", "tiered", "support", "progress-monitoring"],

    // Technologies éducatives
    "EdTech": ["technology", "education", "tools", "innovation", "digital"],
    "E-Learning": ["learning", "online", "digital", "platforms", "virtual"],
    "Gamification": ["learning", "games", "motivation", "engagement", "rewards"],
    "MOOCs": ["education", "online", "massive", "open", "courses"],
    "AI in Education": ["technology", "ai", "personalization", "automation", "adaptation"],
    "Adaptive Learning": ["learning", "personalized", "technology", "adjustment", "pace"],
    "Blended Learning": ["learning", "mix", "online", "face-to-face", "hybrid"],

    // Dimensions sociales et communautaires
    "Educational Equity": ["education", "fairness", "access", "opportunity", "justice"],
    "Social-Emotional Learning": ["learning", "emotions", "relationships", "self-awareness", "empathy"],
    "Cultural Capital": ["education", "culture", "knowledge", "advantage", "bourdieu"],
    "Family Engagement": ["education", "family", "involvement", "partnership", "support"],
    "School Climate": ["education", "environment", "culture", "safety", "relationships"],

    // Politiques et gouvernance éducative
    "Educational Policy": ["policy", "education", "regulation", "standards", "reform"],
    "School Reform": ["education", "change", "improvement", "systemic", "innovation"],
    "Accountability Systems": ["education", "responsibility", "assessment", "standards", "reporting"],
    "Teacher Professional Dev.": ["teachers", "development", "training", "growth", "skills"],
    "Higher Education": ["education", "university", "college", "degrees", "research"],
    "Early Childhood Education": ["education", "children", "preschool", "development", "learning"],
    "Education Funding": ["education", "finance", "budget", "resources", "equity"]
  }
}




// Ajoutez ici les autres disciplines (Neuroscience, Philosophy, etc.)
};

  // --- NEUROSCIENCE (Exemple) ---
  "Neuroscience": {
    clusters: ["COGNITIVE", "MOLECULAR", "CLINICAL", "COMPUTATIONAL"],
    clusterConnections: {
      "COGNITIVE": ["MOLECULAR", "CLINICAL", "COMPUTATIONAL"],
      "MOLECULAR": ["COGNITIVE", "CLINICAL"],
      "CLINICAL": ["COGNITIVE", "MOLECULAR"],
      "COMPUTATIONAL": ["COGNITIVE", "MOLECULAR"]
    },
    expertLinks: [
      ["Neural Coding", "Prefrontal Cortex", 5],
      ["Synaptic Plasticity", "Working Memory", 4],
      ["Brain Oscillations", "Default Mode Network", 4]
    ],
    conceptKeywords: {
      "Neural Coding": ["neurons", "signals", "brain", "encoding"],
      "Prefrontal Cortex": ["brain", "cognition", "executive function", "decision"],
      "Synaptic Plasticity": ["synapse", "learning", "memory", "neurotransmission"]
    }
  },

  // --- INTERDISCIPLINARY (Exemple) ---
  "Interdisciplinary": {
    clusters: [
      "Philosophy", "Education Science", "Human Rights",
      "Environmental Science", "Computer Science", "Neuroscience",
      "Cognitive Psychology", "Language Science", "Anthropology", "Systems Science"
    ],
    clusterConnections: {
      "Philosophy": ["Neuroscience", "Cognitive Psychology", "Language Science", "Education Science"],
      "Neuroscience": ["Philosophy", "Cognitive Psychology", "Computer Science", "Systems Science"],
      "Computer Science": ["Neuroscience", "Systems Science", "Education Science"],
      "Anthropology": ["Philosophy", "Education Science", "Human Rights", "Environmental Science"],
      // Ajoutez toutes les connexions inter-disciplines ici
    },
    expertLinks: [
      ["Epistemology", "Neural Coding", 4],
      ["Pedagogy", "Machine Learning", 3],
      ["Human Rights", "Environmental Policy", 3],
      ["Systems Thinking", "Network Theory", 5]
    ],
    conceptKeywords: {
      "Epistemology": ["knowledge", "theory", "science", "truth"],
      "Neural Coding": ["brain", "neurons", "signals", "information"],
      "Machine Learning": ["AI", "algorithms", "data", "models"],
      "Human Rights": ["justice", "equality", "law", "ethics"]
    }
  }
  // --- AJOUTEZ LES AUTRES DISCIPLINES ICI ---
  // Exemple pour Philosophy, Education Science, etc.
};

// =============================================
// FONCTIONS COMMUNES
// =============================================
function generateLinksForDiscipline(disciplineName) {
  // Trouver la configuration pour cette discipline
  const config = DISCIPLINE_CONFIG[disciplineName];
  if (!config) {
    console.warn(`[MLKN.lab] Configuration non trouvée pour ${disciplineName}. Utilisation des paramètres par défaut.`);
    // Retourner sans rien faire (ou utiliser une config par défaut)
    return;
  }

  // Vérifier que window.MAP_DATA existe
  if (!window.MAP_DATA) {
    console.error(`[MLKN.lab] window.MAP_DATA non défini pour ${disciplineName}.`);
    return;
  }

  const { nodes, links } = window.MAP_DATA;
  const existingLinks = new Set();

  // Enregistrer les liens existants pour éviter les doublons
  links.forEach(link => {
    existingLinks.add(`${link.source}-${link.target}`);
    existingLinks.add(`${link.target}-${link.source}`);
  });

  // Fonction pour ajouter un lien si inexistant
  function addLink(source, target, weight) {
    const key1 = `${source}-${target}`;
    const key2 = `${target}-${source}`;
    if (!existingLinks.has(key1) && !existingLinks.has(key2)) {
      links.push({ source, target, weight });
      existingLinks.add(key1);
      existingLinks.add(key2);
    }
  }

  // 1. Liens intra-cluster (tous les nœuds d'un même cluster sont connectés)
  const nodesByCluster = {};
  nodes.forEach(node => {
    if (!nodesByCluster[node.cluster]) {
      nodesByCluster[node.cluster] = [];
    }
    nodesByCluster[node.cluster].push(node);
  });

  // Connecter tous les nœuds au sein de chaque cluster
  Object.values(nodesByCluster).forEach(clusterNodes => {
    for (let i = 0; i < clusterNodes.length; i++) {
      for (let j = i + 1; j < clusterNodes.length; j++) {
        const node1 = clusterNodes[i].id;
        const node2 = clusterNodes[j].id;
        // Poids basé sur la taille moyenne des nœuds (ajusté pour vos données)
        const avgSize = (clusterNodes[i].size + clusterNodes[j].size) / 2;
        let weight = Math.min(5, Math.max(3, Math.floor(avgSize / 8)));
        addLink(node1, node2, weight);
      }
    }
  });

  // 2. Liens inter-clusters (basés sur config.clusterConnections)
  if (config.clusterConnections) {
    Object.entries(config.clusterConnections).forEach(([cluster1, connectedClusters]) => {
      const cluster1Nodes = nodesByCluster[cluster1] || [];
      connectedClusters.forEach(cluster2 => {
        const cluster2Nodes = nodesByCluster[cluster2] || [];
        cluster1Nodes.forEach(node1 => {
          cluster2Nodes.forEach(node2 => {
            addLink(node1.id, node2.id, 3); // Poids fixe pour les liens inter-clusters
          });
        });
      });
    });
  }

  // 3. Liens spécifiques (experts)
  if (config.expertLinks) {
    config.expertLinks.forEach(([source, target, weight]) => {
      addLink(source, target, weight);
    });
  }

  // 4. Liens sémantiques (basés sur config.conceptKeywords)
  if (config.conceptKeywords) {
    Object.keys(config.conceptKeywords).forEach(concept1 => {
      Object.keys(config.conceptKeywords).forEach(concept2 => {
        if (concept1 === concept2) return;
        const keywords1 = config.conceptKeywords[concept1] || [];
        const keywords2 = config.conceptKeywords[concept2] || [];
        const commonKeywords = keywords1.filter(kw => keywords2.includes(kw));
        if (commonKeywords.length >= 2) { // Seuil : 2 mots-clés en commun
          const weight = Math.min(5, 3 + commonKeywords.length);
          addLink(concept1, concept2, weight);
        }
      });
    });
  }

  // Log pour vérification
  console.log(`[MLKN.lab] ${disciplineName}: ${links.length} liens générés.`);
}

// =============================================
// EXÉCUTION AUTOMATIQUE
// =============================================
// Détecter la discipline actuelle à partir du titre de window.MAP_DATA
if (window.MAP_DATA && window.MAP_DATA.title) {
  const discipline = window.MAP_DATA.title;
  generateLinksForDiscipline(discipline);
} else {
  console.error("[MLKN.lab] Impossible de détecter la discipline. Vérifiez window.MAP_DATA.title.");
}
