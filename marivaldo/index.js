 var nome = prompt('Digite o nome')
        var faltas = parseInt(prompt('Digite o numero de faltas'))
        var n1=parseFloat(prompt('Digite o primeiro numero'));
        var n2=parseFloat(prompt('Digite o segundo numero'));
        var soma= (n1+n2)/2;
        document.write('Nome:',nome,'\n soma:',soma)
        if(soma>=7 && faltas<=5){
            document.write('Aprovado')
        }
        else if(soma>=7 && faltas>5){
            document.write('Reprovado por faltas')
        }
        else if(soma<7 && faltas<=5){
            document.write('Reprovado por media')
        }
        else{
            document.write('Burro do krl')
        }
        