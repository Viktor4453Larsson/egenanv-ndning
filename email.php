<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Formulär</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
    <form action="#" method="POST">
        <h1>Stränghantering</h1>
        <label for="Namn">Ange Namn här</label>
        <input id="Namn" class="form-control" type="text" name="namn" required>
        <label for="Adress">Ange din epost här</label>
        <input id="Adress" class="form-control" type="text" name="adress" required> 
        <textarea name="kommentarer" id="kommentar" cols="155" rows="10" placeholder="Skriv dina kommentarer" required></textarea>
        <button type="submit" class="btn btn-warning">Skicka</button>
        </form>
    </div>
</body>
<?php
$namn = filter_input(INPUT_POST, "namn", FILTER_SANITIZE_STRING);
$adress = filter_input(INPUT_POST, "adress", FILTER_SANITIZE_STRING);
$postnr = filter_input(INPUT_POST, "postnr", FILTER_SANITIZE_STRING);
$postort = filter_input(INPUT_POST, "postort", FILTER_SANITIZE_STRING);
$epost = filter_input(INPUT_POST, "postort", FILTER_SANITIZE_STRING);


// Om vi har data 
if ($namn && $adress && $postnr && $postort) {
    
    
   
    // Kontrollera att alla fälten innehåller minst 3 tecken 
    if (strlen($namn) < 3 ) {
        echo " <p>Du måste ha minst 3 tecken bra gjort</p>";
    } else { 
        echo " <p>Du har 3 tecken eller mer </p>";
    }
    if (strlen($adress) < 6) {
        echo " <p>Du har inte minst 6 tecken öka till fler</p>";
    } else {
        echo " <p>Du har minst 3 tecken bra gjort</p>";
    }
    if (strlen($postnr) < 3) {
        echo " <p>Du har inte minst 3 tecken öka till fler</p>";
    } else { 
        echo " <p>Du har minst 3 tecken bra gjort</p>";
    }
    
    
    
    // Kontrollera att postnummret innehåller 5 stycken tecken 
    if (strlen($postort) < 5) {
        echo " <p>Du har inte minst 5 tecken öka till fler</p>";
    } else {
        echo " <p>Du har minst 3 tecken bra gjort</p>";
    }
    // Kontrollera att postnumret innehåller endast siffror 
    if (is_numeric($postnr)) {
        echo " <p>Postnummer måste vara bara siffror</p>";
    }

    //Kontrollera att epostadress innehåller minst en punkt och ett snabbel-a 
    if (strpos($epost,  "@") !== false) {
        echo " <p>Du inte @ gör en förändring</p>";
    } else {
        echo " <p>Du har @ bra gjort</p>";
    }

    if (strpos($epost, ".") !== false) {
        echo " <p>Du inte . gör en förändring</p>";
    } else {
        echo " <p>Du har . bra gjort</p>";
    }
   
}

setlocale(LC_ALL, "sv_SE.utf8");
               $dagensDatum = strftime("%A %e %B kl %H:%M");
?>
</html>