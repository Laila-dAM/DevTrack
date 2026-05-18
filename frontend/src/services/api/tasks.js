import api from './api'

export async function getKanban(boardId) {
  const response = await api.get(`/kanban/${boardId}`)
  return response.data
}

export async function moveTask(taskId, columnId) {
  const response = await api.put('/tasks/move', {
    task_id: taskId,
    column_id: columnId
  })

  return response.data
}