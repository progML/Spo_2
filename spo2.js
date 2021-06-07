const res = require(".")
const readline = require("readline-sync")

if (process.argv.length < 3) {
    console.log("node Spo_2.js [-l -i] <dev path>");
    console.log("-l вывод списка девайсов подключенных к ОС");
    console.log("-i терминальный режим");
    process.exit(1);
}

if (process.argv[2] == '-l') {
    res.Init();
    res.ProbeDevices();
    let res = res.IterateDevices();
    console.log(res);
}
else if (process.argv[2] == "-i" && process.argv.length >= 4) {
    if (res.Open(process.argv[3])) {
        console.log("Неккоректный путь!");
        process.exit(1);
    }
    res.InitFs();
    while (true) {
        res.PrintCurrentDir();
        let str = readline.question("");
        let res = res.ProcessInput(str);
        console.log(res);
    }
    res.Close();
}
else {
    console.log("Не правильный аргумент");
    process.exit(1);
}


