<?php
/*
* PHP version 7
* @category   Web scrappa för att problemlösa
* @author     Viktor Larsson <viktor.larsson020@gmail.com>
* @license    PHP CC
*/
?>
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Web scrappa för att problemlösa</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Web scrappa för att problemlösa</h1>
        <?php
        $sidan = file_get_contents("http://www.xn--flyttstdkoncernen-wqb.se/");

        $start = strpos($sidan, '"col-md-12"');
        if ($start !== false) {
            echo " <p>Koden hittades</p>";
        } else {
            echo " <p>Koden kunde inte hittas</p>";
        }

        $slut = strpos($sidan, 'class="col-md-1"', $start);
        if ($slut !== false) {
            echo " <p>Sidan slutar på $slut</p>";
        } else {
            echo " <p>Sidan kunde inte hittas</p>";
        }

        $caStartposition = substr($sidan, $start + 26, $slut - $start);

         // Hämta resterande divboxar
         for ($i = 0; $i < 24; $i++) {
            echo "<p>$i</p>";

        // Texten för första 
        $start = strpos($caStartposition, "<div class=\"o-indenter\">", $slut);
        $slut = strpos($caStartposition, "</div>", $start );
        $del2 = substr($caStartposition, $start, $slut - $start );
        echo "$del2</div>\n";
        }
        ?>
    </div>
</body>
</html>