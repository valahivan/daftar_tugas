function addTugas(){
    const taskInput = document.getElementById('taskInput');
    const list = document.getElementById('list');

    if(taskInput.value == ''){
        Swal.fire({
            title: "Peringatan!",
            text: "Tugas tidak boleh kosong!",
            icon: "warning"
        });
        return false;
    }

    const li = document.createElement('li');
    li.textContent = taskInput.value;

    const completeButton = document.createElement('button');
    completeButton.textContent = 'Selesai';
    completeButton.classList.add('complete-btn');
    completeButton.onclick = function(){
        if(li.classList.toggle('completed')){
            Swal.fire({
                text: "Tugas telah diselsesaikan!",
                icon: "success"
            });
        }else{
            Swal.fire({
                text: "Tugas belum diselsesaikan!",
                icon: "warning"
            });
        }
    }

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Hapus';
    deleteButton.classList.add('delete-btn');
    deleteButton.onclick = function(){
        Swal.fire({
            text: "Tugas berhasil dihapus!",
            icon: "success"
        });
        list.removeChild(li);
    }

    li.appendChild(completeButton);
    li.appendChild(deleteButton);
    list.appendChild(li);

    Swal.fire({
        text: "Tugas berhasil ditambahkan!",
        icon: "success"
    });
    taskInput.value = '';
}