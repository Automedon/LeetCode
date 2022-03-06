/*
An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).

Given an m x n integer matrix img representing the grayscale of an image, return the image after applying the smoother on each cell of it.
*/

var imageSmoother = function (img) {
  return img.map((arr, i) =>
    arr.map((_, j) => {
      let sum = 0;
      let count = 0;
      for (let l = i - 1; l <= i + 1; l++) {
        for (let m = j - 1; m <= j + 1; m++) {
          if (img[l] && img[l][m] > -1){
		      sum += img[l][m]; 
			  count++;
		  } 
        }
      }
      return Math.floor(sum / count);
    })
  );
};
