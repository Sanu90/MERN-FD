function a(...a){
    return a.reduce((tot,m)=>tot+=m
    ,0);
}

console.log(a(10,20,9,27,8));

console.log(a(10,20,9,27));
