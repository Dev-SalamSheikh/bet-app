const width = (s) => {
  if (s === 30) return `33px`;
  else if (s === 20) return `50px`;
  else if (s === 50) return `19px`;
  else return ``;
};
const height = (s) => {
  if (s === 30) return `143px`;
  else if (s === 20) return `135px`;
  else if (s === 50) return `150px`;
  else return ``;
};
export const makeWheel = (segment, risk, color) => {
  // eslint-disable-next-line no-unused-vars
  let degArray = [];
  let array = [];
  let count = 0;
  for (let k = 1; k <= segment; k++) {
    array[k] = 0;
  }

  if (risk === "Low") {
    for (let k = 1; k <= segment; k++) {
      array[k] = 0;
    }
    const div = segment / 10;
    const purpleSegment = 2 * div;
    let segmentCount = 0;
    for (let i = 1; i <= segment; i = i + segment / purpleSegment) {
      if (array[i] === 0) {
        array[i] = (
          <div
            key={i}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.purple}`,
              transform: `rotate(${(360 / segment) * (i - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
      }
    }
    for (let i = 1; i <= segment; i++) {
      if (array[i] !== 0) {
        array[i + 1] = (
          <div
            key={i + 1}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.green}`,
              transform: `rotate(${(360 / segment) * i}deg)`,
            }}
            className="s1"
          ></div>
        );
        i = 2 * (segment / purpleSegment) * (segmentCount + 1);
        segmentCount++;
        if (segmentCount === div) {
          segmentCount = 0;
          break;
        }
      }
    }
    for (let i = 1; i <= segment; i++) {
      if (array[i] === 0) {
        array[i] = (
          <div
            key={i}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.white}`,
              transform: `rotate(${(360 / segment) * (i - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
      }
    }
  } else if (risk === "High") {
    for (let i = 1; i <= segment; i++) {
      if (i === 1) {
        array[i] = (
          <div
            key={i}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.warning}`,
              transform: `rotate(${(360 / segment) * (i - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
      } else {
        array[i] = (
          <div
            key={i}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.purple}`,
              transform: `rotate(${(360 / segment) * (i - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
      }
    }
  } else {
    for (let i = 1; i <= segment; i = i + 2) {
      if (array[i] === 0) {
        array[i] = (
          <div
            key={i}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.purple}`,
              transform: `rotate(${(360 / segment) * (i - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
      }
    }
    for (let g = 2; g <= segment; g = g + 4) {
      if (array[g] === 0) {
        array[g] = (
          <div
            key={g}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.green}`,
              transform: `rotate(${(360 / segment) * (g - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
        count++;
      }
      if (count === Math.floor((segment * 20) / 100)) {
        count = 0;
        break;
      }
    }
    for (let m = 4; m <= segment; m++) {
      if (array[m] === 0 && count === 0) {
        array[m] = (
          <div
            key={m}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.white}`,
              transform: `rotate(${(360 / segment) * (m - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
        count = 1;
      }

      if (array[m] === 0 && count === 1) {
        array[m] = (
          <div
            key={m}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.yellow}`,
              transform: `rotate(${(360 / segment) * (m - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
        count = 2;
      }

      if (array[m] === 0 && count === 2) {
        array[m] = (
          <div
            key={m}
            style={{
              width: `${width(segment)}`,
              left: `${height(segment)}`,
              backgroundColor: `${color.warning}`,
              transform: `rotate(${(360 / segment) * (m - 1)}deg)`,
            }}
            className="s1"
          ></div>
        );
        count = 0;
      }
    }
  }
  return {
    wheelData: array,
  };
};
