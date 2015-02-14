gmx_['bg_1'] = function(opt) {this.init_(opt,'bg_1');};qyengine.define_type('bg_1',QySprite,{"fill":"#ffffff","size":{"width":32,"height":32},"anchorPoint":{"x":0,"y":0}}  );







gmx_['myFace_default'] = function(opt) {this.init_(opt,'myFace_default');};qyengine.define_type('myFace_default',QySprite,{"fill":"assets/My_Face.png","size":{"width":379,"height":635},"opacity":1,"stroke":{"width":0,"color":"#000000"},"radius":0,"repeat_x":true,"repeat_y":true,"background_speed":{"x":0,"y":0},"anchorPoint":{"x":0.501,"y":0.501},"mirror":{"horizontal":1,"vertical":1},"imgSize":{"width":379,"height":635}}  );gmx_['yourFace_default'] = function(opt) {this.init_(opt,'yourFace_default');};qyengine.define_type('yourFace_default',QySprite,{"fill":"assets/Your_Face.png","size":{"width":217,"height":416},"opacity":1,"stroke":{"width":0,"color":"#000000"},"radius":0,"repeat_x":true,"repeat_y":true,"background_speed":{"x":0,"y":0},"anchorPoint":{"x":0.502,"y":0.5},"mirror":{"horizontal":1,"vertical":1},"imgSize":{"width":217,"height":416}}  );gmx_['rabbit_default'] = function(opt) {this.init_(opt,'rabbit_default');};qyengine.define_type('rabbit_default',QySprite,{"fill":"assets/rabbit.png","size":{"width":1280,"height":720},"opacity":1,"stroke":{"width":0,"color":"#000000"},"radius":0,"repeat_x":true,"repeat_y":true,"background_speed":{"x":0,"y":0},"anchorPoint":{"x":0.5,"y":0.5},"mirror":{"horizontal":1,"vertical":1},"imgSize":{"width":1280,"height":720}}  );gmx_['name_default'] = function(opt) {this.init_(opt,'name_default');};qyengine.define_type('name_default',QySprite,{"fill":"assets/sign.png","size":{"width":1280,"height":720},"opacity":1,"stroke":{"width":0,"color":"#000000"},"radius":0,"repeat_x":true,"repeat_y":true,"background_speed":{"x":0,"y":0},"anchorPoint":{"x":0.5,"y":0.5},"mirror":{"horizontal":1,"vertical":1},"imgSize":{"width":1280,"height":720}}  );gmx_['heart_default'] = function(opt) {this.init_(opt,'heart_default');};qyengine.define_type('heart_default',QySprite,{"fill":"assets/heart.png","size":{"width":145,"height":128},"opacity":1,"stroke":{"width":0,"color":"#000000"},"radius":0,"repeat_x":true,"repeat_y":true,"background_speed":{"x":0,"y":0},"anchorPoint":{"x":0.503,"y":0.5},"mirror":{"horizontal":1,"vertical":1},"imgSize":{"width":145,"height":128}}  );

gmx_['myFace'] = function(opt) {this.init_(opt,'myFace');};qyengine.define_type('myFace',QyObject,{"isButton":false,"parent":"no-parent","comment":"","sprites":["myFace_default"],"sprite":"myFace_default"}  );gmx_['yourFace'] = function(opt) {this.init_(opt,'yourFace');};qyengine.define_type('yourFace',QyObject,{"isButton":false,"parent":"no-parent","comment":"","sprites":["yourFace_default"],"sprite":"yourFace_default"}  );gmx_['rabbit'] = function(opt) {this.init_(opt,'rabbit');};qyengine.define_type('rabbit',QyObject,{"isButton":false,"parent":"no-parent","comment":"","sprites":["rabbit_default"],"sprite":"rabbit_default"}  );gmx_['heart'] = function(opt) {this.init_(opt,'heart');};qyengine.define_type('heart',QyObject,{"isButton":false,"parent":"no-parent","comment":"","sprites":["heart_default"],"sprite":"heart_default"} ,{'mousedown,or,touchstart':function(){qyengine.guardId('rabbit').runAnimation('fadeOut');
qyengine.guardId('myFace').moveTo(460,388,200);
qyengine.guardId('yourFace').moveTo(700,354,200);
qyengine.instance_create(640,360,'name',{"id":'name',"zIndex":"","comment":"","actionIndex":3,"disabled_action":""});
this.setPosition(640,100,true);
}} );gmx_['name'] = function(opt) {this.init_(opt,'name');};qyengine.define_type('name',QyObject,{"isButton":false,"parent":"no-parent","comment":"","sprites":["name_default"],"sprite":"name_default"}  );







gmx_['sce_VD2015'] = function(opt) {this.init_(opt,'sce_VD2015');};qyengine.define_type('sce_VD2015',QyScene,{"comment":"","size":{"width":1280,"height":720},"speed":{"x":0,"y":0},"defaultLayer":"layer0","activeLayer":"layer1","prev_scene":"","next_scene":"","is25D":false,"background":"bg_1","background_repeat":"no-repeat","background_speed":{"x":0,"y":0},"minTimeDelta":0.1,"layers":[{"id":"layer0","sticky":false,"ignore25d":false,"hiddenAtStart":false,"lock":false,"expanded":true,"objects":[]},{"id":"layer1","sticky":false,"ignore25d":false,"hiddenAtStart":false,"lock":false,"expanded":true,"objects":[{"id":"rabbit","type":"rabbit","scale":{"x":1,"y":1},"rotation":0,"position":{"x":638,"y":356},"hiddenAtStart":false,"extend":{},"mirror":{"horizontal":1,"vertical":1},"zIndex":0,"isEqualScale":true},{"id":"heart","type":"heart","scale":{"x":1,"y":1},"rotation":0,"position":{"x":615,"y":484},"hiddenAtStart":false,"extend":{},"mirror":{"horizontal":1,"vertical":1},"zIndex":0,"isEqualScale":true},{"id":"myFace","type":"myFace","scale":{"x":1,"y":1},"rotation":0,"position":{"x":341,"y":388},"hiddenAtStart":false,"extend":{},"mirror":{"horizontal":1,"vertical":1},"zIndex":0,"isEqualScale":true},{"id":"yourFace","type":"yourFace","scale":{"x":1,"y":1},"rotation":0,"position":{"x":834,"y":354},"hiddenAtStart":false,"extend":{},"mirror":{"horizontal":1,"vertical":1},"zIndex":0,"isEqualScale":true}]}]} ,{'create':function(){qyengine.guardId('heart').runAnimation('fadeIn');
}} );









current_game.scripts=qyengine.addToObj(current_game.scripts,{});current_game.texts=qyengine.addToObj(current_game.texts,{});current_game.fonts=qyengine.addToObj(current_game.fonts,{});current_game.animations=qyengine.addToObj(current_game.animations,{"fadeOut":{"loop":1,"frames":[{"anim":[["fadeTo",1]],"duration":0.1},{"anim":[["fadeTo",0.01]],"duration":0.8}]},"fadeIn":{"loop":0,"frames":[{"anim":[["fadeTo",0.01]],"duration":0.1},{"anim":[["fadeTo",1]],"duration":0.8}]}});qyengine.addToObj(current_game,{"start_scene":"sce_VD2015","displayFPS":false,"renderer":"gmx"});current_game.sceneRes=qyengine.addToObj(current_game.sceneRes,{"sce_VD2015":{"files":["assets/rabbit.png","assets/heart.png","assets/My_Face.png","assets/Your_Face.png","assets/sign.png"],"sounds":[],"usedScenes":[]}});current_game.tags = qyengine.addToObj(current_game.tags,{})