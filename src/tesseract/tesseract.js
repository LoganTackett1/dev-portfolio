import { VectorF } from "./matricies.js";
import { MatrixF } from "./matricies.js";

export const FOUR = {};

FOUR.create4DCube = function () {
  const options = [-1, 1];

  const cube = {};

  cube.points = [];

  for (let op1 of options) {
    for (let op2 of options) {
      for (let op3 of options) {
        for (let op4 of options) {
          cube.points.push([op1, op2, op3, op4]);
        }
      }
    }
  }

  const map = {};
  cube.drawLines = [];

  function adjCheck(p1, p2) {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      if (p1[i] === p2[i]) {
        count += 1;
      }
    }
    if (count === 3) {
      return true;
    }
    return false;
  }

  for (let i = 0; i < cube.points.length; i++) {
    for (let j = 0; j < cube.points.length; j++) {
      if (!(i === j || `${i},${j}` in map || `${j},${i}` in map)) {
        if (adjCheck(cube.points[i], cube.points[j])) {
          cube.drawLines.push([i, j]);
          map[`${i},${j}`] = null;
        }
      }
    }
  }

  cube.center = [0, 0, 0, 0];

  cube.threeDMap = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  cube.twoDMap = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  return cube;
};

FOUR.update3DMap = function (cube, angle, camera) {
  const cos = Math.cos(angle);
  const sin = Math.sin(angle);
  for (let i = 0; i < cube.points.length; i++) {
    const x = cube.points[i][0];
    const y = cube.points[i][1];
    const z = cube.points[i][2];
    const w = cube.points[i][3];
    cube.threeDMap[i][0] = (x * cos - y * sin) / (z * sin + w * cos - camera);
    cube.threeDMap[i][1] = (x * sin + y * cos) / (z * sin + w * cos - camera);
    cube.threeDMap[i][2] = (z * cos - w * sin) / (z * sin + w * cos - camera);
  }
};

FOUR.getCenteringMatrix = function (r3) {
  const x = r3[0];
  const y = r3[1];
  const z = r3[2];

  const sqrt1 = Math.sqrt(y ** 2 + z ** 2);
  const sqrt2 = Math.sqrt(x ** 2 + y ** 2 + z ** 2);

  return [
    [sqrt1 / sqrt2, (-x * y) / (sqrt1 * sqrt2), (-x * z) / (sqrt1 * sqrt2)],
    [0, z / sqrt1, -y / sqrt1],
    [x / sqrt2, y / sqrt2, z / sqrt2],
  ];
};

FOUR.update2DMap = function (cube, centerMatr, cameraDist) {
  for (let i = 0; i < cube.threeDMap.length; i++) {
    const rotated = VectorF.matrixMultiply(centerMatr, cube.threeDMap[i]);
    cube.twoDMap[i][0] = rotated[0] / (rotated[2] - cameraDist);
    cube.twoDMap[i][1] = rotated[1] / (rotated[2] - cameraDist);
    cube.twoDMap[i][2] =
      rotated[0] ** 2 + rotated[1] ** 2 + (1 - rotated[2]) ** 2;
  }
};

const drawLine = function (ctx, x1, y1, z1, x2, y2, z2, n, thickScale) {
  const deltaX = (x2 - x1) / n;
  const deltaY = (y2 - y1) / n;
  const initThick = 4 / (z1 + 1) + 2;
  const deltaThick = (4 / (z2 + 1) + 2 - initThick) / n;
  for (let i = 0; i < n; i++) {
    ctx.beginPath();
    ctx.moveTo(x1 + i * deltaX, y1 + i * deltaY);
    ctx.lineTo(x1 + (i + 1) * deltaX, y1 + (i + 1) * deltaY);
    ctx.strokeStyle = "rgb(227,224,243)";
    ctx.lineWidth = (initThick + i * deltaThick) * (thickScale / 700);
    ctx.stroke();
    ctx.closePath();
  }
};

FOUR.drawCube = function (ctx, canvas, cube) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let link of cube.drawLines) {
    const p1 = cube.twoDMap[link[0]];
    const p1Z = cube.twoDMap[link[0]][2];
    const p2 = cube.twoDMap[link[1]];
    const p2Z = cube.twoDMap[link[1]][2];
    drawLine(
      ctx,
      p1[0] * (canvas.width * 2) + canvas.width / 2,
      p1[1] * (canvas.width * 2) + canvas.width / 2,
      p1Z,
      p2[0] * (canvas.width * 2) + canvas.width / 2,
      p2[1] * (canvas.width * 2) + canvas.width / 2,
      p2Z,
      5,
      canvas.width
    );
  }
};
