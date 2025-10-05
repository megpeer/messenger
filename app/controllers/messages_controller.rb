class MessagesController < ApplicationController
  def create
    @message = current_user.messages.build(message_params)
    @message.save
    ActionCable.server.broadcast("message", {
    message: render_to_string(partial: "messages/message", locals: { message: @message })
    })
    head :ok
  end

  private
  def message_params
     params.require(:message).permit(:body)
  end
end
