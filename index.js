const Native = require('bindings')('source');
exports.Init = Native.Init;
exports.ProbeDevices = Native.ProbeDevices;
exports.IterateDevices = Native.IterateDevices;
exports.FlexOpen = Native.Open;
exports.FlexInitFs = Native.InitFs;
exports.FlexProcessInput = Native.ProcessInput;
exports.FlexPrintCurrentDir = Native.PrintCurrentDir;
exports.FlexClose = Native.Close;