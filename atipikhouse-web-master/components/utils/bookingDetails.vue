<template>
  <div class="container">
    <div class="mb-5">
      <div v-if="!admin" class="section-title">
        <h2><span class="dot"></span>Modifier la réservation</h2>
      </div>

      <div class="signup-form">
        <div class="row">
          <div class="col-lg-12 col-md-12">
            <div class="table-responsive">
              <table class="table table-striped">
                <tr>
                  <th scope="col">Biens réservé:</th>
                  <td>{{ provData.title }}</td>
                </tr>
                <tr>
                  <th scope="col">Date de début:</th>
                  <td>{{ $moment.unix(provData.start_date).format('L') }}</td>
                </tr>
                <tr>
                  <th scope="col">Date de fin:</th>
                  <td>{{ $moment.unix(provData.end_date).format('L') }}</td>
                </tr>
                <tr>
                  <th scope="col">Prix:</th>
                  <td>{{ provData.price }}€</td>
                </tr>
                <tr>
                  <th scope="col">Réservé par:</th>
                  <td>{{ provData.first_name + ' ' + provData.last_name }}</td>
                </tr>
                <tr>
                  <th scope="col">Status</th>
                  <td>
                    <span
                      class="badge badge-pill"
                      :class="`badge-${getStatusBadge(provData.status)}`"
                      >{{ getStatusName(provData.status) }}
                    </span>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          <div class="col-md-12 row">
            <div class="col-md-6 justify-content-center">
              <button
                class="btn btn-danger"
                style="width: 50%"
                :disabled="formDisabled"
                @click="changeStatus('reject', 'btn1')"
              >
                <span v-if="!btnLoader.btn1">Rejété</span>
                <BLoader v-else loaderColor="#fff" />
              </button>
            </div>
            <div class="col-md-6 justify-content-center">
              <button
                class="btn btn-success"
                style="width: 50%"
                :disabled="formDisabled"
                @click="changeStatus('approve', 'btn2')"
              >
                <span v-if="!btnLoader.btn2">Approuvé</span>
                <BLoader v-else loaderColor="#fff" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BLoader from '../../components/common/btnLoader.vue'
import Confirmation from '../../components/modals/Confirmation'
import booking from '../../mixins/booking'
import utils from '../../mixins/utils'

export default {
  props: {
    provData: {
      type: Object,
      default: () => ({}),
    },
    notify: {
      type: Boolean,
      default: false,
    },
    admin: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    BLoader,
    Confirmation,
  },
  mixins: [booking, utils],
  data() {
    return {
      formDisabled: false,
      btnLoader: {
        btn1: false,
        btn2: false,
      },
    }
  },
  methods: {
    async changeStatus(status, btn) {
      this.formDisabled = true
      this.btnLoader[btn] = true
      const result = await this.updateStatus(this.provData.id, status)
      if (result) {
        this.$toast.success('Status modifié avec succès.')
        if (this.$store.state.authUser.grade == 'administrator') {
          this.$router.push('/admin')
        } else if (this.$store.state.authUser.grade == 'owner') {
          this.$router.push('/dashboard/bookings')
        } else {
          this.$router.push('/')
        }
      } else {
        this.$toast.error(
          'Une erreur est survenue. Veuillez réessayer plutard!'
        )
      }
    },
  },
}
</script>
<style scoped>
.badge-success {
    background-color: #28a745 !important;
}
.badge-danger {
    background-color: #dc3545 !important;
}
.badge-info {
    background-color: #17a2b8;
}
</style>