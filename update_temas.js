const fs = require('fs');

let data = fs.readFileSync('C:\\\\Users\\\\jorge\\\\.gemini\\\\antigravity\\\\scratch\\\\EnferTest\\\\data.js', 'utf8');

function getNewTema(q) {
  let text = (q.conceptoMapa + " " + q.pregunta + " " + q.opciones.join(" ")).toLowerCase();
  
  if (q.tema === 1) {
    if (/(weiner|kelley|locus de control|coste\/beneficio|coste \/ beneficio|peplau|introspección|insight|holística)/i.test(text)) return 2;
    if (/(neurotransmisores|dopamina|serotonina|sistema límbico|amígdala)/i.test(text)) return 4;
  }
  if (q.tema === 2) {
    if (/(esquizofrenia|síntomas positivos|síntomas negativos|síntomas cognitivos|delirios|alucinaciones|regla de las 3c|síndrome neuroléptico maligno)/i.test(text)) return 5;
    if (/(trastorno bipolar|manía|hipomanía|ciclotimia|litio)/i.test(text)) return 6;
    if (/(depresión mayor|desesperanza|terapia electroconvulsiva|tec|antidepresivos)/i.test(text)) return 7;
  }
  if (q.tema === 3) {
    if (/(ansiedad grave|angustia|ataques de pánico|agorafobia|fobia social|nosofobia)/i.test(text)) return 8;
    if (/(trastorno obsesivo-compulsivo|toc|compulsiones|obsesiones|dismorfia muscular|trastorno por acumulación|tricotilomanía|excoriación)/i.test(text)) return 9;
    if (/(trastorno de estrés postraumático|tept|estrés agudo|trauma)/i.test(text)) return 10;
    if (/(amnesia disociativa|fuga disociativa|despersonalización|identidad múltiple)/i.test(text)) return 11;
    if (/(trastorno de síntomas somáticos|trastorno facticio|trastorno por conversión)/i.test(text)) return 12;
  }
  if (q.tema === 4) {
    if (/(trastorno por atracones|pica|rumiación|anorexia)/i.test(text)) return 13;
    if (/(enuresis|encopresis)/i.test(text)) return 14;
    if (/(trastornos de la personalidad|clúster a|clúster b|histriónicos|narcisistas|clúster c)/i.test(text)) return 15;
    if (/(parafilias|masoquismo|voyeurismo)/i.test(text)) return 16;
    if (/(adicciones|sustancia|alcohol|cannabis|alucinógenos|síndrome de abstinencia químico)/i.test(text)) return 17;
  }
  if (q.tema === 5) {
    if (/(trastorno del espectro autista|tea|síndrome de asperger|tdah|tourette|trastorno negativista desafiante|explosivo intermitente|discapacidad intelectual)/i.test(text)) return 19;
  }
  if (q.tema === 6) {
    if (/(riesgo suicida|autolisis|prioridades de enfermería en intentos de suicidio)/i.test(text)) return 21;
  }
  return q.tema;
}

let lines = data.split('\\n');
let insideQuestion = false;
let questionStart = -1;

let maxLine = lines.findIndex(l => l.includes('// TEMA 1: HISTORIA DE LA PSIQUIATRÍA Y MODELOS'));
if (maxLine === -1) maxLine = lines.length;

let updated = 0;

for (let i = 0; i < maxLine; i++) {
  if (lines[i].trim() === '{') {
    if (i + 1 < lines.length && lines[i + 1].includes('asignatura:')) {
      insideQuestion = true;
      questionStart = i;
    }
  }
  
  if (insideQuestion && (lines[i].trim() === '},' || lines[i].trim() === '}')) {
    let blockText = lines.slice(questionStart, i + 1).join('\\n');
    let obj;
    try {
      let evalText = blockText.trim();
      if (evalText.endsWith(',')) evalText = evalText.slice(0, -1);
      
      // Wrap in parentheses to evaluate as an expression
      obj = eval('(' + evalText + ')');
      
      let newTema = getNewTema(obj);
      if (newTema !== obj.tema) {
        for (let j = questionStart; j <= i; j++) {
          if (lines[j].match(/\\s+tema:\\s+\\d+,/)) {
            lines[j] = lines[j].replace(/tema:\\s+\\d+/, `tema: ${newTema}`);
            updated++;
            break;
          }
        }
      }
    } catch(e) {
      console.error("Error evaluating block at line", questionStart, e);
    }
    insideQuestion = false;
  }
}

fs.writeFileSync('C:\\\\Users\\\\jorge\\\\.gemini\\\\antigravity\\\\scratch\\\\EnferTest\\\\data.js', lines.join('\\n'));
console.log(`Updated ${updated} questions.`);
