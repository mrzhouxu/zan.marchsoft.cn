//登录
Mock.mock('http://localhost:3030/user/login',{
	"object|1": [{
			"code": 0,
			"msg": "success"
		},
		{
			"code": 1,
			"msg": "没有该用户信息"
		},
		{
			"code": 1,
			"msg": "密码错误"
		},
		{
			"code": 1,
			"msg": "没有该用户信息"
		},
	]
})
	
Mock.mock('http://localhost:3030/user/seeCon', {
    'list|1-10': [{
        'coin_id|1-2': 2,
        'name': '@cname()',
        'reason': '@cword(3, 10)',
        'startTime': '@date("yyyy年MM月dd日")',
        'endTime': '@date("yyyy年MM月dd日")',
        'id|+1': 1
    }]
})
//无限加载
Mock.mock('http://localhost:3030/rr', {
    'list|10': [{
        'name|1-500': 1
    }]
})

// 已过期
Mock.mock('http://localhost:3030/user/thumbsUp/getOverdueCoinList', {
    'list|1': [
    {
        "code": 0,
        "msg": "success",
        'list|1-10': [{
            'coin_id|1-2': 2,
            'startTime': '@date("yyyy年MM月dd日")',
            'endTime': '@date("yyyy年MM月dd日")',
            'id|+1': 1
        }]
    },
    {
        "code": 1,
        "msg": "失败",
        'list|1-10': [{
            'coin_id|1-2': 2,
            'startTime': '@date("yyyy年MM月dd日")',
            'endTime': '@date("yyyy年MM月dd日")',
            'id|+1': 1
        }]
    }
    ]
})

// 已使用
Mock.mock('http://localhost:3030/user/thumbsUp/getUsedCoinList', {
    'list|1': [
    {
        "code": 0,
        "msg": "success",
        'list|1-10': [{
            'coin_id|1-2': 2,
            'to_user_name': '@cname()',
            'reason': '@cword(3, 10)',
            'startTime': '@date("yyyy年MM月dd日")',
            'endTime': '@date("yyyy年MM月dd日")',
            'id|+1': 1
        }]
    },
    {
        "code": 1,
        "msg": "失败",
        'list|1-10': [{
            'coin_id|1-2': 2,
            'to_user_name': '@cname()',
            'reason': '@cword(3, 10)',
            'startTime': '@date("yyyy年MM月dd日")',
            'endTime': '@date("yyyy年MM月dd日")',
            'id|+1': 1
        }]
    }
    ]
})

// 未使用
Mock.mock('http://localhost:3030/user/thumbsUp/getCoinList', {
    'list|1': [
    {
        "code": 0,
        "msg": "success",
        'list|1-10': [{
            'coin_id|1-2': 2,
            'start_time': '@date("yyyy年MM月dd日")',
            'over_time': '@date("yyyy年MM月dd日")',
            'id|+1': 1
        }]
    },
    {
        "code": 1,
        "msg": "失败",
        'list|1-10': [{
            'coin_id|1-2': 2,
            'start_time': '@date("yyyy年MM月dd日")',
            'over_time': '@date("yyyy年MM月dd日")',
            'id|+1': 1
        }]
    }
    ]
})

Mock.mock('http://localhost:3030/buy', {
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

//点赞表单
Mock.mock('http://localhost:3030/user/thumbsUp', {
    'list|1': [
    {
        "code": 0,
        "msg": "success"
    },
    {
        "code": 1,
        "msg": "购买失败"
    }
    ]
})

Mock.mock('http://localhost:3030/getPeople', {
    'list': {
    'kk|10-15': [{'id|+1': 1,"name": '@cname'}],
    'll|10-15': [{'id|+1': 1,"name": '@cname'}],
    'pp|10-15': [{'id|+1': 1,"name": '@cname'}]
    }
})

Mock.mock('http://localhost:3030/group', {
    'list|1': [
    {
        "code": 1,
		"msg": "success"
    },
    {
        "code": 0,
		"msg": "发送失败"
    }
    ]
})

Mock.mock('http://localhost:3030/getOrder', {
    'list|1-5': [{
        "name": '@cname',
		"number|1-10": 1,
		"status|1": [
		{
			"msg": "交易失败"
		},
		{
			"msg": "交易成功"
		}
		],
    }]
})

Mock.mock('http://localhost:3030/grant', {
    'list|1': [
    {
        "code": 1,
		"msg": "success"
    },
    {
        "code": 0,
		"msg": "发放失败"
    }
    ]
})
