setInterval(function (){
    let macList = document.querySelector("#mac").value.split("\n");
    for (let i = 0; i < macList.length; i++) {
        try{
            macList[i] = new MAC(macList[i]);
        } catch (e) {
            macList.splice(i, 1);
            i--;
        }
    }
    let root = null;
    for (const mac of macList) {
        if (root === null || mac.isSmallerThan(root)) root = mac;
    }
    console.log(root);
    document.querySelector("#result").innerText = root == null ? "" : `Il MAC address root è: ${root}`;
}, 100);

class MAC {

    constructor(mac) {
        if (mac === null) {
            throw new Error("MAC cannot be null");
        }
        if (mac.length !== 17) {
            throw new Error("MAC must be 17 characters long");
        }
        if (!mac.match(/^[A-Fa-f0-9]{2}(:[A-Fa-f0-9]{2}){5}$/)) {
            throw new Error("MAC must be in the format XX:XX:XX:XX:XX:XX");
        }
        this.mac = mac;
    }

    getMacNoColons() {
        return this.mac.replace(/:/g, "");
    }

    getMacAsNumber() {
        return parseInt(this.getMacNoColons(), 16);
    }

    isSmallerThan(mac) {
        if (mac === null) {
            throw new Error("MAC cannot be null");
        }
        return this.getMacAsNumber() < mac.getMacAsNumber();
    }

    equals(o) {
        if (this === o) return true;
        if (!(o instanceof MAC)) return false;
        return this.mac === o.mac;
    }

    hashCode() {
        return this.mac.hashCode();
    }

    toString() {
        return this.mac;
    }
}