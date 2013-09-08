var engine, activeItem;
$(document).ready(function(){
	$("body").append(
		'<canvas id="canvas" width=1920 height=900></canvas>'
	);

    engine = new Engine("canvas");

    setupCamera();
    setupLight();
    setupControls();
    setupReference();
});

function setupReference(){
	var reference = new Reference(engine.renderer);
	reference.x = -1;
	reference.y = -1;
	reference.z = 1;
	engine.addItem(reference);
	return reference;
}

function setupCamera(){	
    engine.renderer.camera.lookAt(0, 0, 0);
    engine.renderer.camera.x = 0;
    engine.renderer.camera.y = 5;
    engine.renderer.camera.z = 12;
}

function setupLight(){
	var light = new Light();
    light.y = 50;
    light.x = 50;
    light.z = 50;
    light.colour = [0.8, 0.8, 0.8];
    engine.addLight(light);
}

function addBox(x, y, z){
	var box = new CardboardBox(engine.renderer);
	box.x = x;
	box.y = y;
	box.z = z;
    engine.addItem(box);
    return box;
}

function addRoll(x, y, z){
	var roll = new CardboardRoll(engine.renderer);
	roll.x = x;
	roll.y = y;
	roll.z = z;
    engine.addItem(roll);
    return roll;
}

function addCone(x, y, z){
	var cone = new CardboardCone(engine.renderer);
	cone.x = x;
	cone.y = y;
	cone.z = z;
	engine.addItem(cone);
	return cone;
}

function addPyramid(x, y, z){
	var pyramid = new CardboardPyramid(engine.renderer);
	pyramid.x = x;
	pyramid.y = y;
	pyramid.z = z;
	engine.addItem(pyramid);
	return pyramid;
}

function saveScene(){
	items = engine.getItems();
	var save = {};
	var index = 0;
	save.items = [];
	for(var i in items){
		var item = items[i];
		var saveItem = {};
		//dont save the grid reference
		if(item instanceof Reference){
			continue;
		}
		else if(item instanceof CardboardBox){
			saveItem.type = "box";
		}
		else if(item instanceof CardboardRoll){
			saveItem.type = "roll";
		}
		else if(item instanceof CardboardPyramid){
			saveItem.type = "pyramid";
		}
		else if(item instanceof CardboardCone){
			saveItem.type = "cone";
		}
		saveItem.x = item.x;
		saveItem.y = item.y;
		saveItem.z = item.z;
		saveItem.yaw = item.yaw;
		saveItem.roll = item.roll;
		saveItem.pitch = item.pitch;
		save.items[index++] = saveItem;
	}
	console.log(save);
}

function clearScene(){
	engine.removeItems();
	setupReference();
}
	
function loadScene(json){
	clearScene();
	var scene = JSON.parse(json);
	for(var i in scene.items){
		var item = scene.items[i];
		if(item.type = "roll"){
			var newBit = addRoll(item.x, item.y, item.z);
		}
		else if(item.type = "box"){
			var newBit = addBox(item.x, item.y, item.z);
		}
		else if(item.type = "cone"){
			var newBit = addCone(item.x, item.y, item.z);
		}
		else if(item.type = "pyramid"){
			var newBit = addPyramid(item.x, item.y, item.z);
		}
		newBit.yaw = item.yaw;
		newBit.roll = item.roll;
		newbit.pitch = item.pitch;
	}
}

function setupControls(){
	$("#add-box").click(function(){
		activeItem = addBox(0, 0, 0);
	});
	$("#add-roll").click(function(){
		activeItem = addRoll(0, 0, 0);
	});
	$("#add-cone").click(function(){
		activeItem = addCone(0, 0, 0);
	});
	$("#add-pyramid").click(function(){
		activeItem = addPyramid(0, 0, 0);
	});
	$("#move-left").click(function(){
		activeItem.x -= 1;
	});
	$("#move-right").click(function(){
		activeItem.x += 1;
	});
	$("#move-up").click(function(){
		activeItem.y += 1;
	});
	$("#move-down").click(function(){
		activeItem.y -= 1;
	});
	$("#move-forward").click(function(){
		activeItem.z += 1;
	});
	$("#move-backward").click(function(){
		activeItem.z -= 1;
	});
	$("#rotate-yaw").click(function(){
		activeItem.yaw += 90;
	});

	$("#rotate-pitch").click(function(){
		activeItem.pitch += 90;
	});
	$("#rotate-roll").click(function(){
		activeItem.roll += 90;
	});
	$("#clear").click(function(){
		clearScene();
	});
	$("#save").click(function(){
		saveScene();
	});
	$("#load").click(function(){
		loadScene();
	});
}