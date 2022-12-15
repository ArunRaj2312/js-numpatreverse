let p=prompt("enter the pattern value");
let a;
for(i=1;i<=p;i++){
    a=0;
    for(j=p;i<=j;j--){
        a++;
        document.write(a);
    }
    document.write("<br>");
}