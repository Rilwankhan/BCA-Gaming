<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="RILYTE WAR - A gamified coding learning platform for BCA students. Master programming through epic bot battles!">
  <title>RILYTE WAR - Learn Coding Through Battle</title>
  <link rel="stylesheet" href="style.css">
  <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Navbar (hidden when not logged in) -->
  <nav id="navbar" class="navbar hidden">
    <div class="nav-container">
      <a href="#" class="nav-logo" onclick="navigateTo('home')">
        <img src="Logo.png" alt="RILYTE WAR" class="nav-logo-icon">
        <span class="nav-logo-text">RILYTE WAR</span>
      </a>
      
      <div class="nav-links">
        <a href="#" class="nav-link active" data-page="home" onclick="navigateTo('home')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9,22 9,12 15,12 15,22"></polyline>
          </svg>
          <span class="nav-link-text">Home</span>
        </a>
        <a href="#" class="nav-link" data-page="play" onclick="navigateTo('play')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
            <circle cx="8" cy="12" r="2"></circle>
            <circle cx="16" cy="12" r="2"></circle>
          </svg>
          <span class="nav-link-text">Play</span>
        </a>
        <a href="#" class="nav-link" data-page="dashboard" onclick="navigateTo('dashboard')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
          <span class="nav-link-text">Dashboard</span>
        </a>
        <a href="#" class="nav-link" data-page="leaderboard" onclick="navigateTo('leaderboard')">
          <svg class="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
            <path d="M4 22h16"></path>
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
          </svg>
          <span class="nav-link-text">Leaderboard</span>
        </a>
      </div>
      
      <div class="nav-right">
        <div class="nav-points">
          <span>⚡</span>
          <span id="nav-points-value">0</span>
        </div>
        <button class="nav-theme-btn" onclick="toggleTheme()" aria-label="Toggle theme">
          <svg id="theme-icon-sun" class="hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
          <svg id="theme-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </button>
        <button class="nav-logout-btn" onclick="logout()" aria-label="Logout">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
            <polyline points="16,17 21,12 16,7"></polyline>
            <line x1="21" y1="12" x2="9" y2="12"></line>
          </svg>
        </button>
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main id="main-content">
    <!-- Landing Page -->
    <section id="page-landing" class="page">
      <div class="landing-container">
        <div class="landing-bg-effects">
          <div class="bg-blob bg-blob-1"></div>
          <div class="bg-blob bg-blob-2"></div>
        </div>
        
        <div class="landing-content">
          <!-- Left Side - Branding -->
          <div class="landing-branding animate-slide-up">
            <div class="landing-logo">
              <img src="Logo.png" alt="RILYTE WAR" class="landing-logo-icon">
              <h1 class="landing-logo-text neon-text">RILYTE WAR</h1>
            </div>
            
            <h2 class="landing-title">
              Learn Coding<br>
              <span class="text-primary">Through Battle</span>
            </h2>
            
            <p class="landing-desc">
              A gamified learning platform designed specifically for BCA students. 
              Master coding through epic bot battles!
            </p>

            <div class="landing-features">
              <div class="landing-feature">
                <svg class="landing-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                  <circle cx="8" cy="12" r="2"></circle>
                  <circle cx="16" cy="12" r="2"></circle>
                </svg>
                <span>7 Languages</span>
              </div>
              <div class="landing-feature">
                <svg class="landing-feature-icon icon-cyan" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
                <span>Battle Mode</span>
              </div>
              <div class="landing-feature">
                <svg class="landing-feature-icon icon-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                  <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                <span>Leaderboard</span>
              </div>
            </div>
          </div>

          <!-- Right Side - Auth Form -->
          <div class="landing-form-container animate-slide-up" style="animation-delay: 0.2s">
            <div class="auth-card game-card">
              <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login" onclick="switchAuthTab('login')">Login</button>
                <button class="auth-tab" data-tab="signup" onclick="switchAuthTab('signup')">Sign Up</button>
              </div>

              <form id="auth-form" onsubmit="handleAuth(event)">
                <div id="username-field" class="form-group hidden">
                  <label class="form-label">Username</label>
                  <input type="text" id="auth-username" class="form-input" placeholder="Enter your username">
                </div>

                <div class="form-group">
                  <label class="form-label">Email</label>
                  <input type="email" id="auth-email" class="form-input" placeholder="Enter your email">
                </div>

                <div class="form-group">
                  <label class="form-label">Password</label>
                  <div class="password-input-wrapper">
                    <input type="password" id="auth-password" class="form-input" placeholder="Enter your password">
                    <button type="button" class="password-toggle" onclick="togglePasswordVisibility()">
                      <svg id="eye-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                        <circle cx="12" cy="12" r="3"></circle>
                      </svg>
                      <svg id="eye-off-icon" class="hidden" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                        <line x1="1" y1="1" x2="23" y2="23"></line>
                      </svg>
                    </button>
                  </div>
                </div>

                <p id="auth-error" class="form-error hidden"></p>

                <button type="submit" class="btn btn-primary btn-full">
                  <span id="auth-btn-text">Start Playing</span>
                </button>
              </form>

              <p class="auth-switch">
                <span id="auth-switch-text">Don't have an account?</span>
                <button onclick="switchAuthTab(currentAuthTab === 'login' ? 'signup' : 'login')">
                  <span id="auth-switch-btn">Sign up</span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Home Page -->
    <section id="page-home" class="page hidden">
      <div class="page-container">
        <!-- Hero Section -->
        <div class="home-hero animate-slide-up">
          <div class="home-logo">
            <img src="Logo.png" alt="RILYTE WAR" class="home-logo-img">
            <h1 class="neon-text">RILYTE WAR</h1>
          </div>
          
          <h2 class="home-welcome">
            Welcome back, <span class="text-primary" id="home-username">Player</span>!
          </h2>
          
          <p class="home-desc">
            The ultimate gamified coding learning platform designed exclusively for 
            <span class="text-accent">BCA students</span>. 
            Master programming through epic bot battles!
          </p>

          <div class="home-actions">
            <button class="btn btn-primary btn-lg" onclick="navigateTo('play')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                <circle cx="8" cy="12" r="2"></circle>
                <circle cx="16" cy="12" r="2"></circle>
              </svg>
              Start Battle
            </button>
            <button class="btn btn-secondary btn-lg" onclick="navigateTo('leaderboard')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                <path d="M4 22h16"></path>
                <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
              </svg>
              View Leaderboard
            </button>
          </div>

          <div class="home-stats">
            <div class="stat-card game-card">
              <p class="stat-value text-primary" id="home-total-points">0</p>
              <p class="stat-label">Total Points</p>
            </div>
            <div class="stat-card game-card">
              <p class="stat-value text-cyan">7</p>
              <p class="stat-label">Languages</p>
            </div>
            <div class="stat-card game-card">
              <p class="stat-value text-purple">21</p>
              <p class="stat-label">Total Levels</p>
            </div>
            <div class="stat-card game-card">
              <p class="stat-value text-orange">∞</p>
              <p class="stat-label">Fun</p>
            </div>
          </div>
        </div>

        <!-- Features Section -->
        <div class="home-section">
          <h3 class="section-title">FEATURES</h3>
          <div class="features-grid">
            <div class="feature-card game-card animate-slide-up" style="animation-delay: 0s">
              <div class="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14.5 17.5L3 6V3h3l11.5 11.5"></path>
                  <path d="M13 19l6-6"></path>
                  <path d="M16 16l4 4"></path>
                  <path d="M19 21l2-2"></path>
                </svg>
              </div>
              <h4>Battle Mode</h4>
              <p>Fight enemy bots by answering coding questions correctly</p>
            </div>
            <div class="feature-card game-card animate-slide-up" style="animation-delay: 0.1s">
              <div class="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <h4>7 Languages</h4>
              <p>C, C++, Python, Java, HTML, CSS, JavaScript</p>
            </div>
            <div class="feature-card game-card animate-slide-up" style="animation-delay: 0.2s">
              <div class="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h4>3 Difficulty Levels</h4>
              <p>Easy, Medium, Hard - earn more points at higher levels</p>
            </div>
            <div class="feature-card game-card animate-slide-up" style="animation-delay: 0.3s">
              <div class="feature-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
              </div>
              <h4>Leaderboard</h4>
              <p>Compete with other students for the top ranks</p>
            </div>
          </div>
        </div>

        <!-- How to Play Section -->
        <div class="home-section">
          <h3 class="section-title">HOW TO PLAY</h3>
          <div class="rules-card game-card">
            <div class="rules-grid">
              <div class="rule-item animate-slide-up" style="animation-delay: 0s">
                <span class="rule-icon">🎯</span>
                <p>Select a language and difficulty level to start</p>
              </div>
              <div class="rule-item animate-slide-up" style="animation-delay: 0.1s">
                <span class="rule-icon">🤖</span>
                <p>Enemy bot will ask you MCQ questions</p>
              </div>
              <div class="rule-item animate-slide-up" style="animation-delay: 0.2s">
                <span class="rule-icon">✅</span>
                <p>Correct answer = Enemy destroyed + Points earned</p>
              </div>
              <div class="rule-item animate-slide-up" style="animation-delay: 0.3s">
                <span class="rule-icon">❌</span>
                <p>Wrong answer = Hero takes damage</p>
              </div>
              <div class="rule-item animate-slide-up" style="animation-delay: 0.4s">
                <span class="rule-icon">🏆</span>
                <p>Complete all questions to win the battle</p>
              </div>
              <div class="rule-item animate-slide-up" style="animation-delay: 0.5s">
                <span class="rule-icon">📊</span>
                <p>Track your progress on the Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        <!-- BCA Info Section -->
        <div class="home-section">
          <div class="bca-card game-card">
            <div class="bca-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
              <h3>FOR BCA STUDENTS</h3>
            </div>
            <p>
              This platform is specifically designed for Bachelor of Computer Applications (BCA) students. 
              All questions are curated to match the BCA curriculum, helping you prepare for exams 
              while having fun. From basic syntax to advanced concepts - we've got you covered!
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Play Page -->
    <section id="page-play" class="page hidden">
      <div class="page-container">
        <!-- Subject Selection -->
        <div id="play-select-subject" class="play-section">
          <div class="play-header animate-slide-up">
            <h1 class="section-title neon-text">SELECT BATTLE</h1>
            <p>Choose a language and difficulty to start your coding battle</p>
          </div>

          <div class="subject-selection">
            <h2 class="play-subtitle">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              Select Language
            </h2>
            <div class="subjects-grid" id="subjects-grid">
              <!-- Filled by JS -->
            </div>
          </div>
        </div>

        <!-- Difficulty Selection -->
        <div id="play-select-difficulty" class="play-section hidden">
          <button class="back-btn" onclick="goBackToSubjects()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12,19 5,12 12,5"></polyline>
            </svg>
            Back to Languages
          </button>

          <div class="selected-subject-card game-card">
            <span class="selected-subject-icon" id="selected-subject-icon">🔷</span>
            <h2 id="selected-subject-name">C</h2>
          </div>

          <h2 class="play-subtitle">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
            </svg>
            Select Difficulty
          </h2>

          <div class="difficulty-list">
            <button class="difficulty-btn game-card" onclick="selectDifficulty('easy')">
              <div class="difficulty-info">
                <div class="difficulty-icon">⭐</div>
                <div>
                  <h3>Easy</h3>
                  <p>5 Questions</p>
                </div>
              </div>
              <span class="difficulty-points text-primary">10 pts/Q</span>
            </button>
            <button class="difficulty-btn game-card" onclick="selectDifficulty('medium')">
              <div class="difficulty-info">
                <div class="difficulty-icon">⭐⭐</div>
                <div>
                  <h3>Medium</h3>
                  <p>5 Questions</p>
                </div>
              </div>
              <span class="difficulty-points text-orange">20 pts/Q</span>
            </button>
            <button class="difficulty-btn game-card" onclick="selectDifficulty('hard')">
              <div class="difficulty-info">
                <div class="difficulty-icon">⭐⭐⭐</div>
                <div>
                  <h3>Hard</h3>
                  <p>5 Questions</p>
                </div>
              </div>
              <span class="difficulty-points text-red">30 pts/Q</span>
            </button>
          </div>
        </div>

        <!-- Battle Arena -->
        <div id="play-battle" class="play-section hidden">
          <button class="back-btn" onclick="resetGame()">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12,19 5,12 12,5"></polyline>
            </svg>
            Back to Subjects
          </button>

          <!-- Progress Bar -->
          <div class="battle-progress">
            <div class="battle-progress-info">
              <span>Question <span id="current-question-num">1</span> of <span id="total-questions">5</span></span>
              <span class="text-primary">Score: <span id="current-score">0</span></span>
            </div>
            <div class="progress-bar">
              <div class="progress-bar-fill" id="battle-progress-bar" style="width: 0%"></div>
            </div>
          </div>

          <!-- Battle Arena -->
          <div class="battle-arena">
            <div class="bot-container">
              <div id="hero-bot" class="hero-bot animate-float">
                <div class="bot-health-bar">
                  <div class="health-bar-bg">
                    <div class="health-bar-fill health-hero" id="hero-health-bar" style="width: 100%"></div>
                  </div>
                  <p class="bot-label">HERO</p>
                </div>
                <div class="bot-body hero-body">
                  <svg viewBox="0 0 100 120" class="bot-svg hero-glow">
                    <circle cx="50" cy="8" r="5" class="hero-fill" />
                    <rect x="48" y="8" width="4" height="12" class="hero-fill-secondary" />
                    <rect x="20" y="20" width="60" height="40" rx="8" class="bot-head hero-stroke" />
                    <circle cx="35" cy="40" r="8" class="hero-fill"><animate attributeName="r" values="8;6;8" dur="2s" repeatCount="indefinite" /></circle>
                    <circle cx="65" cy="40" r="8" class="hero-fill"><animate attributeName="r" values="8;6;8" dur="2s" repeatCount="indefinite" /></circle>
                    <circle cx="35" cy="40" r="4" class="hero-fill-secondary" />
                    <circle cx="65" cy="40" r="4" class="hero-fill-secondary" />
                    <rect x="35" y="50" width="30" height="4" rx="2" class="hero-fill-secondary"><animate attributeName="width" values="30;20;30" dur="1s" repeatCount="indefinite" /></rect>
                    <rect x="25" y="65" width="50" height="45" rx="5" class="bot-head hero-stroke" />
                    <circle cx="50" cy="82" r="10" class="hero-fill-glow"><animate attributeName="opacity" values="0.5;1;0.5" dur="1.5s" repeatCount="indefinite" /></circle>
                    <circle cx="50" cy="82" r="6" class="hero-fill-secondary" />
                    <rect x="10" y="70" width="12" height="30" rx="4" class="bot-head hero-stroke" />
                    <rect x="78" y="70" width="12" height="30" rx="4" class="bot-head hero-stroke" />
                    <rect x="30" y="110" width="12" height="10" rx="2" class="hero-fill" />
                    <rect x="58" y="110" width="12" height="10" rx="2" class="hero-fill" />
                  </svg>
                </div>
              </div>
            </div>

            <div class="vs-container">
              <span class="vs-text">VS</span>
              <div id="score-popup" class="score-popup hidden">+0</div>
            </div>

            <div class="bot-container">
              <div id="enemy-bot" class="enemy-bot animate-float" style="animation-delay: 0.5s">
                <div class="bot-health-bar">
                  <div class="health-bar-bg">
                    <div class="health-bar-fill health-enemy" id="enemy-health-bar" style="width: 100%"></div>
                  </div>
                  <p class="bot-label">ENEMY</p>
                </div>
                <div class="bot-body enemy-body">
                  <svg viewBox="0 0 100 120" class="bot-svg enemy-glow">
                    <polygon points="25,25 15,5 30,20" class="enemy-fill" />
                    <polygon points="75,25 85,5 70,20" class="enemy-fill" />
                    <rect x="20" y="20" width="60" height="40" rx="5" class="bot-head enemy-stroke" />
                    <path d="M25 35 L45 42 L25 45 Z" class="enemy-fill"><animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" /></path>
                    <path d="M75 35 L55 42 L75 45 Z" class="enemy-fill"><animate attributeName="opacity" values="1;0.5;1" dur="0.5s" repeatCount="indefinite" /></path>
                    <circle cx="35" cy="40" r="5" class="enemy-fill-secondary" />
                    <circle cx="65" cy="40" r="5" class="enemy-fill-secondary" />
                    <path d="M30 52 L40 48 L50 52 L60 48 L70 52 L60 56 L50 52 L40 56 Z" class="enemy-fill" />
                    <rect x="25" y="65" width="50" height="45" rx="5" class="bot-head enemy-stroke" />
                    <polygon points="50,72 58,88 42,88" class="enemy-fill enemy-stroke-secondary"><animate attributeName="opacity" values="0.5;1;0.5" dur="0.8s" repeatCount="indefinite" /></polygon>
                    <text x="50" y="85" text-anchor="middle" class="enemy-text">!</text>
                    <path d="M10 70 L5 75 L10 80 L5 85 L10 90 L10 100 L22 100 L22 70 Z" class="bot-head enemy-stroke" />
                    <path d="M90 70 L95 75 L90 80 L95 85 L90 90 L90 100 L78 100 L78 70 Z" class="bot-head enemy-stroke" />
                    <rect x="30" y="110" width="12" height="10" rx="2" class="enemy-fill" />
                    <rect x="58" y="110" width="12" height="10" rx="2" class="enemy-fill" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Question Card -->
          <div id="question-card" class="question-card game-card">
            <div id="result-indicator" class="result-indicator hidden"></div>
            <h3 id="question-text" class="question-text">Loading question...</h3>
            <div id="options-grid" class="options-grid">
              <!-- Filled by JS -->
            </div>
          </div>
        </div>

        <!-- Battle Complete -->
        <div id="play-complete" class="play-section hidden">
          <div class="complete-container animate-slide-up">
            <span id="complete-emoji" class="complete-emoji">🏆</span>
            <h2 class="section-title neon-text">BATTLE COMPLETE!</h2>
            <p class="complete-score">
              <span id="final-score">0</span> / <span id="max-score">0</span>
            </p>
            <p id="complete-message" class="complete-message">Excellent! You are a coding master!</p>
            <div class="complete-actions">
              <button class="btn btn-secondary" onclick="resetGame()">Back to Subjects</button>
              <button class="btn btn-primary" onclick="playAgain()">Play Again</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Dashboard Page -->
    <section id="page-dashboard" class="page hidden">
      <div class="page-container">
        <div class="dashboard-header animate-slide-up">
          <h1 class="section-title neon-text">DASHBOARD</h1>
          <p>Track your coding journey</p>
        </div>

        <!-- Profile Card -->
        <div class="profile-card game-card animate-slide-up">
          <div class="profile-avatar" id="dashboard-avatar" onclick="showAvatarSelector()" title="Click to change avatar">🤖</div>
          <div class="profile-info">
            <h2 id="dashboard-username" onclick="editUsername()" style="cursor: pointer;" title="Click to edit username">Player</h2>
            <p id="dashboard-email">player@email.com</p>
            <div class="profile-badges">
              <span class="badge badge-orange">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                  <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                  <path d="M4 22h16"></path>
                  <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                </svg>
                Rank #<span id="dashboard-rank">1</span>
              </span>
              <span class="badge badge-primary">
                ⚡ <span id="dashboard-points">0</span> pts
              </span>
            </div>
            <button class="btn btn-danger btn-sm" onclick="deleteAccount()" style="margin-top: 10px;">
              Delete Account
            </button>
          </div>
        </div>

        <!-- Avatar Selector Modal -->
        <div id="avatar-modal" class="modal hidden">
          <div class="modal-content game-card">
            <h3>Choose Your Avatar</h3>
            <div class="avatar-grid">
              <div class="avatar-option" onclick="selectAvatar('🤖')">🤖</div>
              <div class="avatar-option" onclick="selectAvatar('👨🏻')">👨🏻</div>
              <div class="avatar-option" onclick="selectAvatar('👸🏻')">👸🏻</div>
              <div class="avatar-option" onclick="selectAvatar('🫅🏻')">🫅🏻</div>
              <div class="avatar-option" onclick="selectAvatar('👨🏻‍🎓')">👨🏻‍🎓</div>
              <div class="avatar-option" onclick="selectAvatar('👨🏻‍💼')">👨🏻‍💼</div>
              <div class="avatar-option" onclick="selectAvatar('👩🏻‍💼')">👩🏻‍💼</div>
              <div class="avatar-option" onclick="selectAvatar('🥷🏻')">🥷🏻</div>
              <div class="avatar-option" onclick="selectAvatar('👑')">👑</div>
            </div>
            <button class="btn btn-secondary" onclick="closeAvatarSelector()">Cancel</button>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="dashboard-stats">
          <div class="stat-card game-card animate-slide-up" style="animation-delay: 0.1s">
            <p class="stat-value text-primary" id="stat-total-points">0</p>
            <p class="stat-label">Total Points</p>
          </div>
          <div class="stat-card game-card animate-slide-up" style="animation-delay: 0.2s">
            <p class="stat-value text-cyan" id="stat-rank">#1</p>
            <p class="stat-label">Global Rank</p>
          </div>
          <div class="stat-card game-card animate-slide-up" style="animation-delay: 0.3s">
            <p class="stat-value text-purple" id="stat-battles">0</p>
            <p class="stat-label">Battles Won</p>
          </div>
          <div class="stat-card game-card animate-slide-up" style="animation-delay: 0.4s">
            <p class="stat-value text-orange" id="stat-completion">0%</p>
            <p class="stat-label">Completion</p>
          </div>
        </div>

        <!-- Language Progress -->
        <div class="dashboard-section">
          <h3 class="dashboard-section-title">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="10"></circle>
              <circle cx="12" cy="12" r="6"></circle>
              <circle cx="12" cy="12" r="2"></circle>
            </svg>
            Language Progress
          </h3>
          <div class="progress-grid" id="progress-grid">
            <!-- Filled by JS -->
          </div>
        </div>

        <!-- Friends Leaderboard -->
        <div class="dashboard-section">
          <h3 class="dashboard-section-title text-purple">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
            </svg>
            Friends Leaderboard
          </h3>
          <div class="friends-controls">
            <input type="text" id="friend-search" class="form-input" placeholder="Search username to add friend...">
            <button class="btn btn-primary" onclick="addFriend()">Add Friend</button>
          </div>
          <div class="friends-list game-card" id="friends-list">
            <!-- Filled by JS -->
          </div>
        </div>
      </div>
    </section>

    <!-- Leaderboard Page -->
    <section id="page-leaderboard" class="page hidden">
      <div class="page-container">
        <div class="leaderboard-header animate-slide-up">
          <div class="leaderboard-title">
            <svg class="trophy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
              <path d="M4 22h16"></path>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
            </svg>
            <h1 class="section-title neon-text">LEADERBOARD</h1>
          </div>
          <p>Top 25 CodeQuest Champions</p>
        </div>

        <!-- Top 3 Podium -->
        <div class="podium animate-slide-up">
          <div class="podium-item podium-2" id="podium-2">
            <span class="podium-avatar">🥈</span>
            <div class="podium-bar podium-bar-2">
              <p class="podium-name">Player 2</p>
              <p class="podium-points">0</p>
            </div>
            <div class="podium-rank-label">2ND</div>
          </div>
          <div class="podium-item podium-1" id="podium-1">
            <div class="crown">👑</div>
            <span class="podium-avatar">🥇</span>
            <div class="podium-bar podium-bar-1">
              <p class="podium-name">Player 1</p>
              <p class="podium-points">0</p>
            </div>
            <div class="podium-rank-label podium-rank-1">1ST</div>
          </div>
          <div class="podium-item podium-3" id="podium-3">
            <span class="podium-avatar">🥉</span>
            <div class="podium-bar podium-bar-3">
              <p class="podium-name">Player 3</p>
              <p class="podium-points">0</p>
            </div>
            <div class="podium-rank-label">3RD</div>
          </div>
        </div>

        <!-- User Position (if not in top 25) -->
        <div id="user-position" class="user-position game-card hidden">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
            <polyline points="17 6 23 6 23 12"></polyline>
          </svg>
          <div class="user-position-info">
            <p class="user-position-rank">Your Position: #<span id="user-current-rank">26</span></p>
            <p class="user-position-needed">You need <span id="points-needed">100</span> more points to enter Top 25!</p>
          </div>
          <div class="user-position-stats">
            <span id="user-position-avatar">🤖</span>
            <p id="user-position-points">0</p>
          </div>
        </div>

        <!-- Leaderboard List -->
        <div class="leaderboard-list game-card" id="leaderboard-list">
          <!-- Filled by JS -->
        </div>

        <!-- Motivation Message -->
        <p class="leaderboard-motivation">Keep battling and earning points to climb the leaderboard! 🚀</p>
      </div>
    </section>
  </main>

  <!-- Chatbot -->
  <div id="chatbot-container">
    <button id="chatbot-btn" class="chatbot-btn animate-pulse-glow" onclick="toggleChatbot()">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </svg>
    </button>

    <div id="chatbot-window" class="chatbot-window hidden">
      <div class="chatbot-header">
        <div class="chatbot-header-info">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="11" width="18" height="10" rx="2"></rect>
            <circle cx="12" cy="5" r="2"></circle>
            <path d="M12 7v4"></path>
            <line x1="8" y1="16" x2="8" y2="16"></line>
            <line x1="16" y1="16" x2="16" y2="16"></line>
          </svg>
          <div>
            <h3>CodeQuest Guide</h3>
            <p>Always here to help!</p>
          </div>
        </div>
        <button class="chatbot-close" onclick="toggleChatbot()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <div id="chatbot-messages" class="chatbot-messages">
        <div class="chat-message bot-message">
          Hey there, coder! 🎮 I'm your CodeQuest guide. Ask me about:<br><br>
          • How to play the game<br>
          • Coding tips & tricks<br>
          • Understanding questions<br><br>
          Let's conquer some code!
        </div>
      </div>

      <div class="chatbot-input-container">
        <input type="text" id="chatbot-input" class="chatbot-input" placeholder="Ask me anything..." onkeypress="handleChatKeypress(event)">
        <button class="chatbot-send" onclick="sendChatMessage()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
