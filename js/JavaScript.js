document.write("<h1> Metodo de optimizacion de recursos simplex </h1>")
function alg_mat_jv() {
    var n11 = new Number()
    var r11 = new Number()
    var n = new Number()
    var f1 = new Number()
    var c1 = new Number()
    var f2 = new Number()
    var c2 = new Number()
    var rfilp = new Number()
    var min = new Number()
    var col_piv = new Number()
    var fil_piv = new Number()
    var hacer1 = new Number()
    var hacer0 = new Number()
    var x = new Number()
    //ingreso de numero de variables
    document.write('Ingrese el numero de variables', '<BR/>')
    n1 = Number(prompt("Ingrese el numero de variables"))
    document.write(n1, "</BR>")
    document.write('Ingrese el numero de restricciones', '<BR/>')
    r1 = Number(prompt("Ingrese el numero de restricciónes"))
    document.write(r1, "</BR>")
    r = r1 + 1
    n = n1 + 1
    var matriz = new Array(r)
    for (var aux_index_0 = 0; aux_index_0 < r; aux_index_0++) {
        matriz[aux_index_0] = new Array(n)
    }
    var matriz_inv = new Array(r)
    for (var aux_index_0 = 0; aux_index_0 < r; aux_index_0++) {
        matriz_inv[aux_index_0] = new Array(n)
    }
    var filapiv = new Array(r)
    for (var aux_index_0 = 0; aux_index_0 < r; aux_index_0++) {
        filapiv[aux_index_0] = new Array(1)
    }
    var matsx = new Array(r)
    for (var aux_index_0 = 0; aux_index_0 < r; aux_index_0++) {
        matsx[aux_index_0] = new Array(1)
    }
    

    document.write("Orden de ingreso de datos<br>")
    //Para S (variables de olgura) de filas
    matsx[1] = ("Z" );
    for (f1 = 2; f1 <= r; f1++) {
        J=f1-1
        matsx[f1] =("S"+ J);
    }
   
   

    matriz[0][n - 1] = 0
    // ingreso de datos de matriz

    for (f1 = 1; f1 <= r; f1++) {
        if (f1 == 1) {
            for (c1 = 1; c1 <= n - 1; c1++) {
                document.write(
                    'Ingrese la variable ',
                    c1,
                    'de la funcion objetivo ',
                    '<BR/>',
                )
                matriz[f1 - 1][c1 - 1] = Number(prompt('Ingrese la variable ' + c1 + " de la funcion objetivo"))
            }
            matriz[0][n - 1] = 0
        } else {
            for (c1 = 1; c1 <= n; c1++) {

                if (c1 == n) {
                    document.write(
                        'Ingrese el valor de la restriccion  ',
                        x = f1 - 1,
                        ' al que debe ser <= ',
                        '<BR/>',
                    )
                    matriz[f1 - 1][c1 - 1] = Number(prompt("Ingrese el valor de la restriccion " + x + " al que debe ser <=  "))
                }
                else {

                    document.write(
                        'Ingrese el valor de la restriccion  ',
                        x = f1 - 1,
                        ' columna variable ',
                        c1,
                        '<BR/>',
                    )
                    matriz[f1 - 1][c1 - 1] = Number(prompt("Ingrese el valor de la restriccion " + x + " columna variable " + c1))
                }
            }
        }
        // ingreso de valores de matriz inverza
        for (c2 = 1; c2 <= n; c2++) {
            if (f1 - 1 == 0) {
                matriz_inv[f1 - 1][c2 - 1] = 0
            } else {
                if (f1 - 1 == c2) {
                    matriz_inv[f1 - 1][c2 - 1] = 1
                } else {
                    matriz_inv[f1 - 1][c2 - 1] = 0
                }
            }
        }
    }


    document.write("<h3>Presentamos la matriz aumentada</h3>")
    // escribir matriz

    document.write("<table border>");
   
    document.write("<tr>");
    document.write("<td>");
    document.write("");
    document.write("</td>");

    for (c1 = 1; c1 <= n - 1; c1++) {
        document.write("<td>");
        document.write("X" + c1);
        document.write("</td>");
    }
    for (c1 = 1; c1 <= n - 1; c1++) {
        document.write("<td>");
        document.write("S" + c1);
        document.write("</td>");
    }
    document.write("<td>");
    document.write("= 0");
    document.write("</td>");

    document.write('', '<BR/>')
    document.write("</tr>");

    //numeros
    for (f1 = 1; f1 <= r; f1++) {
        document.write("<tr>");
        document.write("<td>");
        document.write( matsx[f1]);
        document.write("</td>");
        for (c1 = 1; c1 <= n - 1; c1++) {
            document.write("<td>");
            document.write(matriz[f1 - 1][c1 - 1], '   ')
            document.write("</td>");
        }
        for (c2 = 1; c2 <= n - 1; c2++) {
            document.write("<td>");
            document.write(matriz_inv[f1 - 1][c2 - 1], '   ')
            document.write("</td>");
        }
        document.write("<td>");
        document.write('=  ', matriz[f1 - 1][n - 1], '   ')
        document.write("</td>");
        document.write('', '<BR/>')


        document.write("</tr>");
    }
    document.write("</table>");


    // convertir a negativo funcion objetivo
    document.write(
        '<h3>Cambiamos el signo de las variables en la funcion objetivo</h3>',
        '<BR/>',
    )
    for (c1 = 1; c1 <= n - 1; c1++) {
        matriz[0][c1 - 1] = -1 * matriz[0][c1 - 1]
    }
    // escribir matriz

    document.write("<table border>");

    document.write("<tr>");
    document.write("<td>");
    document.write("");
    document.write("</td>");


    for (c1 = 1; c1 <= n - 1; c1++) {
        document.write("<td>");
        document.write("X" + c1);
        document.write("</td>");
    }
    for (c1 = 1; c1 <= n - 1; c1++) {
        document.write("<td>");
        document.write("S" + c1);
        document.write("</td>");
    }
    document.write("<td>");
    document.write("= 0");
    document.write("</td>");

    document.write('', '<BR/>')
    document.write("</tr>");
    //numeros
    for (f1 = 1; f1 <= r; f1++) {
        document.write("<tr>");
        document.write("<td>");
        document.write( matsx[f1]);
        document.write("</td>");
        for (c1 = 1; c1 <= n - 1; c1++) {
            document.write("<td>");
            document.write(matriz[f1 - 1][c1 - 1], '   ')
            document.write("</td>");

        }
        for (c2 = 1; c2 <= n - 1; c2++) {
            document.write("<td>");
            document.write(matriz_inv[f1 - 1][c2 - 1], '   ')
            document.write("</td>");
        }
        document.write("<td>");
        document.write('=  ', matriz[f1 - 1][n - 1], '   ')
        document.write("</td>");
        document.write('', '<BR/>')



        document.write("</tr>");
    }
    document.write("</table>");
    // encontrar col min
    document.write('<h3>Buscamos columna con variable basica minima</h3> ', '<BR/>')
    min = matriz[0][0]
    for (c1 = 1; c1 <= n - 1; c1++) {
        if (matriz[0][c1 - 1] <= min) {
            min = matriz[0][c1 - 1]
            col_piv = c1
        }
    }
    document.write(
        '<b>La variable basica minima es: </b> ',
        min,
        '<h3> Por lo tanto la columna ',
        col_piv,
        ' es la columna pivote </h3>',
        '<BR/>',
    )

    // algoritmoooooo
    // encontrar fil min
    document.write("<b>Divivimos la columna de resultaos entre la coumna pivote</b></br>")
    while (min < 0) {
        if (matriz[1][col_piv - 1] != 0) {
            fil_piv = matriz[1][n - 1] / matriz[1][col_piv - 1]
            rfilp = 2
        }
        for (f1 = 2; f1 <= r; f1++) {
            if (matriz[f1 - 1][col_piv - 1] != 0) {
                filapiv[f1 - 1][0] = matriz[f1 - 1][n - 1] / matriz[f1 - 1][col_piv - 1]
                document.write(
                    matriz[f1 - 1][n - 1],
                    ' / ',
                    matriz[f1 - 1][col_piv - 1],
                    ' = ',
                    filapiv[f1 - 1][0],
                    '<BR/>',
                )
                if (filapiv[f1 - 1][0] <= fil_piv) {
                    fil_piv = filapiv[f1 - 1][0]
                    rfilp = f1
                }
            } else {
                document.write('', '<BR/>')
            }
        }
        document.write('<b>El resultado menor es: </b>', fil_piv, '<BR/>')
        document.write('<h3>por tanto la fila pivote es la fila ', rfilp, '</h3><BR/>')
        document.write('', '<BR/>')
        document.write(
            '<b>El elemento pibote es ',
            matriz[rfilp - 1][col_piv - 1],
            '</b><BR/>',
        )
        hacer1 = matriz[rfilp - 1][col_piv - 1]
        // convertir en 1 elemento pivote
        if (matriz[rfilp - 1][col_piv - 1] == 1) {
            document.write(
                '<h3>Como el elemento pivote es 1 se deja igual la matriz</h3>',
                '<BR/>',
            )
        } else {
            if (matriz[rfilp - 1][col_piv - 1] == 0) {
                document.write(
                    '<h3>Como el elemento pivote es 0 se le suma 1 a la fila pivote</h3>',
                    '<BR/>',
                )
                for (c1 = 1; c1 <= n; c1++) {
                    matriz[rfilp - 1][c1 - 1] = matriz[rfilp - 1][c1 - 1] + 1
                    matriz_inv[rfilp - 1][c1 - 1] = matriz_inv[rfilp - 1][c1 - 1] + 1
                }
                for (f1 = 1; f1 <= r; f1++) {
                    for (c1 = 1; c1 <= n - 1; c1++) {
                        document.write(matriz[f1 - 1][c1 - 1], '   ')
                    }
                    for (c2 = 1; c2 <= n - 1; c2++) {
                        document.write(matriz_inv[f1 - 1][c2 - 1], '   ')
                    }
                    document.write('=  ', matriz[f1 - 1][n - 1], '   ')
                    document.write('', '<BR/>')
                }
            } else {
                document.write(
                    '<h3>Como el elemento pivote es diferente de 1 se multipluca por 1/',
                    matriz[rfilp - 1][col_piv - 1],
                    '</h3><BR/>',
                )
                for (c1 = 1; c1 <= n; c1++) {
                    matriz[rfilp - 1][c1 - 1] = matriz[rfilp - 1][c1 - 1] * (1 / hacer1)
                    matriz_inv[rfilp - 1][c1 - 1] =
                        matriz_inv[rfilp - 1][c1 - 1] * (1 / hacer1)
                }
                // escribir matriz






                document.write("<table border>");

                document.write("<tr>");
                document.write("<td>");
                document.write("");
                document.write("</td>");


                for (c1 = 1; c1 <= n - 1; c1++) {
                    document.write("<td>");
                    document.write("X" + c1);
                    document.write("</td>");
                }
                for (c1 = 1; c1 <= n - 1; c1++) {
                    document.write("<td>");
                    document.write("S" + c1);
                    document.write("</td>");
                }
                document.write("<td>");
                document.write("= 0");
                document.write("</td>");

                document.write('', '<BR/>')
                document.write("</tr>");
                //numeros



                for (f1 = 1; f1 <= r; f1++) {
                    document.write("<tr>");
                    document.write("<td>");
                    if (f1 == rfilp) {
                        matsx[f1] = "X" + col_piv
                        document.write( matsx[f1]);
                        document.write("</td>");
                    }
                    else {
                        document.write( matsx[f1]);
                        document.write("</td>");
                    }

                    
                    for (c1 = 1; c1 <= n - 1; c1++) {
                        document.write("<td>");
                        document.write(matriz[f1 - 1][c1 - 1], '   ')
                        document.write("</td>");

                    }
                    for (c2 = 1; c2 <= n - 1; c2++) {
                        document.write("<td>");
                        document.write(matriz_inv[f1 - 1][c2 - 1], '   ')
                        document.write("</td>");
                    }
                    document.write("<td>");
                    document.write('=  ', matriz[f1 - 1][n - 1], '   ')
                    document.write("</td>");
                    document.write('', '<BR/>')



                    document.write("</tr>");
                }
                document.write("</table>");
            }
        }
        // operaciones elementales
        document.write(
            '<h3>Ahora se procede a hacer 0 la columnas por encima y por debajo de la fila pibote </h3>',
            '<BR/>',
        )
        for (f1 = 1; f1 <= r; f1++) {
            hacer0 = -matriz[f1 - 1][col_piv - 1]
            for (c1 = 1; c1 <= n; c1++) {
                if (f1 != rfilp) {
                    matriz[f1 - 1][c1 - 1] =
                        matriz[rfilp - 1][c1 - 1] * hacer0 + matriz[f1 - 1][c1 - 1]
                    matriz_inv[f1 - 1][c1 - 1] =
                        matriz_inv[rfilp - 1][c1 - 1] * hacer0 + matriz_inv[f1 - 1][c1 - 1]
                }
            }
        }
        // escribir matriz

        document.write("<table border>");

        document.write("<tr>");
        document.write("<td>");
        document.write("");
        document.write("</td>");


        for (c1 = 1; c1 <= n - 1; c1++) {
            document.write("<td>");
            document.write("X" + c1);
            document.write("</td>");
        }
        for (c1 = 1; c1 <= n - 1; c1++) {
            document.write("<td>");
            document.write("S" + c1);
            document.write("</td>");
        }
        document.write("<td>");
        document.write("= 0");
        document.write("</td>");

        document.write('', '<BR/>')
        document.write("</tr>");
        //numeros
        for (f1 = 1; f1 <= r; f1++) {
            document.write("<tr>");
            document.write("<td>");
            document.write( matsx[f1]);
            document.write("</td>");
            for (c1 = 1; c1 <= n - 1; c1++) {
                document.write("<td>");
                document.write(matriz[f1 - 1][c1 - 1], '   ')
                document.write("</td>");

            }
            for (c2 = 1; c2 <= n - 1; c2++) {
                document.write("<td>");
                document.write(matriz_inv[f1 - 1][c2 - 1], '   ')
                document.write("</td>");
            }
            document.write("<td>");
            document.write('=  ', matriz[f1 - 1][n - 1], '   ')
            document.write("</td>");
            document.write('', '<BR/>')



            document.write("</tr>");
        }
        document.write("</table>");

        // nuevamenta se busca el valor minimo de variables para ver si se continua con la iteracion
        document.write('<b>buscamos columna con variable basica minima </b>', '<BR/>')
        min = matriz[0][0]
        for (c1 = 1; c1 <= n - 1; c1++) {
            if (matriz[0][c1 - 1] <= min) {
                min = matriz[0][c1 - 1]
                col_piv = c1
            }
        }
        if (min <= 0) {
            document.write(
                '<h3>La columna con variable basica minima es "',
                min,
                '" por lo tanto como es mayor o igual a 0 se cumple, con el criterio de no negatividad y queda resuelto el problema ',
                '</h3><BR/>',
            )
        } else {
            document.write(
                'La columna con variable basica minima es: ',
                min,
                ' por lo tanto la columna ',
                col_piv,
                ' es la columna pivote ',
                '<BR/>',
            )
        }
    }

    document.write("<h3>La funcion objetivo se maximiza cuando:</h3>")
    document.write("<table border>");
    for (f1 = 1; f1 <= r; f1++) {

        
        document.write("<tr>");
        document.write("<td>");
        document.write(matsx[f1]);
        document.write("</td>");

        document.write("<td>");
        document.write('=  ', matriz[f1 - 1][n - 1], '   ');
        document.write("</td>");
  
        document.write("</tr>");
        
    }
    document.write("</table>");
}







alg_mat_jv()
