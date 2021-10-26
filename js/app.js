 console.log('%c Application is running', 'background: #222; color: #bada55; padding:15px')

 const item = document.querySelector('.item')
 const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragStart)
item.addEventListener('dragend', dragEnd)

for (placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragOver)
	placeholder.addEventListener('dragenter', dragEnter)
	placeholder.addEventListener('dragleave', dragleave)
	placeholder.addEventListener('drop', dragDrop)
}

function dragStart(event){
console.log('drag start', event.target)
event.target.classList.add('hold')
setTimeout(() => {
	event.target.classList.add('d-none')
}, 0);

}

function dragEnd(event){
	console.log('drag end')
	event.target.classList.remove('hold')
	event.target.classList.remove('d-none')
}

function dragOver(event){
	event.preventDefault()
}

function dragEnter(event){
	event.target.classList.add('hovered')
}

function dragleave(event){
	event.target.classList.remove('hovered')
}
function dragDrop(event){
	event.target.classList.remove('hovered')
	event.target.append(item)
}