export const bootcamps = [
  {
    id: '1',
    title: 'Full Stack Web Development Masterclass',
    shortTitle: 'Full Stack Web Development',
    description:
      'A comprehensive journey from frontend basics to advanced backend architecture. Build production-ready applications with React, Node.js, and MongoDB.',
    summary:
      'Master React, Node.js, and MongoDB in 12 weeks with production-style projects, mentor reviews, and portfolio coaching.',
    level: 'Intermediate',
    duration: '12 Weeks',
    price: '$999',
    cohortStart: 'April 8',
    mentor: {
      name: 'Priya Raman',
      role: 'Senior Full Stack Engineer',
      company: 'Atlas Commerce',
    },
    tags: ['React', 'Node.js', 'MongoDB'],
    outcomes: ['3 capstone projects', 'Mock interviews', 'Portfolio review'],
    paymentPlan: '$349/month for 3 months',
    format: 'Live cohort + guided projects',
    modules: [
      { week: 1, title: 'HTML, CSS & JavaScript Fundamentals', lessons: 8 },
      { week: 2, title: 'React Basics & State Management', lessons: 10 },
      { week: 3, title: 'Advanced React & Hooks', lessons: 7 },
      { week: 4, title: 'Node.js & Express API Development', lessons: 9 },
    ],
    features: [
      'Live mentorship sessions twice a week',
      'Code reviews from industry experts',
      'Portfolio building and resume review',
      'Certificate of completion',
    ],
  },
  {
    id: '2',
    title: 'Data Science & Machine Learning',
    shortTitle: 'Data Science & Machine Learning',
    description:
      'Learn Python, Pandas, SQL, and model deployment workflows through practical datasets and portfolio-ready case studies.',
    summary:
      'Go from spreadsheets to model deployment with guided labs, case studies, and role-focused career preparation.',
    level: 'Intermediate',
    duration: '16 Weeks',
    price: '$1299',
    cohortStart: 'April 15',
    mentor: {
      name: 'Daniel Brooks',
      role: 'Lead Data Scientist',
      company: 'Northstar Health',
    },
    tags: ['Python', 'AI', 'SQL'],
    outcomes: ['4 applied case studies', 'Data storytelling labs', 'Hiring sprint'],
    paymentPlan: '$449/month for 3 months',
    format: 'Live labs + case-study sprints',
    modules: [
      { week: 1, title: 'Python Foundations for Data Work', lessons: 7 },
      { week: 2, title: 'Data Cleaning with Pandas', lessons: 9 },
      { week: 3, title: 'Machine Learning with Scikit-Learn', lessons: 10 },
      { week: 4, title: 'Model Evaluation and Deployment', lessons: 8 },
    ],
    features: [
      'Weekly live doubt-clearing labs',
      'Hands-on projects with real datasets',
      'Career support for analyst and ML roles',
      'Certificate of completion',
    ],
  },
  {
    id: '3',
    title: 'UI/UX Design Masterclass',
    shortTitle: 'UI/UX Design Masterclass',
    description:
      'Design intuitive digital experiences with research, wireframing, prototyping, and polished case studies for your portfolio.',
    summary:
      'Build a standout design portfolio with user research, systems thinking, and polished Figma case studies.',
    level: 'Beginner',
    duration: '8 Weeks',
    price: '$799',
    cohortStart: 'April 22',
    mentor: {
      name: 'Anika Sen',
      role: 'Product Design Lead',
      company: 'Lattice Studio',
    },
    tags: ['Figma', 'Design', 'Prototyping'],
    outcomes: ['2 portfolio case studies', 'Design critiques', 'Presentation coaching'],
    paymentPlan: '$279/month for 3 months',
    format: 'Studio critiques + portfolio building',
    modules: [
      { week: 1, title: 'Design Thinking and User Research', lessons: 6 },
      { week: 2, title: 'Wireframes and Information Architecture', lessons: 8 },
      { week: 3, title: 'High-Fidelity UI in Figma', lessons: 9 },
      { week: 4, title: 'Interactive Prototypes and Portfolio Review', lessons: 7 },
    ],
    features: [
      'Portfolio-ready design case studies',
      'Mentor feedback on every milestone',
      'Figma templates and reusable assets',
      'Certificate of completion',
    ],
  },
];

export const platformStats = [
  { label: 'Learners placed', value: '4.2k+' },
  { label: 'Average completion', value: '89%' },
  { label: 'Live mentor sessions', value: '120/mo' },
  { label: 'Hiring partners', value: '75+' },
];

export const testimonials = [
  {
    name: 'Maya Patel',
    role: 'Frontend Developer at BrightLabs',
    quote:
      'The bootcamp felt structured like a real product team. I finished with projects I could explain clearly in interviews.',
  },
  {
    name: 'Jordan Reed',
    role: 'Data Analyst at Northstar Health',
    quote:
      'The weekly labs and mentor feedback helped me bridge the gap between online courses and actual job-ready work.',
  },
];

export const studentDashboard = {
  learnerName: 'Aarav',
  enrolledCourses: [
    {
      id: '1',
      title: 'Full Stack Web Development Masterclass',
      progress: 45,
      nextLesson: 'React Hooks Deep Dive',
      nextLessonId: 'react-hooks-deep-dive',
      totalModules: 12,
      completedModules: 5,
      streak: '8 day streak',
    },
    {
      id: '2',
      title: 'Data Science & Machine Learning',
      progress: 70,
      nextLesson: 'Feature Engineering Workshop',
      nextLessonId: 'feature-engineering-workshop',
      totalModules: 10,
      completedModules: 7,
      streak: '3 day streak',
    },
  ],
  milestones: [
    'Resume review booked for Monday',
    'Assignment 5 submitted for mentor review',
    'Placement sprint opens in 6 days',
  ],
};

export const lessonViewerData = {
  '1': {
    bootcampId: '1',
    bootcampTitle: 'Full Stack Web Development Masterclass',
    currentWeek: 3,
    currentLessonId: 'react-hooks-deep-dive',
    modules: [
      {
        week: 1,
        title: 'Frontend Foundations',
        lessons: [
          { id: 'html-css-javascript-fundamentals', title: 'HTML, CSS & JavaScript Fundamentals', duration: '42 min', status: 'completed' },
          { id: 'component-thinking', title: 'Component Thinking', duration: '31 min', status: 'completed' },
        ],
      },
      {
        week: 2,
        title: 'React Basics',
        lessons: [
          { id: 'props-state-review', title: 'Props and State Review', duration: '36 min', status: 'completed' },
          { id: 'routing-and-layouts', title: 'Routing and Layouts', duration: '34 min', status: 'completed' },
        ],
      },
      {
        week: 3,
        title: 'Advanced React',
        lessons: [
          { id: 'react-hooks-deep-dive', title: 'React Hooks Deep Dive', duration: '48 min', status: 'in_progress' },
          { id: 'forms-and-side-effects', title: 'Forms and Side Effects', duration: '39 min', status: 'locked' },
        ],
      },
    ],
    lesson: {
      id: 'react-hooks-deep-dive',
      title: 'React Hooks Deep Dive',
      module: 'Advanced React',
      week: 3,
      duration: '48 min',
      videoLength: '48:12',
      progress: 62,
      mentorNote: 'Focus on when an effect is truly needed versus when derived state can stay inside render.',
      summary:
        'This lesson moves from the mental model of hooks into practical patterns for state orchestration, effects, and reusable custom hooks in production code.',
      objectives: [
        'Choose the right hook for data, lifecycle-style work, and derived UI state',
        'Avoid common `useEffect` mistakes that create unnecessary rerenders',
        'Extract reusable custom hooks from repeated component logic',
      ],
      materials: [
        { label: 'Lesson slides PDF', type: 'PDF' },
        { label: 'Hooks playground starter', type: 'Starter Code' },
        { label: 'Recap quiz', type: 'Quiz' },
      ],
      tasks: [
        'Refactor a form component to separate UI state from async submission state',
        'Identify two places where an effect can be removed in favor of render logic',
        'Build a small `useToggle` custom hook and document its API',
      ],
    },
  },
  '2': {
    bootcampId: '2',
    bootcampTitle: 'Data Science & Machine Learning',
    currentWeek: 4,
    currentLessonId: 'feature-engineering-workshop',
    modules: [
      {
        week: 2,
        title: 'Data Preparation',
        lessons: [
          { id: 'data-cleaning-pipelines', title: 'Data Cleaning Pipelines', duration: '44 min', status: 'completed' },
          { id: 'missing-values-strategy', title: 'Missing Values Strategy', duration: '27 min', status: 'completed' },
        ],
      },
      {
        week: 3,
        title: 'Model Building',
        lessons: [
          { id: 'baseline-models', title: 'Baseline Models', duration: '33 min', status: 'completed' },
          { id: 'evaluation-metrics', title: 'Evaluation Metrics', duration: '30 min', status: 'completed' },
        ],
      },
      {
        week: 4,
        title: 'Feature Engineering',
        lessons: [
          { id: 'feature-engineering-workshop', title: 'Feature Engineering Workshop', duration: '52 min', status: 'in_progress' },
          { id: 'model-deployment-checklist', title: 'Model Deployment Checklist', duration: '29 min', status: 'locked' },
        ],
      },
    ],
    lesson: {
      id: 'feature-engineering-workshop',
      title: 'Feature Engineering Workshop',
      module: 'Feature Engineering',
      week: 4,
      duration: '52 min',
      videoLength: '52:08',
      progress: 78,
      mentorNote: 'Treat every transformation as part of a reproducible pipeline, not a notebook-only trick.',
      summary:
        'This workshop covers encoding, scaling, feature creation, and leakage prevention using a pipeline-oriented workflow that is safe for production.',
      objectives: [
        'Create reproducible preprocessing pipelines',
        'Spot leakage risks before model validation',
        'Document feature choices for stakeholder review',
      ],
      materials: [
        { label: 'Notebook template', type: 'Notebook' },
        { label: 'Feature checklist', type: 'Worksheet' },
        { label: 'Validation guide', type: 'Reference' },
      ],
      tasks: [
        'Engineer three new features from the provided churn dataset',
        'Compare baseline accuracy before and after feature changes',
        'Write a short rationale for the top two retained features',
      ],
    },
  },
};

export const assignmentSubmissionData = {
  '1': {
    bootcampId: '1',
    bootcampTitle: 'Full Stack Web Development Masterclass',
    assignment: {
      id: 'hooks-refactor-assignment',
      title: 'Hooks Refactor Challenge',
      module: 'Advanced React',
      week: 3,
      dueDate: 'April 12',
      type: 'GitHub repo or zip upload',
      status: 'Draft pending submission',
      instructions:
        'Refactor the provided starter project to separate form state, loading state, and derived UI logic. Document one custom hook and include a short README explaining your design decisions.',
      checklist: [
        'Push the updated project to GitHub or prepare a zip archive',
        'Add a README with setup steps and hook design notes',
        'Record at least one tradeoff you made during the refactor',
      ],
      submissionHistory: [
        { label: 'Starter files unlocked', value: '2 days ago' },
        { label: 'Mentor Q&A window', value: 'Tomorrow, 7:00 PM' },
      ],
    },
  },
  '2': {
    bootcampId: '2',
    bootcampTitle: 'Data Science & Machine Learning',
    assignment: {
      id: 'feature-engineering-case-study',
      title: 'Feature Engineering Case Study',
      module: 'Feature Engineering',
      week: 4,
      dueDate: 'April 19',
      type: 'Notebook + summary document',
      status: 'Ready to submit',
      instructions:
        'Create a reproducible preprocessing pipeline, engineer new features from the churn dataset, and submit a short summary of which changes improved validation performance.',
      checklist: [
        'Include notebook or repo link',
        'Attach a short summary PDF or markdown file',
        'Highlight one leakage risk you prevented',
      ],
      submissionHistory: [
        { label: 'Dataset downloaded', value: 'Yesterday' },
        { label: 'Mentor office hours', value: 'Friday, 6:30 PM' },
      ],
    },
  },
};

export const mentorDashboard = {
  assignedStudents: 24,
  responseSla: '3 hrs',
  submissions: [
    { id: 1, student: 'Alice Johnson', assignment: 'Build a REST API', date: '2 hours ago', status: 'Pending Review', reviewId: 'alice-rest-api' },
    { id: 2, student: 'Bob Smith', assignment: 'React Portfolio', date: '5 hours ago', status: 'Pending Review', reviewId: 'bob-react-portfolio' },
    { id: 3, student: 'Nina Das', assignment: 'Dashboard UX Audit', date: 'Yesterday', status: 'Needs Follow-up', reviewId: 'nina-dashboard-audit' },
  ],
};

export const mentorReviewData = {
  'alice-rest-api': {
    student: 'Alice Johnson',
    bootcamp: 'Full Stack Web Development Masterclass',
    assignment: 'Build a REST API',
    submittedAt: 'Today, 4:10 PM',
    status: 'Pending Review',
    scoreHint: 'Technical depth looks strong; review API consistency and docs.',
    submissionLinks: [
      { label: 'GitHub repository', value: 'github.com/alice/rest-api-bootcamp' },
      { label: 'Postman collection', value: 'Included in repo /docs folder' },
    ],
    checklist: [
      'Verify route naming and response shape consistency',
      'Check authentication middleware placement',
      'Review README setup instructions',
    ],
    studentNotes:
      'I would especially like feedback on how I structured controllers versus routes, and whether my JWT middleware placement makes sense.',
  },
  'bob-react-portfolio': {
    student: 'Bob Smith',
    bootcamp: 'UI/UX Design Masterclass',
    assignment: 'React Portfolio',
    submittedAt: 'Today, 1:35 PM',
    status: 'Pending Review',
    scoreHint: 'Strong presentation; focus review on information hierarchy and accessibility.',
    submissionLinks: [
      { label: 'Project repo', value: 'github.com/bobsmith/portfolio-redesign' },
      { label: 'Live preview', value: 'portfolio-redesign-demo.vercel.app' },
    ],
    checklist: [
      'Review mobile layout and spacing consistency',
      'Check accessibility of contrast and heading structure',
      'Comment on portfolio storytelling and project framing',
    ],
    studentNotes:
      'I want feedback on visual polish, but also on whether the project descriptions feel professional enough for job applications.',
  },
  'nina-dashboard-audit': {
    student: 'Nina Das',
    bootcamp: 'UI/UX Design Masterclass',
    assignment: 'Dashboard UX Audit',
    submittedAt: 'Yesterday, 7:20 PM',
    status: 'Needs Follow-up',
    scoreHint: 'Useful critique direction; follow up on prioritization and clearer action items.',
    submissionLinks: [
      { label: 'Audit deck', value: 'Shared as PDF attachment' },
      { label: 'Figma notes', value: 'figma.com/file/dashboard-audit-notes' },
    ],
    checklist: [
      'Review issue prioritization',
      'Confirm each recommendation maps to a user problem',
      'Suggest stronger before/after framing',
    ],
    studentNotes:
      'I am not sure whether my recommendations are specific enough, especially for the onboarding and navigation issues.',
  },
};

export const adminDashboard = {
  metrics: [
    { label: 'Revenue this month', value: '$48.6k' },
    { label: 'Active learners', value: '312' },
    { label: 'Mentor utilization', value: '86%' },
  ],
  bootcamps: [
    { id: 1, title: 'Full Stack Web Development', students: 120, status: 'Active' },
    { id: 2, title: 'Data Science Bootcamp', students: 85, status: 'Draft' },
    { id: 3, title: 'UI/UX Design Masterclass', students: 107, status: 'Active' },
  ],
};
