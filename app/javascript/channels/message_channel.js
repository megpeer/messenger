import consumer from "channels/consumer"

const messageChannel = consumer.subscriptions.create("MessageChannel", {
  connected() {
    // console.log("connected")
  },

  disconnected() {
  },

  received(data) {

  const messageDisplay = document.querySelector('#message-display')
  messageDisplay.insertAdjacentHTML('beforeend', this.template(data))
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
