<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexusControl Dashboard</title>

    <!-- Bootstrap CSS via Vite -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <!-- Optional: Bootstrap CDN (Remove if using Vite for Bootstrap) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="<?= asset('css/welcome.css') ?>">
</head>
<body class="bg-light">

    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark fixed-top glass-navbar">
    <div class="container">
        <!-- Logo -->
        <a class="navbar-brand fw-bold text-white" href="#">NexusControl</a>

       <!-- Navbar Toggle -->
        <button 
            class="navbar-toggler" 
            type="button" 

            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navigation Links -->
        <div id="navbarNav" class="collapse navbar-collapse">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link text-white" href="#">Home</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#features">Features</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#about">About</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="#contact">Contact</a></li>
                <li class="nav-item"><a class="nav-link text-white" href="{{ route('login') }}">Log In</a></li>
            </ul>
        </div>
    </div>
</nav>


    <!-- Main Content with Background -->
    <div class="background-container">
        <div class="overlay"></div> <!-- Optional for dark overlay -->
            <div class="welcome text-center">
                <h1 class="display-4 fw-bold">Welcome to NexusControl</h1>
                <p class="text-light mt-2">Efficient LAN-Based PC Monitoring and Control System</p>
                <a href="#" class="btn btn-light mt-4 px-4 py-2">Get Started</a>
            </div>
        </div>
    </div>



    <section id="features" class="section">
    <div class="container">
        <!-- Slider Start -->
            <ul class='slider'>
                <li class='item' style="background-image: url('/images/file-handling.jpg')">
                    <div class='content'>
                        <h2 class='title'>File handling</h2>
                        <p class='description'>Download & Upload File Control.</p>
                        <button>Read More</button>
                    </div>
                </li>
                <li class='item' style="background-image: url('/images/computers.jpg')">
                    <div class='content'>
                        <h2 class='title'>Features</h2>
                        <p class='description'>Powerful tools to monitor and manage LAN-connected PCs.</p>
                        <button>Read More</button>
                    </div>
                </li>
                <li class='item' style="background-image: url('/images/live.jpg')">
                    <div class='content'>
                        <h2 class='title'>Live Screen Monitoring</h2>
                        <p class='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                </li>
                <li class='item' style="background-image: url('/images/performance.jpg')">
                    <div class='content'>
                        <h2 class='title'>Performance Monitoring</h2>
                        <p class='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                </li>
                <li class='item' style="background-image: url('/images/turnoff.jpg')">
                    <div class='content'>
                        <h2 class='title'>Shutdown/<br>Startup</h2>
                        <p class='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                </li>
                <li class='item' style="background-image: url('/images/lock.jpg')">
                    <div class='content'>
                        <h2 class='title'>PC locking</h2>
                        <p class='description'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                        <button>Read More</button>
                    </div>
                </li>
            </ul>
            <nav class='nav'>
                <ion-icon class='btn prev' name="arrow-back-outline"></ion-icon>
                <ion-icon class='btn next' name="arrow-forward-outline"></ion-icon>
            </nav>
        
        <!-- Slider End -->

        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </div>
</section>



    <!-- About Section -->
    <section id="about" class="section">
        <div class="container">
            <h2 class="fw-bold">About Us</h2>
            <p>Learn more about our mission to provide efficient PC monitoring.</p>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="section">
        <div class="container">
            <h2 class="fw-bold">Contact Us</h2>
            <p>Get in touch with our team for support and inquiries.</p>
        </div>
    </section>

    
    <script src="js/welcome.js"></script>
<script>
    document.addEventListener("DOMContentLoaded", function () {
        console.log(typeof bootstrap !== "undefined" ? "✅ Bootstrap JS is loaded" : "❌ Bootstrap JS is NOT loaded");
    });
</script>

    <!-- Bootstrap JavaScript (CDN) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>