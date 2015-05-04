Utils = {

		//创建对象
		createClass : function(){
			return function(){
				this.init.apply(this , arguments);//调用构造方法
			}
		},
		//实现继承，拷贝对象属性
		doextend : function(destination, source) {
		    for (var property in source) {
		        destination[property] = source[property];
		    }
		    return destination;
		},

		//请求模板文件
		getTemplate : function(filename){
			var tpl = "";
			$.ajax({
				url:"/files/js_frame/tpl/"+filename+".tpl",
				data:"",
				type:"get",
				success:function(data){
					tpl = data;

				},
				async:false,
				cache:false
			});
			return tpl;
		},


		/**
		 * 反科里化
		 * @param  {String} fn       第一参数为对象的函数名
		 * @return {Object}          科里化后的函数
		 */
		curry : function(fn){
			return function(){
				var args = [].slice.call(arguments);
				args = [this].concat(args);
				return fn.apply(null , args)
			}
		},

		/**
		 * 反科里化
		 * @param  {String} fn       函数名
		 * @return {Object}          反科里化后的函数
		 */
		uncurry : function(fn){
			return function(){
				var args = arguments;
				return fn.apply(args[0] , [].slice.call(args , 1));
			}
		},

		getClass : function(){
			return Utils.uncurry(Object.prototype.toString);
		},

		// 判断是否为对象
		isObject : function(obj){
			var reg = new RegExp("Object");
			return reg.test(Utils.getClass(obj));
		},

		// 判断是否为数组
		isArray : function(args){
			var reg = new RegExp("Array");
			return reg.test(Utils.getClass()(args));
		},

		/**
		 * 循环函数（对象、数组）
		 * @memberOf utils
		 * @function
		 * @param  {Object|Array|DOM} obj       [description]
		 * @param  {Function} fn return each.stop跳出循环
		 */
		each : function(obj , fn){
			var result;
			// 判断是否为对象
			if(Utils.isObject(obj)){
			//为对象
				for(var key in obj){
					result = fn(key , obj[key]);
				}
			}else if(Utils.isArray(obj)){
			//为数组
				for (var i = 0; i < obj.length; i++) {
					result = fn(obj[i] , i);
					if(result == "stop"){
						break;
					}
				};
			}else{
				fn(obj[0] , 0);
				if(result == "stop"){
					return;
				}
			}
		},

		getHash : function(){
			var hashurl = window.location.hash,
				urlArgs = [],
				urlData = {};
			hashurl = hashurl.replace('#','');
			urlArgs = hashurl.split('/');
			for (var i = 0; i < urlArgs.length; i+=2) {
				urlData[urlArgs[i]] = urlArgs[i+1];
			};
			return urlData;
		},

		count : function(str){
			return str.length;
		},

		/**
		 * [Interface 接口]
		 * @param {[string]} name    [接口名]
		 * @param {[string]} methods [实现函数]
		 */
		Interface : function(name , methods){
			if(arguments.length < 2){
				throw new Error('Interface constructor called width'+arguments.length+',but expected exactly 2.');
			}

			this.name = name;
			this.methods = [];
			for (var i = 0; i < methods.length; i++) {
				var method = methods[i];
				if(typeof method !== 'string'){
					throw new Error('Interface constructor expected methods as a string.');
				}
				this.methods.push(methods[i]);
			};
		}




	}
	/**
	 * [ensureImplements description]
	 * @param  {[object]} object [检测对象]
	 * @param {[object]}        [实现的接口]
	 */
	Utils.Interface.ensureImplements = function(object){
		if(arguments.length < 2){
			throw new Error('Function Interface.ensureImplements called width'+arguments.length+',but expected at least 2.');
		}

		for (var i = 1; i < arguments.length; i++) {
			var _interface = arguments[i];
			if(_interface.constructor !== Utils.Interface){
				throw new Error('Function Interface.ensureImplements expects arguments two and above to be instances of Interface.');
			}
			for (var j = 0; j < _interface.methods.length; j++) {
				var method = _interface.methods[j];
				if(!object[method] || typeof object[method] !== 'function'){
					throw new Error('Method of Interface does not implement the '+_interface.name+' method '+method+' was not found');
				}
			};
		};
	};


	// 事件观察器
	Utils.EventProxy = function(){
		this.stack = {};
		this.args = {};
	}

	var ev = Utils.EventProxy;

	/**
	 * 注册事件
	 * @param  {String} 	key 事件名
	 * @param  {Function} 	fn 事件处理函数
	 * @param  {*} 			args 参数
	 * @return {Object}     链式
	 */
	ev.prototype.bind = function(key , fn , args){
		var fnArr = this.stack[key] || [],
			fn = Array.prototype.slice.call(arguments , 1),
			args = Array.prototype.slice.call(arguments , 2) || [];
		fnArr.push(fn);
		this.stack[key] = fnArr;
		if(!this.args[key]){
			this.args[key] = [];
		}
		this.args[key].push(args);
		return this;
	}


	/**
	 * 触发一个事件
	 * @param  {String} 	key 事件名
	 * @param  {Function} 	callback 回调
	 * @return {Object}     链式
	 */
	ev.prototype.emit = function(key , callback){
		var self = this,
			args = [],
			resultArgs = [],
			result,
			argsLength = arguments.length,
			keyArgs = [].slice.apply(arguments , [0 , argsLength-1]) || [];//触发事件
			if(argsLength<2){//参数长度小于2，返回
				throw('arguments is at least about 2；');
				return;
			}
		Utils.each(keyArgs , function(key){
			var fnArr = self.stack[key],//执行函数集
			args = self.args[key] || [];//参数集
			if(fnArr){
				Utils.each(fnArr , function(fn , i){
					result = fn[0].apply(null, args[i]);//执行
					resultArgs.push(result);//执行结果集
					self.stack[key].result = resultArgs;
					//结果集作为参数传到回调,使用argument调取
					callback.apply(null , resultArgs);
				});
			}else{
				return;
			}
		});
		return this;
		
	}

	/**
	 * 取消事件
	 * @param  {String} 	key 事件名
	 * @param  {Function} 	fn 函数
	 * @return {Object}     链式
	 */
	ev.prototype.unbind = function(key ,fn){
		var fnArr = this.stack[key];
		if(fn){
			Utils.each(fnArr , function(val , k){
				if(fn == val){
					this.stack[key].splice(k , 1);
					return "stop";
				}
			});
		}else{
			this.stack[key] = [];
		}
		return this;
	}

	Utils.EventProxy = ev;