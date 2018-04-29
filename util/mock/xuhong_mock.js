Mock.mock('/user',{
	"object|1": {
		"array": {
			"code": 1,
			"msg": "success"
		},
		// "array": {
		// 	"code": 0,
		// 	"msg": "没有该用户信息"
		// },
		// "array": {
		// 	"code": 0,
		// 	"msg": "密码错误"
		// },
		// "array": {
		// 	"code": 0,
		// 	"msg": "没有该用户信息"
		// },
	}
})
	
Mock.mock('/money', {
    'list|1-10': [{
        'type|1-2': 2,
        'name': '@cname()',
        'reason': '@cword(3, 10)',
        'startTime': '@date("yyyy年MM月dd日")',
        'endTime': '@date("yyyy年MM月dd日")',
        'id': 1
    }]
})

Mock.mock('/buy', {
    'list|1': [
    {
        "code": 1,
		"msg": "success"
    },
    {
        "code": 0,
		"msg": "购买失败"
    }
    ]
})

Mock.mock('/getPeople', {
    'list': {
    'kk|10-15': [{"name": '@cname'}],
    'll|10-15': [{"name": '@cname'}],
    'pp|10-15': [{"name": '@cname'}]
    }
})
