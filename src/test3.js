var mcbeInit = function () {
	var svg = Snap('#prueba svg'); 


	var Byte = function(id, x, y, v) { 
		var g = svg.g();
		for (var i = 0; i < 8; i++) { 
			g.append(svg.rect(x + (i + 1) * 8, y, 8, 10).attr({ 
				fill: '#fff', stroke: '#000', strokeWidth: '0.5', 
			})); 
			g.append(svg.text(x + (i + 1) * 8  + 4, y + 5, v[i]).attr({ 
				fontSize: '7', 
				fontFamily: 'Helvetica', 
				textAnchor: 'middle', 
				dominantBaseline: 'middle', 
				alignmentBaseline: 'middle', 
			})); 
		}; 
		g.append(svg.text(x, y + 5, (id == '') ? '0' : id).attr({
				fontSize: '7', 
				fontFamily: 'Helvetica', 
				textAnchor: 'middle', 
				dominantBaseline: 'middle', 
				alignmentBaseline: 'middle', 
			}));
		g.attr({id: id});
		return g;
	};

	var ucbox = svg.g(
		svg.rect(0,0,172,14,2).attr({fill: '#faa'}),
		svg.g(Byte('PC',7,2,'00000000'), Byte('IR',97,2,'00000000')).attr({id: 'uc'})
	);	
	var alubox = svg.g(
		svg.rect(180,0,82,14,2).attr({fill: '#aca'}),	
		Byte('Ac',187,2,'00000000').attr({id: 'alu'})
	);

	var mem = svg.g().attr({id: 'mem'});
	for (var k = 0; k < 4; k++) {
		for (var j = 0; j < 8; j++) { 
			mem.append(Byte(j + 8 * k,90*k+7, 20+10 * j, '00100110')); 
		}
	}
	var membox = svg.g( svg.rect(0,18,352,84,2).attr({fill: '#aac'}), mem);


	var a1 = new Audio('audio/click.ogg');
	var a2 = new Audio('audio/pling.ogg');
	a1.onended = function(){ delete a1 };
	a2.onended = function(){ delete a2 };

	var zoomin = function(id) { 
		if(id == 'ucfrag') {
			ucbox.animate({opacity: '1.0'},2500);
			alubox.animate({opacity: '0.1'},2500);
			membox.animate({opacity: '0.1'},2500);
			svg.animate({viewBox: ucbox.getBBox().vb},800,mina.backin); 
		} 
		if(id == 'alufrag') {
			ucbox.animate({opacity: '0.1'},2500);
			alubox.animate({opacity: '1.0'},2500);
			membox.animate({opacity: '0.1'},2500);
			svg.animate({viewBox: alubox.getBBox().vb},800,mina.backin); 
		} 
		if(id == 'memfrag') {
			ucbox.animate({opacity: '0.1'},2500);
			alubox.animate({opacity: '0.1'},2500);
			membox.animate({opacity: '1.0'},2500);
			svg.animate({viewBox: membox.getBBox().vb},800,mina.backin); 
		} 
		a1.play();
	};
	var zoomout = function(id) { 
		a2.play();
		ucbox.animate({opacity: '1.0'},500);
		alubox.animate({opacity: '1.0'},500);
		membox.animate({opacity: '1.0'},500);
		svg.animate({viewBox: '0 0 400 200'},1800,mina.backin); 
	}; 


	var shown = { 'ucfrag' : zoomin, 'alufrag': zoomin, 'memfrag': zoomin};
	var hidden = { 'ucfrag' : zoomout, 'alufrag': zoomout, 'memfrag': zoomout};

	Reveal.addEventListener('fragmentshown',function(event){ 
		if(typeof shown[event.fragment.id] === 'function') { shown[event.fragment.id](event.fragment.id); } });
	Reveal.addEventListener('fragmenthidden',function(event){
		if(typeof hidden[event.fragment.id] === 'function') {hidden[event.fragment.id](event.fragment.id)};});
}
