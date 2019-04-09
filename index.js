// --- shell finder using nodejs
// --- coded by ibnu syawall

// modules

var shell = require('shelljs' );  // npm insatll shelljs
var warna = require('colors'  );  // npm install colors
var readl = require('readline');  // npm install readline
var ambil = require('request' );  // npm install request
var bacaf = require('fs');

// set colors

warna.setTheme({
  a: ['white', 'bgBlue'],
  b: 'red', c: 'yellow',
  d: 'blue', e: 'green'
});

tampil = shell.echo; jalan = shell.exec;

const tanya = readl.createInterface({
  input : process.stdin,
  output: process.stdout
});

// start

tampil(' H'.b + 'arap tunggu ...'); jalan('clear');tampil('');

tampil('    ['.b + ' FINDSHELL' + ' | '.d + '407 AUTHENTIC EXPLOIT ' + ']    '.b);
tampil('     by : ibnu syawall '); tampil('');
tampil(' ['.b + 'MENU' + '] '.b + ':'); tampil('') ;
tampil('       ['.d + '1' + '] '.d + 'FIND SHELL ' + '  ['.d + '99' + '] '.d + 'HELP');
tampil('       ['.d + '2' + '] '.d + 'ADD PAYLOAD' + '  ['.d + '00' + '] '.d + 'QUIT');
tampil('');

tanya.question(' ['.c + '?' + '] '.c + '[FShELL] > ', (pilih) => {
  if (`${pilih}` == 1 || `${pilih}` == 01) {
    tampil(''); tampil(' |----------| ----- |----------|'); tampil('');
    tanya.question(' ['.c + '!' + '] '.c + 'Domain Name : ', (domain) => {
      tanya.question(' ['.c + '!' + '] '.c + 'Shell Name  : ', (shel) => {
        const baris = readl.createInterface({
          input : bacaf.createReadStream('payload.txt'),
          crlfDelay : Infinity
        }); baris.on('line', (line) => {
           ambil('http://' + `${domain}` + `${line}` + `${shel}`, function (error, response, body) {
             if (response.statusCode == 200) {
                var berhasil = `[ http://${domain}${line}${shel} ]`;
                bacaf.appendFile('found.txt', berhasil, function (err) {
                  if (err) throw err;
                });
              tampil('');
              tampil(` DOMAIN NAME   : ${domain}` );
              tampil(` SHELL NAME    : ${shel}`   );
              tampil(` USING PAYLOAD : ${line}`   );
              tampil(' STATUS        : ' + 'FOUND !'.e);
             } else {
              tampil('');
              tampil(` DOMAIN NAME   : ${domain}`);
              tampil(` SHELL NAME    : ${shel}`  );
              tampil(` USING PAYLOAD : ${line}`  );
              tampil(' STATUS        : ' + 'NOT FOUND SHELL BACKDOOR'.b)
             }
           });
        }); tanya.close();
      });
    });
  } else if (`${pilih}` == 2 || `${pilih}` == 2) {
     tampil(''); tampil(' |----------| ----- |----------|'); tampil('');
     tanya.question(' ['.c + '!' + '] '.c + 'PAYLOAD   : ', (payload) => {
       var isi = `\n${payload}`
       bacaf.appendFile('payload.txt', isi, function (err) {
         if (err) {
           tampil(` Gagal menyimpan payload ${payload}`)
         } else {
           tampil(''); tampil('     ['.e + ` ${payload} ` + ']      '.e)
           tampil(''); tampil('  ' + `Payload berhasil disimpan`.a);
         }
       }); tanya.close();
     });
  } else if (`${pilih}` == 99) {
     tampil('');tampil('   ['.b + '  FIND SHELL BACKDOOR ON WEBSITE  ' + ']   '.b);
     tampil('    ' + 'v 0.0.1');
     tampil(''); tampil('  HELP FOR THIS TOOLS : '); tampil('');
     tampil('  enter number 1 to find a backdoor shell with a payload that has been prepared √ ');
     tampil('  enter number 2 to add the payload to the list provided √ ');
     tampil('  enter number 99 for help with this tool √ ');
     tampil('  enter number 00 to exit this tool √ ');
     tampil(''); tampil('  |-------- about me -------|   ');
     tampil(''); tampil('       Name  : Ibnu Syawal       ');
     tampil('       Title : ShellFinder       ');
     tampil('      407 AUTHENTIC EXPLOIT');
     tampil(''); tampil('  |-------- about me -------|   '); tanya.close();
  } else if (`${pilih}` == 00 || `${pilih}` == 0) {
     tampil(''); tampil('     ['.b + '   Thanks for using this tools ^_^   ' + ']'.b);
     tampil(''); tanya.close();
  } else {
     tampil(''); tampil(' ['.c + '×' + '] '.c + '['.c + '  Command not found !  ' + ']'.c + ' ['.c + '×' + '] '.c);
     tampil(''); tanya.close();
  }
});
