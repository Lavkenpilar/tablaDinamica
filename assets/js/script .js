const tareas = [
    {id:1,
    nombre:'estudiar',
    confirmado:false,
    },
    {id:2,
    nombre:'limpiar casa',
    confirmado:false,
    },
    {id:3,
    nombre:'lavar ropa',
    confirmado:false,
    },
    {id:4,
    nombre:'planificar',
    confirmado:false,
    }]
    
   let ultimoId = tareas.length 
    function actualizarLista () {
        let html=''
        let totalRealizadas = 0
        for (const tarea of tareas) {
            let estaCheck = ''
            if (tarea.confirmado){
                estaCheck = 'checked'
                totalRealizadas++
            }
            html+=/*html*/`
            <tr class="filaTarea">
            <td class="idTarea">${tarea.id}</td>
            <td class="nombreTarea">${tarea.nombre}</td>
            <td class="estadoTarea"><input type = "checkbox" ${estaCheck} onclick="confirmarTarea(${tarea.id})"/></td>
            <td class="accionBoton"><button onclick="eliminarTarea(${tarea.id})" type="button">❌</button> </td>
            </tr>`
           
        }
        document.querySelector('.bodyTable').innerHTML=html
        document.querySelector('#cuentaTareas').innerHTML=totalRealizadas
        document.querySelector('#totalTareas').innerHTML=tareas.length 
}
actualizarLista()
console.log (tareas)

const agregarTarea=function(event){
    ultimoId++
const nueva_tarea = document.querySelector('#nuevaTarea')
tareas.push({
    id:ultimoId,
    nombre:nueva_tarea.value,
    confirmado:false
})
console.log(tareas)
actualizarLista()
nueva_tarea.value=''
}
const eliminarTarea=function(id) {
    /*alert ('eliminando'+id)*/
    const posicionEliminar=tareas.findIndex ((tarea)=>tarea.id===id)
    tareas.splice(posicionEliminar,1)
    actualizarLista()
}

const confirmarTarea=function (id) {
    const posicionActualizar=tareas.findIndex((tarea)=>tarea.id===id)
    tareas[posicionActualizar].confirmado=!tareas[posicionActualizar].confirmado
    actualizarLista()
}
actualizarLista()