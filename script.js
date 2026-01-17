/* ============================================
   CODEQUEST - Gamified Coding Learning Platform
   Pure JavaScript - No Frameworks
   ============================================ */

// ============================================
// DATA - Questions & Mock Users
// ============================================

// Constants for maintainability
const POINTS = {
  EASY: 10,
  MEDIUM: 20,
  HARD: 30
};

const subjects = [
  {
    id: "c",
    name: "C",
    icon: "🔷",
    questions: {
      easy: [
        { id: 1, question: "Which header file is required for printf()?", options: ["stdio.h", "stdlib.h", "string.h", "math.h"], correct: 0, points: POINTS.EASY },
        { id: 2, question: "What is the size of int in C (32-bit)?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correct: 1, points: POINTS.EASY },
        { id: 3, question: "Which symbol is used for single-line comment?", options: ["/* */", "//", "#", "--"], correct: 1, points: POINTS.EASY },
        { id: 4, question: "What does 'printf' return?", options: ["Nothing", "Number of characters printed", "1 or 0", "String length"], correct: 1, points: POINTS.EASY },
        { id: 5, question: "Which keyword is used to define a constant?", options: ["const", "static", "final", "#define"], correct: 0, points: POINTS.EASY },
      ],
      medium: [
        { id: 1, question: "What is the output of: printf(\"%d\", 5/2);", options: ["2.5", "2", "3", "Error"], correct: 1, points: POINTS.MEDIUM },
        { id: 2, question: "Which operator has highest precedence?", options: ["+", "*", "()", "=="], correct: 2, points: POINTS.MEDIUM },
        { id: 3, question: "What is a dangling pointer?", options: ["Null pointer", "Pointer to freed memory", "Array pointer", "Function pointer"], correct: 1, points: POINTS.MEDIUM },
        { id: 4, question: "Size of pointer in 64-bit system?", options: ["4 bytes", "8 bytes", "2 bytes", "Depends on type"], correct: 1, points: POINTS.MEDIUM },
        { id: 5, question: "What does malloc return on failure?", options: ["0", "NULL", "-1", "Exception"], correct: 1, points: POINTS.MEDIUM },
      ],
      hard: [
        { id: 1, question: "What is the output: int a=5; printf(\"%d %d\", a++, ++a);", options: ["5 7", "6 7", "Undefined", "5 6"], correct: 2, points: POINTS.HARD },
        { id: 2, question: "Which is not a storage class?", options: ["auto", "register", "extern", "volatile"], correct: 3, points: POINTS.HARD },
        { id: 3, question: "What does 'restrict' keyword do?", options: ["Restrict access", "Optimize pointer", "Constant pointer", "Static variable"], correct: 1, points: POINTS.HARD },
        { id: 4, question: "Output: sizeof('A') in C?", options: ["1", "2", "4", "Depends"], correct: 2, points: POINTS.HARD },
        { id: 5, question: "What is a near pointer?", options: ["16-bit pointer", "32-bit pointer", "64-bit pointer", "DOS memory model"], correct: 3, points: POINTS.HARD },
      ],
    },
  },
  {
    id: "cpp",
    name: "C++",
    icon: "⚡",
    questions: {
      easy: [
        { id: 1, question: "Which operator is used for output in C++?", options: [">>", "<<", "->", "::"], correct: 1, points: POINTS.EASY },
        { id: 2, question: "What is the extension of C++ files?", options: [".c", ".cpp", ".java", ".py"], correct: 1, points: POINTS.EASY },
        { id: 3, question: "Which header is used for cout?", options: ["stdio.h", "iostream", "conio.h", "string.h"], correct: 1, points: POINTS.EASY },
        { id: 4, question: "OOP stands for?", options: ["Object Oriented Programming", "Out Of Program", "Object Only Program", "None"], correct: 0, points: POINTS.EASY },
        { id: 5, question: "Which is not an access specifier?", options: ["public", "private", "protected", "static"], correct: 3, points: POINTS.EASY },
      ],
      medium: [
        { id: 1, question: "What is polymorphism?", options: ["Multiple forms", "Single form", "Data hiding", "Inheritance"], correct: 0, points: POINTS.MEDIUM },
        { id: 2, question: "Virtual function is used for?", options: ["Compile-time binding", "Run-time binding", "Static binding", "None"], correct: 1, points: POINTS.MEDIUM },
        { id: 3, question: "Which cannot be overloaded?", options: ["+", "-", "::", "*"], correct: 2, points: POINTS.MEDIUM },
        { id: 4, question: "Default constructor has?", options: ["No parameters", "One parameter", "Two parameters", "Any"], correct: 0, points: POINTS.MEDIUM },
        { id: 5, question: "friend function can access?", options: ["Only public", "Private members", "Only protected", "Nothing"], correct: 1, points: POINTS.MEDIUM },
      ],
      hard: [
        { id: 1, question: "What is RAII in C++?", options: ["Resource management", "Array init", "Iterator pattern", "None"], correct: 0, points: POINTS.HARD },
        { id: 2, question: "std::move does what?", options: ["Copy object", "Convert to rvalue", "Delete object", "Create pointer"], correct: 1, points: POINTS.HARD },
        { id: 3, question: "What is perfect forwarding?", options: ["Forward declaration", "Preserve value category", "Function overload", "Template"], correct: 1, points: POINTS.HARD },
        { id: 4, question: "constexpr is evaluated at?", options: ["Runtime", "Compile time", "Link time", "Never"], correct: 1, points: POINTS.HARD },
        { id: 5, question: "What is CRTP?", options: ["Curiously Recurring Template", "C Runtime Pattern", "Class Return Type", "None"], correct: 0, points: POINTS.HARD },
      ],
    },
  },
  {
    id: "python",
    name: "Python",
    icon: "🐍",
    questions: {
      easy: [
        { id: 1, question: "Which function prints output?", options: ["echo()", "print()", "console.log()", "printf()"], correct: 1, points: 10 },
        { id: 2, question: "Python is which type of language?", options: ["Compiled", "Interpreted", "Assembly", "Machine"], correct: 1, points: 10 },
        { id: 3, question: "How to create a list?", options: ["()", "[]", "{}", "<>"], correct: 1, points: 10 },
        { id: 4, question: "What is len() used for?", options: ["Add items", "Get length", "Remove items", "Sort"], correct: 1, points: 10 },
        { id: 5, question: "Which is immutable?", options: ["list", "dict", "tuple", "set"], correct: 2, points: 10 },
      ],
      medium: [
        { id: 1, question: "What does 'self' refer to?", options: ["Class", "Instance", "Function", "Module"], correct: 1, points: 20 },
        { id: 2, question: "Lambda functions are?", options: ["Named functions", "Anonymous functions", "Class methods", "None"], correct: 1, points: 20 },
        { id: 3, question: "What is list comprehension?", options: ["Sorting", "Concise list creation", "Deletion", "None"], correct: 1, points: 20 },
        { id: 4, question: "__init__ is called when?", options: ["Delete object", "Create object", "Copy object", "Update"], correct: 1, points: 20 },
        { id: 5, question: "What is a decorator?", options: ["Design pattern", "Function wrapper", "Class type", "Variable"], correct: 1, points: 20 },
      ],
      hard: [
        { id: 1, question: "What is GIL in Python?", options: ["Global Int Lock", "Global Interpreter Lock", "General Import", "None"], correct: 1, points: 30 },
        { id: 2, question: "__slots__ is used for?", options: ["Threading", "Memory optimization", "Networking", "None"], correct: 1, points: 30 },
        { id: 3, question: "What is metaclass?", options: ["Class of class", "Subclass", "Interface", "Module"], correct: 0, points: 30 },
        { id: 4, question: "asyncio is for?", options: ["File I/O", "Async programming", "GUI", "Database"], correct: 1, points: 30 },
        { id: 5, question: "What is duck typing?", options: ["Error type", "Dynamic typing", "Static typing", "None"], correct: 1, points: 30 },
      ],
    },
  },
  {
    id: "java",
    name: "Java",
    icon: "☕",
    questions: {
      easy: [
        { id: 1, question: "Java is which type of language?", options: ["Procedural", "Object-Oriented", "Functional", "Assembly"], correct: 1, points: 10 },
        { id: 2, question: "Which method starts a Java program?", options: ["start()", "begin()", "main()", "run()"], correct: 2, points: 10 },
        { id: 3, question: "JVM stands for?", options: ["Java Virtual Machine", "Java Very Machine", "Just Virtual", "None"], correct: 0, points: 10 },
        { id: 4, question: "Which keyword creates object?", options: ["this", "new", "create", "make"], correct: 1, points: 10 },
        { id: 5, question: "String is which type?", options: ["Primitive", "Class", "Interface", "Abstract"], correct: 1, points: 10 },
      ],
      medium: [
        { id: 1, question: "What is method overloading?", options: ["Same name, diff params", "Same name, same params", "Diff name", "None"], correct: 0, points: 20 },
        { id: 2, question: "Java supports which inheritance?", options: ["Multiple", "Single", "Hybrid", "All"], correct: 1, points: 20 },
        { id: 3, question: "Interface contains?", options: ["Concrete methods only", "Abstract methods", "Variables only", "None"], correct: 1, points: 20 },
        { id: 4, question: "finally block runs?", options: ["Never", "Always", "On exception", "On success"], correct: 1, points: 20 },
        { id: 5, question: "static methods belong to?", options: ["Object", "Class", "Package", "None"], correct: 1, points: 20 },
      ],
      hard: [
        { id: 1, question: "What is reflection in Java?", options: ["Mirror effect", "Runtime inspection", "Compile check", "None"], correct: 1, points: 30 },
        { id: 2, question: "What is volatile keyword?", options: ["Constant", "Thread visibility", "Private", "None"], correct: 1, points: 30 },
        { id: 3, question: "CompletableFuture is for?", options: ["Sync", "Async programming", "File I/O", "None"], correct: 1, points: 30 },
        { id: 4, question: "What is JIT compiler?", options: ["Just In Time", "Java In Test", "Jump If True", "None"], correct: 0, points: 30 },
        { id: 5, question: "What is classloader?", options: ["Loads HTML", "Loads classes", "Compiles", "None"], correct: 1, points: 30 },
      ],
    },
  },
  {
    id: "html",
    name: "HTML",
    icon: "🌐",
    questions: {
      easy: [
        { id: 1, question: "HTML stands for?", options: ["Hyper Text Markup Language", "High Text", "Hyper Tabular", "None"], correct: 0, points: 10 },
        { id: 2, question: "Which tag creates paragraph?", options: ["<para>", "<p>", "<paragraph>", "<pg>"], correct: 1, points: 10 },
        { id: 3, question: "Which tag is for largest heading?", options: ["<h6>", "<h1>", "<head>", "<header>"], correct: 1, points: 10 },
        { id: 4, question: "Which tag creates hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correct: 1, points: 10 },
        { id: 5, question: "Which is self-closing?", options: ["<div>", "<span>", "<img>", "<p>"], correct: 2, points: 10 },
      ],
      medium: [
        { id: 1, question: "What is semantic HTML?", options: ["Styling", "Meaningful tags", "JavaScript", "None"], correct: 1, points: 20 },
        { id: 2, question: "Which is not semantic?", options: ["<header>", "<div>", "<article>", "<nav>"], correct: 1, points: 20 },
        { id: 3, question: "DOCTYPE declares?", options: ["Style", "Document type", "Script", "Title"], correct: 1, points: 20 },
        { id: 4, question: "<meta> goes in?", options: ["<body>", "<head>", "<footer>", "<main>"], correct: 1, points: 20 },
        { id: 5, question: "What is semantic element?", options: ["Non-meaningful tag", "Meaningful HTML tag", "Style element", "None"], correct: 1, points: 20 },
      ],
      hard: [
        { id: 1, question: "What is Shadow DOM?", options: ["Dark mode", "Encapsulated DOM", "Virtual DOM", "None"], correct: 1, points: 30 },
        { id: 2, question: "data-* attributes are for?", options: ["CSS", "Custom data", "SEO", "None"], correct: 1, points: 30 },
        { id: 3, question: "What is Web Component?", options: ["React", "Reusable elements", "CSS", "None"], correct: 1, points: 30 },
        { id: 4, question: "contenteditable does?", options: ["Style", "Make editable", "Hide", "Delete"], correct: 1, points: 30 },
        { id: 5, question: "What is <template>?", options: ["Header", "Hidden markup", "Footer", "None"], correct: 1, points: 30 },
      ],
    },
  },
  {
    id: "css",
    name: "CSS",
    icon: "🎨",
    questions: {
      easy: [
        { id: 1, question: "CSS stands for?", options: ["Cascading Style Sheets", "Computer Style", "Creative Styling", "None"], correct: 0, points: 10 },
        { id: 2, question: "Which property sets text color?", options: ["text-color", "color", "font-color", "fg-color"], correct: 1, points: 10 },
        { id: 3, question: "Which selector uses #?", options: ["Class", "ID", "Element", "Universal"], correct: 1, points: 10 },
        { id: 4, question: "Which selector uses .?", options: ["Class", "ID", "Element", "Universal"], correct: 0, points: 10 },
        { id: 5, question: "External CSS uses which tag?", options: ["<style>", "<css>", "<link>", "<script>"], correct: 2, points: 10 },
      ],
      medium: [
        { id: 1, question: "What is flexbox for?", options: ["Colors", "Layout", "Fonts", "Animation"], correct: 1, points: 20 },
        { id: 2, question: "position: fixed relates to?", options: ["Parent", "Viewport", "Document", "Body"], correct: 1, points: 20 },
        { id: 3, question: "z-index works with?", options: ["Any element", "Positioned elements", "Inline", "None"], correct: 1, points: 20 },
        { id: 4, question: "Which is not a display value?", options: ["block", "inline", "hidden", "flex"], correct: 2, points: 20 },
        { id: 5, question: "Grid creates?", options: ["1D layout", "2D layout", "3D layout", "None"], correct: 1, points: 20 },
      ],
      hard: [
        { id: 1, question: "What is CSS specificity order?", options: ["ID > Class > Element", "Class > ID", "Element > Class", "None"], correct: 0, points: 30 },
        { id: 2, question: "::before creates?", options: ["Sibling", "Pseudo-element", "Child", "Parent"], correct: 1, points: 30 },
        { id: 3, question: "What is BEM?", options: ["CSS Framework", "Naming convention", "Preprocessor", "None"], correct: 1, points: 30 },
        { id: 4, question: "@supports is for?", options: ["Media queries", "Feature queries", "Import", "None"], correct: 1, points: 30 },
        { id: 5, question: "CSS custom properties start with?", options: ["$", "--", "@", "#"], correct: 1, points: 30 },
      ],
    },
  },
  {
    id: "javascript",
    name: "JavaScript",
    icon: "⚡",
    questions: {
      easy: [
        { id: 1, question: "Which keyword declares variable?", options: ["var", "int", "string", "variable"], correct: 0, points: 10 },
        { id: 2, question: "How to write 'Hello' in console?", options: ["print('Hello')", "console.log('Hello')", "echo 'Hello'", "write('Hello')"], correct: 1, points: 10 },
        { id: 3, question: "Which is not a data type?", options: ["string", "boolean", "integer", "number"], correct: 2, points: 10 },
        { id: 4, question: "=== checks?", options: ["Value only", "Type only", "Value and type", "Nothing"], correct: 2, points: 10 },
        { id: 5, question: "null is which type?", options: ["undefined", "object", "null", "string"], correct: 1, points: 10 },
      ],
      medium: [
        { id: 1, question: "What is closure?", options: ["HTML tag", "Function with scope", "CSS property", "None"], correct: 1, points: 20 },
        { id: 2, question: "Arrow function syntax?", options: ["function =>", "() =>", "-> function", "=> ()"], correct: 1, points: 20 },
        { id: 3, question: "What does 'this' refer to?", options: ["Window always", "Current context", "Function", "None"], correct: 1, points: 20 },
        { id: 4, question: "Promise states are?", options: ["1", "2", "3", "4"], correct: 2, points: 20 },
        { id: 5, question: "Array.map returns?", options: ["undefined", "New array", "Boolean", "Number"], correct: 1, points: 20 },
      ],
      hard: [
        { id: 1, question: "What is event loop?", options: ["For loop", "Async execution", "While loop", "None"], correct: 1, points: 30 },
        { id: 2, question: "What is hoisting?", options: ["Lifting weights", "Variable elevation", "Error", "None"], correct: 1, points: 30 },
        { id: 3, question: "Prototype chain is for?", options: ["CSS", "Inheritance", "DOM", "Events"], correct: 1, points: 30 },
        { id: 4, question: "WeakMap keys must be?", options: ["Strings", "Objects", "Numbers", "Any"], correct: 1, points: 30 },
        { id: 5, question: "Generator function uses?", options: ["function*", "*function", "gen function", "None"], correct: 0, points: 30 },
      ],
    },
  },
];

const mockLeaderboardUsers = [];

const friendsData = [];

// Validate mockLeaderboardUsers
if (!Array.isArray(mockLeaderboardUsers)) {
  console.warn('mockLeaderboardUsers is not an array, initializing as empty array');
}

// ============================================
// STATE MANAGEMENT
// ============================================

let currentUser = null;
let isLoggedIn = false;
let isDarkMode = true;
let currentAuthTab = 'login';
let currentPage = 'landing';

// Game State
let selectedSubject = null;
let selectedDifficulty = null;
let gameQuestions = [];
let currentQuestionIndex = 0;
let gameScore = 0;
let heroHealth = 100;
let enemyHealth = 100;
let selectedAnswer = null;

const defaultProgress = {
  c: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
  cpp: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
  python: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
  java: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
  html: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
  css: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
  javascript: { easy: { completed: 0, total: 5 }, medium: { completed: 0, total: 5 }, hard: { completed: 0, total: 5 } },
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  loadUserFromStorage();
  loadTheme();
  initializeSubjectsGrid();
  
  if (isLoggedIn) {
    navigateTo('home');
  } else {
    navigateTo('landing');
  }
});

function loadUserFromStorage() {
  const savedUser = localStorage.getItem('codequest_user');
  if (savedUser) {
    try {
      currentUser = JSON.parse(savedUser);
      isLoggedIn = true;
    } catch (error) {
      console.error('Invalid user data, resetting...');
      localStorage.removeItem('codequest_user');
      currentUser = null;
      isLoggedIn = false;
    }
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('codequest_theme');
  if (savedTheme) {
    isDarkMode = savedTheme === 'dark';
  }
  applyTheme();
}

function applyTheme() {
  const sunIcon = document.getElementById('theme-icon-sun');
  const moonIcon = document.getElementById('theme-icon-moon');
  
  if (!sunIcon || !moonIcon) {
    console.warn('Theme icons not found in DOM');
    return;
  }
  
  try {
    if (isDarkMode) {
      document.body.classList.remove('light');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    } else {
      document.body.classList.add('light');
      sunIcon.classList.remove('hidden');
      moonIcon.classList.add('hidden');
    }
  } catch (error) {
    console.error('Error applying theme:', error);
  }
}

// ============================================
// NAVIGATION
// ============================================

function navigateTo(page) {
  try {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
    
    // Show target page
    const targetPage = document.getElementById(`page-${page}`);
    if (targetPage) {
      targetPage.classList.remove('hidden');
    }
    
    // Update navbar
    const navbar = document.getElementById('navbar');
    const chatbotContainer = document.getElementById('chatbot-container');
    
    if (page === 'landing') {
      if (navbar) navbar.classList.add('hidden');
      if (chatbotContainer) chatbotContainer.classList.add('hidden');
    } else {
      if (navbar) navbar.classList.remove('hidden');
      if (chatbotContainer) chatbotContainer.classList.remove('hidden');
      updateNavLinks(page);
      updateNavPoints();
    }
    
    // Page-specific updates
    if (page === 'home') updateHomePage();
    if (page === 'play') resetPlayPage();
    if (page === 'dashboard') updateDashboard();
    if (page === 'leaderboard') updateLeaderboard();
    
    currentPage = page;
  } catch (error) {
    console.error('Error navigating to page:', error);
  }
}

function updateNavLinks(activePage) {
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === activePage) {
      link.classList.add('active');
    }
  });
}

function deleteAccount() {
  if (!isLoggedIn || !currentUser) {
    alert('You must be logged in to delete your account.');
    return;
  }
  
  if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
    const userEmail = currentUser.email;
    
    // Remove all user-related data from localStorage
    localStorage.removeItem('codequest_user');
    localStorage.removeItem(`codequest_password_${userEmail}`);
    localStorage.removeItem(`codequest_data_${userEmail}`);
    
    // Remove user from global leaderboard
    let globalUsers = JSON.parse(localStorage.getItem('codequest_global_users') || '[]');
    globalUsers = globalUsers.filter(u => u.email !== userEmail);
    localStorage.setItem('codequest_global_users', JSON.stringify(globalUsers));
    
    currentUser = null;
    isLoggedIn = false;
    navigateTo('landing');
    alert('Your account has been deleted permanently.');
  }
}

function updateNavPoints() {
  if (currentUser) {
    document.getElementById('nav-points-value').textContent = currentUser.points.toLocaleString();
  }
}

// ============================================
// AUTHENTICATION
// ============================================

function switchAuthTab(tab) {
  currentAuthTab = tab;
  
  document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
  const activeTab = document.querySelector(`.auth-tab[data-tab="${tab}"]`);
  if (activeTab) activeTab.classList.add('active');
  
  const usernameField = document.getElementById('username-field');
  const authBtnText = document.getElementById('auth-btn-text');
  const authSwitchText = document.getElementById('auth-switch-text');
  const authSwitchBtn = document.getElementById('auth-switch-btn');
  
  if (!usernameField || !authBtnText || !authSwitchText || !authSwitchBtn) return;
  
  if (tab === 'login') {
    usernameField.classList.add('hidden');
    authBtnText.textContent = 'Start Playing';
    authSwitchText.textContent = "Don't have an account?";
    authSwitchBtn.textContent = 'Sign up';
  } else {
    usernameField.classList.remove('hidden');
    authBtnText.textContent = 'Create Account';
    authSwitchText.textContent = "Already have an account?";
    authSwitchBtn.textContent = 'Login';
  }
  
  const errorEl = document.getElementById('auth-error');
  if (errorEl) errorEl.classList.add('hidden');
}

function sanitizeHTML(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function handleAuth(e) {
  e.preventDefault();
  
  const emailEl = document.getElementById('auth-email');
  const passwordEl = document.getElementById('auth-password');
  const usernameEl = document.getElementById('auth-username');
  const errorEl = document.getElementById('auth-error');
  
  if (!emailEl || !passwordEl || !errorEl) return;
  
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();
  const username = usernameEl?.value?.trim() || '';
  
  errorEl.classList.add('hidden');
  
  if (!email || !password) {
    errorEl.textContent = 'Please fill in all fields';
    errorEl.classList.remove('hidden');
    return;
  }
  
  if (currentAuthTab === 'signup' && !username) {
    errorEl.textContent = 'Please enter a username';
    errorEl.classList.remove('hidden');
    return;
  }
  
  // Check username uniqueness for signup
  if (currentAuthTab === 'signup') {
    const globalUsers = JSON.parse(localStorage.getItem('codequest_global_users') || '[]');
    if (globalUsers.some(u => u.username === username)) {
      errorEl.textContent = 'The name entered is already existing in the game';
      errorEl.classList.remove('hidden');
      return;
    }
  }
  
  if (currentAuthTab === 'login') {
    // Check if user exists
    const savedPassword = localStorage.getItem(`codequest_password_${email}`);
    if (!savedPassword) {
      errorEl.textContent = 'Account not found. Please sign up first.';
      errorEl.classList.remove('hidden');
      return;
    }
    if (savedPassword !== password) {
      errorEl.textContent = 'Incorrect password';
      errorEl.classList.remove('hidden');
      return;
    }
    
    const savedData = localStorage.getItem(`codequest_data_${email}`);
    try {
      currentUser = savedData ? JSON.parse(savedData) : {
        username: 'Player',
        email,
        points: 0,
        avatar: '🤖',
        progress: JSON.parse(JSON.stringify(defaultProgress)),
      };
    } catch (error) {
      console.error('Invalid user data, creating new user');
      currentUser = {
        username: 'Player',
        email,
        points: 0,
        avatar: '🤖',
        progress: JSON.parse(JSON.stringify(defaultProgress)),
      };
    }
  } else {
    // Sign up
    currentUser = {
      username: sanitizeHTML(username),
      email,
      points: 0,
      avatar: '🤖',
      progress: JSON.parse(JSON.stringify(defaultProgress)),
    };
    localStorage.setItem(`codequest_password_${email}`, password);
  }
  
  isLoggedIn = true;
  saveUser();
  navigateTo('home');
}

function logout() {
  if (currentUser) {
    localStorage.setItem(`codequest_data_${currentUser.email}`, JSON.stringify(currentUser));
  }
  localStorage.removeItem('codequest_user');
  currentUser = null;
  isLoggedIn = false;
  navigateTo('landing');
}

function saveUser() {
  localStorage.setItem('codequest_user', JSON.stringify(currentUser));
  if (currentUser) {
    localStorage.setItem(`codequest_data_${currentUser.email}`, JSON.stringify(currentUser));
    
    // Add to global leaderboard
    let globalUsers = JSON.parse(localStorage.getItem('codequest_global_users') || '[]');
    const existingIndex = globalUsers.findIndex(u => u.email === currentUser.email);
    
    if (existingIndex >= 0) {
      globalUsers[existingIndex] = currentUser;
    } else {
      globalUsers.push(currentUser);
    }
    
    localStorage.setItem('codequest_global_users', JSON.stringify(globalUsers));
  }
}

function toggleTheme() {
  isDarkMode = !isDarkMode;
  localStorage.setItem('codequest_theme', isDarkMode ? 'dark' : 'light');
  applyTheme();
}

function togglePasswordVisibility() {
  const passwordInput = document.getElementById('auth-password');
  const eyeIcon = document.getElementById('eye-icon');
  const eyeOffIcon = document.getElementById('eye-off-icon');
  
  if (!passwordInput || !eyeIcon || !eyeOffIcon) return;
  
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.add('hidden');
    eyeOffIcon.classList.remove('hidden');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.remove('hidden');
    eyeOffIcon.classList.add('hidden');
  }
}

// ============================================
// HOME PAGE
// ============================================

function updateHomePage() {
  try {
    if (!currentUser) return;
    
    const usernameEl = document.getElementById('home-username');
    const pointsEl = document.getElementById('home-total-points');
    
    if (usernameEl) usernameEl.textContent = currentUser.username || 'Player';
    if (pointsEl) pointsEl.textContent = (currentUser.points || 0).toLocaleString();
  } catch (error) {
    console.error('Error updating home page:', error);
  }
}

// ============================================
// PLAY PAGE
// ============================================

function initializeSubjectsGrid() {
  try {
    const grid = document.getElementById('subjects-grid');
    if (!grid) return;
    
    grid.innerHTML = subjects.map((subject, index) => {
      const safeId = encodeURIComponent(subject.id);
      const safeName = subject.name.replace(/[<>"'&]/g, (match) => {
        const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' };
        return entities[match];
      });
      const safeIcon = subject.icon.replace(/[<>"'&]/g, (match) => {
        const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' };
        return entities[match];
      });
      
      return `
        <button class="subject-btn game-card animate-slide-up" style="animation-delay: ${index * 0.05}s" data-subject-id="${safeId}">
          <span class="subject-icon">${safeIcon}</span>
          <h3>${safeName}</h3>
          <p>15 Questions</p>
        </button>
      `;
    }).join('');
    
    // Add event listeners instead of inline onclick
    grid.addEventListener('click', (e) => {
      const btn = e.target.closest('.subject-btn');
      if (btn) {
        const subjectId = decodeURIComponent(btn.dataset.subjectId);
        selectSubject(subjectId);
      }
    });
  } catch (error) {
    console.error('Error initializing subjects grid:', error);
  }
}

function resetPlayPage() {
  try {
    selectedSubject = null;
    selectedDifficulty = null;
    gameQuestions = [];
    currentQuestionIndex = 0;
    gameScore = 0;
    heroHealth = 100;
    enemyHealth = 100;
    selectedAnswer = null;
    
    const elements = [
      'play-select-subject',
      'play-select-difficulty', 
      'play-battle',
      'play-complete'
    ];
    
    elements.forEach((id, index) => {
      const el = document.getElementById(id);
      if (el) {
        if (index === 0) {
          el.classList.remove('hidden');
        } else {
          el.classList.add('hidden');
        }
      }
    });
  } catch (error) {
    console.error('Error resetting play page:', error);
  }
}

function selectSubject(subjectId) {
  try {
    if (!subjectId || typeof subjectId !== 'string') {
      console.error('Invalid subject ID provided');
      return;
    }
    
    selectedSubject = subjects.find(s => s.id === subjectId);
    
    if (!selectedSubject) {
      console.error('Subject not found:', subjectId);
      return;
    }
    
    const iconEl = document.getElementById('selected-subject-icon');
    const nameEl = document.getElementById('selected-subject-name');
    const selectSubjectEl = document.getElementById('play-select-subject');
    const selectDifficultyEl = document.getElementById('play-select-difficulty');
    
    if (iconEl) iconEl.textContent = selectedSubject.icon;
    if (nameEl) nameEl.textContent = selectedSubject.name;
    if (selectSubjectEl) selectSubjectEl.classList.add('hidden');
    if (selectDifficultyEl) selectDifficultyEl.classList.remove('hidden');
  } catch (error) {
    console.error('Error selecting subject:', error);
  }
}

function goBackToSubjects() {
  try {
    selectedSubject = null;
    selectedDifficulty = null;
    
    const selectSubjectEl = document.getElementById('play-select-subject');
    const selectDifficultyEl = document.getElementById('play-select-difficulty');
    
    if (selectSubjectEl) selectSubjectEl.classList.remove('hidden');
    if (selectDifficultyEl) selectDifficultyEl.classList.add('hidden');
  } catch (error) {
    console.error('Error going back to subjects:', error);
  }
}

function selectDifficulty(difficulty) {
  try {
    if (!difficulty || !['easy', 'medium', 'hard'].includes(difficulty)) {
      console.error('Invalid difficulty provided:', difficulty);
      return;
    }
    selectedDifficulty = difficulty;
    startGame();
  } catch (error) {
    console.error('Error selecting difficulty:', error);
  }
}

function startGame() {
  try {
    if (!selectedSubject || !selectedDifficulty) {
      console.error('Subject or difficulty not selected');
      return;
    }
    
    if (!selectedSubject.questions?.[selectedDifficulty]) {
      console.error('Questions not found for selected difficulty');
      return;
    }
    
    // Get random questions using Fisher-Yates shuffle
    const questions = [...selectedSubject.questions[selectedDifficulty]];
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
    }
    gameQuestions = questions.slice(0, 5);
    
    currentQuestionIndex = 0;
    gameScore = 0;
    heroHealth = 100;
    enemyHealth = 100;
    selectedAnswer = null;
    
    const selectDifficultyEl = document.getElementById('play-select-difficulty');
    const battleEl = document.getElementById('play-battle');
    
    if (selectDifficultyEl) selectDifficultyEl.classList.add('hidden');
    if (battleEl) battleEl.classList.remove('hidden');
    
    updateBattleUI();
    displayQuestion();
  } catch (error) {
    console.error('Error starting game:', error);
  }
}

function updateBattleUI() {
  try {
    const elements = {
      'current-question-num': currentQuestionIndex + 1,
      'total-questions': gameQuestions.length,
      'current-score': gameScore
    };
    
    Object.entries(elements).forEach(([id, value]) => {
      const el = document.getElementById(id);
      if (el) el.textContent = value;
    });
    
    const progressWidth = gameQuestions.length > 0 ? Math.min(100, Math.max(0, (currentQuestionIndex / gameQuestions.length) * 100)) : 0;
    const heroWidth = Math.min(100, Math.max(0, heroHealth));
    const enemyWidth = Math.min(100, Math.max(0, enemyHealth));
    
    const progressBar = document.getElementById('battle-progress-bar');
    const heroBar = document.getElementById('hero-health-bar');
    const enemyBar = document.getElementById('enemy-health-bar');
    
    if (progressBar) progressBar.style.width = `${progressWidth}%`;
    if (heroBar) heroBar.style.width = `${heroWidth}%`;
    if (enemyBar) enemyBar.style.width = `${enemyWidth}%`;
  } catch (error) {
    console.error('Error updating battle UI:', error);
  }
}

function displayQuestion() {
  try {
    if (!gameQuestions[currentQuestionIndex]) {
      console.error('Question not found at index:', currentQuestionIndex);
      return;
    }
    
    const question = gameQuestions[currentQuestionIndex];
    
    const questionTextEl = document.getElementById('question-text');
    const resultIndicatorEl = document.getElementById('result-indicator');
    const questionCardEl = document.getElementById('question-card');
    const optionsGridEl = document.getElementById('options-grid');
    
    if (questionTextEl) questionTextEl.textContent = question.question || '';
    if (resultIndicatorEl) resultIndicatorEl.classList.add('hidden');
    if (questionCardEl) questionCardEl.classList.remove('correct', 'wrong');
    
    if (optionsGridEl) {
      // Clear existing content and event listeners
      optionsGridEl.innerHTML = '';
      
      question.options.forEach((option, index) => {
        const safeOption = option.replace(/[<>"'&]/g, (match) => {
          const entities = { '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '&': '&amp;' };
          return entities[match];
        });
        
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.dataset.index = index;
        button.innerHTML = `${String.fromCharCode(65 + index)}. ${safeOption}`;
        button.addEventListener('click', () => handleAnswer(index));
        optionsGridEl.appendChild(button);
      });
    }
    
    // Reset bot animations
    const heroBot = document.getElementById('hero-bot');
    const enemyBot = document.getElementById('enemy-bot');
    
    if (heroBot) {
      heroBot.classList.remove('animate-attack');
      heroBot.classList.add('animate-float');
    }
    if (enemyBot) {
      enemyBot.classList.remove('animate-death');
      enemyBot.classList.add('animate-float');
    }
  } catch (error) {
    console.error('Error displaying question:', error);
  }
}

function handleAnswer(optionIndex) {
  try {
    if (selectedAnswer !== null || typeof optionIndex !== 'number') return;
    
    const question = gameQuestions[currentQuestionIndex];
    if (!question) {
      console.error('No question available');
      return;
    }
    
    selectedAnswer = optionIndex;
    const isCorrect = optionIndex === question.correct;
    
    // Disable all buttons
    document.querySelectorAll('.option-btn').forEach(btn => {
      btn.disabled = true;
      const idx = parseInt(btn.dataset.index);
      if (idx === question.correct) {
        btn.classList.add('correct');
      } else if (idx === optionIndex && !isCorrect) {
        btn.classList.add('wrong');
      } else {
        btn.classList.add('disabled');
      }
    });
    
    const resultIndicator = document.getElementById('result-indicator');
    const questionCard = document.getElementById('question-card');
    
    if (isCorrect) {
      // Correct answer
      if (resultIndicator) {
        resultIndicator.textContent = '✓ CORRECT! Enemy destroyed!';
        resultIndicator.className = 'result-indicator correct';
        resultIndicator.classList.remove('hidden');
      }
      if (questionCard) questionCard.classList.add('correct');
      
      gameScore += question.points || 0;
      addPoints(question.points || 0);
      
      // Show score popup
      const scorePopup = document.getElementById('score-popup');
      if (scorePopup) {
        scorePopup.textContent = `+${question.points || 0}`;
        scorePopup.classList.remove('hidden');
        scorePopup.classList.add('show');
      }
      
      // Hero attack animation
      const heroBot = document.getElementById('hero-bot');
      if (heroBot) {
        heroBot.classList.remove('animate-float');
        heroBot.classList.add('animate-attack');
      }
      
      setTimeout(() => {
        if (heroBot) heroBot.classList.remove('animate-attack');
        
        // Enemy death animation
        const enemyBot = document.getElementById('enemy-bot');
        if (enemyBot) {
          enemyBot.classList.remove('animate-float');
          enemyBot.classList.add('animate-death');
        }
        enemyHealth = Math.max(0, enemyHealth - (100 / Math.max(1, gameQuestions.length)));
        const enemyHealthBar = document.getElementById('enemy-health-bar');
        if (enemyHealthBar) enemyHealthBar.style.width = `${enemyHealth}%`;
      }, 500);
      
      setTimeout(() => {
        if (scorePopup) {
          scorePopup.classList.remove('show');
          scorePopup.classList.add('hidden');
        }
        selectedAnswer = null;
        moveToNext();
      }, 1500);
    } else {
      // Wrong answer
      if (resultIndicator) {
        resultIndicator.textContent = '✗ WRONG! Hero takes damage!';
        resultIndicator.className = 'result-indicator wrong';
        resultIndicator.classList.remove('hidden');
      }
      if (questionCard) questionCard.classList.add('wrong');
      
      heroHealth = Math.max(0, heroHealth - (100 / Math.max(1, gameQuestions.length)));
      const heroHealthBar = document.getElementById('hero-health-bar');
      if (heroHealthBar) heroHealthBar.style.width = `${heroHealth}%`;
      
      setTimeout(() => {
        selectedAnswer = null;
        moveToNext();
      }, 1500);
    }
    
    updateBattleUI();
  } catch (error) {
    console.error('Error handling answer:', error);
    selectedAnswer = null;
  }
}

function moveToNext() {
  try {
    if (currentQuestionIndex < gameQuestions.length - 1) {
      currentQuestionIndex++;
      enemyHealth = 100;
      updateBattleUI();
      displayQuestion();
    } else {
      endGame();
    }
  } catch (error) {
    console.error('Error moving to next question:', error);
  }
}

function endGame() {
  try {
    // Update progress
    if (selectedSubject?.id && selectedDifficulty) {
      updateProgress(selectedSubject.id, selectedDifficulty);
    }
    
    const totalPoints = gameQuestions.reduce((acc, q) => acc + (q.points || 0), 0);
    const percentage = totalPoints > 0 ? Math.round((gameScore / totalPoints) * 100) : 0;
    
    const finalScoreEl = document.getElementById('final-score');
    const maxScoreEl = document.getElementById('max-score');
    
    if (finalScoreEl) finalScoreEl.textContent = gameScore;
    if (maxScoreEl) maxScoreEl.textContent = totalPoints;
    
    let emoji, message;
    if (percentage >= 80) {
      emoji = '🏆';
      message = 'Excellent! You are a coding master!';
    } else if (percentage >= 50) {
      emoji = '⭐';
      message = 'Good job! Keep practicing!';
    } else {
      emoji = '💪';
      message = "Don't give up! Try again!";
    }
    
    const emojiEl = document.getElementById('complete-emoji');
    const messageEl = document.getElementById('complete-message');
    const battleEl = document.getElementById('play-battle');
    const completeEl = document.getElementById('play-complete');
    
    if (emojiEl) emojiEl.textContent = emoji;
    if (messageEl) messageEl.textContent = message;
    if (battleEl) battleEl.classList.add('hidden');
    if (completeEl) completeEl.classList.remove('hidden');
  } catch (error) {
    console.error('Error ending game:', error);
  }
}

function addPoints(points) {
  try {
    if (currentUser && typeof points === 'number' && points >= 0) {
      currentUser.points = (currentUser.points || 0) + points;
      saveUser();
      updateNavPoints();
    }
  } catch (error) {
    console.error('Error adding points:', error);
  }
}

function updateProgress(subjectId, difficulty) {
  try {
    if (currentUser?.progress?.[subjectId]?.[difficulty] && 
        typeof currentUser.progress[subjectId][difficulty].completed === 'number') {
      currentUser.progress[subjectId][difficulty].completed += 1;
      saveUser();
    }
  } catch (error) {
    console.error('Error updating progress:', error);
  }
}

function resetGame() {
  try {
    navigateTo('play');
  } catch (error) {
    console.error('Error resetting game:', error);
  }
}

function playAgain() {
  try {
    startGame();
  } catch (error) {
    console.error('Error starting new game:', error);
  }
}

// ============================================
// DASHBOARD PAGE
// ============================================

function updateDashboard() {
  try {
    if (!currentUser) return;
    
    // Profile info with safe text content
    const avatarEl = document.getElementById('dashboard-avatar');
    const usernameEl = document.getElementById('dashboard-username');
    const emailEl = document.getElementById('dashboard-email');
    
    if (avatarEl) avatarEl.textContent = currentUser.avatar || '🤖';
    if (usernameEl) usernameEl.textContent = currentUser.username || 'Player';
    if (emailEl) emailEl.textContent = currentUser.email || '';
    
    // Calculate rank safely
    let globalUsers = [];
    try {
      const stored = localStorage.getItem('codequest_global_users');
      globalUsers = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Invalid global users data, resetting...', error);
      globalUsers = [];
    }
    
    const allUsers = globalUsers.sort((a, b) => (b.points || 0) - (a.points || 0));
    const userRank = allUsers.findIndex(u => u.email === currentUser.email) + 1;
    
    const rankEl = document.getElementById('dashboard-rank');
    const pointsEl = document.getElementById('dashboard-points');
    const statPointsEl = document.getElementById('stat-total-points');
    const statRankEl = document.getElementById('stat-rank');
    
    if (rankEl) rankEl.textContent = userRank || 'N/A';
    if (pointsEl) pointsEl.textContent = (currentUser.points || 0).toLocaleString();
    if (statPointsEl) statPointsEl.textContent = (currentUser.points || 0).toLocaleString();
    if (statRankEl) statRankEl.textContent = `#${userRank || 'N/A'}`;
    
    // Calculate battles won and completion
    let totalCompleted = 0;
    let totalQuestions = 0;
    
    if (currentUser.progress) {
      Object.values(currentUser.progress).forEach(subj => {
        if (subj && typeof subj === 'object') {
          totalCompleted += (subj.easy?.completed || 0) + (subj.medium?.completed || 0) + (subj.hard?.completed || 0);
          totalQuestions += 15;
        }
      });
    }
    
    const battlesEl = document.getElementById('stat-battles');
    const completionEl = document.getElementById('stat-completion');
    
    if (battlesEl) battlesEl.textContent = totalCompleted;
    if (completionEl) {
      const percentage = totalQuestions > 0 ? Math.round((totalCompleted / totalQuestions) * 100) : 0;
      completionEl.textContent = `${percentage}%`;
    }
    
    // Progress grid with XSS protection
    const progressGrid = document.getElementById('progress-grid');
    if (progressGrid) {
      progressGrid.innerHTML = subjects.map((subject, index) => {
        const progress = currentUser.progress?.[subject.id] || { easy: { completed: 0 }, medium: { completed: 0 }, hard: { completed: 0 } };
        const completed = (progress.easy?.completed || 0) + (progress.medium?.completed || 0) + (progress.hard?.completed || 0);
        const total = 15;
        const percentage = Math.round((completed / total) * 100);
        
        return `
          <div class="progress-card game-card animate-slide-up" style="animation-delay: ${Math.max(0, index * 0.05)}s">
            <div class="progress-card-header">
              <span class="progress-card-icon">${sanitizeHTML(subject.icon)}</span>
              <div class="progress-card-info">
                <h4>${sanitizeHTML(subject.name)}</h4>
                <p>${completed}/${total} completed</p>
              </div>
              <span class="progress-card-percent">${percentage}%</span>
            </div>
            <div class="progress-card-bar">
              <div class="progress-card-bar-fill" style="width: ${Math.min(100, Math.max(0, percentage))}%"></div>
            </div>
            <div class="progress-card-details">
              <span>Easy: ${progress.easy?.completed || 0}/5</span>
              <span>Medium: ${progress.medium?.completed || 0}/5</span>
              <span>Hard: ${progress.hard?.completed || 0}/5</span>
            </div>
          </div>
        `;
      }).join('');
    }
    
    // Friends list with XSS protection
    const friendsList = document.getElementById('friends-list');
    if (friendsList) {
      if (currentUser.friends && Array.isArray(currentUser.friends) && currentUser.friends.length > 0) {
        friendsList.innerHTML = currentUser.friends.map((friend, index) => {
          if (!friend || typeof friend !== 'object') return '';
          
          return `
            <div class="friend-item animate-slide-up" style="animation-delay: ${Math.max(0, index * 0.05)}s">
              <span class="friend-rank">#${index + 1}</span>
              <span class="friend-avatar">${sanitizeHTML(friend.avatar || '🤖')}</span>
              <span class="friend-name">${sanitizeHTML(friend.username || 'Unknown')}</span>
              <span class="friend-points">⚡ ${(friend.points || 0).toLocaleString()}</span>
            </div>
          `;
        }).join('');
      } else {
        friendsList.innerHTML = '<p style="text-align: center; color: var(--muted-foreground); padding: 2rem;">No friends added yet. Search and add friends above!</p>';
      }
    }
  } catch (error) {
    console.error('Error updating dashboard:', error);
  }
}

// ============================================
// LEADERBOARD PAGE
// ============================================

function updateLeaderboard() {
  try {
    if (!currentUser) return;
    
    // Get all users from global storage safely
    let globalUsers = [];
    try {
      const stored = localStorage.getItem('codequest_global_users');
      globalUsers = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error parsing global users:', error);
      globalUsers = [];
    }
    
    const allUsers = globalUsers.filter(u => u && typeof u === 'object').sort((a, b) => (b.points || 0) - (a.points || 0));
    
    const userRank = allUsers.findIndex(u => u.email === currentUser.email) + 1;
    const isInTop25 = userRank <= 25 && userRank > 0;
    const top25 = allUsers.slice(0, 25);
    
    // Update podium safely
    for (let i = 1; i <= 3; i++) {
      const player = top25[i - 1];
      const podiumItem = document.getElementById(`podium-${i}`);
      
      if (podiumItem && player) {
        const avatarEl = podiumItem.querySelector('.podium-avatar');
        const nameEl = podiumItem.querySelector('.podium-name');
        const pointsEl = podiumItem.querySelector('.podium-points');
        
        if (avatarEl) avatarEl.textContent = player.avatar || '🤖';
        if (nameEl) nameEl.textContent = player.username || 'Unknown';
        if (pointsEl) pointsEl.textContent = (player.points || 0).toLocaleString();
      }
    }
    
    // User position
    const userPositionEl = document.getElementById('user-position');
    if (userPositionEl) {
      if (!isInTop25 && allUsers.length > 25) {
        userPositionEl.classList.remove('hidden');
        
        const rankEl = document.getElementById('user-current-rank');
        const pointsNeededEl = document.getElementById('points-needed');
        const avatarEl = document.getElementById('user-position-avatar');
        const pointsEl = document.getElementById('user-position-points');
        
        if (rankEl) rankEl.textContent = userRank;
        if (pointsNeededEl && top25[24]) {
          const needed = Math.max(0, (top25[24].points || 0) - (currentUser.points || 0) + 1);
          pointsNeededEl.textContent = needed.toLocaleString();
        }
        if (avatarEl) avatarEl.textContent = currentUser.avatar || '🤖';
        if (pointsEl) pointsEl.textContent = (currentUser.points || 0).toLocaleString();
      } else {
        userPositionEl.classList.add('hidden');
      }
    }
    
    // Leaderboard list (4-25) with XSS protection
    const leaderboardList = document.getElementById('leaderboard-list');
    if (leaderboardList) {
      leaderboardList.innerHTML = top25.slice(3).map((player, index) => {
        if (!player || typeof player !== 'object') return '';
        
        const rank = index + 4;
        const isCurrentUser = player.email === currentUser.email;
        const rankClasses = isCurrentUser ? 'current-user' : '';
        
        return `
          <div class="leaderboard-item ${rankClasses} animate-slide-up" style="animation-delay: ${Math.max(0, index * 0.03)}s">
            <span class="leaderboard-rank">#${rank}</span>
            <span class="leaderboard-avatar">${sanitizeHTML(player.avatar || '🤖')}</span>
            <span class="leaderboard-name">
              ${sanitizeHTML(player.username || 'Unknown')}
              ${isCurrentUser ? '<span class="you-badge">YOU</span>' : ''}
            </span>
            <span class="leaderboard-points">⚡ ${(player.points || 0).toLocaleString()}</span>
          </div>
        `;
      }).join('');
    }
  } catch (error) {
    console.error('Error updating leaderboard:', error);
  }
}

function showAvatarSelector() {
  try {
    const modal = document.getElementById('avatar-modal');
    if (modal) {
      modal.classList.remove('hidden');
      
      // Add click outside to close functionality
      modal.addEventListener('click', function(e) {
        if (e.target === modal) {
          closeAvatarSelector();
        }
      });
      
      // Add escape key to close functionality
      const handleEscape = function(e) {
        if (e.key === 'Escape') {
          closeAvatarSelector();
          document.removeEventListener('keydown', handleEscape);
        }
      };
      document.addEventListener('keydown', handleEscape);
    }
  } catch (error) {
    console.error('Error showing avatar selector:', error);
  }
}

function closeAvatarSelector() {
  try {
    const modal = document.getElementById('avatar-modal');
    if (modal) modal.classList.add('hidden');
  } catch (error) {
    console.error('Error closing avatar selector:', error);
  }
}

function selectAvatar(avatar) {
  try {
    if (currentUser && typeof avatar === 'string' && avatar.trim()) {
      const sanitizedAvatar = avatar.trim();
      currentUser.avatar = sanitizedAvatar;
      saveUser();
      
      // Update all avatar displays
      const dashboardAvatar = document.getElementById('dashboard-avatar');
      if (dashboardAvatar) dashboardAvatar.textContent = sanitizedAvatar;
      
      // Update other avatar displays if they exist
      const userPositionAvatar = document.getElementById('user-position-avatar');
      if (userPositionAvatar) userPositionAvatar.textContent = sanitizedAvatar;
      
      closeAvatarSelector();
      
      // Show success message
      alert('Avatar updated successfully!');
    }
  } catch (error) {
    console.error('Error selecting avatar:', error);
    alert('Error updating avatar. Please try again.');
  }
}

function editUsername() {
  try {
    if (!currentUser) return;
    
    const currentUsername = currentUser.username || 'Player';
    const newUsername = prompt('Enter new username:', currentUsername);
    
    if (newUsername && typeof newUsername === 'string') {
      const trimmedUsername = newUsername.trim();
      if (trimmedUsername && trimmedUsername !== currentUsername && trimmedUsername.length <= 50) {
        // Basic validation
        if (!/^[a-zA-Z0-9_\s-]+$/.test(trimmedUsername)) {
          alert('Username can only contain letters, numbers, spaces, hyphens, and underscores.');
          return;
        }
        
        currentUser.username = trimmedUsername;
        saveUser();
        
        const dashboardUsername = document.getElementById('dashboard-username');
        const homeUsername = document.getElementById('home-username');
        
        if (dashboardUsername) dashboardUsername.textContent = trimmedUsername;
        if (homeUsername) homeUsername.textContent = trimmedUsername;
      }
    }
  } catch (error) {
    console.error('Error editing username:', error);
  }
}

function addFriend() {
  try {
    const searchInput = document.getElementById('friend-search');
    if (!searchInput) return;
    
    const username = searchInput.value?.trim();
    
    if (!username) {
      alert('Please enter a username');
      return;
    }
    
    if (username === currentUser?.username) {
      alert('You cannot add yourself as a friend');
      return;
    }
    
    // Basic validation
    if (username.length > 50 || !/^[a-zA-Z0-9_\s-]+$/.test(username)) {
      alert('Invalid username format');
      return;
    }
    
    let globalUsers = [];
    try {
      const stored = localStorage.getItem('codequest_global_users');
      globalUsers = stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error parsing global users:', error);
      alert('Error accessing user data');
      return;
    }
    
    const friendUser = globalUsers.find(u => u && u.username === username);
    
    if (!friendUser) {
      alert('User not found');
      return;
    }
    
    if (!currentUser.friends) currentUser.friends = [];
    
    if (currentUser.friends.some(f => f && f.email === friendUser.email)) {
      alert('User is already your friend');
      return;
    }
    
    currentUser.friends.push({
      email: friendUser.email || '',
      username: friendUser.username || 'Unknown',
      avatar: friendUser.avatar || '🤖',
      points: friendUser.points || 0
    });
    
    saveUser();
    searchInput.value = '';
    updateDashboard();
    alert('Friend added successfully!');
  } catch (error) {
    console.error('Error adding friend:', error);
    alert('Error adding friend. Please try again.');
  }
}

// Removed API key for security - move to environment variables
let isChatbotOpen = false;
let isChatLoading = false;

function toggleChatbot() {
  isChatbotOpen = !isChatbotOpen;
  
  const chatbotWindow = document.getElementById('chatbot-window');
  const chatbotBtn = document.getElementById('chatbot-btn');
  
  if (!chatbotWindow || !chatbotBtn) return;
  
  if (isChatbotOpen) {
    chatbotWindow.classList.remove('hidden');
    chatbotBtn.classList.add('hidden');
  } else {
    chatbotWindow.classList.add('hidden');
    chatbotBtn.classList.remove('hidden');
  }
}

function handleChatKeypress(e) {
  if (e.key === 'Enter') {
    sendChatMessage();
  }
}

async function sendChatMessage() {
  let typingIndicator = null;
  
  try {
    const input = document.getElementById('chatbot-input');
    const messagesContainer = document.getElementById('chatbot-messages');
    
    if (!input || !messagesContainer) {
      console.error('Required chat elements not found');
      throw new Error('Chat interface not available');
    }
    
    const message = input.value?.trim();
    if (!message || isChatLoading) return;
    
    input.value = '';
    isChatLoading = true;
    
    addChatMessage(message, 'user');
    
    typingIndicator = document.createElement('div');
    typingIndicator.className = 'typing-indicator';
    typingIndicator.innerHTML = '<span class="typing-dot"></span><span class="typing-dot"></span><span class="typing-dot"></span>';
    messagesContainer.appendChild(typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    setTimeout(() => {
      try {
        if (typingIndicator?.parentNode) {
          typingIndicator.remove();
        }
        
        const response = getChatbotResponse(message.toLowerCase());
        addChatMessage(response, 'bot');
      } catch (innerError) {
        console.error('Error in chatbot response:', innerError);
        addChatMessage("Sorry, there was an error processing your message.", 'bot');
      } finally {
        isChatLoading = false;
      }
    }, 1000 + Math.random() * 1000); // Random delay for more natural feel
  } catch (error) {
    console.error('Error in sendChatMessage:', error);
    
    // Cleanup typing indicator on error
    if (typingIndicator?.parentNode) {
      typingIndicator.remove();
    }
    
    // Reset loading state
    isChatLoading = false;
    
    // Provide user feedback
    try {
      addChatMessage("Sorry, there was an error sending your message. Please try again.", 'bot');
    } catch (feedbackError) {
      console.error('Failed to show error message to user:', feedbackError);
    }
  }
}

function getChatbotResponse(message) {
  // Game-related responses
  if (message.includes('how to play') || message.includes('how do i play') || message.includes('rules')) {
    return "🎮 Here's how to play D-RILYTE WAR:\n\n1. Select a programming language (C, C++, Python, Java, HTML, CSS, JavaScript)\n2. Choose difficulty: Easy (10 pts), Medium (20 pts), Hard (30 pts)\n3. Answer MCQ questions correctly to destroy enemy bots\n4. Wrong answers damage your hero\n5. Complete all questions to win the battle!\n\nReady to start coding? 💪";
  }
  
  if (message.includes('points') || message.includes('score') || message.includes('scoring')) {
    return "⚡ Scoring System:\n\n• Easy questions: 10 points each\n• Medium questions: 20 points each\n• Hard questions: 30 points each\n\nEarn points by answering correctly and climb the leaderboard! Your total points determine your global rank. 🏆";
  }
  
  if (message.includes('language') || message.includes('programming') || message.includes('subjects')) {
    return "💻 Available Programming Languages:\n\n🔷 C - System programming basics\n⚡ C++ - Object-oriented programming\n🐍 Python - Easy and powerful\n☕ Java - Enterprise development\n🌐 HTML - Web structure\n🎨 CSS - Web styling\n⚡ JavaScript - Web interactivity\n\nEach has 15 questions across 3 difficulty levels!";
  }
  
  if (message.includes('difficulty') || message.includes('easy') || message.includes('medium') || message.includes('hard')) {
    return "⭐ Difficulty Levels:\n\n⭐ Easy: Basic concepts, 5 questions, 10 pts each\n⭐⭐ Medium: Intermediate topics, 5 questions, 20 pts each\n⭐⭐⭐ Hard: Advanced concepts, 5 questions, 30 pts each\n\nStart with Easy if you're new, or challenge yourself with Hard for maximum points! 🚀";
  }
  
  if (message.includes('leaderboard') || message.includes('rank') || message.includes('ranking')) {
    return "🏆 Leaderboard System:\n\n• Global ranking based on total points\n• Top 25 players displayed\n• Your current rank shown in dashboard\n• Compete with friends and other BCA students\n\nKeep playing to climb higher! Every correct answer counts. 📈";
  }
  
  if (message.includes('dashboard') || message.includes('progress') || message.includes('stats')) {
    return "📊 Your Dashboard shows:\n\n• Total points and global rank\n• Progress in each programming language\n• Battles won and completion percentage\n• Friends leaderboard\n• Avatar customization\n\nTrack your coding journey and see how you're improving! 📈";
  }
  
  if (message.includes('friend') || message.includes('add friend')) {
    return "👥 Adding Friends:\n\n1. Go to Dashboard\n2. Use the friend search box\n3. Enter their exact username\n4. Click 'Add Friend'\n\nCompete with your classmates and see who's the best coder! 🎯";
  }
  
  // Coding help responses
  if (message.includes('c programming') || message.includes('c language')) {
    return "🔷 C Programming Tips:\n\n• Remember to include headers like stdio.h\n• Use proper syntax for printf() and scanf()\n• Understand pointers and memory management\n• Practice with loops and conditionals\n\nC is the foundation of programming - master it first! 💪";
  }
  
  if (message.includes('python') || message.includes('python help')) {
    return "🐍 Python Tips:\n\n• Python is beginner-friendly with clean syntax\n• Remember proper indentation (4 spaces)\n• Use print() for output, input() for input\n• Lists use [], dictionaries use {}\n• Practice with functions and loops\n\nPython is great for beginners! 🌟";
  }
  
  if (message.includes('java') || message.includes('java help')) {
    return "☕ Java Tips:\n\n• Everything is object-oriented\n• Remember public static void main()\n• Use System.out.println() for output\n• Understand classes and objects\n• Practice inheritance and polymorphism\n\nJava is powerful for enterprise development! 🚀";
  }
  
  if (message.includes('html') || message.includes('web development')) {
    return "🌐 HTML Tips:\n\n• HTML structures web content\n• Use semantic tags like <header>, <main>, <footer>\n• Remember to close tags properly\n• Use attributes for additional info\n• Practice with forms and links\n\nHTML is the backbone of the web! 🌍";
  }
  
  if (message.includes('css') || message.includes('styling')) {
    return "🎨 CSS Tips:\n\n• CSS styles HTML elements\n• Use selectors: element, .class, #id\n• Understand the box model\n• Practice with flexbox and grid\n• Learn responsive design\n\nCSS makes websites beautiful! ✨";
  }
  
  if (message.includes('javascript') || message.includes('js')) {
    return "⚡ JavaScript Tips:\n\n• JavaScript adds interactivity\n• Use let/const instead of var\n• Understand functions and scope\n• Practice with DOM manipulation\n• Learn async/await for promises\n\nJavaScript powers modern web apps! 🔥";
  }
  
  // Motivational responses
  if (message.includes('difficult') || message.includes('hard') || message.includes('struggling')) {
    return "💪 Don't give up! Every expert was once a beginner.\n\n• Start with easier questions to build confidence\n• Practice regularly - consistency is key\n• Learn from your mistakes\n• Ask for help when needed\n\nYou've got this, future coding champion! 🌟";
  }
  
  if (message.includes('motivation') || message.includes('encourage')) {
    return "🚀 You're on an amazing journey!\n\nCoding is like solving puzzles - each problem makes you stronger. Every line of code you write, every question you answer correctly, brings you closer to becoming a programming master!\n\nKeep battling those bots! 🤖⚔️";
  }
  
  // General responses
  if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
    return "Hey there, coding warrior! 👋\n\nI'm here to help you master programming through epic bot battles! Ask me about:\n\n• How to play the game\n• Programming tips\n• Scoring system\n• Any coding questions\n\nWhat would you like to know? 🎮";
  }
  
  if (message.includes('help') || message.includes('support')) {
    return "🤖 I'm here to help! You can ask me about:\n\n🎮 Game mechanics and rules\n💻 Programming language tips\n📊 Scoring and ranking system\n🏆 Leaderboard and competition\n📈 Progress tracking\n👥 Adding friends\n\nWhat specific help do you need? 💪";
  }
  
  if (message.includes('thank') || message.includes('thanks')) {
    return "You're very welcome! 😊\n\nI'm always here to help you on your coding journey. Keep practicing, keep learning, and most importantly - keep having fun with code!\n\nHappy coding! 🎉";
  }
  
  // Default response
  return "🤖 I'm your CodeQuest guide! I can help with:\n\n• Game rules and how to play\n• Programming tips for all 7 languages\n• Scoring system and rankings\n• Progress tracking\n• General coding questions\n\nTry asking something like 'How do I play?' or 'Tell me about Python' or 'How does scoring work?'\n\nWhat would you like to know? 💡";
}

function addChatMessage(text, sender) {
  try {
    const messagesContainer = document.getElementById('chatbot-messages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender === 'user' ? 'user-message' : 'bot-message'}`;
    messageDiv.textContent = text;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  } catch (error) {
    console.error('Error adding chat message:', error);
  }
}
