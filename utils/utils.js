import b1 from "../assets/images/b1.png";
import b2 from "../assets/images/b2.png";
import b3 from "../assets/images/b3.png";
import b4 from "../assets/images/b4.png";
import s1 from "../assets/images/s1.png";
import s2 from "../assets/images/s2.png";
import s3 from "../assets/images/s3.png";
import s4 from "../assets/images/s4.png";
import g1 from "../assets/images/g1.png";
import g2 from "../assets/images/g2.png";
import g3 from "../assets/images/g3.png";
import g4 from "../assets/images/g4.png";
import e1 from "../assets/images/e1.png";
import e2 from "../assets/images/e2.png";
import e3 from "../assets/images/e3.png";
import e4 from "../assets/images/e4.png";

export const generateNonce = (length) => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

export const getImage = (category, level) => {
  let image;
  if (category == 0) {
    if (level == 1) {
      image = b1;
    } else if (level == 2) {
      image = b2;
    } else if (level == 3) {
      image = b3;
    } else if (level == 4) {
      image = b4;
    }
  } else if (category == 1) {
    if (level == 1) {
      image = s1;
    } else if (level == 2) {
      image = s2;
    } else if (level == 3) {
      image = s3;
    } else if (level == 4) {
      image = s4;
    }
  } else if (category == 2) {
    if (level == 1) {
      image = g1;
    } else if (level == 2) {
      image = g2;
    } else if (level == 3) {
      image = g3;
    } else if (level == 4) {
      image = g4;
    }
  } else {
    if (level == 1) {
      image = e1;
    } else if (level == 2) {
      image = e2;
    } else if (level == 3) {
      image = e3;
    } else if (level == 4) {
      image = e4;
    }
  }
  return image;
};

export const getCategory = (cat) => {
  let category;
  switch (cat) {
    case 0:
      category = "Bronze";
      break;
    case 1:
      category = "Silver";
      break;
    case 2:
      category = "Gold";
      break;
    case 3:
      category = "Emerald";
      break;
  }
  return category;
};
