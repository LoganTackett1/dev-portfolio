export const VectorF = {};

VectorF.add =  function (arr1,arr2) {
    if (arr1.length !== arr2.length) {
        throw Error("Cannot add array vectors of different dimension!");
    }
    const result = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i]+arr2[i];
    }
    return result;
}

VectorF.addMut =  function (arr1,arr2) {
    if (arr1.length !== arr2.length) {
        throw Error("Cannot add array vectors of different dimension!");
    }
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] += arr2[i]
    }
    return arr1;
}

VectorF.scale = function (arr1,scalar) {
    const result = new Array(arr1.length);
    for (let i = 0; i < arr1.length; i++) {
        result[i] = arr1[i]*scalar;
    }
    return result;
}

VectorF.scaleMut = function (arr1,scalar) {
    for (let i = 0; i < arr1.length; i++) {
        arr1[i] *= scalar;
    }
    return arr1;
}

VectorF.dotProduct = function (arr1,arr2) {
    if (arr1.length !== arr2.length) {
        throw Error("Cannot dot product array vectors of different dimension!");
    }
    let result = 0;
    for (let i = 0; i < arr1.length; i++) {
        result += arr1[i]*arr2[i];
    }
    return result;
}

VectorF.matrixMultiply = function (left,right) {
    if (!(left[0].length === right.length)) {
        throw Error("Cannot multiply matrix and vector: incompatible dimension!");
    }

    const result = new Array(left.length);

    for (let i = 0; i < left.length; i++ ) {
        result[i] = VectorF.dotProduct(left[i],right);
    }

    return result;
}

/* Start of Matrix Functions */

export const MatrixF = {};

MatrixF.dimStr = function (matrix) {
    let rows = matrix.length;
    let cols = matrix[0].length;
    return `${rows}x${cols}`;
}

MatrixF.add = function (matrix1,matrix2) {
    if (this.dimStr(matrix1) !== this.dimStr(matrix2)) {
        throw Error("Cannot add array matricies of different dimensions!");
    }

    const result = new Array(matrix1.length);
    for (let i = 0; i < matrix1.length; i++) {
        result[i] = new Array(matrix1[0].length);
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            result[i][j] = matrix1[i][j]+matrix2[i][j];
        }
    }
    return result;
}

MatrixF.addMut = function (matrix1,matrix2) {
    if (this.dimStr(matrix1) !== this.dimStr(matrix2)) {
        throw Error("Cannot add array matricies of different dimensions!");
    }

    for (let i = 0; i < matrix1.length; i++) {
        for (let j = 0; j < matrix1[0].length; j++) {
            matrix1[i][j] += matrix2[i][j];
        }
    }
    return matrix1;
}

MatrixF.scale = function (matrix,scalar) {
    const result = new Array(matrix.length);
    for (let i = 0; i < matrix.length; i++) {
        result[i] = new Array(matrix[0].length);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result[i][j] = matrix[i][j]*scalar;
        }
    }

    return result;
}

MatrixF.scaleMut = function (matrix,scalar) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            matrix[i][j] *= scalar;
        }
    }

    return matrix;
}

MatrixF.transpose = function (matrix) {
    const result = new Array(matrix[0].length);
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(matrix.length);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
}

MatrixF.multiply = function (left,right) {
    if (!(left[0].length === right.length)) {
        throw Error("Cannot multiply matricies of incompatible dimension!");
    }

    const rightTrans = this.transpose(right);

    const result = new Array(left.length);
    for (let i = 0; i < result.length; i++) {
        result[i] = new Array(rightTrans.length);
    }

    for (let i = 0; i < left.length; i++ ) {
        for (let j = 0; j < rightTrans.length; j++) {
            result[i][j] = VectorF.dotProduct(left[i],rightTrans[j]);
        }
    }

    return result;
}

