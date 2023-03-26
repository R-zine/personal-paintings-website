import { colors } from "../global/styles/color";
// @ts-ignore
import PurplePainting from "./../assets/purple.jpg";
// @ts-ignore
import BluePainting from "./../assets/pink.jpg";
// @ts-ignore
import GreenPainting from "./../assets/green.jpg";
// @ts-ignore
import OrangePainting from "./../assets/orange.jpg";

export const chooseLeftColors = (i) =>
  i === 1
    ? colors.blue
    : i === 2
    ? colors.green
    : i === 4
    ? colors.orange
    : i === 7
    ? colors.purple
    : colors.darkBackground;

export const chooseRightColors = (i) =>
  i === 0
    ? colors.blue
    : i === 3
    ? colors.green
    : i === 5
    ? colors.orange
    : i === 6
    ? colors.purple
    : colors.darkBackground;

export class Painting {
  constructor(url, name, tech, year) {
    this.url = url;
    this.name = name;
    this.tech = tech;
    this.year = year;
  }
}

export const Paintings = [
  new Painting(PurplePainting, "Vihren in Summer", "Oil on Paper", 2014),
  new Painting(GreenPainting, "Rodope in the Mist", "Oil on Paper", 2015),
  new Painting(BluePainting, "The Beautiful Rodope", "Oil on Paper", 2015),
  new Painting(OrangePainting, "The Colorful Balkans", "Oil on Paper", 2014),
];
