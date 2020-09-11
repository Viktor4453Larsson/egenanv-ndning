<!DOCTYPE html>
<html lang="sv">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Drönarfoton - Startsida</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="../sass/kontakt.css">
</head>

<body>
    <div class="container">
        <nav class="navbar border border-top-0 navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">Drönar<span class="fet">Foton</span> <img src="../bilder/fly.png" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="startsida.php">Startsida</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="gallery.html">Galleri</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">Om oss</a>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="kontakt.php">Kontakt<span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
        </nav>

        <form class="bg-secondary">
            <div class="form-group">
                <label for="namn">Namn</label>
                <input type="namn" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" required>
            </div>
            <div class="form-group">
                <label for="telNum">Telefonnummer</label>
                <input type="text" class="form-control" id="telNum" maxlength="15" required>
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Meddelande</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="10" required></textarea>
            </div>
            <div class="col text-center">
                <button type=" submit" class="btn btn-success">Skicka</button>
            </div>
        </form>



    </div>
    <footer class="page-footer border-top">
        <div class="row bg-dark">
            <div class="col-sm-3 align-self-center">
                <p class="text-center">© 2020 Gustav. All rights reserved.
                    114 25 Stockholm, Rådmansgatan 10
                    P 072-532 29 53</p>

                <p class="text-center">Privacy Policy</p>
            </div>
            <div class="col-sm-3 align-self-center">
                <ul class="text-center navbar-nav ml-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Startsida</a>
                    </li>
                    <li class="nav-item"><a class="nav-link" href="#">Galleri</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Om oss</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Kontakt</a></li>
                </ul>
            </div>
            <div class="col-sm-3 text-center align-self-center">
                <a href="https://www.facebook.com/" target="_blank"><img class="socialMedias" src="../bilder/facebook.png" alt="linkedIn bild"></a>
                <a href=" https://www.instagram.com/dronarfotonsthlm/" target="_blank"><img class="socialMedias" src="../bilder/instagram.png" alt="linkedIn bild"></a>
                <a href="https://www.linkedin.com/in/gustav-walter-7b163a179/" target="_blank"><img class="socialMedias" src="../bilder/linkedin.png" alt="linkedIn bild"></a>
            </div>
            <div class="col-sm-3 align-self-center">
                <p class="text-center align-middle">Site by Gustav Walter</p>
            </div>
        </div>
    </footer>



    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous">
    </script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous">
    </script>
    <script src="../js/contact.js"></script>
</body>

</html>