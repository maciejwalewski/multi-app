window.onload = function(){

	var hamburgerIcon = document.querySelector('.hamburger_menu');

	hamburgerIcon.addEventListener('click', function(){
		if (menuCont.style.display == "none"){
			menuCont.style.display = "block";
		} else if (menuCont.style.display == "block"){
			menuCont.style.display = "none";
		}
	});



	var menuCont = document.querySelector('.menu_container');
	var calcLoading = document.querySelector('.calculator_loading');
	var calcVatLoading = document.querySelector('.calc_vat_loading');
	var todoLoading = document.querySelector('.todo_loading');
	var pianoLoading = document.querySelector('.piano_loading');

	var calculatorWindow = document.querySelector('.fullscreen_bg');
	var calculatorVatWindow = document.querySelector('.kalkulator_vat');
	var todoAppWindow = document.querySelector('.todo_app');
	var pianoAppWindow = document.querySelector('.piano_app');

	var pianoSounds = document.querySelectorAll('.piano_sounds');

	

	menuCont.addEventListener('click', function(ev){          //MENU FUNCTIONS SCRIPT <---------------------------------
		var clickedEl = ev.target;

		if(clickedEl.matches('#calc_li')){
			if (calcLoading.style.display == "none"){
				calcLoading.style.display = "block";
				calcVatLoading.style.display = "none";
				todoLoading.style.display = "none";
				pianoLoading.style.display = "none";
				for(i = 0; i < 7; i++){
					pianoSounds[i].muted = true;
				};
				setTimeout(function(){
					calculatorWindow.style.display = "block";
					calculatorVatWindow.style.display = "none";
					todoAppWindow.style.display = "none";
					pianoAppWindow.style.display = "none";
				}, 1500);
				calculatorStart();
				setTimeout(function(){
					calcLoading.style.display = "none";
				}, 1400);
				setTimeout(function(){
					menuCont.style.display = "none";
				}, 1400);
			} else if (calcLoading.style.display == "block"){
				calcLoading.style.display = "none";
			}
		}

		if(clickedEl.matches('#calc_vat_li')){
			if (calcVatLoading.style.display == "none"){
				calcVatLoading.style.display = "block";
				calcLoading.style.display = "none";
				todoLoading.style.display = "none";
				pianoLoading.style.display = "none";
				for(i = 0; i < 7; i++){
					pianoSounds[i].muted = true;
				};
				setTimeout(function(){
					calculatorVatWindow.style.display = "block";
					calculatorWindow.style.display = "none";
					todoAppWindow.style.display = "none";
					pianoAppWindow.style.display = "none";
				}, 1500);	
				setTimeout(function(){
					calcVatLoading.style.display = "none";
				}, 1400);
				setTimeout(function(){
					menuCont.style.display = "none";
				}, 1400);
			} else if (calcVatLoading.style.display == "block"){
				calcVatLoading.style.display = "none";
			}
		}

		if(clickedEl.matches('#todo_li')){
			if (todoLoading.style.display == "none"){
				todoLoading.style.display = "block";
				calcLoading.style.display = "none";
				calcVatLoading.style.display = "none";
				pianoLoading.style.display = "none";
				for(i = 0; i < 7; i++){
					pianoSounds[i].muted = true;
				};
				setTimeout(function(){
					todoAppWindow.style.display = "block";
					calculatorVatWindow.style.display = "none";
					calculatorWindow.style.display = "none";
					pianoAppWindow.style.display = "none";
				}, 1500);
				setTimeout(function(){
					todoLoading.style.display = "none";
				}, 1400);
				setTimeout(function(){
					menuCont.style.display = "none";
				}, 1400);
			} else if (todoLoading.style.display == "block"){
				todoLoading.style.display = "none";
			}
		}

		if(clickedEl.matches('#piano_li')){
			if (pianoLoading.style.display == "none"){
				calcLoading.style.display = "none";
				calcVatLoading.style.display = "none";
				todoLoading.style.display = "none";
				pianoLoading.style.display = "block";
				for(i = 0; i < 7; i++){
					pianoSounds[i].muted = false;
				};
				setTimeout(function(){
					calculatorWindow.style.display = "none";
					calculatorVatWindow.style.display = "none";
					todoAppWindow.style.display = "none";
					pianoAppWindow.style.display = "block";
				}, 1500);
				setTimeout(function(){
					pianoLoading.style.display = "none";
				}, 1400);
				setTimeout(function(){
					menuCont.style.display = "none";
				}, 1400);
			} else if (pianoLoading.style.display == "block"){
				pianoLoading.style.display = "none";
			}
		}
	});



	var calculator_body = document.querySelector('.calc');						//CALCULATOR <-------------------------
	var calc_output = document.querySelector('.input_calc');
	var dot = document.querySelector('.dot');
	calc_output.value =  "0";
	calculator_body.addEventListener('click', function(event){            
		var clicked = event.target;		
		if(calc_output.value.length < 13 && clicked.matches('.number')){
			if(calc_output.value == '0'){
				calc_output.value = '';
			};
			calc_output.value += clicked.value;
		}else if(clicked.matches('.zero') && calc_output.value !='0'){
			calc_output.value += clicked.value;
		}else if(clicked.matches('.sign')){
			var lastChar = calc_output.value.slice(-1);
			if(lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/" || lastChar == "." ){
				calc_output.value = calc_output.value.substr(0, calc_output.value.length - 1);
			};
			calc_output.value += clicked.value;				
		}else if(clicked.matches('.delete')){
			calc_output.value = '0';
		}else if(clicked.matches('.delete_last')){
			calc_output.value = calc_output.value.substr(0, calc_output.value.length - 1);
		}else if(clicked.matches('.equals')){
			var result = eval(calc_output.value);
			calc_output.value = result;			
		}else{
			return;
		}
	});
	function calculatorStart(){
		setTimeout(function videoPlay(){
			var vid = document.getElementById("background_video");
			vid.playbackRate = 0.6;
			vid.play();
		}, 2200);

		setTimeout(function(){
			var firstP = document.querySelector('.calc3000');
			firstP.style.marginRight = '80px';
		}, 1600);

		setTimeout(function(){
			var secondP = document.querySelector('.ultimate');
			secondP.style.marginLeft = '69px';
		}, 2100);

	};

	function cost() {														//VAT CALCULATOR <---------------------------
		var x = document.getElementsByClassName('kwota_input')[0].value;
		var e = document.getElementById('kraj');
		var country = e.options[e.selectedIndex].text;
		if (country == "Polska") {
			var vat = 0.23
		} else if (country == "Albania") {
			var vat = 0.20
		} else if (country == "Luksemburg"){
			var vat = 0.15
		} else if (country == "Szwajcaria"){
			var vat = 0.08
		};
		var z = vat*x+x*1;
		var z = z.toFixed(2);
		var wynik = document.getElementById('wynik');
		wynik.innerHTML = z + "zł";

		var procentvat = document.getElementById('procent');
		procentvat.innerHTML = vat*100 + "%";

		var kwotawat = document.getElementById('kwotavat');
		var y = vat*x;
		var y = y.toFixed(2);
		kwotawat.innerHTML = y +"zł";

		var kraju = document.getElementById('kraju');
		kraju.innerHTML = country;
	};
	var y = document.getElementById('pobierz');
	y.onclick = cost;


	(function() {												//TO DO LIST <-------------------
		var addTaskBtn = document.querySelector(".add_task");
		var todoList = document.querySelector(".to_do_list");
		var doneList = document.querySelector(".done_list");
		var taskInput = document.querySelector(".task_name");

 		 addTaskBtn.addEventListener("click", function(){
    		var liCreate = document.createElement("li");
    		var aCreate = document.createElement("a");
    		var deleteButtonCreate = document.createElement("div");
    		var doneButtonCreate = document.createElement("div");
    		var timeInfoCreate = document.createElement("p");
    		var currentDate = new Date();
    		var dd = currentDate.getDate();
    		var mm = currentDate.getMonth()+1;
    		var yyyy = currentDate.getFullYear();
    		var hour = currentDate.getHours();
    		var minutes = currentDate.getMinutes();
    		currentDate = hour + ':' + minutes + ' ' + ' ' + dd + '/' + mm + '/' + yyyy ;
    		console.log(currentDate);


    		if(taskInput.value == ""){
    			return
    		} else {
    			aCreate.innerHTML = taskInput.value;
    			aCreate.contentEditable = "true";
    			liCreate.appendChild(aCreate);
    			liCreate.appendChild(deleteButtonCreate);
    			deleteButtonCreate.className = "delete_button";
    			liCreate.appendChild(doneButtonCreate);
    			doneButtonCreate.className = "done_button";
    			liCreate.appendChild(timeInfoCreate);
    			timeInfoCreate.className = "time_info";
    			timeInfoCreate.innerHTML = 'Task added:' + ' ' + currentDate;
    		    todoList.appendChild(liCreate);
    		};
		});

 		var app = document.querySelector('.todo_app');
  		app.addEventListener('click', function(event){
      		var clicked = event.target,
            li = clicked.closest('li');
			if(clicked.matches('.done_button')){
        		doneList.appendChild(li);
        		clicked.classList.remove('done_button');
        		clicked.classList.add('undone_button');
			}else if(clicked.matches('.undone_button')){
        		todoList.appendChild(li);
        		clicked.classList.remove('undone_button');
        		clicked.classList.add('done_button');
			}else if(clicked.matches('.delete_button')){
        		var ulElem = li.parentNode;
        		ulElem.removeChild(li);
			};
		});
	}());


	window.addEventListener('keydown', function(e){								//PIANO <--------------------------
		var pianoAudio = document.querySelector(`audio[id = '${e.keyCode}']`);
		var keyDown = document.querySelector(`.white_key[id = '${e.keyCode}']`); 
		pianoAudio.currentTime = 0;
		pianoAudio.play();
		keyDown.classList.add('pianokey_active');
		setTimeout( function(){
			keyDown.classList.remove('pianokey_active')
		}, 100);		
	});
};