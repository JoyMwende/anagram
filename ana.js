function checkAnagram (x, y){
    let len1 = x.length;
   let len2 = y.length;
   if(len1 !== len2){
      console.log('Invalid Input');
   }
    let sort1 = x.split('').sort().join('').toLowercase();
    let sort2 = y.split('').sort().join('').toLowercase();
    if(sort1 === sort2){
        console.log("True");
    } else {
        console.log("False");
    }
}

    console.log(checkAnagram("arm","ram"))