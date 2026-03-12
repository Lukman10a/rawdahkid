const fs = require('fs');
const pdf = require('pdf-parse');

const dataBuffer = fs.readFileSync('C:\\Users\\Abdulrauf Lukman\\Downloads\\G5_GM_NL_TE_PacingPathwaysGuide.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('g5_syllabus.txt', data.text);
    console.log('PDF text extracted to g5_syllabus.txt');
}).catch(function(error) {
    console.error('Error parsing PDF:', error);
});
