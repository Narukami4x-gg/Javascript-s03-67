function rectPerimeter(width, length) {
    return 2 * width + 2 * length;
  }
  
  // define width
  let w = [7]; let w2 = [10]; let w3 = [9];
  // define length
  let l = [6]; let l2 = [20]; let l3 = [2];
  
  // call rectPerimeter with params i.e. width and height
  console.log(`FindPerimeter(6,7) = ${rectPerimeter(w, l)}`);
  console.log(`FindPerimeter(20,10) = ${rectPerimeter(w2, l2)}`);
  console.log(`FindPerimeter(2,9) = ${rectPerimeter(w3, l3)}`);