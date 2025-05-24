<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quizbee</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <?php include 'includes/header.php'; ?>

    <main class="main-content">
        <h1 class="category-title">
            <img src="assets/category.png" alt="Choose Category" class="category-banner">
        </h1>

        <div class="category-grid">
            <a href="quiz.php?category=english" class="category-box">English</a>
            <a href="quiz.php?category=filipino" class="category-box">Filipino</a>
            <a href="quiz.php?category=science" class="category-box">Science</a>
            <a href="quiz.php?category=math" class="category-box">Math</a>
        </div>

        <a href="index.php" class="back-button">
            <img src="assets/back.png" alt="Back" class="back-image">
        </a>
    </main>
</body>
</html>
