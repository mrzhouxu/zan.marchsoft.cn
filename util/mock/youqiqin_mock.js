
Mock.mock("https://localhost:8080/user/personalCenter/getApplyType",{
	"code": "0",
	"msg": "success",
	"data": [
        {
          label: '项目',
          value: '1'
        },
        {
          label: '讲课',
          value: '2'
        },
        {
          label: '活动',
          value: '3'
        },
        {
          label: '英语口语',
          value: '4'
        }
      ]
})
//退出登录
Mock.mock("https://localhost:8080/user/login_out","get",{
	"code":"0",
	"msg":"成功"
})

// 添加匿名留言
Mock.mock('https://localhost:8080/user/personalCenter/addTalk',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        // 'list|1-10': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
            "content":'@cword(5, 30)',
            "code":"0",
	        "msg":"success",
            // "time|1-10": 10,
            // 'picture|1':[
            // 	"./static/feedback.png",
            // 	"./static/feedback2.png",
            // 	"./static/feedback3.png",
            // ],
        // }]
})

// 获取匿名留言
Mock.mock('https://localhost:8080/user/personalCenter/getTalk',{
        // "code": "0",
		// "msg": "success",
		"data": [
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
			{
				'content': '@cparagraph(20)',
				'create_time': '@integer(1525273647, 1526273647)'
			},
		]
})
// Mock.mock('https://localhost:8080/new_infor',{
//     // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
//         'list|5': [{
//             // 属性 id 是一个自增数，起始值为 1，每次增 1
//             // 'id|+1': 1
//             'contents':'@cword(10, 25)',
//             // 'year':'@date("yyyy.MM.dd")',
//             // 'hour':'@time("HH:mm:ss")',
//             'states|1':[{
//             	'msg': "已拒绝",
//             },
//             {
//             	'msg':"已接受",
//             }
//             ]
//         }]
// })


// 修改密码
Mock.mock('https://localhost:8080/user/personalCenter/updatePassword',{
// 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    // 'list|1': [
        // {
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
	"code":"0",
	"msg":"修改成功"
	
	        
   //  },
   //  {
   //  	"code":"2",
   //      "msg":"失败"	
   //  }
// ]
// "boolean|1": true

})


// 申请点赞币
Mock.mock('https://localhost:8080/user/personalCenter/addApply',{
	"code":"0",
	"msg":"成功"
})


// 购买点赞币
Mock.mock('https://localhost:8080/alipay/wappay',{
	"code": "0",
	"msg": "success",
})



Mock.mock('https://localhost:8080/order',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|5': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
            'content':'@cword(10, 25)',
            'year':'@date("yyyy.MM.dd")',
            'hour':'@time("HH:mm:ss")',
            'state|1':[{
            	'msg': "已拒绝",
            },
            {
            	'msg':"已接受",
            }
            ],
        }]
})

// 我的订单
Mock.mock('https://localhost:8080/user/personalCenter/getOrderList',{
	"code": "0",
	"msg": "success",
	"result": [
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
			'status':1,
			'resaon':'@cword(5, 30)'
	    },	
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
			'status':1,
			'resaon':'@cword(5, 30)'
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
			'status':1,
			'resaon':'@cword(5, 30)'
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
			'status':1,
			'resaon':'@cword(5, 30)'
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
			'status':1,
			'resaon':'@cword(5, 30)'
		},
		{
			'content': '@cword(5, 30)',
			'create_time|1-10': 10,
			'status':1,
			'resaon':'@cword(5, 30)'
		},
	]
})



Mock.mock('https://localhost:8080/order',{
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
        'list|5': [{
            // 属性 id 是一个自增数，起始值为 1，每次增 1
            // 'id|+1': 1
            'content':'@cword(10, 25)',
			'name': '@cname',
            // 'year':'@date("yyyy.MM.dd")',
            // 'hour':'@time("HH:mm:ss")',
            'state|1':[{
            	'msg': "已拒绝",
            },
            {
            	'msg':"已接受",
            }
            ],
        }]
})


// 接受订单任务>历史记录
Mock.mock('https://localhost:8080/user/personalCenter/getProcessOrderr',{
	"data":[
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		},
		{
			'content':'@cword(10, 20)',
			'name': '@cname',
			'status|1':[{
				'msg': "已拒绝",
			},
			{
				'msg':"已接受",
			}
			]
		}
	]
})
// })

