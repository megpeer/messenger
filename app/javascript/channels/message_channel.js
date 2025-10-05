import consumer from "channels/consumer"
console.log("📦 message_channel.js loaded");
const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
     console.log("⚡️ MessageChannel connected")
  },

  disconnected() {
    console.log("⚡️ MessageChannel disconnected")
  },

  received(data) {
  console.log("⚡️ MessageChannel received data:", data);
  const messageDisplay = document.getElementById('message-display')
  messageDisplay.insertAdjacentHTML('beforeend', data.message);
  },

  template(data) {

    return `<article class="message">
              <div class="message-header">
                <p>${data.user.email}</p>
              </div>
              <div class="message-body">
                <p>${data.body}</p>
              </div>
            </article>`
  }
});
