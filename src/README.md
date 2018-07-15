### 代码目录说明

备注 : 由于之前版本没有对src/中的文件目录进行约束，升级时新版建议直接下载新框架，然后<br>
从旧版本的框架src/中拷贝出业务代码放到新框架中.
​	
```
+ src
	+  amd  ## 符合AMD规范的,仅存放和地图相关的AMD模块，其余的模块必须使用ES6编写  
		+ utils
			- timeFormate.js
			- arrays.js
			- strings.js
		+ examples
		+ dseframework
		+ XXX
	
	+ common  ##公共部分 仅存放项目及的公共组件，如果达到产品线级别的，需要提取至业务代码库.
		
		+ components  ## 公共组件  包括弹窗和其他
			+ poup ## 弹窗类
				- action.vue ## 含有  保存成功或失败的弹窗  以及删除的弹窗
				- inputs.vue ##  编辑弹窗 的壳子
			+ gis_utils ## gis 相关的工具类 或者提供相关功能的示例代码
				- tools.vue   ## 量点、测距，切换图层等小功能
				- pagination.vue ## 自定义分页  这是示例  看情况而定
			+ utils  ##工具函数
				- timeFormate.js
				- arrays.js
				- strings.js
			+ config  ## 一些自定义的配置项
			
	+ pages ## 需要分模块打包的页面.
	
		+ AAA
			— aaa1.vue
			— aaa2.vue
			— aaa3.vue
		+ BBB
			- bbb1.vue
			- bbb2.vue
			- bbb3.vue
		+ CCC
			_ ccc1.vue
			_ ccc2.vue			
			_ ccc3.vue
			
			
  + api  ## 接口全在这，函数命名同接口的最后关键字 严禁自定义函数名，函数名采用驼峰命名法
    + AAA
			— aaa1.js  
			— aaa2.js
			— aaa3.js
		+ BBB
			- bbb1.js
			- bbb2.js
			- bbb3.js
		+ CCC
			_ ccc1.js
			_ ccc2.js		
			_ ccc3.js
	+ router  ## 路由文件
	  - xxx.part.js 定义分模块路由
		- index.js 
		
	+ fonts  ## 自定义图标字体  包含如下
		- main.css
		- xx.eot
		- xx.ttf
		- xx.svg
		- xx.
	+ assets ## 静态文件
		+ images
			+ common
			+ AAA
			+ BBB
		+ css   ## 其实就是 重置外置UI库的样式
			+ AAA
				- aaa1.scss
				- aaa2.scss
				- aaa3.scss
				- aaa.scss  ##全部从该文件中导出
			+ BBB
				- bbb1.scss
				- bbb2.scss
				- bbb3.scss
				- bbb.scss  ##全部从该文件中导出
			- app.css / app.scss
			
	+ store ## 状态管理  我的建议  可以给其他新人 指明方向 防止混乱
		+ modules
		
			+ AAA  #  可以拆分  但也可以合并，看状态数量和项目需要的状态多少而定
				- state.js
				- getters.js
				- action.js
				- mulations.js
				- mulationTypes.js
				- index.js   ##  如果合并  应该在该文件中合并   我建议
			+ BBB
				- state.js
				- getters.js
				- action.js
				- mulations.js
				- mulationTypes.js
				- index.js
	- rootState.js   ## 可不要
	- rootGetters.js ## 可不要
	- rootAction.js   ## 可不要
	- rootMulation.js ## 可不要
	- rootMulationTypes.js ## 可不要
	- index.js  ## 所有 模块中的状态和根模块的状态的 全部在这导出
  - App.vue  ## 在此引入css 中的内容
	- main.js ## 必须有
	- index.html ## 必须有
	- README.md   ## 书写本框架的注意事项  提供的基础功能和需要本地化配置的说明等
		
			
```

