const waitData = [
    '等等人家呗~',
    '是不是感觉有一点慢？',
    '慢就对了，我就是不优化~',
    '冰糕为什么会冒气？',
    '大部分的人一次都只用单边鼻孔呼吸。',
    '好羡慕你们，穿着各种名牌纵横整个夏天，而我只有一张绝色的脸。',
    '每个人都有幸福的权利，少数人有幸福的能力。',
    '道理我都懂，可我，就是不爱讲道理啊.',
    '别指望减肥了，看八戒走了十万八千里也没瘦，而且，他还吃素。',
    '假如生活欺骗了你，不要悲伤不要心急，它明天还会欺骗你。',
    '趁好看的时候多照照镜子吧，毕竟这种错觉不是每天都有。',
    '等我变得更好再去喜欢你吧，后来想想算了，变得这么好干嘛还去喜欢你。',
    '喜欢一个人就勇敢表白，也许你还能知道你是几号备胎。',
    '很多时候你不拼一把，你根本不知道你自己有多差劲',
    '丑小鸭变成白天鹅，并不只是它有多努力，而是它的父母就是白天鹅。',
    '比你优秀的人还在努力，那你努力有什么用。',
    '你只有努力过了才知道，智商上的差距是不可逾越的。',
    '努力不一定会成功，但是不努力一定会很舒服。',
    '女生的冷暖自知什么的，在长得好看面前弱爆了。',
    '对今天解决不了的事情，也不必着急。因为明天还是解决不了。',
    '出卖自己的灵魂和原则并不丢人，丢人的是没能卖一个好价钱。',
    '有些妹子喜欢带上墨镜自拍。其实再戴上口罩，会显得更美。',
    '永远不要忘记，吾等为何而战。',
    '为了什么？梦想？荣誉？正义？德玛西亚？',
    '为了那些不能作战的人而战！',
    '布隆~度过了美好的又一天！',
    '你让我想起了阿加莎我老家最棒的奶牛。',
    '阿利斯塔我想介绍一头母牛给你认识。',
    '在我童年时我妈也送我小熊的~',
    '打完这场后，我们一起喝一杯你喜欢山羊奶吗？',
    '你想喝什么酒~古拉加斯我想喝羊奶',
    '泰达米尔这很有趣~对吗？',
    '你玩得高兴吗？我的朋友',
    '你的头发我们再弗雷尔卓德可看不到这种东西。',
    '枪法不错~但想打中他们你得等下一次。',
    '我的盾牌会保护这块盾牌的。',
    '我宁愿犯错，也不愿什么都不做。',
    '弄碎他们，皮克斯。',
    '死亡如风，常伴吾身。',
    '长路漫漫，惟剑做伴。',
    '正义，好个冠冕堂皇之词。',
    '吾虽浪迹天涯，却未迷失本心。',
    '面对疾风吧！',
    '我的剑，比什么都重要，除了美酒。',
    '胜利女神在微笑。',
    '我于杀戮之中盛放，亦如黎明中的花朵。',
    '我用双手成就你的梦想。',
    '只有飞速的旋转，才可以止住我的泪水，忘记你的模样。',
    '他们都说我是穿着东方盔甲的奇怪人，但我只想顶在最前面，用我的长枪保护我的朋友。',
    '一曲终了、繁花散尽、伊人已逝，只余一声空叹。',
    '妩媚倾城的面容 我蛊惑万千众生 孰不知 心里 早有了一个人 ..却只能无尽的思念 你送我的宝珠 我一直带着 只因为我能看见你的身影。',
    '我醒来了，但是我什么都不记得，我很害怕，我包裹住我的身体，然后独自在黑暗中哭泣。',
    '我只是部落遗子，你确是高贵公主，我愿把我生命的力量化为三刀为你而战，只为证明我－－配的上你…',
    '我很想陪伴在你身边，只是你不允许，没关系，在你需要帮助时，我还是会出现在你身边。',
    '我一路种下了蘑菇、只为让你知道回家的路。',
    '我一直急速前行 穿梭于人人之间 试图叫应接不暇的风景让我褪去对你的思念',
    '我蒙上自己的双眼，只想记住最后看你的那一眼。 我刺瞎自己的双眼 只为记住那逝去的红颜。',
    '纵然前路迷茫，纵然天隔一方，纵然我手中的刀刃已然破碎，也无法阻挡我寻找你的道路。',
    '当黑色的玫瑰悄悄绽放，除了镜花水月，又有谁能够了解我的心？',
    '我可以想去哪就去哪，但是我只想进入你的心里。',
    '你喜欢纯洁，于是我就将宝石制成了盔甲，只是，闪耀的光芒中，却已经映不出你的身影.',
    '我对你的爱就如闪电，狂暴而剧烈，飞出的飞镖是向你传达的思念。',
    '亡命天涯，只是为了追寻你的足迹，却不想命运的捉弄，总是让你我天各一方。',
    '我来自深海，我没有朋友，大家都不和我玩，只有巨鲨是我的朋友，你愿意和它一起玩吗？',
    '你我的约定我一直记得，那一道道璀璨的光束，都是为你所亮',
    '我愚蠢的以为，头上的金箍圈可以圈住你所有的爱，可惜我手中的金箍棒改变不了那个开始，也决定不了这个结局，根本没有齐天大圣，我只是一只猴子。',
    '我总是那么让你担心，是不是你永远都会变成它，守护在我的身旁。',
    '每一张牌，都是对你的一份思念，我赌赢了所有，却赢不回你的爱。',
    '刀光剑影，铁石心肠，只有你知道在隐雾下的我，还是那么脆弱，容易感伤。',
    '漫天的冰雪冻结了我的心，但它冻结不了我心中的正义，我愿用我严寒的身躯冰冻这世间的邪恶。',
    '我生于黑暗，我也将死于黑暗，我要我的银弩终结这世间的邪恶。',
    '物是人非，可我依旧穿着嫁衣，在黑夜中寻找你的身影',
    '在漆黑的夜里你需要一道光照亮夜行的路，我燃烧了自己，但也造就了你我永远不能相拥。',
    '我的身世奠定了我的位置，一身的荣华，无限的权力，我更喜欢的是和你在一起！',
    '我披上坚甲，挡在你身前，万千的关心只化为一句:小心。',
    '我也希望变成蝴蝶的那一天,不再灰色，不再痛苦，不会再让我丑陋的外表吓到美丽的你。',
    '为你坠入地狱，沾满邪恶之力 的身体，已被黑暗毒素腐蚀的容颜。一切，都只为你复仇。',
    '我只是一堆石头，我什么都不懂，但我知道：我要用我坚如磐石的身体，为你阻挡所有的伤害，因为你是我的朋友。',
    '我不顾一切的冲出去……为你开辟一条安稳的路。我满腔热血的拍打着……为你抛开任何绊脚的石。最后，我坦然微笑着用躯体为你抵挡一切……因为我的身体上旋转着我们的誓言！',
    '邪恶的外表，其实并不是我的内心，你总是说我困住了你，可是，我若是不困住你，你会驻足么？',
    '当水晶箭射向你的时候请不要害怕，只是为了让你片刻的驻足好让我追赶上你的脚步',
    '我是周旭，我为点赞币代言~',
    '我是桑金超，我为点赞币代言~',
    '我是徐红，我为点赞币代言~',
    '我是尤奇勤，我为点赞币代言~',
    '我是王爱民，我为点赞币代言~',
    '我是李红斌，我为点赞币代言~',
    '我是李闪磊，我为点赞币代言~',
    '我是魏亚林，我为点赞币代言~',
    '我是李雪冰，我为点赞币代言~',
    '我是李文月，我为点赞币代言~',
    '嗨，傻X，干嘛这样看着我~',
    '我自人类诞生,却被人类所抛弃...孤独的徘徊于世间,却与世间的一切格格不入...于是，我只能试图抓住每个遇到的生命,去倾诉那颗从不被理解的心. ',
    '你笑我为何拿上锤和盾，有你在，我不会受到伤害，只是，你不知道，会让我受伤的，是你。',
    '下了手中的武器，我知道你已厌倦，目送你离开，亮起黄昏的路灯，照亮你回家的路。',
    '我没有过多的抱怨，漫天的乌鸦都是我的朋友，有这个，就足够了',
    '我知道自己一身的痛苦，我没得选择，我只能带着你的灵魂离去！',
    '你一直在畏惧我的毒刺，别怕，让我用我的毒刺把你牵引到我的身边 ',
    '我能在空气中嗅到敌人的味道，我很努力了，可是，为什么还是找不到你的踪迹呢！',
    '从我手中脱离的刀刃一直在飞舞，我不断的变强，只是为了守护我们的家园，我等候你的归来！',
    '感谢点赞币项目各成员：周旭、桑金超、徐红、尤奇勤、李闪磊、王爱民、李红斌、魏亚林、李雪冰、李文月！',
];
export { waitData };