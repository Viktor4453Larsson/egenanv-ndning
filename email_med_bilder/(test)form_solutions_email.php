<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Form Solutions</title>
    <link rel="stylesheet" href="./form_solutions.css">
</head>
<body>
    <div class="kontainer">
        <div class="vit-kontainer">
            <td style="font-size:6px; line-height:10px; padding:50px 0px 50px 0px;" valign="top" align="left">
                <img class="max-width" border="0"
                    style="display:block; color:#000000; text-decoration:none; font-family:Helvetica, arial, sans-serif; font-size:16px; max-width:100% !important; width:100%; height:auto !important;"
                    width="1000" alt="" data-proportionally-constrained="true" data-responsive="true"
                    src="http://cdn.mcauto-images-production.sendgrid.net/0a78cfd5943a0773/75c92d87-049e-4916-b711-2ab8747ff13f/300x52.png">
            </td>
            <div class="gra_box"> </div>
            <br>
            <div class="left" style="font-family: inherit; text-align: inherit">Namn:&nbsp;</div><br>
            <input id="name" type="text" name="namn">
            <br>
            <div class="ljus_gra_box"></div>

            <div class="gra_box"> </div>
            <br>
            
            <div class="left" style="font-family: inherit; text-align: inherit">Telefonnummer:&nbsp;</div> <br>
            <input id="tel-nummer" type="tel" name="tel">
            <div class="ljus_gra_box"></div>
            



            <div class="gra_box"> </div>
            <br>
            <div class="left" style="font-family: inherit; text-align: inherit">Adress:&nbsp;</div><br>
            <input id="adress" type="text" name="adress">
            <br>
            <div class="ljus_gra_box"></div>
            <div class="gra_box"> </div><br>
            <div class="left" style="font-family: inherit; text-align: 
          inherit">Organisationsnummer (valfritt)</div><br>
            <input id="org_n" name="org_n" type="text">

            <div class="ljus_gra_box"></div>
            <div class="gra_box"> </div>
            
            
            
            

            <img class="hidden img1" src="../bilder/bergtest1.jpg"  alt="" >
            <img class="hidden img2" src="../bilder/bergtest2.jpg" alt="">


            <button onclick="OrganisationN()">Kör</button>
<form action="" method="POST"></form>
            <<?php
            if (isset ($_POST[""])) {
                # code...
            }
            
                //Hämta element från HTML
                $OrganisationNumber = $_POST["org_n"];
                $img1 = $_POST["../bilder/bergtest1.jpg"];
                $img2 = $_POST["../bilder/bergtest2.jpg"];
                $textTest = $_POST[""];


               
                    if ($OrganisationNumber == "557776-1234") {
                       echo " <p>img1</p>"; 
                    }
                    if ($OrganisationNumber == "885542-7777") {
                       echo " <p>img2</p>"; 
                    }
                
                ?>>
        </div>
    </div>
</body>
</html>