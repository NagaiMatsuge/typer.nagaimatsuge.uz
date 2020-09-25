<template>
  <div ref="notify" class="notification slide-in">
    <div class="notification_content">
      <div v-if="type == 'warning'" class="warning">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div v-else class="primary">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div class="notification_message">
        {{ message ? message : "Successful" }}
      </div>
    </div>
    <div @click="close" class="closing_button">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notification",
  props: {
    type: {
      type: String,
      default: "primary",
    },
    message: String,
    duration: {
      type: Number,
      default: 4,
    },
  },
  methods: {
    close() {
      if (this.$refs.notify) {
        this.$refs.notify.style.right = "-405px";
        setTimeout(() => {
          this.$refs.notify.style.display = "none";
        }, 250);
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.close();
    }, 1000 * this.duration);
  },
};
</script>

<style scoped>
.notification {
  position: fixed;
  bottom: 20px;
  right: 40px;
  width: 400px;
  border-radius: 10px;
  background: var(--primary-color);
  color: var(--opposite-color);
  padding: 15px;
  display: flex;
  z-index: 2000;
  justify-content: space-between;
  box-shadow: 0 4px 8px black;
  transition: right 250ms ease-in-out;
  animation: slide linear 250ms;
}
.notification svg {
  width: 25px;
  height: 25px;
}
.notification_content {
  display: flex;
  flex: 1;
  font-size: 18px;
}
.closing_button {
  margin-left: 10px;
  cursor: pointer;
}
.notification_message {
  margin-left: 10px;
}
.primary {
  color: green;
}
.warning {
  color: red;
}
@keyframes slide {
  0% {
    right: -405px;
  }
  100% {
    right: 10px;
  }
}
@media only screen and (max-width: 900px) {
  @keyframes slide {
    0% {
      right: -405px;
    }
    100% {
      right: 10px;
    }
  }
  .notification {
    right: 10px;
    width: 300px;
  }
}
@media only screen and (min-width: 1600px) {
  .notification {
    right: 50px;
    width: 600px;
  }
  .notification_message {
    font-size: 30px;
  }
  .notification svg {
    width: 50px;
    height: 50px;
  }
}
</style>
