<template>
  <div>
    <button @click="showModal" class="trigger_button">Trigger</button>
    <div v-if="modal_view" id="modal_view">
      <div class="modal_content" id="modal_content">
        <h3>Are you sure?</h3>
        <textarea name="type_text" id="type_text"></textarea>
        <p>By clicking confirm you will delete everything</p>
        <button class="cancel" @click="cancel">Cancel</button
        ><button class="confirm" @click="confirm">Confirm</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {
      modal_view: false,
    };
  },
  methods: {
    cancel() {
      this.modal_view = !this.modal_view;
    },
    confirm() {
      this.modal_view = !this.modal_view;
      //do something
    },
    showModal() {
      this.modal_view = !this.modal_view;
    },
  },
};
</script>

<style scoped>
#modal_view {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  display: flex;
  justify-content: center;
  align-items: center;
}
.trigger_button {
  padding: 8px 10px;
  border-radius: 5px;
  background: #2d3748;
  color: white;
}
.modal_content {
  width: 400px;
  background: var(--primary-color);
  padding: 20px;
  border-radius: 7px;
}
.modal_content h3 {
  font-weight: bold;
  font-size: 22px;
  color: var(--opposite-color);
}
.modal_content p {
  color: #2d3748;
  margin-bottom: 5px;
  color: var(--opposite-color);
}
.modal_content button {
  padding: 8px 10px;
  color: var(--opposite-color);
  border-radius: 15px;
}
.modal_content button:focus {
  outline: none;
}
.modal_content .confirm {
  background: #5a67d8;
  border: 1px solid #5a67d8;
  margin-left: 5px;
}
.modal_content .confirm:hover {
  background: #667eea;
  border: 1px solid #667eea;
}
.modal_content .cancel {
  border: 1px solid #718096;
  color: #718096;
  font-weight: bold;
}
.modal_content .cancel:hover {
  color: #4a5568;
  border: 1px solid #4a5568;
}
</style>
