import Swal from 'sweetalert2'
import Vue from 'vue'

Vue.prototype.$Swal = Swal

export default ({ app }) => {
  app.$Swal = Swal
}
