var stream = new ActiveXObject("ADODB.Stream");
stream.CharSet = "utf-8";
stream.Open();
stream.LoadFromFile("C:\\\\Users\\\\jorge\\\\.gemini\\\\antigravity\\\\scratch\\\\EnferTest\\\\data.js");
var data = stream.ReadText();
stream.Close();

function getNewTema(q) {
  var text = (q.conceptoMapa + " " + q.pregunta + " " + q.opciones.join(" ")).toLowerCase();
  
  if (q.tema === 1) {
    if (/(weiner|kelley|locus de control|coste.beneficio|peplau|introspecci.n|insight|hol.stica)/i.test(text)) return 2;
    if (/(neurotransmisores|dopamina|serotonina|sistema l.mbico|am.gdala)/i.test(text)) return 4;
  }
  if (q.tema === 2) {
    if (/(esquizofrenia|s.ntomas positivos|s.ntomas negativos|s.ntomas cognitivos|delirios|alucinaciones|regla de las 3c|s.ndrome neurol.ptico maligno)/i.test(text)) return 5;
    if (/(trastorno bipolar|man.a|hipoman.a|ciclotimia|litio)/i.test(text)) return 6;
    if (/(depresi.n mayor|desesperanza|terapia electroconvulsiva|tec|antidepresivos)/i.test(text)) return 7;
  }
  if (q.tema === 3) {
    if (/(ansiedad grave|angustia|ataques de p.nico|agorafobia|fobia social|nosofobia)/i.test(text)) return 8;
    if (/(trastorno obsesivo-compulsivo|toc|compulsiones|obsesiones|dismorfia muscular|trastorno por acumulaci.n|tricotiloman.a|excoriaci.n)/i.test(text)) return 9;
    if (/(trastorno de estr.s postraum.tico|tept|estr.s agudo|trauma)/i.test(text)) return 10;
    if (/(amnesia disociativa|fuga disociativa|despersonalizaci.n|identidad m.ltiple)/i.test(text)) return 11;
    if (/(trastorno de s.ntomas som.ticos|trastorno facticio|trastorno por conversi.n)/i.test(text)) return 12;
  }
  if (q.tema === 4) {
    if (/(trastorno por atracones|pica|rumiaci.n|anorexia)/i.test(text)) return 13;
    if (/(enuresis|encopresis)/i.test(text)) return 14;
    if (/(trastornos de la personalidad|cl.ster a|cl.ster b|histri.nicos|narcisistas|cl.ster c)/i.test(text)) return 15;
    if (/(parafilias|masoquismo|voyeurismo)/i.test(text)) return 16;
    if (/(adicciones|sustancia|alcohol|cannabis|alucin.genos|s.ndrome de abstinencia qu.mico)/i.test(text)) return 17;
  }
  if (q.tema === 5) {
    if (/(trastorno del espectro autista|tea|s.ndrome de asperger|tdah|tourette|trastorno negativista desafiante|explosivo intermitente|discapacidad intelectual)/i.test(text)) return 19;
  }
  if (q.tema === 6) {
    if (/(riesgo suicida|autolisis|prioridades de enfermer.a en intentos de suicidio)/i.test(text)) return 21;
  }
  return q.tema;
}

var lines = data.split('\n');
var insideQuestion = false;
var questionStart = -1;

var maxLine = lines.length;
for (var k = 0; k < lines.length; k++) {
  if (lines[k].indexOf('// TEMA 1: HISTORIA DE LA PSIQUIATR') !== -1) {
    maxLine = k;
    break;
  }
}

var updated = 0;

for (var i = 0; i < maxLine; i++) {
  var lineTrim = lines[i].replace(/^\s+|\s+$/g, '');
  if (lineTrim === '{') {
    if (i + 1 < lines.length && lines[i + 1].indexOf('asignatura:') !== -1) {
      insideQuestion = true;
      questionStart = i;
    }
  }
  
  if (insideQuestion && (lineTrim === '},' || lineTrim === '}')) {
    var blockTextArr = [];
    for (var m = questionStart; m <= i; m++) {
      blockTextArr.push(lines[m]);
    }
    var blockText = blockTextArr.join('\n');
    var obj;
    try {
      var evalText = blockText.replace(/^\s+|\s+$/g, '');
      if (evalText.charAt(evalText.length - 1) === ',') {
        evalText = evalText.slice(0, -1);
      }
      obj = eval('(' + evalText + ')');
      
      var newTema = getNewTema(obj);
      if (newTema !== obj.tema) {
        for (var j = questionStart; j <= i; j++) {
          if (/\s+tema:\s+\d+,/.test(lines[j])) {
            lines[j] = lines[j].replace(/tema:\s+\d+/, "tema: " + newTema);
            updated++;
            break;
          }
        }
      }
    } catch(e) {
    }
    insideQuestion = false;
  }
}

var outStream = new ActiveXObject("ADODB.Stream");
outStream.Type = 2;
outStream.CharSet = "utf-8";
outStream.Open();
outStream.WriteText(lines.join('\n'));
outStream.SaveToFile("C:\\\\Users\\\\jorge\\\\.gemini\\\\antigravity\\\\scratch\\\\EnferTest\\\\data.js", 2);
outStream.Close();

WScript.Echo("Updated " + updated + " questions.");
