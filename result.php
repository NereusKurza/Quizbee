<?php
$category = $_GET['category'] ?? 'english';

// Define total questions per category (match your quiz.js logic)
$questionsData = [
    'english' => [
        'easy' => 25,
        'medium' => 15,
        'hard' => 10
    ],
    // Add more categories if needed
];

// Fetch scores from URL parameters (with fallback to 0)
$score_easy = (int)($_GET['score_easy'] ?? 0);
$score_medium = (int)($_GET['score_medium'] ?? 0);
$score_hard = (int)($_GET['score_hard'] ?? 0);

// Determine total per difficulty
$easy_total = $questionsData[$category]['easy'] ?? 0;
$medium_total = $questionsData[$category]['medium'] ?? 0;
$hard_total = $questionsData[$category]['hard'] ?? 0;

// Calculate total score
$totalScore = $score_easy + $score_medium + $score_hard;
$totalQuestions = $easy_total + $medium_total + $hard_total;

// Calculate passing score (60% of total)
$passingScore = ceil($totalQuestions * 0.6);

// Determine if user passed
$passed = $totalScore >= $passingScore;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Quizbee - Result</title>
    <link rel="stylesheet" href="css/style.css" />
</head>
<body>
    <?php include 'includes/header.php'; ?>

    <main class="main-content">
        <div class="result-box">
            <img
                src="assets/<?= $passed ? 'congrats.png' : 'gameover.png' ?>"
                alt="<?= $passed ? 'Congratulations' : 'Game Over' ?>"
                class="result-banner"
            />

            <p class="result-detail">
                Easy Mode: <?= $score_easy ?> / <?= $easy_total ?>
            </p>
            <p class="result-detail">
                Medium Mode: <?= $score_medium ?> / <?= $medium_total ?>
            </p>
            <p class="result-detail">
                Hard Mode: <?= $score_hard ?> / <?= $hard_total ?>
            </p>

            <p class="result-score">
                Total Score: <?= $totalScore ?> / <?= $totalQuestions ?>
            </p>

            <a href="index.php" class="result-button">Play Again</a>
        </div>
    </main>
</body>
</html>
