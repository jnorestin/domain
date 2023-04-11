/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "that"];
  let adjs = ["great", "big", "small"];
  let nouns = ["joggernet", "racom", "feeorg", "tourism"];
  let extensions = ["com", "net", "org"];
  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let extension of extensions) {
          let _noun = noun;
          // check if the last 3 characters of object are equals to the last 3 characters of variable extension
          if (_noun.slice(-3) == extension) {
            // if true we need to slices the last 3 characters of noun
            _noun = _noun.substring(0, _noun.length - 3);
          }
          // if they don't match, don't do anything
          // print the full domain
          console.log(`${pronoun}${adj}${_noun}.${extension}`);
        }
      }
    }
  }
};
