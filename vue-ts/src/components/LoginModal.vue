<template>
    <section>
        <!--b-button
            label="Launch component modal"
            type="is-primary"
            size="is-medium"
            @click="isComponentModalActive = true" /!-->

        <b-modal
            v-model="isComponentModalActive"
            has-modal-card
            trap-focus
            :destroy-on-hide="false"
            :can-cancel="false"
            aria-role="dialog"
            aria-label="Example Modal"
            close-button-aria-label="Close"
            aria-modal>

            <form action="">
                <div class="modal-card" style="width: auto">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <button
                            type="button"
                            class="delete"
                            @click="$emit('close')"/>
                        </header>
                        <section class="modal-card-body">
                            <b-field label="Email">
                                <b-input
                                    type="email"
                                    :value="email"
                                    placeholder="Your email"
                                required>
                                </b-input>
                            </b-field>
                            <b-field label="Password">
                                <b-input
                                    type="password"
                                    :value="password"
                                    password-reveal
                                    placeholder="Your password"
                                required>
                                </b-input>
                            </b-field>
                            <b-checkbox>Remember me</b-checkbox>
                        </section>
                        <footer class="modal-card-foot">
                            <b-button
                                label="Close"
                                @click="$emit('close')" />
                            <b-button
                                label="Login"
                                type="is-primary"
                                @click="login"/>
                        </footer>
                    </div>
            </form>
        </b-modal>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

const LoginModalProps = Vue.extend({
  props: {
    email: String,
    password: String,
    canCancel: Boolean,
    close: Boolean
  }
})

@Component
export default class LoginModal extends LoginModalProps {
  // @Prop(Boolean) close: boolean | false
  data () {
    return {
      // isComponentModalActive: false
    }
  }

  get isComponentModalActive () {
    return this.close
  }

  login () {
    this.$store.commit('loggedIn', true)
    this.$emit('close')
  }
}
</script>
