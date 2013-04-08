var fs = require('fs');

var Lingo = function() {
 
  var EQ = function(x) {
    return function(y) {
      return x == y;
    };
  };

  var NOTIN = function(array, eq) {
    return function(e) {
      return array.filter(eq(e)).length == 0;
    }
  };

  /**
   * Language to completion map.
   */
  var report = {};
  var ignoredDirectories = [];
  var ignoredFiles = [];

  var addLang = function(name) {
    report[name] = 0;
    var contents = fs.readdirSync(name);
    contents.filter(NOTIN(ignoredFiles, EQ)).
      forEach(function(prog) {
        report[name]++;
      });
  };

  var boxify = function(count, total) {
    var displayCount = Math.ceil(count * 30 / total);
    var retVal = '';
    while(displayCount-- > 0) {
      retVal += '&#9608;';
    }
    return retVal;
  };

  var reportLooper = function(f) {
    for (var lang in report) {
      if(report.hasOwnProperty(lang)) {
        f(lang, report[lang]);
      }
    }
  };

  var generateMd = function(filename) {
    var content = 'Language Progress\n=========\n'
    content += '<table>';
    var total = 0;
    reportLooper(function(lang, count) {
      total += count;
    }); 
    reportLooper(function(lang, count) {
      content += '<tr><td>' + lang + '</td>' +
          '<td>' + boxify(count, total) + '</td></tr>';
    });
    content += '<tr><td>Total</td><td>' + boxify(total, total) + '</td></tr>';
    content += '</table>';

    fs.writeFile(filename, content);
  };

  var generateReport = function(out) {
    var contents = fs.readdirSync('.');
    contents.filter(NOTIN(ignoredDirectories, EQ)).
        forEach(function(lang) {
      var stat = fs.statSync(lang);
      if (stat.isDirectory()) {
        addLang(lang);
      }
    });
    generateMd(out);
  };

  return {
    ignoreDirectories : function(names) {
      ignoredDirectories = names;
      return this;
    },
    ignoreFiles : function(names) {
      ignoredFiles = names;
      return this;
    },
    /**
     * Generates report.
     * @param {string} outputFileName .
     * @return {Lingo} Lingo object
     */
    generate: function(outputFileName) {
      generateReport(outputFileName)
      return this;  
    }
  };
};

var lingo = Lingo().
    ignoreDirectories(['.git']).
    ignoreFiles(['.gitignore']).
    generate('REPORT.md');
