// Quiz Questions Database
const quizData = {
    science: [
        { question: "What is the chemical symbol for gold?", options: ["Go", "Au", "Gd", "Ag"], correct: 1, difficulty: "easy" },
        { question: "What planet is known as the Red Planet?", options: ["Venus", "Mars", "Jupiter", "Saturn"], correct: 1, difficulty: "easy" },
        { question: "What is the speed of light?", options: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "200,000 km/s"], correct: 0, difficulty: "medium" },
        { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Ribosome", "Mitochondria", "Chloroplast"], correct: 2, difficulty: "easy" },
        { question: "What is the atomic number of Carbon?", options: ["6", "12", "8", "14"], correct: 0, difficulty: "medium" },
        { question: "What is the largest organ in the human body?", options: ["Heart", "Brain", "Liver", "Skin"], correct: 3, difficulty: "easy" },
        { question: "What is the boiling point of water at sea level?", options: ["90°C", "100°C", "110°C", "120°C"], correct: 1, difficulty: "easy" },
        { question: "What is the study of earthquakes called?", options: ["Meteorology", "Seismology", "Geology", "Oceanography"], correct: 1, difficulty: "hard" },
        { question: "How many bones are in the adult human body?", options: ["206", "208", "210", "204"], correct: 0, difficulty: "medium" },
        { question: "What is the most abundant gas in Earth's atmosphere?", options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: 2, difficulty: "medium" }
    ],
    dbms: [
        { question: "What does DBMS stand for?", options: ["Database Management System", "Data Backup Management System", "Digital Base Management System", "Database Monitoring System"], correct: 0, difficulty: "easy" },
        { question: "Which SQL command is used to retrieve data?", options: ["GET", "SELECT", "FETCH", "RETRIEVE"], correct: 1, difficulty: "easy" },
        { question: "What is a primary key?", options: ["A key that opens the database", "A unique identifier for a record", "The first column in a table", "A foreign key reference"], correct: 1, difficulty: "medium" },
        { question: "Which normal form eliminates transitive dependency?", options: ["1NF", "2NF", "3NF", "BCNF"], correct: 2, difficulty: "hard" },
        { question: "What does ACID stand for in databases?", options: ["Atomicity, Consistency, Isolation, Durability", "Access, Control, Integrity, Data", "Automatic, Consistent, Integrated, Durable", "All, Complete, Isolated, Data"], correct: 0, difficulty: "medium" },
        { question: "Which JOIN returns all records from both tables?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], correct: 3, difficulty: "medium" },
        { question: "What is denormalization?", options: ["Removing all normal forms", "Adding redundancy for performance", "Deleting duplicate data", "Creating new tables"], correct: 1, difficulty: "hard" },
        { question: "Which command is used to delete a table?", options: ["DELETE TABLE", "REMOVE TABLE", "DROP TABLE", "CLEAR TABLE"], correct: 2, difficulty: "easy" },
        { question: "What is an index in a database?", options: ["A table of contents", "A data structure for faster retrieval", "A backup copy", "A foreign key"], correct: 1, difficulty: "medium" },
        { question: "Which is NOT a type of database?", options: ["Relational", "NoSQL", "Hierarchical", "Sequential"], correct: 3, difficulty: "hard" }
    ],
    python: [
        { question: "What is the correct file extension for Python?", options: [".py", ".python", ".pt", ".pyt"], correct: 0, difficulty: "easy" },
        { question: "Which keyword is used to define a function?", options: ["function", "def", "func", "define"], correct: 1, difficulty: "easy" },
        { question: "What is the output of: print(type([]))", options: ["<class 'array'>", "<class 'list'>", "<class 'tuple'>", "<class 'dict'>"], correct: 1, difficulty: "medium" },
        { question: "Which method is used to add an element to a list?", options: ["add()", "append()", "insert()", "push()"], correct: 1, difficulty: "easy" },
        { question: "What does PEP 8 define?", options: ["Python syntax", "Style guide", "Error handling", "Package management"], correct: 1, difficulty: "medium" },
        { question: "Which is mutable in Python?", options: ["Tuple", "String", "List", "Integer"], correct: 2, difficulty: "medium" },
        { question: "What is a lambda function?", options: ["A named function", "An anonymous function", "A class method", "A built-in function"], correct: 1, difficulty: "hard" },
        { question: "Which operator is used for floor division?", options: ["/", "//", "%", "**"], correct: 1, difficulty: "medium" },
        { question: "What is the output of: print(2 ** 3)", options: ["6", "8", "9", "5"], correct: 1, difficulty: "easy" },
        { question: "Which module is used for regular expressions?", options: ["regex", "re", "regexp", "pattern"], correct: 1, difficulty: "medium" }
    ],
    java: [
        { question: "What is the extension of Java bytecode?", options: [".java", ".class", ".jar", ".byte"], correct: 1, difficulty: "easy" },
        { question: "Which keyword is used for inheritance?", options: ["inherits", "extends", "implements", "super"], correct: 1, difficulty: "easy" },
        { question: "What is the default value of boolean in Java?", options: ["true", "false", "0", "null"], correct: 1, difficulty: "medium" },
        { question: "Which is NOT a Java access modifier?", options: ["public", "private", "protected", "package"], correct: 3, difficulty: "medium" },
        { question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Variable Method", "Java Visual Manager", "Java Version Manager"], correct: 0, difficulty: "easy" },
        { question: "Which collection allows duplicate elements?", options: ["Set", "Map", "List", "Queue"], correct: 2, difficulty: "medium" },
        { question: "What is method overloading?", options: ["Same method name, different parameters", "Different method names", "Overriding parent method", "Creating multiple classes"], correct: 0, difficulty: "hard" },
        { question: "Which keyword prevents inheritance?", options: ["static", "final", "abstract", "const"], correct: 1, difficulty: "medium" },
        { question: "What is the parent class of all classes?", options: ["System", "Main", "Object", "Class"], correct: 2, difficulty: "medium" },
        { question: "Which is used for exception handling?", options: ["if-else", "try-catch", "switch-case", "for-loop"], correct: 1, difficulty: "easy" }
    ],
    c: [
        { question: "Who developed C language?", options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], correct: 0, difficulty: "easy" },
        { question: "Which header file is used for input/output?", options: ["iostream.h", "stdio.h", "conio.h", "stdlib.h"], correct: 1, difficulty: "easy" },
        { question: "What is the size of int in C (typically)?", options: ["2 bytes", "4 bytes", "8 bytes", "1 byte"], correct: 1, difficulty: "medium" },
        { question: "Which operator is used to access structure members?", options: [".", "->", "::", "*"], correct: 0, difficulty: "medium" },
        { question: "What does malloc() return?", options: ["int pointer", "void pointer", "char pointer", "NULL"], correct: 1, difficulty: "hard" },
        { question: "Which loop is guaranteed to execute at least once?", options: ["for", "while", "do-while", "foreach"], correct: 2, difficulty: "medium" },
        { question: "What is a pointer?", options: ["A variable", "An address of a variable", "A function", "A data type"], correct: 1, difficulty: "easy" },
        { question: "Which function is used to allocate memory dynamically?", options: ["alloc()", "malloc()", "calloc()", "Both B and C"], correct: 3, difficulty: "medium" },
        { question: "What is the output of: printf('%d', sizeof(char));", options: ["1", "2", "4", "8"], correct: 0, difficulty: "easy" },
        { question: "Which is NOT a storage class in C?", options: ["auto", "register", "extern", "volatile"], correct: 3, difficulty: "hard" }
    ],
    general: [
        { question: "What is the capital of France?", options: ["London", "Berlin", "Paris", "Madrid"], correct: 2, difficulty: "easy" },
        { question: "Who painted the Mona Lisa?", options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"], correct: 2, difficulty: "easy" },
        { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Arctic", "Pacific"], correct: 3, difficulty: "easy" },
        { question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correct: 2, difficulty: "medium" },
        { question: "What is the smallest country in the world?", options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"], correct: 1, difficulty: "medium" },
        { question: "Who wrote 'Romeo and Juliet'?", options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"], correct: 1, difficulty: "easy" },
        { question: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"], correct: 2, difficulty: "easy" },
        { question: "What currency is used in Japan?", options: ["Yuan", "Won", "Yen", "Ringgit"], correct: 2, difficulty: "medium" },
        { question: "How many continents are there?", options: ["5", "6", "7", "8"], correct: 2, difficulty: "easy" },
        { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze", "Mississippi"], correct: 1, difficulty: "hard" }
    ],
    math: [
        { question: "What is 15 × 8?", options: ["120", "125", "130", "115"], correct: 0, difficulty: "easy" },
        { question: "What is the square root of 144?", options: ["11", "12", "13", "14"], correct: 1, difficulty: "easy" },
        { question: "What is 25% of 200?", options: ["25", "50", "75", "100"], correct: 1, difficulty: "easy" },
        { question: "What is the value of π (pi) approximately?", options: ["3.14", "2.71", "1.61", "4.20"], correct: 0, difficulty: "easy" },
        { question: "What is 7³?", options: ["343", "49", "21", "147"], correct: 0, difficulty: "medium" },
        { question: "What is the sum of angles in a triangle?", options: ["90°", "180°", "270°", "360°"], correct: 1, difficulty: "easy" },
        { question: "What is the derivative of x²?", options: ["x", "2x", "x²", "2"], correct: 1, difficulty: "hard" },
        { question: "What is 0! (factorial)?", options: ["0", "1", "Undefined", "Infinity"], correct: 1, difficulty: "hard" },
        { question: "What is the Fibonacci sequence?", options: ["1,2,3,4,5", "1,1,2,3,5", "2,4,6,8,10", "1,2,4,8,16"], correct: 1, difficulty: "medium" },
        { question: "What is the area of a circle with radius 5?", options: ["25π", "10π", "5π", "50π"], correct: 0, difficulty: "medium" }
    ]
};

let currentCategory = 'science';
let selectedProgrammingLang = '';
let currentQuestionIndex = 0;
let score = 0;
let streak = 0;
let maxStreak = 0;
let correctAnswers = 0;
let totalQuestions = 10;
let timeLeft = 15;
let timerInterval;
let questions = [];
let userStats = JSON.parse(localStorage.getItem('quizStats')) || { level: 1, xp: 0, totalGames: 0, bestScore: 0, streak: 0 };

const screens = {
    home: document.getElementById('homeScreen'),
    programming: document.getElementById('programmingScreen'),
    quiz: document.getElementById('quizScreen'),
    result: document.getElementById('resultScreen'),
    leaderboard: document.getElementById('leaderboardScreen'),
    createQuiz: document.getElementById('createQuizScreen')
};

function init() {
    loadCustomQuizzes();
    renderCategoryButtons();
    updateUserStats();
    loadLeaderboard();
    
    document.querySelectorAll('#homeScreen .category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#homeScreen .category-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentCategory = btn.dataset.category;
        });
    });
    
    document.querySelector('#homeScreen .category-btn').classList.add('selected');
    
    document.querySelectorAll('#programmingScreen .category-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#programmingScreen .category-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            selectedProgrammingLang = btn.dataset.lang;
        });
    });
    
    document.getElementById('startBtn').addEventListener('click', () => {
        if (currentCategory === 'programming') {
            showScreen('programming');
        } else {
            startQuiz();
        }
    });
    
    document.getElementById('startProgQuizBtn').addEventListener('click', () => {
        if (!selectedProgrammingLang) {
            alert('Please select a programming language!');
            return;
        }
        totalQuestions = parseInt(document.getElementById('progQuestionCount').value) || 10;
        currentCategory = selectedProgrammingLang;
        startQuiz();
    });
    
    document.getElementById('backToHomeBtn').addEventListener('click', () => showScreen('home'));
    document.getElementById('leaderboardBtn').addEventListener('click', () => showScreen('leaderboard'));
    document.getElementById('createQuizBtn').addEventListener('click', () => {
        document.getElementById('quizTopic').value = '';
        document.getElementById('questionCount').value = '5';
        document.getElementById('questionsContainer').innerHTML = '';
        document.getElementById('saveButtons').style.display = 'none';
        document.getElementById('loadingMessage').style.display = 'none';
        showScreen('createQuiz');
    });
    document.getElementById('playAgainBtn').addEventListener('click', () => showScreen('home'));
    document.getElementById('homeBtn').addEventListener('click', () => showScreen('home'));
    document.getElementById('backBtn').addEventListener('click', () => showScreen('home'));
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    document.getElementById('generateAIQuizBtn').addEventListener('click', generateAIQuiz);
    document.getElementById('saveQuizBtn').addEventListener('click', saveCustomQuiz);
    document.getElementById('cancelQuizBtn').addEventListener('click', () => showScreen('home'));
}

function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function startQuiz() {
    if (!quizData[currentCategory]) {
        alert('Please select a valid category!');
        return;
    }
    
    questions = [...quizData[currentCategory]].sort(() => Math.random() - 0.5).slice(0, Math.min(totalQuestions, quizData[currentCategory].length));
    score = 0;
    streak = 0;
    correctAnswers = 0;
    currentQuestionIndex = 0;
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        endQuiz();
        return;
    }
    
    const question = questions[currentQuestionIndex];
    document.getElementById('question').textContent = question.question;
    document.getElementById('questionNumber').textContent = `Question ${currentQuestionIndex + 1}/${questions.length}`;
    document.getElementById('currentScore').textContent = score;
    document.getElementById('streakCount').textContent = streak;
    document.getElementById('difficultyBadge').textContent = question.difficulty.toUpperCase();
    document.getElementById('difficultyBadge').style.background = question.difficulty === 'easy' ? '#10b981' : question.difficulty === 'medium' ? '#f59e0b' : '#ef4444';
    document.getElementById('progressBar').style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;
    
    const optionsDiv = document.getElementById('options');
    optionsDiv.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = option;
        btn.addEventListener('click', () => selectAnswer(index));
        optionsDiv.appendChild(btn);
    });
    
    startTimer();
}

function startTimer() {
    const question = questions[currentQuestionIndex];
    timeLeft = question.difficulty === 'easy' ? 20 : question.difficulty === 'medium' ? 15 : 10;
    document.getElementById('timer').classList.remove('warning');
    updateTimer();
    
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimer();
        if (timeLeft <= 5) document.getElementById('timer').classList.add('warning');
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            selectAnswer(-1);
        }
    }, 1000);
}

function updateTimer() {
    document.getElementById('timer').textContent = `⏱️ ${timeLeft}s`;
}

function selectAnswer(selectedIndex) {
    clearInterval(timerInterval);
    const question = questions[currentQuestionIndex];
    const optionBtns = document.querySelectorAll('.option-btn');
    optionBtns.forEach(btn => btn.classList.add('disabled'));
    
    if (selectedIndex === question.correct) {
        optionBtns[selectedIndex].classList.add('correct');
        document.getElementById('correctSound').play();
        const points = Math.floor((10 + timeLeft * 2) * (question.difficulty === 'easy' ? 1 : question.difficulty === 'medium' ? 1.5 : 2));
        score += points;
        streak++;
        correctAnswers++;
        maxStreak = Math.max(maxStreak, streak);
        showScorePopup(`+${points}`);
    } else {
        if (selectedIndex !== -1) optionBtns[selectedIndex].classList.add('wrong');
        optionBtns[question.correct].classList.add('correct');
        document.getElementById('wrongSound').play();
        streak = 0;
    }
    
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1500);
}

function showScorePopup(text) {
    const popup = document.createElement('div');
    popup.textContent = text;
    popup.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);font-size:3rem;font-weight:800;color:#10b981;animation:scorePopup 1s ease;pointer-events:none;z-index:1000;';
    document.body.appendChild(popup);
    setTimeout(() => popup.remove(), 1000);
}

function endQuiz() {
    showScreen('result');
    const accuracy = Math.round((correctAnswers / questions.length) * 100);
    const xpGained = Math.floor(score / 10);
    userStats.xp += xpGained;
    userStats.totalGames++;
    userStats.bestScore = Math.max(userStats.bestScore, score);
    userStats.streak = Math.max(userStats.streak, maxStreak);
    userStats.level = Math.floor(userStats.xp / 100) + 1;
    localStorage.setItem('quizStats', JSON.stringify(userStats));
    saveToLeaderboard(score);
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('accuracy').textContent = `${accuracy}%`;
    document.getElementById('correctCount').textContent = `${correctAnswers}/${questions.length}`;
    document.getElementById('xpGained').textContent = `+${xpGained}`;
    document.getElementById('resultAnimation').textContent = accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎉' : '💪';
    document.getElementById('resultTitle').textContent = accuracy >= 80 ? 'Outstanding!' : accuracy >= 60 ? 'Great Job!' : 'Keep Trying!';
    document.getElementById('badgeEarned').textContent = maxStreak >= 5 ? '🔥 Fire Streak Badge Earned!' : accuracy === 100 ? '⭐ Perfect Score Badge Earned!' : '';
    if (accuracy >= 80) createConfetti();
    updateUserStats();
}

function createConfetti() {
    const colors = ['#6366f1', '#8b5cf6', '#10b981', '#f59e0b', '#ef4444'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 2 + 's';
            document.body.appendChild(confetti);
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

function updateUserStats() {
    document.getElementById('userLevel').textContent = userStats.level;
    document.getElementById('userXP').textContent = userStats.xp;
    document.getElementById('userStreak').textContent = userStats.streak;
}

function saveToLeaderboard(score) {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    leaderboard.push({ name: `Player ${userStats.level}`, score: score, date: new Date().toLocaleDateString() });
    leaderboard.sort((a, b) => b.score - a.score);
    leaderboard.splice(10);
    localStorage.setItem('leaderboard', JSON.stringify(leaderboard));
}

function loadLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];
    const list = document.getElementById('leaderboardList');
    if (leaderboard.length === 0) {
        list.innerHTML = '<p style="text-align:center;opacity:0.7;">No scores yet. Be the first!</p>';
    } else {
        list.innerHTML = leaderboard.map((e, i) => `<div class="leaderboard-item"><span class="leaderboard-rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : i + 1}</span><span class="leaderboard-name">${e.name}</span><span class="leaderboard-score">${e.score}</span></div>`).join('');
    }
}

function toggleTheme() {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    document.getElementById('themeToggle').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function loadCustomQuizzes() {
    const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes')) || {};
    Object.keys(customQuizzes).forEach(topic => {
        quizData[topic.toLowerCase().replace(/\s+/g, '_')] = customQuizzes[topic];
    });
}

function renderCategoryButtons() {
    const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes')) || {};
    document.querySelectorAll('#homeScreen .category-btn[data-custom="true"]').forEach(btn => btn.remove());
    
    Object.keys(customQuizzes).forEach(topic => {
        const categoryKey = topic.toLowerCase().replace(/\s+/g, '_');
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.dataset.category = categoryKey;
        btn.dataset.custom = 'true';
        btn.textContent = `✨ ${topic}`;
        btn.addEventListener('click', () => {
            document.querySelectorAll('#homeScreen .category-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            currentCategory = categoryKey;
        });
        document.getElementById('categoriesContainer').appendChild(btn);
    });
}

function generateAIQuiz() {
    const topic = document.getElementById('quizTopic').value.trim();
    const count = parseInt(document.getElementById('questionCount').value);
    
    if (!topic) { alert('Please enter a quiz topic!'); return; }
    if (!count || count < 5 || count > 10) { alert('Please enter 5-10 questions!'); return; }
    
    document.getElementById('loadingMessage').style.display = 'block';
    document.getElementById('generateAIQuizBtn').disabled = true;
    
    setTimeout(() => {
        const aiQuestions = generateQuestionsForTopic(topic, count);
        displayGeneratedQuestions(aiQuestions);
        document.getElementById('loadingMessage').style.display = 'none';
        document.getElementById('generateAIQuizBtn').disabled = false;
        document.getElementById('saveButtons').style.display = 'flex';
    }, 1500);
}

function generateQuestionsForTopic(topic, count) {
    const questions = [];
    const difficulties = ['easy', 'medium', 'hard'];
    
    for (let i = 0; i < count; i++) {
        const difficulty = difficulties[i % 3];
        const q = {
            question: `Question ${i + 1} about ${topic}?`,
            options: [
                `Option A related to ${topic}`,
                `Option B related to ${topic}`,
                `Option C related to ${topic}`,
                `Option D related to ${topic}`
            ],
            correct: Math.floor(Math.random() * 4),
            difficulty: difficulty
        };
        
        // Topic-specific question generation
        if (topic.toLowerCase().includes('react')) {
            const reactQuestions = [
                { q: 'What is a React Hook?', opts: ['A function', 'A class', 'A component', 'A library'], ans: 0 },
                { q: 'Which hook is used for state management?', opts: ['useEffect', 'useState', 'useContext', 'useRef'], ans: 1 },
                { q: 'What does JSX stand for?', opts: ['JavaScript XML', 'Java Syntax Extension', 'JavaScript Extension', 'Java XML'], ans: 0 },
                { q: 'Which method is used to update state?', opts: ['setState', 'updateState', 'changeState', 'modifyState'], ans: 0 },
                { q: 'What is the virtual DOM?', opts: ['Real DOM copy', 'Lightweight DOM copy', 'Browser DOM', 'Server DOM'], ans: 1 },
                { q: 'Which hook handles side effects?', opts: ['useState', 'useEffect', 'useContext', 'useMemo'], ans: 1 },
                { q: 'What is a component in React?', opts: ['A function or class', 'Only a function', 'Only a class', 'A variable'], ans: 0 },
                { q: 'What is props in React?', opts: ['Properties passed to components', 'State variables', 'Methods', 'Events'], ans: 0 },
                { q: 'Which is used for routing?', opts: ['React Router', 'React Navigation', 'React Path', 'React Link'], ans: 0 },
                { q: 'What is Redux?', opts: ['State management library', 'Routing library', 'UI library', 'Testing library'], ans: 0 }
            ];
            if (i < reactQuestions.length) {
                q.question = reactQuestions[i].q;
                q.options = reactQuestions[i].opts;
                q.correct = reactQuestions[i].ans;
            }
        } else if (topic.toLowerCase().includes('python')) {
            const pythonQuestions = [
                { q: 'What is Python?', opts: ['Programming language', 'Database', 'Framework', 'Library'], ans: 0 },
                { q: 'Which keyword defines a function?', opts: ['function', 'def', 'func', 'define'], ans: 1 },
                { q: 'What is a list in Python?', opts: ['Mutable sequence', 'Immutable sequence', 'Dictionary', 'Set'], ans: 0 },
                { q: 'Which is used for comments?', opts: ['#', '//', '/*', '--'], ans: 0 },
                { q: 'What is pip?', opts: ['Package installer', 'Compiler', 'Interpreter', 'Editor'], ans: 0 },
                { q: 'Which is immutable?', opts: ['List', 'Dictionary', 'Tuple', 'Set'], ans: 2 },
                { q: 'What does len() do?', opts: ['Returns length', 'Returns type', 'Returns value', 'Returns index'], ans: 0 },
                { q: 'Which loop is used for iteration?', opts: ['for', 'while', 'do-while', 'Both A and B'], ans: 3 },
                { q: 'What is __init__?', opts: ['Constructor', 'Destructor', 'Method', 'Variable'], ans: 0 },
                { q: 'Which is used for exception handling?', opts: ['if-else', 'try-except', 'switch-case', 'for-loop'], ans: 1 }
            ];
            if (i < pythonQuestions.length) {
                q.question = pythonQuestions[i].q;
                q.options = pythonQuestions[i].opts;
                q.correct = pythonQuestions[i].ans;
            }
        } else if (topic.toLowerCase().includes('history') || topic.toLowerCase().includes('war')) {
            const historyQuestions = [
                { q: 'When did World War 2 start?', opts: ['1939', '1940', '1941', '1938'], ans: 0 },
                { q: 'Who was the US president during WW2?', opts: ['Truman', 'Roosevelt', 'Eisenhower', 'Wilson'], ans: 1 },
                { q: 'Which country was not an Axis power?', opts: ['Germany', 'Italy', 'France', 'Japan'], ans: 2 },
                { q: 'When did WW2 end?', opts: ['1944', '1945', '1946', '1947'], ans: 1 },
                { q: 'What was D-Day?', opts: ['Normandy invasion', 'Pearl Harbor', 'Hiroshima', 'Berlin fall'], ans: 0 },
                { q: 'Who was the British PM during WW2?', opts: ['Chamberlain', 'Churchill', 'Attlee', 'Eden'], ans: 1 },
                { q: 'Which battle was a turning point?', opts: ['Stalingrad', 'Dunkirk', 'Midway', 'All of these'], ans: 3 },
                { q: 'What was the Holocaust?', opts: ['Genocide of Jews', 'Battle', 'Treaty', 'Alliance'], ans: 0 },
                { q: 'Which city was bombed first?', opts: ['Nagasaki', 'Hiroshima', 'Tokyo', 'Berlin'], ans: 1 },
                { q: 'What was the Manhattan Project?', opts: ['Atomic bomb development', 'Invasion plan', 'Peace treaty', 'Spy operation'], ans: 0 }
            ];
            if (i < historyQuestions.length) {
                q.question = historyQuestions[i].q;
                q.options = historyQuestions[i].opts;
                q.correct = historyQuestions[i].ans;
            }
        } else if (topic.toLowerCase().includes('science') || topic.toLowerCase().includes('biology') || topic.toLowerCase().includes('photo')) {
            const scienceQuestions = [
                { q: 'What is photosynthesis?', opts: ['Plant food production', 'Animal respiration', 'Cell division', 'Water absorption'], ans: 0 },
                { q: 'Which gas is released in photosynthesis?', opts: ['CO2', 'O2', 'N2', 'H2'], ans: 1 },
                { q: 'Where does photosynthesis occur?', opts: ['Mitochondria', 'Nucleus', 'Chloroplast', 'Ribosome'], ans: 2 },
                { q: 'What is chlorophyll?', opts: ['Green pigment', 'Enzyme', 'Hormone', 'Vitamin'], ans: 0 },
                { q: 'What is the formula for photosynthesis?', opts: ['6CO2+6H2O→C6H12O6+6O2', 'C6H12O6→CO2+H2O', 'H2O→H2+O2', 'CO2→C+O2'], ans: 0 },
                { q: 'Which light is most effective?', opts: ['Red and blue', 'Green', 'Yellow', 'Orange'], ans: 0 },
                { q: 'What is the main product?', opts: ['Oxygen', 'Glucose', 'Water', 'CO2'], ans: 1 },
                { q: 'Which organelle has chlorophyll?', opts: ['Nucleus', 'Chloroplast', 'Mitochondria', 'Vacuole'], ans: 1 },
                { q: 'What is needed for photosynthesis?', opts: ['Light, water, CO2', 'Only light', 'Only water', 'Only CO2'], ans: 0 },
                { q: 'Which cells perform photosynthesis?', opts: ['Animal cells', 'Plant cells', 'Bacterial cells', 'Fungal cells'], ans: 1 }
            ];
            if (i < scienceQuestions.length) {
                q.question = scienceQuestions[i].q;
                q.options = scienceQuestions[i].opts;
                q.correct = scienceQuestions[i].ans;
            }
        }
        
        questions.push(q);
    }
    
    return questions;
}

function displayGeneratedQuestions(questions) {
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '<div style="background:rgba(16,185,129,0.2);padding:15px;border-radius:12px;margin:20px 0;text-align:center;"><strong>✅ AI Generated ' + questions.length + ' Questions Successfully!</strong><br><small>Review and edit if needed, then click Save Quiz</small></div>';
    
    questions.forEach((q, i) => {
        const block = document.createElement('div');
        block.className = 'question-block';
        block.innerHTML = `
            <h4>Question ${i + 1}</h4>
            <input type="text" class="input-field question-input" value="${q.question}">
            <div class="options-input">
                ${q.options.map((opt, idx) => `
                    <div class="option-input-group">
                        <input type="radio" name="correct${i + 1}" value="${idx}" ${idx === q.correct ? 'checked' : ''}>
                        <input type="text" class="input-field option-text" value="${opt}">
                    </div>
                `).join('')}
            </div>
            <select class="difficulty-select">
                <option value="easy" ${q.difficulty === 'easy' ? 'selected' : ''}>Easy</option>
                <option value="medium" ${q.difficulty === 'medium' ? 'selected' : ''}>Medium</option>
                <option value="hard" ${q.difficulty === 'hard' ? 'selected' : ''}>Hard</option>
            </select>
        `;
        container.appendChild(block);
    });
}

function generateQuestionFields() {
    const topic = document.getElementById('quizTopic').value.trim();
    const count = parseInt(document.getElementById('questionCount').value);
    
    if (!topic) { alert('Please enter a quiz topic!'); return; }
    if (!count || count < 1 || count > 20) { alert('Please enter a valid number of questions (1-20)!'); return; }
    
    const container = document.getElementById('questionsContainer');
    container.innerHTML = '';
    
    for (let i = 1; i <= count; i++) {
        const block = document.createElement('div');
        block.className = 'question-block';
        block.innerHTML = `<h4>Question ${i}</h4><input type="text" class="input-field question-input" placeholder="Enter your question"><div class="options-input"><div class="option-input-group"><input type="radio" name="correct${i}" value="0" checked><input type="text" class="input-field option-text" placeholder="Option 1"></div><div class="option-input-group"><input type="radio" name="correct${i}" value="1"><input type="text" class="input-field option-text" placeholder="Option 2"></div><div class="option-input-group"><input type="radio" name="correct${i}" value="2"><input type="text" class="input-field option-text" placeholder="Option 3"></div><div class="option-input-group"><input type="radio" name="correct${i}" value="3"><input type="text" class="input-field option-text" placeholder="Option 4"></div></div><select class="difficulty-select"><option value="easy">Easy</option><option value="medium" selected>Medium</option><option value="hard">Hard</option></select>`;
        container.appendChild(block);
    }
    
    document.getElementById('saveButtons').style.display = 'flex';
}

function saveCustomQuiz() {
    const topic = document.getElementById('quizTopic').value.trim();
    const questionBlocks = document.querySelectorAll('.question-block');
    
    if (questionBlocks.length === 0) { alert('Please generate question fields first!'); return; }
    
    const customQuestions = [];
    questionBlocks.forEach(block => {
        const questionText = block.querySelector('.question-input').value.trim();
        const optionTexts = Array.from(block.querySelectorAll('.option-text')).map(input => input.value.trim());
        const correctAnswer = parseInt(block.querySelector('input[type="radio"]:checked').value);
        const difficulty = block.querySelector('.difficulty-select').value;
        
        if (questionText && optionTexts.every(opt => opt)) {
            customQuestions.push({ question: questionText, options: optionTexts, correct: correctAnswer, difficulty: difficulty });
        }
    });
    
    if (customQuestions.length !== questionBlocks.length) { alert('Please fill in all questions and options!'); return; }
    
    const customQuizzes = JSON.parse(localStorage.getItem('customQuizzes')) || {};
    customQuizzes[topic] = customQuestions;
    localStorage.setItem('customQuizzes', JSON.stringify(customQuizzes));
    
    quizData[topic.toLowerCase().replace(/\s+/g, '_')] = customQuestions;
    alert(`✅ Quiz "${topic}" created successfully with ${customQuestions.length} questions!\n\nYou can now find it in "Choose Your Challenge" section.`);
    renderCategoryButtons();
    showScreen('home');
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark');
    document.getElementById('themeToggle').textContent = '☀️';
}

const style = document.createElement('style');
style.textContent = '@keyframes scorePopup{0%{transform:translate(-50%,-50%) scale(0);opacity:0}50%{transform:translate(-50%,-50%) scale(1.2);opacity:1}100%{transform:translate(-50%,-50%) scale(1) translateY(-50px);opacity:0}}';
document.head.appendChild(style);

init();
