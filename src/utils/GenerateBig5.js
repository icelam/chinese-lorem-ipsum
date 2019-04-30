import { COMMON_BIG5, COMMON_PUNCTUATION } from '@data/words'

/* Generate an Integer within specified range */
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

/* Generate random chinese characters of specified length */
const generateBig5 = (length) => {
  let str = '';

  for (let i = 1; i <= length; i++) {
    const wordIndex = randomInt(0, COMMON_BIG5.length - 1);
    str += COMMON_BIG5[wordIndex];
  }
  return str;
};

/* Generate article title */
const generateTitle = () => generateBig5(randomInt(8, 15));

/* Generate paragraph like texts */
const generateParagraph = (desiredLength) => {
  // Minus 1 to leave room for full stop at the end of paragraph
  desiredLength--;

  let paragraph = '';

  const minSentenceLength = 3;
  const maxSentenceLength = 20;

  while (paragraph.length < desiredLength) { 
    const punctuationIndex = randomInt(0, COMMON_PUNCTUATION.length - 1);
    const punctuation = COMMON_PUNCTUATION[punctuationIndex]; // random punctuation

    // Append punctuation, insert punctuation only when paragraph is not empty or not at the end
    if (paragraph.length > 0 && desiredLength - paragraph.length > minSentenceLength ) {
      paragraph += punctuation;

      // Generate words inside brackets
      if (punctuation === '「') {
        const bracketWordLength = randomInt(1, 10);
        paragraph += generateBig5(bracketWordLength);
        paragraph += '」';
      } 
    }
  
    // Prevent sentence length exceeds
    const remainingLength = desiredLength - paragraph.length;
    const randomMax = remainingLength < maxSentenceLength ? remainingLength : maxSentenceLength;

    // Generate Paragraph
    if (randomMax > minSentenceLength) {
      const sentenceLength = randomInt(minSentenceLength, randomMax);
      paragraph += generateBig5(sentenceLength);
    } else { // Fill remaining to match paragraph length
      paragraph += generateBig5(randomMax);
    }
  }

  paragraph += '。';

  return paragraph;
};

const genrateArticle = (desiredLength) => {
  const minParagraphLength = 50;
  const maxParagraphLength = 100;

  let paragraphContents = [];
  let currentArticleLength = 0;

  while (currentArticleLength < desiredLength) {
    // Prevent paragraph length exceeds
    const remainingLength = desiredLength - currentArticleLength;
    const randomMax = remainingLength < maxParagraphLength ? remainingLength : maxParagraphLength;
    let paragraphLength = randomMax > minParagraphLength ? randomInt(minParagraphLength, randomMax) : randomMax;
    
    // Prevent short paragraph at the end, include next paragraph in to current paragraph when next remaining length < 10
    const nextRandomMax = remainingLength - paragraphLength ;
    if (nextRandomMax < 10) {
      paragraphLength += nextRandomMax;
    }

    // Generate paragraph and store into array
    let paragraph = '';
    paragraph = generateParagraph(paragraphLength); 
    paragraphContents.push(paragraph);
    currentArticleLength += paragraph.length;
  } 

  return paragraphContents;
}

export { generateTitle, genrateArticle };