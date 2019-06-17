const socket = io();
let currentCount = 0;
socket.on('onCountUpdated', function(count = 0) {
    currentCount = count;
    console.log('OnCountUpdated call client side ' + count);
    document.getElementById('currentCount').innerHTML = 'count ::' + currentCount;    
});

document.querySelector('#updateCount').addEventListener('click', () => {
    console.log('CLICK');
    socket.emit('increment');
});

