function overheatCPU() {
    while(true) {
        let now = Date.now();
        while(Date.now() - now < 1) {
            // より複雑な浮動小数点演算を無限ループ内で行う
            for(let i = 0; i < 1000000; i++) {
                Math.sqrt(Math.random() * 3333);
            }
        }
    }
}

overheatCPU()
