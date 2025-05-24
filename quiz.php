<?php
$category = $_GET['category'] ?? 'english';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quiz</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Header with back button and logo -->
    <div class="header">
        <a href="category.php" class="back-button">
            <img src="assets/back.png" alt="Back" class="back-image">
        </a>
        <img src="assets/logo.png" alt="Logo" class="logo">
    </div>

    <!-- Main quiz content -->
    <div class="main-content">
        <!-- Difficulty banner -->
        <img id="difficultyBanner" src="assets/easy.png" alt="Difficulty Banner" class="difficulty-banner">

        <!-- Timer display -->
        <div class="timer" id="timerDisplay">Time Left: 10s</div>

        <!-- Quiz content -->
        <div class="quiz-container">
            <div class="question-box" id="questionText">Loading question...</div>
            <div class="answer-choices" id="choicesContainer"></div>
        </div>
    </div>

    <!-- JavaScript category variable -->
    <script>
        const category = "<?= htmlspecialchars($category) ?>";
    </script>

    <!-- Quiz logic script -->
    <script src="js/quiz.js"></script>
</body>
</html>
