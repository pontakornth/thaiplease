import dict from './dict';

function translate(paragraph) {
  let copy = paragraph;
  dict.forEach((value, key) => {
    copy = copy.replace(key, value);
  });
  return copy;
}

export default translate;
