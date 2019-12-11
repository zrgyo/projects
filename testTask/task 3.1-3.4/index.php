<?php
    $mysqli = new mysqli ('localhost', 'root', '', 'testtask');
    $file = fopen('convertcsv.csv', 'r');

    echo '<table cellspacing = "0" border = "1" width = "400">';
    while(!feof($file)){
        $mass = fgetcsv($file, 1024, ',', '"');
        $control = count($mass);
        if ($control > 1){
            echo '<tr aling = "center">';
                echo '<td width = "20%" border = "1 solid red">';
                echo $mass[0];
                echo '</td>';
                echo '<td width = "20%">';
                echo $mass[1];
                echo '</td>';
                echo '<td width = "20%" border = "1 solid red>';
                echo $mass[2];
                echo '</td>';
                echo '<td width = "20%">';
                echo $mass[3];
                echo '</td>';
                echo '<td width = "20%" border = "1 solid red">';
                echo $mass[4];
                echo '</td>';   
            echo '</tr>';
            $mysqli->query("INSERT INTO 'testtask' ('First','Last','Dollar','Age','State') VALUES ('{$mass[0]}','{$mass[1]}','{$mass[2]}','{$mass[3]}','{$mass[4]}')");
        }
    }
    echo '</table>';
    fclose($file);
    $mysqli_close();
?>