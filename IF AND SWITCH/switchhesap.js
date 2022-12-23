let a=7
let b=9
let islem="carp"

switch(islem)
{
    case "topla":
        console.log("toplama=" ,(a+b));

    break;
    case "cikar":
         console.log("cikarma=",(a-b));

     break;
     case "carp":
        console.log("carpma=",(a*b));
    break;
    case "böl":
        console.log("bolme=",(a/b));
        break;

     default:
        console.log("tanimli bir işlem giriniz")
}