import { usePersons } from '@src/components/table/composables/use-persons'
import TableColPerson from '@src/components/table/table-col/table-col-person.vue'
import TableColSelect from '@src/components/table/table-col/table-col-select.vue'

import TableColTitle from '@src/components/table/table-col/table-col-title.vue'
import TableHeaderButton from '@src/components/table/table-header/table-header-button.vue'
import TableHeaderGrade from '@src/components/table/table-header/table-header-grade.vue'
import TableHeaderStatus from '@src/components/table/table-header/table-header-status.vue'
import { useUser } from '@src/composables/use-user'
import { GameEntity } from '@src/libs/api'
import { CirclePlus, Eraser } from 'lucide-vue-next'
import { DataTableColumns } from 'naive-ui'
import { acceptHMRUpdate, defineStore, storeToRefs } from 'pinia'
import { computed, h } from 'vue'
import { useGames } from './use-games'

export const useGamesTable = defineStore('games/use-games-table', () => {
  const { isAdmin } = storeToRefs(useUser())
  const gamesStore = useGames()
  const { updateOrCreatePerson } = usePersons()

  const tableColumns = computed(() => {
    const columns: DataTableColumns<GameEntity> = [
      {
        title: 'Название',
        key: 'title',
        align: 'center',
        render(row) {
          return h(TableColTitle, {
            key: `title-${row.id}`,
            title: row.title,
            onUpdate: (title) => gamesStore.updateGame({
              id: row.id,
              data: { title },
            }),
          })
        },
      },
      {
        title: 'Заказчик',
        key: 'person',
        align: 'center',
        width: 300,
        render(row) {
          return h(TableColPerson, {
            key: `person-${row.id}`,
            personId: row.person?.id,
            onUpdate: (person) => updateOrCreatePerson(row, person),
          })
        },
      },
      {
        title() {
          return h(TableHeaderStatus)
        },
        key: 'status',
        align: 'center',
        width: 200,
        render(row) {
          return h(TableColSelect, {
            key: `status-${row.id}`,
            value: row.status,
            kind: 'status',
            onUpdate: (value) => {
              gamesStore.updateGame({
                id: row.id,
                data: { status: value },
              })
            },
          })
        },
      },
      {
        title() {
          return h(TableHeaderGrade)
        },
        key: 'grade',
        align: 'center',
        width: 200,
        render(row) {
          return h(TableColSelect, {
            key: `grade-${row.id}`,
            value: row.grade,
            kind: 'grade',
            onUpdate: (value) => {
              gamesStore.updateGame({
                id: row.id,
                data: { grade: value },
              })
            },
          })
        },
      },
    ]

    if (isAdmin.value) {
      columns.unshift({
        title() {
          return h(TableHeaderButton, {
            icon: CirclePlus,
            onClick: () => gamesStore.createGame(),
          })
        },
        key: 'id',
        align: 'center',
        width: 50,
        render(row) {
          return h(TableHeaderButton, {
            key: `id-${row.id}`,
            icon: Eraser,
            onClick: () => gamesStore.deleteGame(row.id),
          })
        },
      })
    }

    return columns
  })

  return {
    tableColumns,
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useGamesTable, import.meta.hot))
}
