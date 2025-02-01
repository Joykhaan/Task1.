const isBCS=true;
const salary=25000;
const height=70;
const weight=60;
const hasCar=true;

if(salary>20000){
    console.log('patro thik ache, amibiye korbo')
}
else{
    console.log('ei patro cholbe na, amake khaoabe ki?')
}


if(salary>20000 && weight>60){
    console.log('patro thik ache, amibiye korbo')
}
else{
    console.log('ei patro cholbe na, ami to bhuski!')
}


if(salary>20000 && weight>60 ||hasCar==true||height==70){
    console.log('uff patro hot ache Maa, ami biye korbo')
}
else{
    console.log('ei patro cholbe na, ami to bhuski!')
}

if((salary>20000 && weight>60)||height==70){
    console.log('Tk nai to ki hoyeche kunud ek din tk to hbe, lomba ache to, baitta to r lomba hoto na')
}
else{
    console.log('ei patro cholbe na, ami to bhuski!')
}

if((salary>25000 && weight>60)||hasCar==false ){
    console.log('Tk nai to ki hoyeche kunud ek din tk to hbe, lomba ache to, baitta to r lomba hoto na')
}
else{
    console.log('ei patro cholbe na, ami to bhuski!')
}

if(salary>25000 && weight>60 && hasCar==2 && height==80){
    console.log('Tk nai to ki hoyeche kunud ek din tk to hbe, lomba ache to, baitta to r lomba hoto na')
}
else{
    console.log('Sala gorib, kichui nai baal, amar moto bhuski ke rakhte parbe na!')
}