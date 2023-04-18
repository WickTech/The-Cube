const taskInput = document.querySelector('#task');
			const taskList = document.querySelector('.task-list');

			document.querySelector('form').addEventListener('submit', function(e) {
				e.preventDefault();
				const task = document.createElement('li');
				task.classList.add('task');
				const checkbox = document.createElement('input');
				checkbox.type = 'checkbox';
				const taskText = document.createElement('span');
				taskText.textContent = taskInput.value;
				const startBtn = document.createElement('button');
				startBtn.textContent = 'Start';
				startBtn.classList.add('start-btn');
				const timer = document.createElement('span');
				timer.textContent = '00:00:00';
				timer.classList.add('timer');
				task.appendChild(checkbox);
				task.appendChild(taskText);
				task.appendChild(startBtn);
				task.appendChild(timer);
				taskList.appendChild(task);
				taskInput.value = '';

				let timerInterval;
				let startTime;
				let elapsedTime = 0;
				let running = false;

				startBtn.addEventListener('click', function() {
					if (!running) {
						startTime = Date.now() - elapsedTime;
						timerInterval = setInterval(updateTimer, 1000);
						running = true;
						startBtn.textContent = 'Stop';
					} else {
						clearInterval(timerInterval);
						elapsedTime = Date.now() - startTime;
						running = false;
						startBtn.textContent = 'Start';
					}
				});

				function updateTimer() {
					const currentTime = Date.now();
					const timeElapsed = currentTime - startTime;
					const hours = Math.floor(timeElapsed / (1000 * 60 * 60));
					const minutes = Math.floor((timeElapsed % (1000 * 60 * 60)) / (1000 * 60));
					const seconds = Math.floor((timeElapsed % (1000 * 60)) / 1000);
					const timeString = (hours < 10 ? '0' + hours : hours) + ':' +
						(minutes < 10 ? '0' + minutes : minutes) + ':' +
						(seconds < 10 ? '0' + seconds : seconds);
					timer.textContent = timeString;
				}
			});

