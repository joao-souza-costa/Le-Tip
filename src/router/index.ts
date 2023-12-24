import { createRouter, createWebHistory } from 'vue-router'
import TipView from '@/views/Tip/TipView.vue'
import ResultView from '@/views/Tip/components/result/ResultView.vue'
import { CALCULATE_ROUTE, RESULT_ROUTE } from '@/constants/routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: CALCULATE_ROUTE.path,
      name: CALCULATE_ROUTE.name,
      component: TipView
    },
    {
      path: RESULT_ROUTE.path,
      name: RESULT_ROUTE.name,
      component: ResultView
    }
  ]
})

export default router
